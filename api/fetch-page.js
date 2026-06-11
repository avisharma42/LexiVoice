export default async function handler(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const rawUrl = Array.isArray(req.query.url) ? req.query.url[0] : req.query.url;
    if (!rawUrl) {
        return res.status(400).json({ error: 'Missing url parameter' });
    }

    let parsedUrl;
    try {
        parsedUrl = new URL(rawUrl);
    } catch {
        return res.status(400).json({ error: 'Invalid URL' });
    }

    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
        return res.status(400).json({ error: 'Only http and https URLs are allowed' });
    }

    const hostname = parsedUrl.hostname.toLowerCase();
    if (
        hostname === 'localhost' ||
        hostname === '127.0.0.1' ||
        hostname === '::1' ||
        hostname.endsWith('.local')
    ) {
        return res.status(400).json({ error: 'Local addresses are not allowed' });
    }

    try {
        const response = await fetch(parsedUrl.toString(), {
            headers: {
                'User-Agent': 'LexiVoice/1.0 (+https://vercel.com)'
            },
            redirect: 'follow'
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: `Upstream request failed with status ${response.status}` });
        }

        const contents = await response.text();
        return res.status(200).json({ contents });
    } catch (error) {
        console.error('fetch-page error:', error);
        return res.status(500).json({ error: 'Unable to fetch webpage' });
    }
}
