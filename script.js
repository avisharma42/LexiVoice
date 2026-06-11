// SYNONYMS DICTIONARY FOR RULES-BASED TEXT SIMPLIFIER (100+ items)
const synonymDict = {
  "utilize": "use", "utilizes": "uses", "utilized": "used", "utilizing": "using",
  "demonstrate": "show", "demonstrates": "shows", "demonstrated": "shown", "demonstrating": "showing",
  "approximately": "about", "subsequently": "then", "facilitate": "help", "facilitates": "helps",
  "facilitated": "helped", "facilitating": "helping", "commence": "start", "commenced": "started",
  "commencing": "starting", "terminate": "end", "terminated": "ended", "terminating": "ending",
  "endeavour": "try", "endeavoured": "tried", "endeavouring": "trying", "sufficient": "enough",
  "obtain": "get", "obtained": "got", "obtaining": "getting", "accomplish": "do", "accomplished": "done",
  "accomplishing": "doing", "additional": "extra", "alleviate": "ease", "alleviates": "eases",
  "alleviated": "eased", "assistance": "help", "beneficial": "good", "cease": "stop", "ceased": "stopped",
  "ceasing": "stopping", "component": "part", "components": "parts", "comprehend": "understand",
  "comprehended": "understood", "comprehending": "understanding", "conceal": "hide", "concealed": "hidden",
  "concealing": "hiding", "decrease": "cut", "decreased": "cut", "decreasing": "cutting", "depart": "leave",
  "departed": "left", "departing": "leaving", "designate": "choose", "designated": "chosen", "disclose": "tell",
  "disclosed": "told", "disclosing": "telling", "discontinue": "stop", "discontinued": "stopped",
  "eliminate": "get rid of", "eliminated": "got rid of", "eliminating": "getting rid of", "emphasize": "stress",
  "emphasized": "stressed", "emphasizing": "stressing", "encounter": "meet", "encountered": "met",
  "equivalent": "same", "evaluate": "test", "evaluated": "tested", "evaluating": "testing", "evident": "clear",
  "examine": "look at", "examined": "looked at", "examining": "looking at", "expedite": "speed up",
  "expedited": "sped up", "fundamental": "basic", "illustrate": "show", "illustrated": "shown",
  "illustrating": "showing", "immediately": "at once", "implement": "carry out", "implemented": "carried out",
  "implementing": "carrying out", "inception": "start", "increment": "increase", "initial": "first",
  "initiate": "start", "initiated": "started", "initiating": "starting", "modification": "change",
  "modifications": "changes", "modify": "change", "modified": "changed", "modifying": "changing",
  "monitor": "watch", "monitored": "watched", "monitoring": "watching", "negotiate": "talk",
  "negotiated": "talked", "numerous": "many", "objective": "goal", "objectives": "goals", "obligation": "duty",
  "obligations": "duties", "observe": "see", "observed": "seen", "observing": "seeing", "option": "choice",
  "options": "choices", "participate": "take part", "participated": "took part", "participating": "taking part",
  "perform": "do", "performed": "done", "performing": "doing", "permit": "let", "permits": "lets",
  "permitted": "let", "possess": "have", "possesses": "has", "possessed": "had", "possessing": "having",
  "proceed": "go ahead", "proceeded": "went ahead", "purchase": "buy", "purchased": "bought",
  "purchasing": "buying", "reduce": "cut", "reduced": "cut", "reducing": "cutting", "reflect": "show",
  "reflected": "shown", "reflecting": "showing", "regulation": "rule", "regulations": "rules",
  "relocate": "move", "relocated": "moved", "remain": "stay", "remained": "stayed", "remaining": "staying",
  "request": "ask for", "requested": "asked for", "require": "need", "requires": "needs", "required": "needed",
  "requiring": "needing", "reside": "live", "resided": "lived", "residing": "living", "retain": "keep",
  "retained": "kept", "retaining": "keeping", "reveal": "show", "revealed": "shown", "revealing": "showing",
  "scrutinize": "examine", "scrutinized": "examined", "scrutinizing": "examining", "substantial": "large",
  "successfully": "well", "superior": "better", "transcribe": "copy", "transmit": "send",
  "transmitted": "sent", "ultimate": "last", "uncertainty": "doubt", "uniform": "same", "validate": "check",
  "validated": "checked", "variation": "change", "variations": "changes", "verify": "check",
  "verified": "checked", "verifying": "checking", "visible": "clear", "visualize": "picture",
  "visualized": "pictured", "visualizing": "picturing", "vulnerable": "weak", "withdraw": "take away",
  "withdrew": "took away", "withdrawn": "taken away", "abundant": "plentiful", "aggregate": "total",
  "analogous": "similar", "apparent": "clear", "capability": "ability", "capabilities": "abilities",
  "collaborate": "work together", "collaborated": "worked together", "collaborating": "working together",
  "compile": "gather", "compiled": "gathered", "compiling": "gathering", "construct": "build",
  "constructed": "built", "constructing": "building", "contribute": "give", "contributed": "gave",
  "contributing": "giving", "distinguish": "tell apart", "duplicate": "copy", "dynamic": "active",
  "exhibit": "show", "exhibited": "shown", "exhibiting": "showing", "fluctuation": "change",
  "fluctuations": "changes", "formulate": "plan", "formulated": "planned", "formulating": "planning",
  "hazardous": "dangerous", "inhibit": "stop", "inhibited": "stopped", "inhibiting": "stopping",
  "magnitude": "size", "parameters": "limits", "precise": "exact", "specify": "state", "specified": "stated",
  "specifying": "stating", "synthesize": "combine", "synthesized": "combined", "synthesizing": "combining",
  "toxic": "poisonous", "vast": "huge"
};

// Pronunciation exceptions dictionary lookup helper
const pronunciationDict = {
  "demonstrate": "dem-uhn-streyt", "utilize": "yoo-tuh-lahyz", "approximately": "uh-prok-suh-mit-lee",
  "subsequently": "suhb-si-kwuhnt-lee", "facilitate": "fuh-sil-i-teyt", "commence": "kuh-mens",
  "terminate": "tur-muh-neyt", "endeavour": "en-dev-er", "sufficient": "suh-fish-uhnt",
  "obtain": "uhb-teyn", "comprehend": "kom-pri-hend", "alleviate": "uh-lee-vee-eyt",
  "beneficial": "ben-uh-fish-uhl", "collaborate": "kuh-lab-uh-reyt", "fundamental": "fuhn-duh-men-tl",
  "immediately": "ih-mee-dee-it-lee", "implement": "im-pluh-muhnt", "modification": "mod-uh-fi-key-shuhn",
  "negotiate": "ni-goh-shee-eyt", "participate": "pahr-tis-uh-peyt", "regulation": "reg-yuh-ley-shuhn",
  "scrutinize": "skroot-n-ahyz", "vulnerable": "vuhl-ner-uh-buhl"
};

// STATE VARIABLES
const defaultSettings = {
  fontSize: 20,
  lineHeight: 1.8,
  letterSpacing: 0.12,
  wordSpacing: 0.25,
  fontFamily: 'OpenDyslexic',
  bgOverlayPreset: 'cream',
  customBgColor: '',
  customTextColor: '',
  bionicEnabled: true,
  syllableHighlightEnabled: false,
  reversalHelperEnabled: false,
  rulerEnabled: false,
  focusDimEnabled: false,
  paraSpacingEnabled: false,
  showPunctuation: true,
  columnWidth: 'medium',
  themeMode: 'light',
  chunkModeEnabled: false,
  grammarEnabled: false,
  breakReminderEnabled: true,
  childModeEnabled: false,
  shortSessionEnabled: false,
  shortSessionMinutes: 5,
  teacherModeEnabled: false,
  teacherLockEnabled: false
};

let settings = { ...defaultSettings };
let originalText = "";
let simplifiedText = "";
let currentTextMode = 'original'; // original vs simplified
let pendingLargeText = "";

let currentWordsMetadata = [];
let flatSpokenText = "";
let currentWordIndex = -1;
let currentParaIndex = 0;

// TTS Audio settings
let synth = window.speechSynthesis;
let utterance = null;
let isPlaying = false;
let isSpeechFinished = false;
let boundaryTimer = null;
let fallbackInterval = null;
let wordsSpokenInSession = 0;
let keepAliveInterval = null;
let speechGeneration = 0;
let sessionEndHandled = false;

// Session clock variables
let sessionTimerInterval = null;
let sessionSeconds = 0;

// Ruler states
let rulerLocked = false;
let manualRulerTop = 0;
let rulerEnabled = false;
let focusDimEnabled = false;
let chunkModeEnabled = false;
const childModeSnapshotKey = 'lexiVoiceChildModeSnapshot';
const teacherModeSnapshotKey = 'lexiVoiceTeacherModeSnapshot';
const wordBankStorageKey = 'lexiVoiceWordBank';
let learningStudioWord = '';
let learningStudioSentenceIndex = 0;

// Set PDF.js Worker Src
if (typeof pdfjsLib !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// APP INITIALIZATION
window.addEventListener('DOMContentLoaded', () => {
  loadSettings();
  setupDragAndDrop();
  setupRulerMouseEvents();
  setupWordPopupDismissal();
  setupVoiceListPopulator();
  checkFirstVisitTour();
});

// SETTINGS MANAGER
function loadSettings() {
  const saved = localStorage.getItem('lexiVoiceSettings');
  if (saved) {
    try {
      settings = { ...defaultSettings, ...JSON.parse(saved) };
    } catch (e) {
      console.error("Failed loading settings from local storage:", e);
    }
  }
  applyAllSettings();
  updateUIFromSettings();
}

function saveSettings() {
  localStorage.setItem('lexiVoiceSettings', JSON.stringify(settings));
}

function updateSetting(key, value) {
  if (key === 'childModeEnabled') {
    if (value === true || value === 'true') {
      applyChildFriendlyPreset();
    } else {
      restoreChildModeSnapshot();
    }
    return;
  }

  if (key === 'teacherModeEnabled') {
    if (value === true || value === 'true') {
      applyTeacherModePreset();
    } else {
      restoreTeacherModeSnapshot();
    }
    return;
  }

  if (key === 'teacherLockEnabled') {
    settings.teacherLockEnabled = value === true || value === 'true';
    saveSettings();
    applyAllSettings();
    updateUIFromSettings();
    showToast(settings.teacherLockEnabled ? 'Settings locked for teaching use.' : 'Settings unlocked.');
    return;
  }

  if (key === 'fontSize' || key === 'lineHeight' || key === 'letterSpacing' || key === 'wordSpacing') {
    settings[key] = parseFloat(value);
  } else if (value === 'true' || value === 'false') {
    settings[key] = (value === 'true');
  } else if (typeof value === 'boolean') {
    settings[key] = value;
  } else {
    settings[key] = value;
  }
  saveSettings();
  applyAllSettings();
  updateUIFromSettings();
}

function resetSettings() {
  settings = { ...defaultSettings };
  localStorage.removeItem(childModeSnapshotKey);
  localStorage.removeItem(teacherModeSnapshotKey);
  localStorage.removeItem(wordBankStorageKey);
  saveSettings();
  applyAllSettings();
  updateUIFromSettings();
  showToast("Settings reset to defaults.");
}

function captureChildModeSnapshot() {
  localStorage.setItem(childModeSnapshotKey, JSON.stringify(settings));
}

function restoreChildModeSnapshot() {
  const savedSnapshot = localStorage.getItem(childModeSnapshotKey);

  if (savedSnapshot) {
    try {
      settings = { ...defaultSettings, ...JSON.parse(savedSnapshot), childModeEnabled: false };
      localStorage.removeItem(childModeSnapshotKey);
    } catch (e) {
      console.error("Failed restoring child mode snapshot:", e);
      settings = { ...defaultSettings, childModeEnabled: false };
    }
  } else {
    settings.childModeEnabled = false;
  }

  saveSettings();
  applyAllSettings();
  updateUIFromSettings();
  showToast("Child-friendly mode turned off.");
}

function captureTeacherModeSnapshot() {
  localStorage.setItem(teacherModeSnapshotKey, JSON.stringify(settings));
}

function restoreTeacherModeSnapshot() {
  const savedSnapshot = localStorage.getItem(teacherModeSnapshotKey);

  if (savedSnapshot) {
    try {
      settings = { ...defaultSettings, ...JSON.parse(savedSnapshot), teacherModeEnabled: false };
      localStorage.removeItem(teacherModeSnapshotKey);
    } catch (e) {
      console.error("Failed restoring teacher mode snapshot:", e);
      settings = { ...defaultSettings, teacherModeEnabled: false };
    }
  } else {
    settings.teacherModeEnabled = false;
  }

  saveSettings();
  applyAllSettings();
  updateUIFromSettings();
  showToast("Parent/Teacher mode turned off.");
}

function applyTeacherModePreset() {
  captureTeacherModeSnapshot();

  settings = {
    ...settings,
    fontSize: 24,
    lineHeight: 2.0,
    letterSpacing: 0.16,
    wordSpacing: 0.3,
    fontFamily: 'OpenDyslexic',
    bgOverlayPreset: 'cream',
    customBgColor: '',
    customTextColor: '',
    bionicEnabled: true,
    syllableHighlightEnabled: true,
    reversalHelperEnabled: true,
    rulerEnabled: true,
    focusDimEnabled: true,
    paraSpacingEnabled: true,
    showPunctuation: true,
    columnWidth: 'medium',
    themeMode: 'light',
    chunkModeEnabled: false,
    grammarEnabled: false,
    breakReminderEnabled: true,
    childModeEnabled: true,
    shortSessionEnabled: true,
    shortSessionMinutes: 10,
    teacherModeEnabled: true,
    teacherLockEnabled: false
  };

  saveSettings();
  applyAllSettings();
  updateUIFromSettings();
  showToast("Parent/Teacher setup applied.");
}

function applyChildFriendlyPreset() {
  captureChildModeSnapshot();

  settings = {
    ...settings,
    fontSize: 24,
    lineHeight: 2.05,
    letterSpacing: 0.16,
    wordSpacing: 0.3,
    fontFamily: 'OpenDyslexic',
    bgOverlayPreset: 'cream',
    customBgColor: '',
    customTextColor: '',
    bionicEnabled: true,
    syllableHighlightEnabled: true,
    reversalHelperEnabled: true,
    rulerEnabled: true,
    focusDimEnabled: true,
    paraSpacingEnabled: true,
    showPunctuation: true,
    columnWidth: 'medium',
    themeMode: 'light',
    chunkModeEnabled: false,
    grammarEnabled: false,
    breakReminderEnabled: true,
    childModeEnabled: true
  };

  saveSettings();
  applyAllSettings();
  updateUIFromSettings();
  showToast("Child-friendly preset applied.");
}

function applyAllSettings() {
  const root = document.documentElement;
  const readingArea = document.getElementById('reading-area');
  const readingContainer = document.getElementById('reading-container');
  const body = document.body;
  const urlImportGroup = document.querySelector('.url-import-group');
  const exportFooterCard = document.querySelector('.export-footer-card');
  const chunkControls = document.getElementById('chunk-controls');

  if (!readingArea || !readingContainer) return;

  if (settings.childModeEnabled) {
    body.classList.add('child-mode');
  } else {
    body.classList.remove('child-mode');
  }

  if (settings.teacherModeEnabled) {
    body.classList.add('teacher-mode');
  } else {
    body.classList.remove('teacher-mode');
  }

  // 1. Apply Typography Slider Styles
  readingArea.style.fontSize = `${settings.fontSize}px`;
  readingArea.style.lineHeight = settings.lineHeight;
  readingArea.style.letterSpacing = `${settings.letterSpacing}em`;
  readingArea.style.wordSpacing = `${settings.wordSpacing}em`;

  // Font Style selector
  let fontValue = 'system-ui, sans-serif';
  if (settings.fontFamily === 'OpenDyslexic') {
    fontValue = "'OpenDyslexic', sans-serif";
  } else if (settings.fontFamily === 'Lexie Readable') {
    fontValue = "'Lexie Readable', 'Comic Sans MS', sans-serif";
  } else if (settings.fontFamily === 'Arial') {
    fontValue = "Arial, sans-serif";
  } else if (settings.fontFamily === 'Comic Sans') {
    fontValue = "'Comic Sans MS', cursive, sans-serif";
  } else if (settings.fontFamily === 'Georgia') {
    fontValue = "Georgia, serif";
  }
  readingArea.style.fontFamily = fontValue;

  // 2. Extra Paragraph Spacing Aid
  if (settings.paraSpacingEnabled) {
    readingArea.classList.add('extra-para-spacing');
  } else {
    readingArea.classList.remove('extra-para-spacing');
  }

  // 3. Display Punctuation Toggle
  if (settings.showPunctuation) {
    readingArea.classList.remove('hide-punctuation');
  } else {
    readingArea.classList.add('hide-punctuation');
  }

  // 3b. Grammar highlighting
  if (settings.grammarEnabled) {
    readingArea.classList.add('grammar-highlight-active');
  } else {
    readingArea.classList.remove('grammar-highlight-active');
  }

  // 4. Reading Grid Column Width selector
  readingContainer.classList.remove('col-narrow', 'col-medium', 'col-wide');
  readingContainer.classList.add(`col-${settings.columnWidth}`);

  // 5. Dark Mode VS Light Overlay themes
  let isDark = false;
  if (settings.themeMode === 'dark') {
    isDark = true;
  } else if (settings.themeMode === 'auto') {
    isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  if (isDark) {
    document.body.classList.add('dark-mode');
    root.style.setProperty('--bg-page', '#1A1610');
    root.style.setProperty('--bg-surface', '#221E16');
    root.style.setProperty('--bg-overlay', '#2E281E');
    root.style.setProperty('--accent-primary', '#7BAFD4');
    root.style.setProperty('--accent-primary-hover', '#92C1E3');
    root.style.setProperty('--accent-success', '#61A885');
    root.style.setProperty('--accent-warm', '#D68B6A');
    root.style.setProperty('--text-primary', '#EDE4D0');
    root.style.setProperty('--text-secondary', '#C4B6A3');
    root.style.setProperty('--text-muted', '#918270');
    root.style.setProperty('--border', '#3D3528');
    root.style.setProperty('--highlight-word', '#5C4A00');
    root.style.setProperty('--highlight-line', 'rgba(92, 74, 0, 0.3)');
    root.style.setProperty('--dim-overlay', 'rgba(26, 22, 16, 0.7)');
    root.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.3)');
  } else {
    document.body.classList.remove('dark-mode');

    let bgPage = '#F7F3E9';
    let bgSurface = '#FDFAF4';
    let bgOverlay = '#FFF8EE';

    if (settings.customBgColor) {
      bgPage = settings.customBgColor;
      bgSurface = adjustColorLightness(bgPage, 8);
      bgOverlay = adjustColorLightness(bgPage, 4);
    } else {
      const overlays = {
        cream: { page: '#F7F3E9', surface: '#FDFAF4', overlay: '#FFF8EE' },
        mint: { page: '#EAF4EE', surface: '#F2F9F5', overlay: '#F5FBF7' },
        yellow: { page: '#FEFAE0', surface: '#FFFDF2', overlay: '#FFFFFA' },
        lavender: { page: '#F0ECF8', surface: '#F6F4FC', overlay: '#FAF9FE' },
        peach: { page: '#FDF0E8', surface: '#FEF6F2', overlay: '#FFF9F6' },
        skyblue: { page: '#EAF3FB', surface: '#F2F7FD', overlay: '#F5F9FE' }
      };
      const preset = overlays[settings.bgOverlayPreset] || overlays.cream;
      bgPage = preset.page;
      bgSurface = preset.surface;
      bgOverlay = preset.overlay;
    }

    root.style.setProperty('--bg-page', bgPage);
    root.style.setProperty('--bg-surface', bgSurface);
    root.style.setProperty('--bg-overlay', bgOverlay);
    root.style.setProperty('--accent-primary', '#3B5F82');
    root.style.setProperty('--accent-primary-hover', '#2C4762');
    root.style.setProperty('--accent-success', '#2E614A');
    root.style.setProperty('--accent-warm', '#9E492A');
    root.style.setProperty('--text-primary', settings.customTextColor || '#2C2416');
    root.style.setProperty('--text-secondary', '#5C4D3C');
    root.style.setProperty('--text-muted', '#7E6E5D');
    root.style.setProperty('--border', '#DCD2C3');
    root.style.setProperty('--highlight-word', '#FCD872');
    root.style.setProperty('--highlight-line', '#FFF0B8');
    root.style.setProperty('--dim-overlay', 'rgba(247, 243, 233, 0.6)');
    root.style.setProperty('--shadow', 'rgba(44, 36, 22, 0.08)');
  }

  // 6. Focus Ruler state triggers
  rulerEnabled = settings.rulerEnabled;
  focusDimEnabled = settings.focusDimEnabled;

  if (rulerEnabled) {
    document.body.classList.add('ruler-active');
    if (focusDimEnabled) {
      document.body.classList.add('focus-dim-active');
    } else {
      document.body.classList.remove('focus-dim-active');
    }
  } else {
    document.body.classList.remove('ruler-active', 'focus-dim-active');
    const ruler = document.getElementById('reading-ruler');
    if (ruler) ruler.style.display = 'none';
    const dimTop = document.getElementById('ruler-dim-top');
    const dimBottom = document.getElementById('ruler-dim-bottom');
    if (dimTop) dimTop.style.display = 'none';
    if (dimBottom) dimBottom.style.display = 'none';
  }

  // 7. Paragraph Chunk mode triggers
  chunkModeEnabled = settings.chunkModeEnabled;
  if (chunkModeEnabled) {
    document.getElementById('reading-area-container').classList.add('chunk-mode');
    showParagraph(currentParaIndex);
    document.getElementById('chunk-controls').style.display = 'flex';
  } else {
    document.getElementById('reading-area-container').classList.remove('chunk-mode');
    document.getElementById('chunk-controls').style.display = 'none';
    document.querySelectorAll('.reader-para').forEach(el => {
      el.style.display = 'block';
      el.style.opacity = '1';
    });
  }

  // Child-safe presentation mode: keep the reading flow intact, but hide advanced actions.
  if (urlImportGroup) {
    urlImportGroup.classList.toggle('child-mode-hidden', settings.childModeEnabled);
  }
  if (chunkControls) {
    chunkControls.classList.toggle('child-mode-hidden', settings.childModeEnabled);
  }
  const childPresetBanner = document.getElementById('child-mode-banner');
  if (childPresetBanner) {
    childPresetBanner.style.display = settings.childModeEnabled ? 'block' : 'none';
  }

  refreshModeSummaryCard();

  const teacherModeToggle = document.getElementById('teacher-mode-toggle');
  if (teacherModeToggle) {
    teacherModeToggle.checked = settings.teacherModeEnabled;
  }

  const teacherModeQuickBtn = document.getElementById('learning-studio-btn');
  if (teacherModeQuickBtn) {
    teacherModeQuickBtn.classList.toggle('teacher-active', settings.teacherModeEnabled);
  }

  const settingsPanel = document.getElementById('settings-panel');
  const settingsScrollArea = document.querySelector('#settings-panel .settings-scroll-area');
  const settingsFooter = document.querySelector('#settings-panel .settings-footer');
  const lockSensitiveControls = document.querySelectorAll('#settings-panel .settings-scroll-area input, #settings-panel .settings-scroll-area select, #settings-panel .settings-scroll-area button, #settings-panel .settings-footer .settings-action-btn, #settings-panel .settings-footer .btn-reset, #settings-panel .settings-footer .btn-child-preset:not(#teacher-lock-toggle-btn)');
  lockSensitiveControls.forEach(control => {
    if (control.id === 'teacher-lock-toggle-btn') return;
    control.disabled = !!settings.teacherLockEnabled;
  });

  if (settingsPanel) {
    settingsPanel.classList.toggle('teacher-locked', !!settings.teacherLockEnabled);
  }

  if (settingsScrollArea && settingsFooter) {
    settingsScrollArea.classList.toggle('teacher-locked', !!settings.teacherLockEnabled);
    settingsFooter.classList.toggle('teacher-locked', !!settings.teacherLockEnabled);
  }

  document.querySelectorAll('[data-short]').forEach(btn => {
    if (parseInt(btn.getAttribute('data-short'), 10) === settings.shortSessionMinutes && settings.shortSessionEnabled) {
      btn.classList.add('active');
    } else if (!settings.shortSessionEnabled && parseInt(btn.getAttribute('data-short'), 10) === 5) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 8. Re-render typography transformations if text is loaded
  if (originalText) {
    renderText();
  }
}

function updateUIFromSettings() {
  document.getElementById('font-size-slider').value = settings.fontSize;
  document.getElementById('font-size-val').textContent = `${settings.fontSize}px`;

  document.getElementById('line-height-slider').value = settings.lineHeight;
  document.getElementById('line-height-val').textContent = settings.lineHeight;

  document.getElementById('letter-spacing-slider').value = settings.letterSpacing;
  document.getElementById('letter-spacing-val').textContent = `${settings.letterSpacing}em`;

  document.getElementById('word-spacing-slider').value = settings.wordSpacing;
  document.getElementById('word-spacing-val').textContent = `${settings.wordSpacing}em`;

  document.getElementById('font-select').value = settings.fontFamily;
  document.getElementById('theme-mode-select').value = settings.themeMode;

  document.getElementById('bionic-toggle').checked = settings.bionicEnabled;
  document.getElementById('syllables-color-toggle').checked = settings.syllableHighlightEnabled;
  document.getElementById('reversal-helper-toggle').checked = settings.reversalHelperEnabled;
  document.getElementById('ruler-toggle').checked = settings.rulerEnabled;
  document.getElementById('focus-dim-toggle').checked = settings.focusDimEnabled;
  document.getElementById('para-spacing-toggle').checked = settings.paraSpacingEnabled;
  document.getElementById('punctuation-toggle').checked = settings.showPunctuation;
  document.getElementById('chunk-mode-toggle').checked = settings.chunkModeEnabled;
  document.getElementById('grammar-toggle').checked = settings.grammarEnabled;
  document.getElementById('break-reminder-toggle').checked = settings.breakReminderEnabled;
  const childModeToggle = document.getElementById('child-mode-toggle');
  if (childModeToggle) {
    childModeToggle.checked = settings.childModeEnabled;
  }

  const shortSessionToggle = document.getElementById('short-session-toggle');
  if (shortSessionToggle) {
    shortSessionToggle.checked = settings.shortSessionEnabled;
  }

  const shortSessionEnabled = settings.shortSessionEnabled;
  const shortSessionButtons = document.querySelectorAll('[data-short]');
  shortSessionButtons.forEach(btn => {
    if (shortSessionEnabled && parseInt(btn.getAttribute('data-short'), 10) === settings.shortSessionMinutes) {
      btn.classList.add('active');
    } else if (!shortSessionEnabled && parseInt(btn.getAttribute('data-short'), 10) === 5) {
      btn.classList.add('active');
    }
  });

  document.getElementById('custom-bg-picker').value = settings.customBgColor || '#F7F3E9';
  document.getElementById('custom-text-picker').value = settings.customTextColor || '#2C2416';

  document.querySelectorAll('.preset-btn').forEach(btn => {
    if (btn.getAttribute('data-preset') === settings.bgOverlayPreset && !settings.customBgColor) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('.col-btn').forEach(btn => {
    if (btn.getAttribute('data-col') === settings.columnWidth) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const childModeQuickBtn = document.getElementById('child-mode-quick-btn');
  if (childModeQuickBtn) {
    childModeQuickBtn.classList.toggle('active', settings.childModeEnabled);
    childModeQuickBtn.setAttribute(
      'aria-label',
      settings.childModeEnabled ? 'Child-friendly mode active. Turn off' : 'Turn on child-friendly mode'
    );
  }

  const learningStudioBtn = document.getElementById('learning-studio-btn');
  if (learningStudioBtn) {
    learningStudioBtn.classList.toggle('teacher-active', settings.teacherModeEnabled);
  }

  const lockBtn = document.getElementById('teacher-lock-toggle-btn');
  if (lockBtn) {
    lockBtn.textContent = settings.teacherLockEnabled ? 'Unlock Settings' : 'Lock Settings';
    lockBtn.setAttribute('aria-label', settings.teacherLockEnabled ? 'Unlock settings panel' : 'Lock settings panel');
  }

  refreshModeSummaryCard();
}

function refreshModeSummaryCard() {
  const card = document.getElementById('mode-summary-card');
  if (!card) return;

  const activeModes = [];
  const activeBenefits = [];

  if (settings.childModeEnabled) {
    activeModes.push('Child-Friendly Mode');
    activeBenefits.push('larger, calmer reading layout');
    activeBenefits.push('hidden advanced clutter');
  }

  if (settings.teacherModeEnabled) {
    activeModes.push('Parent / Teacher Setup');
    activeBenefits.push('guided reading defaults');
    activeBenefits.push('learning studio ready');
  }

  if (settings.shortSessionEnabled) {
    activeModes.push(`${settings.shortSessionMinutes}-Minute Session`);
    activeBenefits.push('short confidence-friendly goals');
  }

  if (!activeModes.length) {
    card.style.display = 'none';
    card.innerHTML = '';
    return;
  }

  const themeClass = settings.teacherModeEnabled ? 'teacher-summary' : 'child-summary';
  card.className = `mode-summary-card ${themeClass}`;
  card.style.display = 'block';
  card.innerHTML = `
    <div class="mode-summary-label">Active reading mode</div>
    <div class="mode-summary-title">${activeModes.join(' · ')}</div>
    <div class="mode-summary-points">
      ${activeBenefits.slice(0, 4).map(point => `<span class="mode-summary-chip">${point}</span>`).join('')}
    </div>
  `;
}

// Adjust Color Lightness for dynamic surface/overlay rendering (Light Mode helper)
function adjustColorLightness(hex, percent) {
  let R = parseInt(hex.substring(1, 3), 16);
  let G = parseInt(hex.substring(3, 5), 16);
  let B = parseInt(hex.substring(5, 7), 16);

  R = Math.min(255, Math.round(R * (100 + percent) / 100));
  G = Math.min(255, Math.round(G * (100 + percent) / 100));
  B = Math.min(255, Math.round(B * (100 + percent) / 100));

  const rHex = R.toString(16).padStart(2, '0');
  const gHex = G.toString(16).padStart(2, '0');
  const bHex = B.toString(16).padStart(2, '0');

  return `#${rHex}${gHex}${bHex}`;
}

function setPresetOverlay(name) {
  settings.customBgColor = '';
  settings.bgOverlayPreset = name;
  saveSettings();
  applyAllSettings();
  updateUIFromSettings();
}

function setCustomBgColor(hex) {
  settings.customBgColor = hex;
  saveSettings();
  applyAllSettings();
  updateUIFromSettings();
}

function setCustomTextColor(hex) {
  settings.customTextColor = hex;
  saveSettings();
  applyAllSettings();
  updateUIFromSettings();
}

function setColumnWidth(width) {
  settings.columnWidth = width;
  saveSettings();
  applyAllSettings();
  updateUIFromSettings();
}

function setShortSessionMinutes(minutes) {
  settings.shortSessionMinutes = minutes;
  settings.shortSessionEnabled = true;
  saveSettings();
  applyAllSettings();
  updateUIFromSettings();
  startSessionTimer();
  showToast(`Short session set to ${minutes} minutes.`);
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getSavedWordBank() {
  try {
    return JSON.parse(localStorage.getItem(wordBankStorageKey) || '[]');
  } catch (e) {
    console.error('Failed loading word bank:', e);
    return [];
  }
}

function saveWordBank(wordBank) {
  localStorage.setItem(wordBankStorageKey, JSON.stringify(wordBank));
}

function normalizeWordForBank(word) {
  return String(word || '').trim().replace(/[^a-zA-Z0-9'’-]/g, '');
}

function toggleWordBankWord(word) {
  const cleanWord = normalizeWordForBank(word);
  if (!cleanWord) return;

  const existing = getSavedWordBank();
  const idx = existing.findIndex(item => item.toLowerCase() === cleanWord.toLowerCase());
  if (idx >= 0) {
    existing.splice(idx, 1);
    showToast(`Removed ${cleanWord} from word bank.`);
  } else {
    existing.unshift(cleanWord);
    showToast(`Saved ${cleanWord} to word bank.`);
  }

  saveWordBank(existing.slice(0, 60));
  renderWordBank();
}

function isWordInBank(word) {
  const cleanWord = normalizeWordForBank(word).toLowerCase();
  return getSavedWordBank().some(item => item.toLowerCase() === cleanWord);
}

function removeWordFromBank(word) {
  const cleanWord = normalizeWordForBank(word);
  const existing = getSavedWordBank().filter(item => item.toLowerCase() !== cleanWord.toLowerCase());
  saveWordBank(existing);
  renderWordBank();
}

function clearWordBank() {
  saveWordBank([]);
  renderWordBank();
  showToast('Word bank cleared.');
}

function getSentenceSourceText() {
  return currentTextMode === 'simplified' ? simplifiedText : originalText;
}

function splitIntoSentences(text) {
  if (!text) return [];
  const matches = text.match(/[^.!?]+[.!?]+(\s|$)/g);
  if (matches && matches.length) return matches.map(item => item.trim()).filter(Boolean);
  return text.split(/\n+/).map(item => item.trim()).filter(Boolean);
}

function getLearningStudioSentences() {
  const source = getSentenceSourceText();
  return splitIntoSentences(source).slice(0, 40);
}

function findSentenceIndexForWord(wordText) {
  const sentences = getLearningStudioSentences();
  const cleanWord = normalizeWordForBank(wordText).toLowerCase();
  if (!sentences.length || !cleanWord) return 0;

  const index = sentences.findIndex(sentence => sentence.toLowerCase().includes(cleanWord));
  return index >= 0 ? index : 0;
}

function renderWordBank() {
  const area = document.getElementById('learning-word-bank-area');
  if (!area) return;

  const saved = getSavedWordBank();
  if (!saved.length) {
    area.innerHTML = '<div class="learning-empty-state">Saved hard words will appear here for quick review.</div>';
    return;
  }

  area.innerHTML = `
    <div class="chip-row word-bank-row">
      ${saved.map(word => `
        <button class="session-chip word-bank-chip" onclick="openLearningStudio('${word.replace(/'/g, "\\'")}')">
          ${escapeHtml(word)}
        </button>
      `).join('')}
    </div>
    <div class="word-bank-actions-row" style="display: flex; gap: 1rem; margin-top: 1rem;">
      <button class="modal-close-btn word-bank-clear-btn" onclick="clearWordBank()">Clear Word Bank</button>
      <button class="modal-close-btn word-bank-print-btn" style="background: var(--accent-primary); color: white;" onclick="generatePrintableFlashcards()">Print Flashcards 🖨</button>
    </div>
  `;
}

function toggleLearningStudio(show) {
  const modal = document.getElementById('learning-studio-modal');
  if (!modal) return;

  if (show) {
    modal.classList.add('visible');
  } else {
    modal.classList.remove('visible');
  }
}

function openLearningStudio(wordText) {
  const fallbackWord = currentWordIndex >= 0 && currentWordIndex < currentWordsMetadata.length
    ? currentWordsMetadata[currentWordIndex].word
    : (currentWordsMetadata[0] ? currentWordsMetadata[0].word : '');

  learningStudioWord = (wordText || fallbackWord || '').trim();
  learningStudioSentenceIndex = findSentenceIndexForWord(learningStudioWord);
  switchStudioTab('phonics'); // Reset to default phonics tab
  renderWordBank();
  toggleLearningStudio(true);
}

function openLearningStudioForWord(wordText) {
  learningStudioWord = wordText;
  learningStudioSentenceIndex = findSentenceIndexForWord(wordText);
  switchStudioTab('phonics'); // Reset to default phonics tab
  renderWordBank();
  toggleLearningStudio(true);
}

// --- LEITNER SYSTEM FLASHCARDS STATE & ACTIONS ---
let leitnerBoxes = { box1: [], box2: [], box3: [] };
let flashcardPracticeQueue = [];
let currentFlashcardIndex = 0;
let activeStudioTab = 'phonics';

// Initialize and sync boxes with Word Bank
function syncLeitnerBoxes() {
  const savedBoxes = localStorage.getItem('lexiVoiceLeitnerBoxes');
  if (savedBoxes) {
    try {
      leitnerBoxes = JSON.parse(savedBoxes);
      if (!leitnerBoxes.box1) leitnerBoxes.box1 = [];
      if (!leitnerBoxes.box2) leitnerBoxes.box2 = [];
      if (!leitnerBoxes.box3) leitnerBoxes.box3 = [];
    } catch (e) {
      console.error("Error parsing Leitner boxes:", e);
      leitnerBoxes = { box1: [], box2: [], box3: [] };
    }
  }

  const wordBank = getSavedWordBank();
  
  // 1. Remove words from boxes that are no longer in the Word Bank
  const wordBankSet = new Set(wordBank.map(w => w.toLowerCase()));
  leitnerBoxes.box1 = leitnerBoxes.box1.filter(w => wordBankSet.has(w.toLowerCase()));
  leitnerBoxes.box2 = leitnerBoxes.box2.filter(w => wordBankSet.has(w.toLowerCase()));
  leitnerBoxes.box3 = leitnerBoxes.box3.filter(w => wordBankSet.has(w.toLowerCase()));

  // 2. Add words to Box 1 that are in Word Bank but not in any box
  const allBoxedWords = new Set([
    ...leitnerBoxes.box1.map(w => w.toLowerCase()),
    ...leitnerBoxes.box2.map(w => w.toLowerCase()),
    ...leitnerBoxes.box3.map(w => w.toLowerCase())
  ]);

  wordBank.forEach(word => {
    if (!allBoxedWords.has(word.toLowerCase())) {
      leitnerBoxes.box1.push(word);
    }
  });

  saveLeitnerBoxes();
}

function saveLeitnerBoxes() {
  localStorage.setItem('lexiVoiceLeitnerBoxes', JSON.stringify(leitnerBoxes));
}

// Switch between Learning Studio tabs
function switchStudioTab(tabName) {
  activeStudioTab = tabName;
  
  const phonicsBtn = document.getElementById('tab-phonics-btn');
  const flashcardsBtn = document.getElementById('tab-flashcards-btn');
  const gamesBtn = document.getElementById('tab-games-btn');
  
  const phonicsContent = document.getElementById('studio-phonics-tab-content');
  const flashcardsContent = document.getElementById('studio-flashcards-tab-content');
  const gamesContent = document.getElementById('studio-games-tab-content');

  if (phonicsBtn) phonicsBtn.classList.remove('active');
  if (flashcardsBtn) flashcardsBtn.classList.remove('active');
  if (gamesBtn) gamesBtn.classList.remove('active');

  if (phonicsContent) phonicsContent.classList.remove('active-content');
  if (flashcardsContent) flashcardsContent.classList.remove('active-content');
  if (gamesContent) gamesContent.classList.remove('active-content');

  if (tabName === 'phonics') {
    if (phonicsBtn) phonicsBtn.classList.add('active');
    if (phonicsContent) phonicsContent.classList.add('active-content');
    populateLearningStudio();
  } else if (tabName === 'flashcards') {
    if (flashcardsBtn) flashcardsBtn.classList.add('active');
    if (flashcardsContent) flashcardsContent.classList.add('active-content');
    initFlashcardGame();
  } else if (tabName === 'games') {
    if (gamesBtn) gamesBtn.classList.add('active');
    if (gamesContent) gamesContent.classList.add('active-content');
    initGamesSandbox();
  }
}

// Start Flashcards practice game session
function initFlashcardGame() {
  syncLeitnerBoxes();
  currentFlashcardIndex = 0;
  
  // Flashcard practice queue: prioritize Box 1 words, then Box 2, then Box 3
  const queue = [
    ...leitnerBoxes.box1,
    ...leitnerBoxes.box2,
    ...leitnerBoxes.box3
  ];

  flashcardPracticeQueue = queue;
  renderFlashcard();
}

// Reset entire Leitner box progress
function resetLeitnerBoxes() {
  syncLeitnerBoxes();
  const allWords = [
    ...leitnerBoxes.box1,
    ...leitnerBoxes.box2,
    ...leitnerBoxes.box3
  ];
  leitnerBoxes = {
    box1: allWords,
    box2: [],
    box3: []
  };
  saveLeitnerBoxes();
  initFlashcardGame();
  showToast("All cards reset to Box 1 for review.");
}

// Render Leitner practice card
function renderFlashcard() {
  const container = document.getElementById('flashcard-game-container');
  if (!container) return;

  const totalWords = flashcardPracticeQueue.length;
  
  if (totalWords === 0) {
    container.innerHTML = `
      <div class="flashcard-empty-state">
        <div class="flashcard-empty-title">Word Bank is Empty</div>
        <div class="flashcard-empty-desc">
          Double-click or tap any word in the reading section and click <strong>"Save"</strong> to add it to your Word Bank, then come back to practice here!
        </div>
      </div>
    `;
    return;
  }

  // End of current round complete state
  if (currentFlashcardIndex >= totalWords) {
    container.innerHTML = `
      <div class="flashcard-empty-state" style="animation: fadeIn 0.4s ease-out;">
        <div class="flashcard-progress-circle-wrap">
          <div class="flashcard-success-badge">🎉</div>
        </div>
        <div class="flashcard-empty-title">Great Practice Session!</div>
        <div class="flashcard-empty-desc">
          You've reviewed all <strong>${totalWords}</strong> words in your practice deck. Keep practicing to build permanent sight word recognition!
        </div>
        
        <div class="leitner-progress-bar" style="margin: 1.2rem 0 0.8rem 0;">
          <div class="leitner-box-counter">
            <span class="leitner-box-number">${leitnerBoxes.box1.length}</span>
            <span class="leitner-box-label">Box 1 (Daily)</span>
          </div>
          <div class="leitner-box-counter">
            <span class="leitner-box-number">${leitnerBoxes.box2.length}</span>
            <span class="leitner-box-label">Box 2 (Review)</span>
          </div>
          <div class="leitner-box-counter">
            <span class="leitner-box-number">${leitnerBoxes.box3.length}</span>
            <span class="leitner-box-label">Box 3 (Auto)</span>
          </div>
        </div>
        
        <button class="modal-close-btn" style="margin-top: 1rem; background: var(--accent-success);" onclick="initFlashcardGame()">Practice Again</button>
        <button class="flashcard-action-link" style="margin-top: 0.6rem;" onclick="resetLeitnerBoxes()">Reset All Progress</button>
      </div>
    `;
    return;
  }

  const word = flashcardPracticeQueue[currentFlashcardIndex];
  const syllables = getSyllables(word).join('-');
  const lower = word.toLowerCase();
  const phonetic = pronunciationDict[lower] || `/${syllables.toLowerCase()}/`;
  const emoji = emojiDict[lower] || "📖";
  
  // Find current box number
  let currentBox = 1;
  if (leitnerBoxes.box2.some(w => w.toLowerCase() === lower)) currentBox = 2;
  else if (leitnerBoxes.box3.some(w => w.toLowerCase() === lower)) currentBox = 3;

  const imageSlotId = `card-img-${lower}`;
  const definitionSlotId = `card-def-${lower}`;

  container.innerHTML = `
    <div class="flashcard-game-layout">
      <div style="font-size: 0.85rem; color: var(--text-muted); width: 100%; display: flex; justify-content: space-between; font-weight: 600;">
        <span>Card ${currentFlashcardIndex + 1} of ${totalWords}</span>
        <span>Sight Level: Box ${currentBox}</span>
      </div>

      <div class="flashcard-perspective">
        <div class="flashcard" id="active-flashcard" onclick="flipFlashcard()">
          <!-- CARD FRONT -->
          <div class="card-front" style="font-family: ${settings.fontFamily === 'OpenDyslexic' ? "'OpenDyslexic', sans-serif" : "inherit"};">
            <div class="card-word">${escapeHtml(word)}</div>
            <div class="card-hint-text">Tap card to see answer</div>
          </div>
          <!-- CARD BACK -->
          <div class="card-back">
            <div class="card-back-flex">
              <div id="${imageSlotId}" style="width: 70px; height: 70px; border-radius: 8px; overflow: hidden; background: rgba(226, 217, 204, 0.1); display: flex; align-items: center; justify-content: center; border: 1px solid var(--border); flex-shrink: 0;">
                <div class="visual-skeleton-spinner" style="width: 14px; height: 14px;"></div>
              </div>
              <div style="text-align: left; flex: 1; min-width: 0;">
                <div class="card-word-title" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${escapeHtml(word)}</div>
                <div class="card-syllables">${escapeHtml(syllables)}</div>
                <div class="card-phonetics">${escapeHtml(phonetic)}</div>
              </div>
            </div>
            
            <div id="${definitionSlotId}" class="card-definition" style="font-size: 0.82rem; font-style: italic; color: var(--text-secondary); max-height: 50px; overflow-y: auto; text-align: left; width: 100%; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 0.3rem 0; margin: 0.2rem 0;">
              Looking up meaning...
            </div>
            
            <button class="session-chip" onclick="event.stopPropagation(); speakSingleWord('${word.replace(/'/g, "\\'")}')" style="margin-top: 0.2rem; display: inline-flex; align-items: center; gap: 0.3rem; padding: 0.3rem 0.6rem; font-size: 0.8rem; height: auto;">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07"/></svg> Listen slowly
            </button>
          </div>
        </div>
      </div>

      <!-- DECISION CONTROLS (Flipped state only) -->
      <div class="flashcard-game-controls" id="flashcard-controls" style="visibility: hidden;">
        <button class="flashcard-btn flashcard-btn-fail" onclick="handleFlashcardResult(false)">
          Still Learning ❌
        </button>
        <button class="flashcard-btn flashcard-btn-success" onclick="handleFlashcardResult(true)">
          Know It! ✅
        </button>
      </div>

      <!-- PROGRESS TRACKER -->
      <div class="leitner-progress-bar">
        <div class="leitner-box-counter" title="Box 1 words are practiced every round">
          <span class="leitner-box-number">${leitnerBoxes.box1.length}</span>
          <span class="leitner-box-label">Box 1 (Daily)</span>
        </div>
        <div class="leitner-box-counter" title="Box 2 words are practiced less frequently">
          <span class="leitner-box-number">${leitnerBoxes.box2.length}</span>
          <span class="leitner-box-label">Box 2 (Review)</span>
        </div>
        <div class="leitner-box-counter" title="Box 3 words are mastered sight words">
          <span class="leitner-box-number">${leitnerBoxes.box3.length}</span>
          <span class="leitner-box-label">Box 3 (Auto)</span>
        </div>
      </div>
    </div>
  `;

  // Asynchronously query image
  fetchVisualDictionaryImage(word).then(url => {
    const slot = document.getElementById(imageSlotId);
    if (slot) {
      if (url) {
        slot.innerHTML = `<img src="${url}" alt="${word}" class="card-back-visual">`;
      } else {
        slot.innerHTML = `<span style="font-size: 2rem;">${emoji}</span>`;
      }
    }
  });

  // Asynchronously query definition
  fetchWordDefinition(word).then(def => {
    const slot = document.getElementById(definitionSlotId);
    if (slot) {
      slot.textContent = def;
    }
  });
}

function flipFlashcard() {
  const card = document.getElementById('active-flashcard');
  const controls = document.getElementById('flashcard-controls');
  if (!card || !controls) return;

  card.classList.toggle('flipped');
  controls.style.visibility = card.classList.contains('flipped') ? 'visible' : 'hidden';
}

function handleFlashcardResult(knowsIt) {
  const word = flashcardPracticeQueue[currentFlashcardIndex];
  if (!word) return;

  const lower = word.toLowerCase();

  // Box migration calculation
  let currentBox = 1;
  if (leitnerBoxes.box2.some(w => w.toLowerCase() === lower)) currentBox = 2;
  else if (leitnerBoxes.box3.some(w => w.toLowerCase() === lower)) currentBox = 3;

  // Evacuate from all box pools
  leitnerBoxes.box1 = leitnerBoxes.box1.filter(w => w.toLowerCase() !== lower);
  leitnerBoxes.box2 = leitnerBoxes.box2.filter(w => w.toLowerCase() !== lower);
  leitnerBoxes.box3 = leitnerBoxes.box3.filter(w => w.toLowerCase() !== lower);

  if (knowsIt) {
    // Elevate status: 1 -> 2, 2 -> 3, 3 -> 3
    if (currentBox === 1) {
      leitnerBoxes.box2.push(word);
      showToast(`Promoted "${word}" to Box 2!`);
    } else {
      leitnerBoxes.box3.push(word);
      showToast(`Mastered "${word}" (Box 3)!`);
    }
  } else {
    // Demote directly to Box 1 (standard Leitner rule)
    leitnerBoxes.box1.push(word);
    showToast(`"${word}" reset to Box 1 for active review.`);
  }

  saveLeitnerBoxes();
  currentFlashcardIndex++;
  renderFlashcard();
}

function populateLearningStudio() {
  const area = document.getElementById('learning-studio-word-area');
  if (!area) return;

  if (!learningStudioWord) {
    area.innerHTML = `
      <div class="learning-empty-state">Pick a word from the reading area to practice it here.</div>
    `;
    return;
  }

  const syllables = getSyllables(learningStudioWord);
  const letters = learningStudioWord.split('');
  const safeWord = escapeHtml(learningStudioWord);
  const sentences = getLearningStudioSentences();
  const sentence = sentences.length ? sentences[Math.min(learningStudioSentenceIndex, sentences.length - 1)] : '';
  const sentenceSafe = escapeHtml(sentence || '');
  const wordSaved = isWordInBank(learningStudioWord);

  area.innerHTML = `
    <div class="learning-word-title">${safeWord}</div>
    <div class="learning-word-meta">${syllables.length > 1 ? escapeHtml(syllables.join(' • ')) : 'One-sound practice'}</div>
    <div class="learning-practice-block">
      <div class="learning-block-label">Trace the word</div>
      <div class="trace-word">${letters.map(letter => `<span>${escapeHtml(letter)}</span>`).join('')}</div>
    </div>
    <div class="learning-practice-block">
      <div class="learning-block-label">Tap each syllable</div>
      <div class="chip-row">
        ${syllables.map(syllable => `<button class="session-chip" onclick="speakSingleWord('${syllable.replace(/'/g, "\\'")}')">${syllable}</button>`).join('')}
      </div>
    </div>
    <div class="learning-practice-block">
      <div class="learning-block-label">Tap each letter</div>
      <div class="chip-row">
        ${letters.map(letter => `<button class="session-chip" onclick="speakSingleWord('${letter.replace(/'/g, "\\'")}')">${letter}</button>`).join('')}
      </div>
    </div>
    <div class="learning-practice-block">
      <div class="learning-block-label">Sentence-by-sentence drill</div>
      <div class="learning-sentence-drill">
        <div class="learning-sentence-text">${sentenceSafe || 'No sentence available yet.'}</div>
        <div class="chip-row learning-drill-controls">
          <button class="session-chip" onclick="previousLearningSentence()">Previous</button>
          <button class="session-chip" onclick="hearLearningSentence()">Read Sentence</button>
          <button class="session-chip" onclick="nextLearningSentence()">Next</button>
        </div>
      </div>
    </div>
    <div class="learning-practice-block">
      <div class="learning-block-label">Word bank</div>
      <div class="learning-card-text">${wordSaved ? 'This word is saved for later review.' : 'Save this word to practice it again later.'}</div>
      <div class="chip-row">
        <button class="session-chip" onclick="toggleWordBankWord('${learningStudioWord.replace(/'/g, "\\'")}')">${wordSaved ? 'Remove from Word Bank' : 'Save to Word Bank'}</button>
      </div>
    </div>
  `;
}

function hearLearningWord() {
  if (!learningStudioWord) return;
  speakSingleWord(learningStudioWord);
}

function soundOutLearningWord() {
  if (!learningStudioWord) return;
  soundOutWord(learningStudioWord);
}

function openLearningStudioForWord(wordText) {
  learningStudioWord = wordText;
  learningStudioSentenceIndex = findSentenceIndexForWord(wordText);
  populateLearningStudio();
  renderWordBank();
  toggleLearningStudio(true);
}

function nextLearningSentence() {
  const sentences = getLearningStudioSentences();
  if (!sentences.length) return;
  learningStudioSentenceIndex = Math.min(sentences.length - 1, learningStudioSentenceIndex + 1);
  populateLearningStudio();
}

function previousLearningSentence() {
  const sentences = getLearningStudioSentences();
  if (!sentences.length) return;
  learningStudioSentenceIndex = Math.max(0, learningStudioSentenceIndex - 1);
  populateLearningStudio();
}

function hearLearningSentence() {
  const sentences = getLearningStudioSentences();
  if (!sentences.length) return;
  const sentence = sentences[Math.min(learningStudioSentenceIndex, sentences.length - 1)];
  if (!sentence) return;

  if (synth) synth.cancel();
  utterance = new SpeechSynthesisUtterance(sentence);
  utterance.rate = parseFloat(document.getElementById('rate-slider').value) || 0.9;
  utterance.pitch = parseFloat(document.getElementById('pitch-slider').value) || 1.0;
  utterance.volume = parseFloat(document.getElementById('volume-slider').value) || 0.8;

  const voiceName = document.getElementById('voice-select').value;
  const voiceList = synth.getVoices();
  const voice = voiceList.find(v => v.name === voiceName);
  if (voice) utterance.voice = voice;

  synth.speak(utterance);
}

// SETTINGS FILE SYNC
function exportSettingsFile() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(settings, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "lexivoice-settings.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Settings exported successfully!");
}

function importSettingsFile(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const imported = JSON.parse(e.target.result);
      settings = { ...defaultSettings, ...imported };
      localStorage.removeItem(childModeSnapshotKey);
      saveSettings();
      applyAllSettings();
      updateUIFromSettings();
      showToast("Settings imported successfully!");
    } catch (err) {
      alert("Invalid settings JSON structure.");
    }
  };
  reader.readAsText(file);
  event.target.value = ''; // Reset input element
}

// SETTINGS SIDEBAR TOGGLE
function toggleSettingsPanel(forceShow) {
  const panel = document.getElementById('settings-panel');
  const overlay = document.getElementById('sidebar-overlay');

  let show = !panel.classList.contains('open');
  if (forceShow !== undefined) show = forceShow;

  if (show) {
    panel.classList.add('open');
    overlay.style.display = 'block';
    panel.setAttribute('aria-hidden', 'false');
  } else {
    panel.classList.remove('open');
    overlay.style.display = 'none';
    panel.setAttribute('aria-hidden', 'true');
  }
}

// FILE LOADING & PARSING (PDF & TXT)
function setupDragAndDrop() {
  const dragZone = document.getElementById('drag-zone');
  const fileInput = document.getElementById('file-picker');

  dragZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragZone.classList.add('drag-over');
  });

  dragZone.addEventListener('dragleave', () => {
    dragZone.classList.remove('drag-over');
  });

  dragZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dragZone.classList.remove('drag-over');

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleUploadedFile(files[0]);
    }
  });

  dragZone.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fileInput.click();
    }
  });

  dragZone.addEventListener('click', (e) => {
    if (!e.target.closest('.btn-file-picker')) {
      fileInput.click();
    }
  });

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      handleUploadedFile(fileInput.files[0]);
    }
  });
}

async function handleUploadedFile(file) {
  showToast(`Loading document: ${file.name}...`);
  try {
    let text = "";
    if (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")) {
      if (typeof pdfjsLib === 'undefined') {
        throw new Error("PDF processing library is not loaded. Please check your internet connection.");
      }
      text = await extractTextFromPDF(file);
    } else if (file.type === "text/plain" || file.name.toLowerCase().endsWith(".txt")) {
      text = await file.text();
    } else {
      throw new Error("Unsupported file format.");
    }

    if (!text.trim()) {
      throw new Error("No text content found inside file.");
    }

    verifyAndLoadText(text);
  } catch (err) {
    console.error(err);
    alert(file.name.toLowerCase().endsWith(".pdf")
      ? "Couldn't read that PDF. Try copy-pasting the text instead."
      : `Error loading file: ${err.message || "Invalid TXT file."}`);
  }
}

async function extractTextFromPDF(file) {
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;

  let fullText = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    let lastY = -1;
    let pageText = "";

    for (const item of textContent.items) {
      if (lastY !== -1 && Math.abs(item.transform[5] - lastY) > 5) {
        pageText += "\n";
      } else if (pageText && !pageText.endsWith(" ")) {
        pageText += " ";
      }
      pageText += item.str;
      lastY = item.transform[5];
    }
    fullText += pageText + "\n\n";
  }
  return fullText;
}

// Webpage Text Fetch (same-origin Vercel API route)
async function handleURLImport() {
  const urlInput = document.getElementById('url-input');
  let url = urlInput.value.trim();
  if (!url) {
    alert("Please enter a valid webpage URL.");
    return;
  }
  if (!/^https?:\/\//i.test(url)) {
    url = 'https://' + url;
  }

  showToast("Fetching webpage text content...");
  try {
    const response = await fetch(`/api/fetch-page?url=${encodeURIComponent(url)}`);
    if (!response.ok) throw new Error("Connection failed.");
    const data = await response.json();

    const parser = new DOMParser();
    const doc = parser.parseFromString(data.contents, 'text/html');

    // Strip interactive components
    doc.querySelectorAll('script, style, nav, footer, iframe, header, noscript, svg, form').forEach(el => el.remove());

    let container = doc.querySelector('article') || doc.querySelector('main') || doc.body;
    let text = "";
    const lines = container.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li');

    if (lines.length > 0) {
      lines.forEach(p => {
        const val = p.textContent.trim();
        if (val.length > 15) {
          text += val + "\n\n";
        }
      });
    } else {
      text = container.textContent.replace(/\s+/g, ' ').trim();
    }

    if (!text || text.length < 50) {
      throw new Error("Extracted text is too short or empty.");
    }

    document.getElementById('text-input').value = text;
    showToast("Webpage content loaded successfully!");
    urlInput.value = '';
  } catch (err) {
    console.error(err);
    alert("Could not load text from URL (likely due to access limitations). Please copy and paste the webpage content instead.");
  }
}

// Load Sample Text
function loadSampleText() {
  const sampleParagraphs = `Dyslexia is a learning difference that primarily affects the skills involved in accurate and fluent word reading and spelling. Research shows that simple adjustments to typography can make a massive difference.

For instance, utilizing a warm cream background alleviates visual stress. The letters cease to shimmer or move. Subsequently, employing a custom typeface like OpenDyslexic prevents letter flipping.

Bionic reading facilitates reading speed by bolding the initial parts of words. The brain uses these bold anchors to comprehend the text without fully decoding every letter. Furthermore, a reading ruler terminates line confusion by highlighting the current row and dimming the rest.

We endeavour to provide sufficient customizable settings to obtain the ultimate comfortable environment for every reader. Try toggling bionic reading, adjusting paragraph spacing, or activating the focus dimming helper to experience the difference.`;

  document.getElementById('text-input').value = sampleParagraphs;
  showToast("Sample text loaded into textarea.");
}

// PROCESS TEXT LIMITS
function verifyAndLoadText(text) {
  const words = text.split(/\s+/).filter(Boolean);

  if (words.length > 50000) {
    showLargeFileWarning(text, words.length);
  } else {
    initializeReadingView(text);
  }
}

function showLargeFileWarning(fullText, wordCount) {
  pendingLargeText = fullText;
  const warningModal = document.getElementById('large-file-modal');
  const content = document.getElementById('large-file-modal-content');

  content.innerHTML = `
        <div class="modal-emoji">⚠️</div>
        <h2>Large Document Warning</h2>
        <p>This text contains approximately <strong>${wordCount.toLocaleString()}</strong> words. Loading files this size might slow down reading controls.</p>
        <div class="warning-btns">
          <button class="btn-primary" style="background: var(--accent-success); border: none; color: white;" onclick="confirmTruncatedLoad()">Load First 10,000 Words</button>
          <button class="btn-secondary" style="border: 1px solid var(--border); background: transparent; color: var(--text-secondary);" onclick="confirmFullLoad()">Load All Words</button>
        </div>
      `;
  warningModal.classList.add('visible');
}

function confirmTruncatedLoad() {
  const words = pendingLargeText.split(/\s+/).slice(0, 10000).join(' ');
  document.getElementById('large-file-modal').classList.remove('visible');
  initializeReadingView(words);
  pendingLargeText = "";
}

function confirmFullLoad() {
  document.getElementById('large-file-modal').classList.remove('visible');
  initializeReadingView(pendingLargeText);
  pendingLargeText = "";
}

function handleStartReading() {
  const text = document.getElementById('text-input').value.trim();
  if (!text) {
    alert("Please paste text, load a file, or click 'Try a Sample Text' first.");
    return;
  }
  verifyAndLoadText(text);
}

function initializeReadingView(text) {
  originalText = text;
  simplifiedText = simplifyText(text);
  currentTextMode = 'original';
  currentWordIndex = -1;
  currentParaIndex = 0;
  wordsSpokenInSession = 0;
  speechGeneration = 0;
  sessionEndHandled = false;

  // Update toggle buttons text
  const simplifyBtn = document.getElementById('simplify-toggle-btn');
  if (simplifyBtn) {
    simplifyBtn.textContent = "Simplify Text";
  }

  document.getElementById('input-panel-container').style.display = 'none';
  document.getElementById('reading-container').style.display = 'block';
  document.getElementById('finish-reading-btn-wrapper').style.display = 'block';

  renderText();

  // Reset timer
  startSessionTimer();
  updateStats(0);
}

function goBackToInput() {
  speechGeneration++;
  if (synth) synth.cancel();
  isPlaying = false;
  updatePlayPauseButtons();
  stopSessionTimer();
  stopSpeechKeepAlive();
  if (fallbackInterval) clearTimeout(fallbackInterval);
  if (boundaryTimer) clearTimeout(boundaryTimer);

  document.getElementById('input-panel-container').style.display = 'block';
  document.getElementById('reading-container').style.display = 'none';
  document.getElementById('finish-reading-btn-wrapper').style.display = 'none';
}

// BIONIC TEXT ANCHORS GENERATOR
function bionicWord(word) {
  if (word.length <= 1) return `<b class="bionic-bold">${word}</b>`;
  const boldLen = Math.ceil(word.length * 0.45); // Bold 45% of characters
  return `<b class="bionic-bold">${word.slice(0, boldLen)}</b>${word.slice(boldLen)}`;
}

// LETTER REVERSAL CHARACTER HIGHLIGHT (b/d/p/q Anchors)
function highlightReversalCharacters(htmlStr) {
  if (!htmlStr) return "";
  const parts = htmlStr.split(/(<\/?[^>]+>)/g);
  for (let i = 0; i < parts.length; i++) {
    if (parts[i] && !parts[i].startsWith('<')) {
      parts[i] = parts[i].replace(/[bdpq]/gi, (char) => {
        const lower = char.toLowerCase();
        return `<span class="char-${lower}">${char}</span>`;
      });
    }
  }
  return parts.join('');
}

function formatWordText(word, activeSettings) {
  if (!word) return "";
  let formatted = word;

  // 1. Syllable Alternating Highlights
  if (activeSettings.syllableHighlightEnabled) {
    const syllables = getSyllables(word);
    if (syllables.length > 1) {
      formatted = syllables.map((syl, idx) => {
        const cls = (idx % 2 === 0) ? 'syl-odd' : 'syl-even';
        if (activeSettings.bionicEnabled) {
          return `<span class="${cls}">${bionicWord(syl)}</span>`;
        }
        return `<span class="${cls}">${syl}</span>`;
      }).join('');
    } else {
      if (activeSettings.bionicEnabled) {
        formatted = bionicWord(word);
      }
    }
  } else {
    if (activeSettings.bionicEnabled) {
      formatted = bionicWord(word);
    }
  }

  // 2. Letter Reversal Highlight Anchors
  if (activeSettings.reversalHelperEnabled) {
    formatted = highlightReversalCharacters(formatted);
  }

  return formatted;
}

// TEXT SIMPLIFICATION ENGINE (Rule-Based + Synonym lookup)
function simplifyText(text) {
  // Split sentences cleanly (preserving period structures)
  const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text];

  const simplifiedSentences = sentences.map(sentence => {
    const trimmed = sentence.trim();
    const words = trimmed.split(/\s+/);

    const modifiedWords = words.map(word => {
      // Keep punctuation separate for dictionary comparisons
      const clean = word.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (synonymDict[clean]) {
        let rep = synonymDict[clean];

        // Re-apply capitalization matches
        if (word[0] === word[0].toUpperCase()) {
          rep = rep.charAt(0).toUpperCase() + rep.slice(1);
        }

        const pStart = word.match(/^[^a-zA-Z0-9]+/);
        const pEnd = word.match(/[^a-zA-Z0-9]+$/);
        const prefix = pStart ? pStart[0] : '';
        const suffix = pEnd ? pEnd[0] : '';

        // Mark token for parser to color it
        return `${prefix}[simp:${rep}|original:${clean}]${suffix}`;
      }
      return word;
    });

    let sentenceText = modifiedWords.join(' ');

    // Break sentences > 20 words at natural conjunctions
    let finalWords = sentenceText.split(/\s+/);
    if (finalWords.length > 20) {
      const conjunctions = ['and', 'but', 'because', 'which', 'who', 'that'];
      let bestIndex = -1;
      let minDistance = Infinity;
      let mid = Math.floor(finalWords.length / 2);

      for (let i = 0; i < finalWords.length; i++) {
        const w = finalWords[i].toLowerCase().replace(/[^a-z]/g, '');
        if (conjunctions.includes(w)) {
          const dist = Math.abs(i - mid);
          if (dist < minDistance) {
            minDistance = dist;
            bestIndex = i;
          }
        }
      }

      if (bestIndex !== -1) {
        let part1 = finalWords.slice(0, bestIndex).join(' ');
        const conj = finalWords[bestIndex];
        let part2 = finalWords.slice(bestIndex + 1).join(' ');

        if (!part1.endsWith('.') && !part1.endsWith('?') && !part1.endsWith('!')) {
          part1 += '.';
        }

        const cleanConj = conj.toLowerCase().replace(/[^a-z]/g, '');
        if (cleanConj === 'and') {
          if (part2.length > 0) {
            part2 = capitalizeFirstWord(part2);
          }
        } else {
          part2 = conj.charAt(0).toUpperCase() + conj.slice(1) + ' ' + part2;
        }

        return part1 + ' ' + part2;
      }
    }

    return sentenceText;
  });

  return simplifiedSentences.join(' ');
}

function capitalizeFirstWord(text) {
  if (text.startsWith('[simp:')) {
    return '[simp:' + text.charAt(6).toUpperCase() + text.slice(7);
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function toggleSimplifier() {
  const btn = document.getElementById('simplify-toggle-btn');
  if (currentTextMode === 'original') {
    currentTextMode = 'simplified';
    btn.textContent = "Show Original";
    showToast("Displaying simplified sentences.");
  } else {
    currentTextMode = 'original';
    btn.textContent = "Simplify Text";
    showToast("Displaying original text.");
  }
  renderText();
  updateStats(Math.max(0, currentWordIndex));
}

// TOKENIZER & HTML BUILDER
function renderText() {
  const readingArea = document.getElementById('reading-area');
  const textToRender = (currentTextMode === 'simplified') ? simplifiedText : originalText;

  if (!textToRender) return;

  const normalized = textToRender.replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n');
  const paragraphs = normalized.split(/\n\n+/);

  let html = "";
  let wordIndex = 0;
  let flatText = "";
  let wordsMetadata = [];

  paragraphs.forEach((paraText, paraIdx) => {
    if (!paraText.trim()) return;
    html += `<p class="reader-para" data-para-index="${paraIdx}">`;

    // Regex extracts simplified items, standard alphanumeric words, or punctuation/spaces
    let regex = /(\[simp:[^\]]+\])|([a-zA-Z0-9'’-]+)|([^\[a-zA-Z0-9'’-]+)/g;
    let match;
    let paraHtml = "";

    while ((match = regex.exec(paraText)) !== null) {
      let simpToken = match[1];
      let standardWord = match[2];
      let nonWord = match[3];

      if (simpToken) {
        let tokenMatch = simpToken.match(/\[simp:(.+?)\|original:(.+?)\]/);
        if (tokenMatch) {
          const word = tokenMatch[1];
          const original = tokenMatch[2];

          const startInFlat = flatText.length;
          flatText += word;
          const endInFlat = flatText.length;

          const wordId = `w-${wordIndex}`;
          const displayedText = formatWordText(word, settings);

          const wordClass = getWordGrammarClass(word);
          const classAttr = wordClass ? ` ${wordClass}` : '';
          paraHtml += `<span class="r-word simplified-word${classAttr}" id="${wordId}" data-word-idx="${wordIndex}" data-original="${original}" title="Original word: ${original}">${displayedText}</span>`;

          wordsMetadata.push({
            id: wordId,
            word: word,
            start: startInFlat,
            end: endInFlat,
            paraIndex: paraIdx,
            wordIdx: wordIndex
          });
          wordIndex++;
        }
      } else if (standardWord) {
        const word = standardWord;
        const startInFlat = flatText.length;
        flatText += word;
        const endInFlat = flatText.length;

        const wordId = `w-${wordIndex}`;
        const displayedText = formatWordText(word, settings);

        const wordClass = getWordGrammarClass(word);
        const classAttr = wordClass ? ` ${wordClass}` : '';
        paraHtml += `<span class="r-word${classAttr}" id="${wordId}" data-word-idx="${wordIndex}">${displayedText}</span>`;

        wordsMetadata.push({
          id: wordId,
          word: word,
          start: startInFlat,
          end: endInFlat,
          paraIndex: paraIdx,
          wordIdx: wordIndex
        });
        wordIndex++;
      } else if (nonWord) {
        flatText += nonWord;
        let puncRegex = /(\s+)|([^\s]+)/g;
        let pMatch;
        while ((pMatch = puncRegex.exec(nonWord)) !== null) {
          let space = pMatch[1];
          let punct = pMatch[2];
          if (space) {
            paraHtml += space;
          } else if (punct) {
            paraHtml += `<span class="r-punct">${punct}</span>`;
          }
        }
      }
    }

    html += paraHtml;

    // Append summary toggle button and empty summary box
    html += `
          <span class="para-actions-wrapper">
            <button class="para-action-btn summary-btn" onclick="toggleParagraphSummary(${paraIdx}, event)" aria-label="Summarize paragraph ${paraIdx + 1}" type="button">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align: middle; margin-right: 4px;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>Summarize
            </button>
          </span>
          <div class="para-summary-box" id="summary-box-${paraIdx}" style="display: none;"></div>
        `;

    html += `</p>`;
    if (paraIdx < paragraphs.length - 1) {
      flatText += " \n ";
    }
  });

  currentWordsMetadata = wordsMetadata;
  flatSpokenText = flatText;

  readingArea.innerHTML = `
        <div id="line-highlight"></div>
        <div id="reading-ruler"></div>
        <div id="ruler-dim-top" class="ruler-dim-overlay"></div>
        <div id="ruler-dim-bottom" class="ruler-dim-overlay"></div>
        ${html}
      `;

  // Update paragraph chunk references
  if (chunkModeEnabled) {
    showParagraph(currentParaIndex);
  }

  // Re-apply visual position of highlighted items if active
  if (currentWordIndex >= 0 && currentWordIndex < currentWordsMetadata.length) {
    highlightWord(currentWordIndex);
  }
}

// STATS & PROGRESS TRACKER
function startSessionTimer() {
  if (sessionTimerInterval) clearInterval(sessionTimerInterval);
  sessionSeconds = 0;
  updateSessionTimerDisplay();

  const shortSessionTotal = settings.shortSessionEnabled ? settings.shortSessionMinutes * 60 : 0;

  sessionTimerInterval = setInterval(() => {
    sessionSeconds++;
    updateSessionTimerDisplay();

    if (settings.shortSessionEnabled && sessionSeconds >= shortSessionTotal) {
      clearInterval(sessionTimerInterval);
      sessionTimerInterval = null;
      if (isPlaying) {
        pauseTTS();
      }
      showToast("Short session complete. Great work!");
      return;
    }

    // Break reminder trigger (every 15 minutes = 900 seconds)
    if (sessionSeconds > 0 && sessionSeconds % 900 === 0 && settings.breakReminderEnabled) {
      triggerBreakReminder();
    }
  }, 1000);
}

function stopSessionTimer() {
  if (sessionTimerInterval) {
    clearInterval(sessionTimerInterval);
    sessionTimerInterval = null;
  }
}

function updateSessionTimerDisplay() {
  const timerEl = document.getElementById('session-timer');
  if (!timerEl) return;
  if (settings.shortSessionEnabled) {
    const total = settings.shortSessionMinutes * 60;
    const remaining = Math.max(0, total - sessionSeconds);
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    timerEl.textContent = `Session: ${m}m ${s}s left`;
  } else {
    const m = Math.floor(sessionSeconds / 60);
    const s = sessionSeconds % 60;
    timerEl.textContent = `Session: ${m}m ${s}s`;
  }
}

function updateStats(wordsReadCount) {
  const totalWords = currentWordsMetadata.length;
  document.getElementById('words-count-display').textContent = `${wordsReadCount} / ${totalWords} words`;

  // Top Red YouTube-style Progress Bar
  const percent = totalWords > 0 ? (wordsReadCount / totalWords) * 100 : 0;
  const bar = document.getElementById('reading-progress-bar');
  bar.style.width = `${percent}%`;
  bar.setAttribute('aria-valuenow', Math.round(percent));

  // Estimated Time Remaining (Based on playback speeds)
  const speedSlider = parseFloat(document.getElementById('rate-slider').value) || 0.9;
  const wpm = 170 * speedSlider; // Default dyslexic average
  const remainingWords = totalWords - wordsReadCount;
  const minRemaining = Math.max(0, Math.ceil(remainingWords / wpm));

  document.getElementById('time-remaining-display').textContent = `${minRemaining} min remaining`;
}

// SHOW CONGRATULATORY ENCOURAGEMENT CARD
function triggerReadingSessionEnd() {
  stopSessionTimer();
  const readCount = currentWordsMetadata.length;

  const todayStr = new Date().toDateString();
  let dailyStats = JSON.parse(localStorage.getItem('lexiVoiceDailyStats') || '{}');
  if (dailyStats.date !== todayStr) {
    dailyStats = { date: todayStr, count: 0 };
  }
  dailyStats.count += readCount;
  localStorage.setItem('lexiVoiceDailyStats', JSON.stringify(dailyStats));

  const modal = document.getElementById('encouragement-modal');
  const content = document.getElementById('encouragement-modal-content');

  content.innerHTML = `
        <div class="modal-emoji">🎉</div>
        <h2>Amazing Reading Progress!</h2>
        <p>You completed reading this text block successfully.</p>
        
        <div class="modal-stats-grid">
          <div class="modal-stat-box">
            <span class="stat-number">${readCount}</span>
            <span class="stat-label">Words Finished</span>
          </div>
          <div class="modal-stat-box">
            <span class="stat-number">${dailyStats.count}</span>
            <span class="stat-label">Words Today</span>
          </div>
          <div class="modal-stat-box">
            <span class="stat-number">${Math.floor(sessionSeconds / 60)}m ${sessionSeconds % 60}s</span>
            <span class="stat-label">Time Elapsed</span>
          </div>
        </div>
        
        <p class="encouragement-msg">You've read ${dailyStats.count} words today! Custom spacing & settings are working.</p>
        <button class="modal-close-btn" style="background: var(--accent-success);" onclick="document.getElementById('encouragement-modal').classList.remove('visible')">Keep Reading</button>
      `;
  modal.classList.add('visible');
}

// TTS SPEECH SYNTHESIS ENGINE (KARAOKE SYNCHRONIZER)
function togglePlayback() {
  if (isPlaying) {
    pauseTTS();
  } else {
    playTTS();
  }
}

function playTTS() {
  if (!synth || (synth.getVoices && synth.getVoices().length === 0)) {
    alert("Your browser doesn't support text-to-speech. Try Chrome or Edge.");
    return;
  }
  if (!flatSpokenText) return;

  if (synth.paused && utterance) {
    isPlaying = true;
    isSpeechFinished = false;
    updatePlayPauseButtons();
    startSpeechKeepAlive();
    synth.resume();
    return;
  }

  isPlaying = true;
  isSpeechFinished = false;
  updatePlayPauseButtons();

  const thisGeneration = ++speechGeneration;
  synth.cancel();

  let startIdx = 0;
  if (currentWordIndex >= 0 && currentWordIndex < currentWordsMetadata.length) {
    startIdx = currentWordIndex;
  } else {
    currentWordIndex = 0;
  }

  const remainingText = flatSpokenText.slice(currentWordsMetadata[startIdx].start);
  utterance = new SpeechSynthesisUtterance(remainingText);

  // Configure Speech Rates
  const speed = parseFloat(document.getElementById('rate-slider').value) || 0.9;
  const pitch = parseFloat(document.getElementById('pitch-slider').value) || 1.0;
  const volume = parseFloat(document.getElementById('volume-slider').value) || 0.8;

  utterance.rate = speed;
  utterance.pitch = pitch;
  utterance.volume = volume;

  // Match active voices
  const voiceName = document.getElementById('voice-select').value;
  const voiceList = synth.getVoices();
  const voice = voiceList.find(v => v.name === voiceName);
  if (voice) utterance.voice = voice;

  let boundaryReceived = false;

  utterance.onboundary = function (event) {
    if (event.name !== 'word') return;
    boundaryReceived = true;

    // If fallback was running, stop it because we are getting native boundaries
    if (fallbackInterval) {
      clearTimeout(fallbackInterval);
      fallbackInterval = null;
    }

    // Reset watchdog timer. If we don't get another boundary in 1.2s, restart fallback.
    if (boundaryTimer) clearTimeout(boundaryTimer);
    boundaryTimer = setTimeout(() => {
      if (isPlaying) {
        console.log("Watchdog: No boundary events received. Restarting fallback.");
        startKaraokeFallback(speed, currentWordIndex >= 0 ? currentWordIndex : startIdx);
      }
    }, 1200);

    const startOffset = currentWordsMetadata[startIdx].start;
    let absoluteChar = event.charIndex + startOffset;

    // Find matched word with tolerance (closest word start index within 10 chars)
    let matchedWord = null;
    let minDistance = Infinity;

    for (let i = 0; i < currentWordsMetadata.length; i++) {
      const w = currentWordsMetadata[i];
      if (absoluteChar >= w.start && absoluteChar < w.end) {
        matchedWord = w;
        break;
      }
      const dist = Math.abs(w.start - absoluteChar);
      if (dist < minDistance) {
        minDistance = dist;
        matchedWord = w;
      }
    }

    if (matchedWord && minDistance < 10) {
      highlightWord(matchedWord.wordIdx);
    }
  };

  utterance.onend = function () {
    if (thisGeneration !== speechGeneration) return;
    if (isPlaying) {
      if (fallbackInterval && currentWordIndex < currentWordsMetadata.length - 1) {
        isSpeechFinished = true;
      } else {
        finishReadingSession();
      }
    }
  };

  utterance.onstart = function () {
    boundaryReceived = false;
    startSpeechKeepAlive();

    // Initial watchdog trigger
    if (boundaryTimer) clearTimeout(boundaryTimer);
    boundaryTimer = setTimeout(() => {
      if (!boundaryReceived && isPlaying) {
        console.log("Initial watchdog timeout: Starting fallback.");
        startKaraokeFallback(speed, startIdx);
      }
    }, 1200);
  };

  utterance.onerror = function (e) {
    if (thisGeneration !== speechGeneration) return;
    console.error("SpeechSynthesis error:", e);
    finishReadingSession();
  };

  synth.speak(utterance);
}

function finishReadingSession() {
  if (sessionEndHandled) return;
  sessionEndHandled = true;
  isPlaying = false;
  currentWordIndex = -1;
  utterance = null;
  updatePlayPauseButtons();
  clearHighlight();
  if (fallbackInterval) clearTimeout(fallbackInterval);
  fallbackInterval = null;
  if (boundaryTimer) clearTimeout(boundaryTimer);
  boundaryTimer = null;
  stopSpeechKeepAlive();
  triggerReadingSessionEnd();
}

function pauseTTS() {
  isPlaying = false;
  updatePlayPauseButtons();
  if (synth && synth.speaking && !synth.paused) {
    synth.pause();
  }
  if (fallbackInterval) clearTimeout(fallbackInterval);
  fallbackInterval = null;
  if (boundaryTimer) clearTimeout(boundaryTimer);
  boundaryTimer = null;
  stopSpeechKeepAlive();
}

function restartPlayback() {
  if (!flatSpokenText) return;

  speechGeneration++;
  if (synth) synth.cancel();
  if (fallbackInterval) clearTimeout(fallbackInterval);
  fallbackInterval = null;
  if (boundaryTimer) clearTimeout(boundaryTimer);
  boundaryTimer = null;
  stopSpeechKeepAlive();

  utterance = null;
  isPlaying = false;
  isSpeechFinished = false;
  currentWordIndex = -1;
  clearHighlight();
  updatePlayPauseButtons();
  playTTS();
}

function startSpeechKeepAlive() {
  if (keepAliveInterval) clearInterval(keepAliveInterval);
  keepAliveInterval = setInterval(() => {
    if (isPlaying && synth && !synth.paused) {
      synth.pause();
      synth.resume();
    }
  }, 10000);
}

function stopSpeechKeepAlive() {
  if (keepAliveInterval) {
    clearInterval(keepAliveInterval);
    keepAliveInterval = null;
  }
}

function updatePlayPauseButtons() {
  const btn = document.getElementById('play-btn');
  if (isPlaying) {
    btn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;
    btn.setAttribute('aria-label', 'Pause spoken text');
  } else {
    btn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
    btn.setAttribute('aria-label', 'Play spoken text');
  }
}

function startKaraokeFallback(rate, startWordIdx) {
  if (fallbackInterval) clearTimeout(fallbackInterval);

  let index = startWordIdx;
  const words = currentWordsMetadata;

  function highlightNext() {
    if (!isPlaying) return;

    if (index < words.length) {
      highlightWord(index);

      const currentWord = words[index].word;
      const len = currentWord ? currentWord.length : 5;

      // Base duration for a 5-character word: ~580ms at 1.0x rate.
      // Adjusted by playback rate (higher rate = shorter duration).
      const baseDuration = 580 / rate;

      // Calculate dynamic duration based on character count
      const wordDuration = (baseDuration * 0.7) * (len / 5) + (baseDuration * 0.3);

      index++;
      fallbackInterval = setTimeout(highlightNext, wordDuration);
    } else {
      if (isSpeechFinished || !synth.speaking) {
        finishReadingSession();
      }
    }
  }

  highlightNext();
}

function highlightWord(idx) {
  if (idx < 0 || idx >= currentWordsMetadata.length) return;

  currentWordIndex = idx;
  const word = currentWordsMetadata[idx];

  // Clean previous active highlighting classes
  const oldActive = document.querySelector('.r-word.active');
  if (oldActive) oldActive.classList.remove('active');

  const span = document.getElementById(word.id);
  if (span) {
    span.classList.add('active');

    // Scroll word into viewport center
    span.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Soft line highlight update
    const line = document.getElementById('line-highlight');
    if (line) {
      line.style.top = `${span.offsetTop}px`;
      line.style.height = `${span.offsetHeight}px`;
      line.style.display = 'block';
    }

    // Auto-ruler visual updates
    if (rulerEnabled) {
      updateRulerAutoPosition(span);
    }

    // Paragraph chunks tracking
    if (chunkModeEnabled && word.paraIndex !== currentParaIndex) {
      showParagraph(word.paraIndex);
    }

    updateStats(idx + 1);
  }
}

function clearHighlight() {
  const active = document.querySelector('.r-word.active');
  if (active) active.classList.remove('active');

  const line = document.getElementById('line-highlight');
  if (line) line.style.display = 'none';

  const ruler = document.getElementById('reading-ruler');
  if (ruler) ruler.style.display = 'none';
}

function skipBackward() {
  if (currentWordsMetadata.length === 0) return;
  let newIdx = Math.max(0, currentWordIndex - 5);
  highlightWord(newIdx);
  if (isPlaying) playTTS();
}

function skipForward() {
  if (currentWordsMetadata.length === 0) return;
  let newIdx = Math.min(currentWordsMetadata.length - 1, currentWordIndex + 5);
  highlightWord(newIdx);
  if (isPlaying) playTTS();
}

function handleTTSConfigChange() {
  const speed = parseFloat(document.getElementById('rate-slider').value);
  document.getElementById('rate-val').textContent = `${speed.toFixed(1)}x`;

  const pitch = parseFloat(document.getElementById('pitch-slider').value);
  document.getElementById('pitch-val').textContent = `${pitch.toFixed(2)}x`;

  if (isPlaying) {
    playTTS(); // Re-trigger utterance with updated rate parameters
  }
}

function setupVoiceListPopulator() {
  function populate() {
    const select = document.getElementById('voice-select');
    if (!select) return;

    if (!synth) {
      select.innerHTML = "<option>Speech not supported</option>";
      return;
    }

    const voices = synth.getVoices();
    select.innerHTML = "";

    if (voices.length === 0) {
      const opt = document.createElement('option');
      opt.textContent = "No voices detected";
      select.appendChild(opt);
      return;
    }

    voices.forEach(v => {
      const opt = document.createElement('option');
      opt.textContent = `${v.name} (${v.lang})`;
      opt.value = v.name;
      if (v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural'))) {
        opt.selected = true; // Preferred English natural voice sets
      }
      select.appendChild(opt);
    });
  }

  populate();
  if (synth && synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populate;
  }
}

// READING FOCUS RULER LOGIC
function setupRulerMouseEvents() {
  const area = document.getElementById('reading-area');

  area.addEventListener('mousemove', (e) => {
    if (!rulerEnabled || isPlaying || rulerLocked) return;

    const rect = area.getBoundingClientRect();
    const y = e.clientY - rect.top + area.scrollTop;
    updateRulerPosition(y);
  });

  area.addEventListener('click', (e) => {
    if (!rulerEnabled || isPlaying) return;

    // Locking ruler toggle
    rulerLocked = !rulerLocked;
    if (rulerLocked) {
      const target = e.target.closest('.r-word');
      if (target) {
        updateRulerPosition(target.offsetTop + target.offsetHeight / 2);
      }
    }
  });
}

function updateRulerPosition(yCenter) {
  const ruler = document.getElementById('reading-ruler');
  if (!ruler) return;

  const fontSize = settings.fontSize;
  const lh = settings.lineHeight;
  const rulerHeight = fontSize * lh * 2.8; // Band width equivalent to ~3 lines

  manualRulerTop = yCenter - rulerHeight / 2;
  const readingArea = document.getElementById('reading-area');
  const maxTop = readingArea.scrollHeight - rulerHeight;

  if (manualRulerTop < 0) manualRulerTop = 0;
  if (manualRulerTop > maxTop) manualRulerTop = maxTop;

  ruler.style.top = `${manualRulerTop}px`;
  ruler.style.height = `${rulerHeight}px`;
  ruler.style.display = 'block';

  updateOverlayDims(manualRulerTop, rulerHeight);
}

function updateRulerAutoPosition(activeSpan) {
  const ruler = document.getElementById('reading-ruler');
  if (!ruler) return;

  const top = activeSpan.offsetTop;
  const height = activeSpan.offsetHeight;
  const rulerHeight = height * 2.8;
  const rulerTop = top - (rulerHeight - height) / 2;

  ruler.style.top = `${rulerTop}px`;
  ruler.style.height = `${rulerHeight}px`;
  ruler.style.display = 'block';

  updateOverlayDims(rulerTop, rulerHeight);
}

function updateOverlayDims(rulerTop, rulerHeight) {
  const dimTop = document.getElementById('ruler-dim-top');
  const dimBottom = document.getElementById('ruler-dim-bottom');

  if (focusDimEnabled && rulerEnabled) {
    dimTop.style.top = '0px';
    dimTop.style.height = `${rulerTop}px`;
    dimTop.style.display = 'block';

    dimBottom.style.top = `${rulerTop + rulerHeight}px`;
    dimBottom.style.bottom = '0px';
    dimBottom.style.height = 'auto';
    dimBottom.style.display = 'block';
  } else {
    dimTop.style.display = 'none';
    dimBottom.style.display = 'none';
  }
}

// CHUNK MODE TRAVERSAL
function showParagraph(idx) {
  const paras = document.querySelectorAll('.reader-para');
  if (paras.length === 0) return;

  if (idx < 0) idx = 0;
  if (idx >= paras.length) idx = paras.length - 1;

  currentParaIndex = idx;

  paras.forEach((p, index) => {
    if (index === idx) {
      p.classList.add('active-chunk');
      p.style.display = 'block';
      setTimeout(() => { p.style.opacity = '1'; }, 50);
    } else {
      p.classList.remove('active-chunk');
      p.style.display = 'none';
      p.style.opacity = '0';
    }
  });

  document.getElementById('chunk-progress').textContent = `Paragraph ${idx + 1} of ${paras.length}`;
  document.getElementById('chunk-prev-btn').disabled = (idx === 0);
  document.getElementById('chunk-next-btn').disabled = (idx === paras.length - 1);
}

function nextParagraph() {
  const paras = document.querySelectorAll('.reader-para');
  if (currentParaIndex < paras.length - 1) {
    showParagraph(currentParaIndex + 1);
    if (isPlaying) {
      const firstWord = currentWordsMetadata.find(w => w.paraIndex === currentParaIndex);
      if (firstWord) {
        highlightWord(firstWord.wordIdx);
        playTTS();
      }
    }
  }
}

function prevParagraph() {
  if (currentParaIndex > 0) {
    showParagraph(currentParaIndex - 1);
    if (isPlaying) {
      const firstWord = currentWordsMetadata.find(w => w.paraIndex === currentParaIndex);
      if (firstWord) {
        highlightWord(firstWord.wordIdx);
        playTTS();
      }
    }
  }
}

// GRAMMAR CLASS RESOLVER
function getWordGrammarClass(word) {
  const clean = word.toLowerCase().trim().replace(/[^a-z]/g, '');
  const nounsList = [
    "dyslexia", "student", "teacher", "school", "book", "word", "letter", "brain",
    "reading", "companion", "text", "file", "page", "background", "settings",
    "overlay", "ruler", "rhythm", "sound", "voice", "dictionary", "syllable",
    "pronunciation", "progress", "session", "paragraph", "mode", "screen",
    "timer", "practice", "accuracy", "fluency", "comprehension", "difference",
    "support", "time", "speed", "rate", "pitch", "volume", "preservation",
    "conjunction", "overlay", "presets", "color", "theme", "fatigue", "ruler"
  ];

  const verbsList = [
    "utilize", "demonstrate", "facilitate", "commence", "terminate", "endeavour",
    "obtain", "comprehend", "alleviate", "collaborate", "implement", "negotiate",
    "participate", "scrutinize", "read", "write", "speak", "hear", "listen",
    "play", "pause", "skip", "stop", "save", "print", "copy", "download",
    "load", "open", "close", "toggle", "adjust", "change", "format", "customize",
    "scroll", "focus", "dim", "highlight", "visualize", "understand", "learn",
    "study", "practice", "show", "try", "make", "find", "get", "use", "breathe",
    "rest"
  ];

  const adjectivesList = [
    "sufficient", "vulnerable", "complex", "simple", "accurate", "fluent",
    "comfortable", "calm", "uncluttered", "warm", "cream", "soft", "steel",
    "blue", "muted", "green", "terracotta", "amber", "narrow", "medium",
    "wide", "friendly", "large", "small", "optimal", "uneven", "scotopic",
    "active", "spoken", "slow", "natural", "female", "male", "custom",
    "automatic", "bionic", "bold", "original", "simplified", "phonetic",
    "electronic", "accessible", "beautiful", "premium", "clear", "distinct",
    "relaxing", "calmer"
  ];

  if (nounsList.includes(clean)) return 'noun';
  if (verbsList.includes(clean)) return 'verb';
  if (adjectivesList.includes(clean)) return 'adjective';

  // Heuristic fallback rules for word endings (only for words of length > 4)
  if (clean.length > 4) {
    // Noun suffixes: -tion, -sion, -ment, -ness, -ity, -ance, -ence, -ship, -hood
    if (clean.endsWith('tion') || clean.endsWith('sion') || clean.endsWith('ment') ||
      clean.endsWith('ness') || clean.endsWith('ity') || clean.endsWith('ance') ||
      clean.endsWith('ence') || clean.endsWith('ship') || clean.endsWith('hood')) {
      return 'noun';
    }

    // Verb suffixes: -ize, -ise, -ate, -ify, -ing (if not common noun), -ed
    if (clean.endsWith('ize') || clean.endsWith('ise') || clean.endsWith('ate') ||
      clean.endsWith('ify') || clean.endsWith('ing') || clean.endsWith('ed')) {
      return 'verb';
    }

    // Adjective suffixes: -ful, -less, -ous, -able, -ible, -ive, -ish, -al, -ic
    if (clean.endsWith('ful') || clean.endsWith('less') || clean.endsWith('ous') ||
      clean.endsWith('able') || clean.endsWith('ible') || clean.endsWith('ive') ||
      clean.endsWith('ish') || clean.endsWith('al') || clean.endsWith('ic')) {
      return 'adjective';
    }
  }
  return '';
}

// VISUAL DICTIONARY EMOJIS
const emojiDict = {
  "dyslexia": "🧠", "student": "🧑‍🎓", "teacher": "🧑‍🏫", "school": "🏫",
  "book": "📖", "word": "🔤", "letter": "✉️", "brain": "🧠",
  "read": "📖", "write": "✍️", "speak": "🗣️", "hear": "👂",
  "listen": "👂", "play": "▶️", "pause": "⏸️", "timer": "⏱️",
  "progress": "📈", "save": "💾", "print": "🖨️", "copy": "📋",
  "download": "📥", "voice": "🗣️", "speed": "⚡", "rate": "⚡",
  "pitch": "🎵", "volume": "🔊", "text": "📄", "file": "📁",
  "page": "📄", "settings": "⚙️", "ruler": "📏", "clock": "⏰",
  "star": "⭐", "focus": "🔍", "clear": "🧹", "warning": "⚠️",
  "success": "✅", "try": "🎯", "learn": "💡", "understand": "💡",
  "easy": "🎈", "difficult": "🧗", "time": "⏳", "support": "🤝",
  "breathe": "🧘", "rest": "😴", "break": "☕", "paragraph": "📝"
};

// SOUND OUT WORD SYLLABLE BY SYLLABLE WITH PHYSICAL PAUSES
function soundOutWord(word) {
  if (!synth || (synth.getVoices && synth.getVoices().length === 0)) {
    alert("Your browser doesn't support text-to-speech. Try Chrome or Edge.");
    return;
  }
  synth.cancel();
  const syllables = getSyllables(word);

  let idx = 0;
  function speakNext() {
    if (idx >= syllables.length) return;

    utterance = new SpeechSynthesisUtterance(syllables[idx]);
    utterance.rate = 0.55; // slower rate for clarity

    const name = document.getElementById('voice-select').value;
    const list = synth.getVoices();
    const v = list.find(voice => voice.name === name);
    if (v) utterance.voice = v;

    utterance.onend = () => {
      idx++;
      setTimeout(speakNext, 500); // 500ms silent interval between syllables
    };
    synth.speak(utterance);
  }
  speakNext();
}

// EXTRACTIVE PARAGRAPH SUMMARIZER
function getParagraphSummary(paraText) {
  // Split sentences
  const sentences = paraText.match(/[^.!?]+[.!?]+(\s|$)/g) || [paraText];
  const cleaned = sentences.map(s => s.trim()).filter(s => s.length > 5);

  if (cleaned.length === 0) return ["No main points detected in this section."];

  let summaryPoints = [];
  if (cleaned.length <= 3) {
    summaryPoints = cleaned.map(s => simplifySentenceText(s));
  } else {
    // First sentence
    summaryPoints.push(simplifySentenceText(cleaned[0]));

    // Find longest sentence in middle
    let longest = "";
    let maxLen = 0;
    for (let i = 1; i < cleaned.length - 1; i++) {
      if (cleaned[i].length > maxLen) {
        maxLen = cleaned[i].length;
        longest = cleaned[i];
      }
    }
    if (longest) {
      summaryPoints.push(simplifySentenceText(longest));
    } else {
      summaryPoints.push(simplifySentenceText(cleaned[Math.floor(cleaned.length / 2)]));
    }

    // Last sentence
    summaryPoints.push(simplifySentenceText(cleaned[cleaned.length - 1]));
  }

  return summaryPoints.slice(0, 3);
}

function simplifySentenceText(sentence) {
  // Run the general simplifier but clean syntax wrappers
  const simp = simplifyText(sentence);
  return simp.replace(/\[simp:(.+?)\|original:(.+?)\]/g, '$1');
}

function toggleParagraphSummary(paraIdx, event) {
  if (event) event.stopPropagation();
  const box = document.getElementById(`summary-box-${paraIdx}`);
  if (!box) return;

  if (box.style.display === 'block') {
    box.style.display = 'none';
    return;
  }

  // Extract text content of the target paragraph
  const paras = document.querySelectorAll('.reader-para');
  const paraElement = paras[paraIdx];
  let rawText = "";

  paraElement.querySelectorAll('.r-word').forEach(span => {
    const word = span.getAttribute('data-original') || span.textContent.trim().replace(/[^a-zA-Z0-9'-]/g, '');
    rawText += word + " ";
  });

  if (!rawText.trim()) {
    rawText = paraElement.innerText.replace(/Summarize/g, '').trim();
  }

  const points = getParagraphSummary(rawText);
  box.innerHTML = `
        <div class="summary-box-title">💡 Paragraph Core Summary</div>
        <ul style="margin-left: 1rem; padding-left: 0.5rem;">
          ${points.map(pt => `<li>${pt}</li>`).join('')}
        </ul>
      `;
  box.style.display = 'block';
}

// BREATHING TIMEOUT HANDLERS
let breakTimer = null;
let breakSecondsLeft = 30;
let breathToggle = true;
let breathInterval = null;

function triggerBreakReminder() {
  // Pause TTS
  pauseTTS();

  const modal = document.getElementById('break-modal');
  modal.classList.add('visible');

  breakSecondsLeft = 30;
  document.getElementById('break-timer-count').textContent = `Remaining: ${breakSecondsLeft}s`;

  if (breakTimer) clearInterval(breakTimer);
  breakTimer = setInterval(() => {
    breakSecondsLeft--;
    document.getElementById('break-timer-count').textContent = `Remaining: ${breakSecondsLeft}s`;
    if (breakSecondsLeft <= 0) {
      closeBreakModal();
    }
  }, 1000);

  // Update breathing text
  const instr = document.querySelector('.breathing-instruction');
  instr.textContent = "Breathe in...";

  if (breathInterval) clearInterval(breathInterval);
  breathInterval = setInterval(() => {
    breathToggle = !breathToggle;
    instr.textContent = breathToggle ? "Breathe in..." : "Breathe out...";
  }, 3000);
}

function closeBreakModal() {
  if (breakTimer) clearInterval(breakTimer);
  if (breathInterval) clearInterval(breathInterval);
  document.getElementById('break-modal').classList.remove('visible');
  showToast("Break finished! You can continue reading.");
}

// SYLLABIFICATION HEURISTIC ALGORITHM
function getSyllables(word) {
  const clean = word.toLowerCase().trim().replace(/[^a-z]/g, '');
  if (clean.length <= 3) return [word];

  const vowels = 'aeiouy';
  const isVowel = c => vowels.includes(c);

  // Locate syllable nucleuses
  const vowelIndices = [];
  for (let i = 0; i < clean.length; i++) {
    if (isVowel(clean[i])) {
      if (i > 0 && isVowel(clean[i - 1])) {
        // Ignore vowel dipthongs/teams (e.g. 'ea', 'oi')
      } else {
        vowelIndices.push(i);
      }
    }
  }

  if (vowelIndices.length <= 1) return [word];

  const syllables = [];
  let lastCut = 0;

  for (let s = 0; s < vowelIndices.length - 1; s++) {
    const v1 = vowelIndices[s];
    const v2 = vowelIndices[s + 1];

    const consonants = clean.slice(v1 + 1, v2);
    let cutPoint = v1 + 1; // Default divider

    if (consonants.length === 1) {
      // VCV -> V-CV
      cutPoint = v1 + 1;
    } else if (consonants.length === 2) {
      // VCCV -> VC-CV
      const digraphs = ['ch', 'sh', 'th', 'ph', 'wh', 'ng', 'st', 'cl', 'pr', 'gr', 'br'];
      if (digraphs.includes(consonants[0] + consonants[1])) {
        cutPoint = v1 + 1; // Treat clusters as single sounds
      } else {
        cutPoint = v1 + 2;
      }
    } else if (consonants.length > 2) {
      cutPoint = v1 + 2;
    }

    if (cutPoint > lastCut && cutPoint < clean.length) {
      syllables.push(word.slice(lastCut, cutPoint));
      lastCut = cutPoint;
    }
  }

  syllables.push(word.slice(lastCut));
  return syllables;
}

// FETCH VISUAL DICTIONARY IMAGE (Wikipedia API with caching)
async function fetchVisualDictionaryImage(word) {
  const clean = word.toLowerCase().trim().replace(/[^a-z-]/g, '');
  if (!clean) return null;

  const cacheKey = `lexiVoiceImg_${clean}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) return cached;

  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=thumbnail&pithumbsize=200&pilimit=1&titles=${encodeURIComponent(clean)}&origin=*`;
    const response = await fetch(url);
    const data = await response.json();
    const pages = data.query?.pages;
    if (pages) {
      const pageId = Object.keys(pages)[0];
      if (pageId && pageId !== "-1" && pages[pageId].thumbnail?.source) {
        const imageUrl = pages[pageId].thumbnail.source;
        localStorage.setItem(cacheKey, imageUrl);
        return imageUrl;
      }
    }
  } catch (error) {
    console.error("Error fetching visual image:", error);
  }

  // Fallback search query on Wikipedia
  try {
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(clean)}&format=json&origin=*`;
    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();
    const firstResult = searchData.query?.search?.[0]?.title;
    if (firstResult) {
      const url2 = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&piprop=thumbnail&pithumbsize=200&pilimit=1&titles=${encodeURIComponent(firstResult)}&origin=*`;
      const res2 = await fetch(url2);
      const data2 = await res2.json();
      const pages2 = data2.query?.pages;
      if (pages2) {
        const pageId2 = Object.keys(pages2)[0];
        if (pageId2 && pageId2 !== "-1" && pages2[pageId2].thumbnail?.source) {
          const imageUrl = pages2[pageId2].thumbnail.source;
          localStorage.setItem(cacheKey, imageUrl);
          return imageUrl;
        }
      }
    }
  } catch (e) {
    console.error("Error fetching fallback search image:", e);
  }

  return null;
}

// FETCH WORD DEFINITION (Free Dictionary API with local cache & synonym fallback)
async function fetchWordDefinition(word) {
  const clean = word.toLowerCase().trim().replace(/[^a-z-]/g, '');
  if (!clean) return "No definition available.";

  if (synonymDict[clean]) {
    return `Simplified synonym: "${synonymDict[clean]}".`;
  }

  const cacheKey = `lexiVoiceDef_${clean}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${clean}`);
    if (response.ok) {
      const data = await response.json();
      const definition = data[0]?.meanings[0]?.definitions[0]?.definition;
      if (definition) {
        localStorage.setItem(cacheKey, definition);
        return definition;
      }
    }
  } catch (e) {
    console.warn("Could not fetch online definition:", e);
  }

  return "A challenging word to define. Review its sound and letter components!";
}

// WORD DEFINITION POPUP
function setupWordPopupDismissal() {
  const area = document.getElementById('reading-area');
  const popup = document.getElementById('word-popup');

  function repositionPopup(span) {
    const rect = span.getBoundingClientRect();
    const popRect = popup.getBoundingClientRect();

    let top = window.scrollY + rect.top - popRect.height - 10;
    let left = window.scrollX + rect.left + (rect.width - popRect.width) / 2;

    if (left < 10) left = 10;
    if (left + popRect.width > window.innerWidth - 10) {
      left = window.innerWidth - popRect.width - 10;
    }
    
    // Flip below if off top
    if (top < window.scrollY + 10) {
      top = window.scrollY + rect.bottom + 10;
    }

    popup.style.top = `${top}px`;
    popup.style.left = `${left}px`;
  }

  area.addEventListener('click', (e) => {
    const span = e.target.closest('.r-word');
    if (!span) {
      if (popup && !popup.contains(e.target)) {
        popup.style.display = 'none';
        popup.setAttribute('aria-hidden', 'true');
      }
      return;
    }

    // Update reading progress to this word
    const wordIdx = parseInt(span.getAttribute('data-word-idx'));
    if (!isNaN(wordIdx)) {
      highlightWord(wordIdx);
    }

    // Extract raw alphanumeric values
    const wordText = span.textContent.trim().replace(/[^a-zA-Z0-9'-]/g, '');
    const syllables = getSyllables(wordText).join('-');
    const lower = wordText.toLowerCase();
    const phonetic = pronunciationDict[lower] || `/${syllables.toLowerCase()}/`;
    const emoji = emojiDict[lower] || "📖";

    const originalWord = span.getAttribute('data-original');
    let originalHtml = "";
    if (originalWord) {
      originalHtml = `<div class="popup-original">Original: <span>${originalWord}</span></div>`;
    }

    const imageContainerId = `popup-img-${lower}`;
    const definitionContainerId = `popup-def-${lower}`;

    popup.innerHTML = `
          <div class="popup-visual-container" id="${imageContainerId}">
            <div class="visual-skeleton-loader">
              <div class="visual-skeleton-spinner"></div>
              <span>Searching visual dictionary...</span>
            </div>
          </div>
          <div class="popup-word">${wordText}</div>
          ${originalHtml}
          <div class="popup-syllable">Syllables: <span>${syllables}</span></div>
          <div class="popup-phonetic">Pronounce: <span>${phonetic}</span></div>
          <div id="${definitionContainerId}" class="popup-original" style="border-bottom:none; margin-bottom:0.8rem; font-size:0.82rem; font-style:italic; line-height:1.3; max-height: 55px; overflow-y: auto;">
            Looking up meaning...
          </div>
          <div class="popup-btns-row">
            <button class="popup-hear-btn" onclick="speakSingleWord('${wordText.replace(/'/g, "\\'")}')" aria-label="Listen to word ${wordText} spoken slowly">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              Hear It
            </button>
            <button class="popup-sound-btn" onclick="soundOutWord('${wordText.replace(/'/g, "\\'")}')" aria-label="Sound out word ${wordText} syllable by syllable">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>
              Sound Out
            </button>
            <button class="popup-sound-btn" onclick="openLearningStudioForWord('${wordText.replace(/'/g, "\\'")}')" aria-label="Practice word ${wordText} in learning studio">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v14.5A2.5 2.5 0 0 1 17.5 21H6.5A2.5 2.5 0 0 1 4 18.5z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>
              Practice
            </button>
            <button class="popup-sound-btn" onclick="toggleWordBankWord('${wordText.replace(/'/g, "\\'")}')" aria-label="${isWordInBank(wordText) ? 'Remove word from bank' : 'Save word to bank'}">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
              ${isWordInBank(wordText) ? 'Saved' : 'Save'}
            </button>
          </div>
        `;

    popup.style.display = 'block';
    popup.setAttribute('aria-hidden', 'false');
    repositionPopup(span);

    // Asynchronously fetch image
    fetchVisualDictionaryImage(wordText).then(url => {
      const imgContainer = document.getElementById(imageContainerId);
      if (imgContainer) {
        if (url) {
          imgContainer.innerHTML = `<img src="${url}" alt="${wordText}" class="popup-visual-image">`;
        } else {
          imgContainer.innerHTML = `<div class="popup-visual-fallback">${emoji}</div>`;
        }
      }
    });

    // Asynchronously fetch definition
    fetchWordDefinition(wordText).then(def => {
      const defContainer = document.getElementById(definitionContainerId);
      if (defContainer) {
        defContainer.textContent = def;
        // Re-align since text height might have changed
        repositionPopup(span);
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (popup && !popup.contains(e.target) && !e.target.closest('.r-word')) {
      popup.style.display = 'none';
      popup.setAttribute('aria-hidden', 'true');
    }
  });
}

function speakSingleWord(word) {
  if (!synth || (synth.getVoices && synth.getVoices().length === 0)) {
    alert("Your browser doesn't support text-to-speech. Try Chrome or Edge.");
    return;
  }
  synth.cancel();

  utterance = new SpeechSynthesisUtterance(word);
  utterance.rate = 0.55; // Slower rate to decode sounds clearly

  const name = document.getElementById('voice-select').value;
  const list = synth.getVoices();
  const v = list.find(voice => voice.name === name);
  if (v) utterance.voice = v;

  synth.speak(utterance);
}

// EXPORTS & COPY
async function copyProcessedText() {
  const area = document.getElementById('reading-area');
  if (!area) return;

  try {
    const htmlBlob = new Blob([area.innerHTML], { type: 'text/html' });
    const textBlob = new Blob([area.innerText], { type: 'text/plain' });
    const data = [new ClipboardItem({
      'text/html': htmlBlob,
      'text/plain': textBlob
    })];
    await navigator.clipboard.write(data);
    showToast("Processed bionic text copied to clipboard!");
  } catch (err) {
    await navigator.clipboard.writeText(area.innerText);
    showToast("Plain text copied to clipboard.");
  }
}

function downloadTxtFile() {
  const area = document.getElementById('reading-area');
  if (!area) return;

  const blob = new Blob([area.innerText], { type: 'text/plain;charset=utf-8' });
  const anchor = document.createElement('a');
  anchor.href = URL.createObjectURL(blob);
  anchor.download = "lexivoice-material.txt";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  showToast("Document saved as TXT file.");
}

// TOAST NOTIFIER SYSTEM
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  toast.textContent = message;
  toast.classList.add('visible');

  setTimeout(() => {
    toast.classList.remove('visible');
  }, 3000);
}

// SHORTCUT MODAL CONTROL
function toggleShortcutModal(show) {
  const modal = document.getElementById('shortcut-modal');
  if (show) {
    modal.classList.add('visible');
  } else {
    modal.classList.remove('visible');
  }
}

// ONBOARDING TOUR SETUP (First visit only)
let currentTourStep = 0;
const tourSteps = [
  { target: '#input-panel-card', text: "Welcome to LexiVoice! Start by uploading a PDF, pasting text, or loading our sample reading paragraph.", position: 'bottom' },
  { target: '#play-btn', text: "Press Play to start text-to-speech reading. Words will highlight karaoke-style in real time as they are read.", position: 'top' },
  { target: '#settings-toggle-btn', text: "Open Settings ⚙ to customize typography scale, overlay background colors, reading rulers, and layouts.", position: 'bottom' }
];

function checkFirstVisitTour() {
  const complete = localStorage.getItem('lexiVoiceTourComplete');
  if (!complete) {
    setTimeout(() => {
      startTour();
    }, 1000);
  }
}

function startTour() {
  currentTourStep = 0;
  showTourTooltip(0);
}

function showTourTooltip(step) {
  const old = document.querySelector('.tour-tooltip');
  if (old) old.remove();

  if (step >= tourSteps.length) {
    localStorage.setItem('lexiVoiceTourComplete', 'true');
    showToast("Onboarding tour complete. Enjoy LexiVoice!");
    return;
  }

  const stepData = tourSteps[step];
  const target = document.querySelector(stepData.target);
  if (!target) return;

  currentTourStep = step;
  const rect = target.getBoundingClientRect();

  const tooltip = document.createElement('div');
  tooltip.className = 'tour-tooltip glassmorphism';
  tooltip.innerHTML = `
        <div class="tour-text">${stepData.text}</div>
        <div class="tour-footer">
          <label class="tour-dont-show">
            <input type="checkbox" id="tour-dont-show-checkbox"> Don't show again
          </label>
          <div class="tour-btns">
            ${step > 0 ? `<button class="tour-btn btn-secondary" onclick="navigateTour(-1)">Back</button>` : ''}
            <button class="tour-btn btn-primary" onclick="navigateTour(1)">${step === tourSteps.length - 1 ? 'Finish' : 'Next'}</button>
          </div>
        </div>
      `;

  document.body.appendChild(tooltip);

  // Calculate float bounds
  const popRect = tooltip.getBoundingClientRect();
  let top = 0;
  let left = 0;

  if (stepData.position === 'bottom') {
    top = window.scrollY + rect.bottom + 12;
    left = window.scrollX + rect.left + (rect.width - popRect.width) / 2;
  } else {
    top = window.scrollY + rect.top - popRect.height - 12;
    left = window.scrollX + rect.left + (rect.width - popRect.width) / 2;
  }

  if (left < 10) left = 10;
  if (left + popRect.width > window.innerWidth - 10) {
    left = window.innerWidth - popRect.width - 10;
  }

  tooltip.style.top = `${top}px`;
  tooltip.style.left = `${left}px`;

  // Force repaint & fade-in transition
  setTimeout(() => {
    tooltip.classList.add('visible');
  }, 50);

  const check = document.getElementById('tour-dont-show-checkbox');
  const isComplete = localStorage.getItem('lexiVoiceTourComplete') === 'true';
  check.checked = isComplete;

  check.addEventListener('change', (e) => {
    if (e.target.checked) {
      localStorage.setItem('lexiVoiceTourComplete', 'true');
    } else {
      localStorage.removeItem('lexiVoiceTourComplete');
    }
  });
}

function navigateTour(dir) {
  showTourTooltip(currentTourStep + dir);
}

// KEYBOARD INPUT SHORTCUTS
document.addEventListener('keydown', (e) => {
  // Bypass if typing in inputs/textareas
  if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') {
    if (e.key === 'Escape') {
      e.target.blur();
    }
    return;
  }

  switch (e.key) {
    case ' ':
      e.preventDefault();
      togglePlayback();
      break;
    case 'r':
    case 'R':
      e.preventDefault();
      updateSetting('rulerEnabled', !settings.rulerEnabled);
      showToast(`Reading Ruler: ${settings.rulerEnabled ? 'ON' : 'OFF'}`);
      break;
    case 'f':
    case 'F':
      e.preventDefault();
      updateSetting('focusDimEnabled', !settings.focusDimEnabled);
      showToast(`Line Focus Dimming: ${settings.focusDimEnabled ? 'ON' : 'OFF'}`);
      break;
    case 'b':
    case 'B':
      e.preventDefault();
      updateSetting('bionicEnabled', !settings.bionicEnabled);
      showToast(`Bionic Bold Anchors: ${settings.bionicEnabled ? 'ON' : 'OFF'}`);
      break;
    case 'y':
    case 'Y':
      e.preventDefault();
      updateSetting('syllableHighlightEnabled', !settings.syllableHighlightEnabled);
      showToast(`Alternating Syllables: ${settings.syllableHighlightEnabled ? 'ON' : 'OFF'}`);
      break;
    case 'v':
    case 'V':
      e.preventDefault();
      updateSetting('reversalHelperEnabled', !settings.reversalHelperEnabled);
      showToast(`Letter Reversal Helper: ${settings.reversalHelperEnabled ? 'ON' : 'OFF'}`);
      break;
    case 'c':
    case 'C':
      e.preventDefault();
      updateSetting('chunkModeEnabled', !settings.chunkModeEnabled);
      showToast(`Chunk paragraph mode: ${settings.chunkModeEnabled ? 'ON' : 'OFF'}`);
      break;
    case 's':
    case 'S':
      e.preventDefault();
      toggleSettingsPanel();
      break;
    case 'ArrowLeft':
      if (chunkModeEnabled) {
        e.preventDefault();
        prevParagraph();
      }
      break;
    case 'ArrowRight':
      if (chunkModeEnabled) {
        e.preventDefault();
        nextParagraph();
      }
      break;
    case 'ArrowUp':
      if (rulerEnabled && rulerLocked && !isPlaying) {
        e.preventDefault();
        const step = settings.fontSize * settings.lineHeight;
        updateRulerPosition(manualRulerTop + (settings.fontSize * settings.lineHeight * 2.8) / 2 - step);
      }
      break;
    case 'ArrowDown':
      if (rulerEnabled && rulerLocked && !isPlaying) {
        e.preventDefault();
        const step = settings.fontSize * settings.lineHeight;
        updateRulerPosition(manualRulerTop + (settings.fontSize * settings.lineHeight * 2.8) / 2 + step);
      }
      break;
    case '+':
    case '=':
      e.preventDefault();
      updateSetting('fontSize', Math.min(32, settings.fontSize + 2));
      break;
    case '-':
    case '_':
      e.preventDefault();
      updateSetting('fontSize', Math.max(16, settings.fontSize - 2));
      break;
    case '?':
      e.preventDefault();
      toggleShortcutModal(true);
      break;
    case 'Escape':
      e.preventDefault();
      toggleSettingsPanel(false);
      toggleShortcutModal(false);

      const popup = document.getElementById('word-popup');
      if (popup) popup.style.display = 'none';

      const tour = document.querySelector('.tour-tooltip');
      if (tour) tour.remove();

      const warning = document.getElementById('large-file-modal');
      if (warning) warning.classList.remove('visible');

      const endStats = document.getElementById('encouragement-modal');
      if (endStats) endStats.classList.remove('visible');
      break;
  }
});

// --- DYNAMIC PHONICS GAMES & PRINTABLE FLASHCARDS ---

const phonemeMap = {
  'a': 'ah', 'b': 'buh', 'c': 'kuh', 'd': 'duh', 'e': 'eh', 'f': 'fff', 'g': 'guh',
  'h': 'huh', 'i': 'ih', 'j': 'juh', 'k': 'kuh', 'l': 'uhl', 'm': 'mmm', 'n': 'nnn',
  'o': 'ah', 'p': 'puh', 'q': 'kwuh', 'r': 'rrr', 's': 'sss', 't': 'tuh', 'u': 'uh',
  'v': 'vvv', 'w': 'wuh', 'x': 'ks', 'y': 'yuh', 'z': 'zzz'
};

function speakPhoneme(char) {
  const cleanChar = char.toLowerCase().trim();
  if (!cleanChar) return;
  const sound = phonemeMap[cleanChar] || cleanChar;
  speakSingleWord(sound);
}

let currentGameType = null; // 'jigsaw' or 'builder'
let currentGameWord = '';
let gameSlotsState = [];
let gameChipsState = [];
let gameSuccess = false;
let gameFeedbackMessage = '';
let gameFeedbackIsSuccess = false;

function initGamesSandbox() {
  const container = document.getElementById('games-sandbox-container');
  if (!container) return;

  const words = getSavedWordBank();
  if (!words.length) {
    container.innerHTML = `
      <div class="flashcard-empty-state">
        <div class="flashcard-empty-title">Word Bank is Empty</div>
        <div class="flashcard-empty-desc">
          Double-click or tap any word in the reading section and click <strong>"Save"</strong> to add it to your Word Bank, then come back to practice games here!
        </div>
      </div>
    `;
    return;
  }

  // Render games menu
  container.innerHTML = `
    <div class="games-menu">
      <div class="game-menu-card" onclick="startGame('jigsaw')">
        <div class="game-icon">🧩</div>
        <div class="game-title">Syllable Jigsaw</div>
        <div class="game-desc">Drag and drop scrambled syllable pieces in the correct order to reconstruct a word.</div>
      </div>
      <div class="game-menu-card" onclick="startGame('builder')">
        <div class="game-icon">🔤</div>
        <div class="game-title">Word Builder</div>
        <div class="game-desc">Drag letters onto sound blanks, hearing each phoneme speak aloud as letters slot in.</div>
      </div>
    </div>
  `;
}

function startGame(gameType) {
  currentGameType = gameType;
  const wordBank = getSavedWordBank();
  if (!wordBank.length) {
    initGamesSandbox();
    return;
  }
  
  // Set current word to practice
  if (!currentGameWord || !wordBank.some(w => w.toLowerCase() === currentGameWord.toLowerCase())) {
    currentGameWord = wordBank[0];
  }

  // Handle case where jigsaw is chosen for 1-syllable word
  if (gameType === 'jigsaw') {
    const syllables = getSyllables(currentGameWord);
    if (syllables.length <= 1) {
      // Find a word in the word bank with > 1 syllables if possible
      const multiSyllableWord = wordBank.find(w => getSyllables(w).length > 1);
      if (multiSyllableWord) {
        currentGameWord = multiSyllableWord;
      } else {
        // No multi-syllable words available!
        showToast("Syllable Jigsaw requires words with multiple syllables. Try Word Builder!");
        currentGameType = 'builder';
      }
    }
  }

  resetGameState();
  renderGameSandbox();
}

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function scrambleSyllables(word) {
  const syllables = getSyllables(word);
  if (syllables.length <= 1) return syllables;
  let scrambled = shuffleArray(syllables);
  let attempts = 0;
  while (scrambled.join('') === syllables.join('') && attempts < 10) {
    scrambled = shuffleArray(syllables);
    attempts++;
  }
  return scrambled;
}

function scrambleLetters(word) {
  const letters = word.split('');
  if (letters.length <= 1) return letters;
  let scrambled = shuffleArray(letters);
  let attempts = 0;
  while (scrambled.join('') === letters.join('') && attempts < 10) {
    scrambled = shuffleArray(letters);
    attempts++;
  }
  return scrambled;
}

function resetGameState() {
  gameSuccess = false;
  gameFeedbackMessage = '';
  gameFeedbackIsSuccess = false;

  if (currentGameType === 'jigsaw') {
    const syllables = getSyllables(currentGameWord);
    gameSlotsState = Array(syllables.length).fill(null);
    
    // Scramble syllables
    let scrambled = scrambleSyllables(currentGameWord);
    gameChipsState = scrambled.map((text, idx) => ({
      id: `jigsaw-chip-${idx}`,
      text: text,
      placed: false
    }));
  } else {
    // Word Builder
    const letters = currentGameWord.split('');
    gameSlotsState = Array(letters.length).fill(null);
    
    // Scramble letters
    let scrambled = scrambleLetters(currentGameWord);
    gameChipsState = scrambled.map((text, idx) => ({
      id: `builder-chip-${idx}`,
      text: text,
      placed: false
    }));
  }
}

function renderGameSandbox() {
  const container = document.getElementById('games-sandbox-container');
  if (!container) return;

  const wordBank = getSavedWordBank();
  
  // Render structure
  container.innerHTML = `
    <div class="games-sandbox">
      <!-- Header row -->
      <div class="game-header-row">
        <button class="chunk-btn" style="padding: 0.35rem 0.75rem; font-size: 0.82rem; height: auto;" onclick="initGamesSandbox()">
          ← Back to Menu
        </button>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span>Practice Word:</span>
          <select class="settings-select" style="max-width: 150px; padding: 0.35rem; font-size: 0.85rem; height: auto; display: inline-block;" onchange="changeGameWord(this.value)">
            ${wordBank.map(w => {
              const isMultiSyl = getSyllables(w).length > 1;
              const label = currentGameType === 'jigsaw' && !isMultiSyl ? `${w} (1 syl ⚠️)` : w;
              return `<option value="${escapeHtml(w)}" ${w.toLowerCase() === currentGameWord.toLowerCase() ? 'selected' : ''}>${escapeHtml(label)}</option>`;
            }).join('')}
          </select>
        </div>
        <button class="chunk-btn" style="padding: 0.35rem 0.75rem; font-size: 0.82rem; height: auto;" onclick="restartCurrentGame()">
          🔄 Scramble
        </button>
      </div>

      <!-- Main game panel -->
      <div id="game-workspace" style="width: 100%; display: flex; flex-direction: column; align-items: center; gap: 1.2rem;">
        ${renderGameWorkspaceHtml()}
      </div>
    </div>
  `;
}

function renderGameWorkspaceHtml() {
  if (gameSuccess) {
    return `
      <div class="game-victory-wrap">
        <div style="font-size: 3rem; margin-bottom: 0.5rem; animation: bounce 0.8s ease infinite alternate;">🎉</div>
        <div class="game-title" style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--accent-success);">Outstanding Job!</div>
        <p class="game-desc" style="font-size: 0.95rem; margin-bottom: 1.2rem;">
          You successfully built the word <strong>"${escapeHtml(currentGameWord)}"</strong>!
        </p>
        <div class="game-btn-row" style="justify-content: center; gap: 1rem;">
          <button class="modal-close-btn" style="background: var(--accent-success);" onclick="speakCurrentGameWord()">Hear Word 🔊</button>
          ${currentGameType === 'jigsaw' ? `<button class="modal-close-btn" style="background: var(--accent-primary);" onclick="soundOutCurrentGameWord()">Sound It Out 💡</button>` : ''}
          <button class="modal-close-btn" onclick="playNextGameWord()">Next Word →</button>
        </div>
      </div>
    `;
  }

  // Draw Slots
  const slotsHtml = gameSlotsState.map((chip, idx) => {
    return `
      <div class="game-slot ${chip ? 'filled' : ''}" 
           data-slot-idx="${idx}" 
           ondragover="handleGameDragOver(event)" 
           ondrop="handleGameDrop(event, ${idx})" 
           onclick="handleGameSlotClick(${idx})">
        ${chip ? escapeHtml(chip.text) : ''}
      </div>
    `;
  }).join('');

  // Draw Scrambled Chips
  const chipsHtml = gameChipsState.map(chip => {
    return `
      <div class="game-chip ${chip.placed ? 'placed' : ''}" 
           id="${chip.id}" 
           draggable="${!chip.placed}" 
           ondragstart="handleGameDragStart(event, '${chip.id}')" 
           onclick="handleGameChipClick('${chip.id}')">
        ${escapeHtml(chip.text)}
      </div>
    `;
  }).join('');

  return `
    <div style="font-weight: 600; font-size: 0.95rem; color: var(--text-secondary); text-align: center;">
      ${currentGameType === 'jigsaw' 
        ? 'Arrange the syllables in the correct order:' 
        : 'Spell the word sound by sound:'}
    </div>

    <!-- Slots Row -->
    <div class="game-slots-row" id="game-slots-container">
      ${slotsHtml}
    </div>

    <!-- Scrambled Chips Row -->
    <div class="game-chips-row">
      ${chipsHtml}
    </div>

    <!-- Feedback message -->
    <div id="game-feedback-msg" class="game-feedback ${gameFeedbackIsSuccess ? 'success-msg' : ''}">
      ${escapeHtml(gameFeedbackMessage)}
    </div>

    <!-- Instruction Help -->
    <div style="font-size: 0.8rem; color: var(--text-muted); text-align: center; max-width: 320px; line-height: 1.4;">
      💡 Tip: Click/tap a letter to automatically place it in the first empty slot, or drag it. Click any filled slot to return the letter to the pool.
    </div>
  `;
}

function speakCurrentGameWord() {
  speakSingleWord(currentGameWord);
}

function soundOutCurrentGameWord() {
  soundOutWord(currentGameWord);
}

function playNextGameWord() {
  const wordBank = getSavedWordBank();
  if (!wordBank.length) return;
  const currentIdx = wordBank.indexOf(currentGameWord);
  let nextIdx = (currentIdx + 1) % wordBank.length;

  if (currentGameType === 'jigsaw') {
    let found = false;
    for (let i = 0; i < wordBank.length; i++) {
      const idx = (nextIdx + i) % wordBank.length;
      if (getSyllables(wordBank[idx]).length > 1) {
        nextIdx = idx;
        found = true;
        break;
      }
    }
    if (!found) {
      showToast("No other multi-syllable words found. Switching to Word Builder!");
      currentGameType = 'builder';
    }
  }

  currentGameWord = wordBank[nextIdx];
  resetGameState();
  renderGameSandbox();
}

function changeGameWord(newWord) {
  if (currentGameType === 'jigsaw' && getSyllables(newWord).length <= 1) {
    showToast("This word is a single syllable. Let's practice Word Builder instead!");
    currentGameType = 'builder';
  }
  currentGameWord = newWord;
  resetGameState();
  renderGameSandbox();
}

function restartCurrentGame() {
  resetGameState();
  renderGameSandbox();
}

function handleGameDragStart(event, chipId) {
  event.dataTransfer.setData('text/plain', chipId);
  const chip = gameChipsState.find(c => c.id === chipId);
  if (chip) {
    if (currentGameType === 'builder') {
      speakPhoneme(chip.text);
    } else {
      speakSingleWord(chip.text);
    }
  }
}

function handleGameDragOver(event) {
  event.preventDefault();
}

function handleGameDrop(event, slotIdx) {
  event.preventDefault();
  const chipId = event.dataTransfer.getData('text/plain');
  if (chipId) {
    placeChipInSlot(chipId, slotIdx);
  }
}

function handleGameSlotClick(slotIdx) {
  const chip = gameSlotsState[slotIdx];
  if (chip) {
    chip.placed = false;
    gameSlotsState[slotIdx] = null;
    gameFeedbackMessage = '';

    if (currentGameType === 'builder') {
      speakPhoneme(chip.text);
    } else {
      speakSingleWord(chip.text);
    }

    updateWorkspaceOnly();
  }
}

function handleGameChipClick(chipId) {
  const chip = gameChipsState.find(c => c.id === chipId);
  if (!chip || chip.placed) return;

  if (currentGameType === 'builder') {
    speakPhoneme(chip.text);
  } else {
    speakSingleWord(chip.text);
  }

  const firstEmptyIdx = gameSlotsState.indexOf(null);
  if (firstEmptyIdx >= 0) {
    placeChipInSlot(chipId, firstEmptyIdx);
  } else {
    gameFeedbackMessage = "All slots are filled! Click a slot to remove a tile.";
    updateWorkspaceOnly();
  }
}

function placeChipInSlot(chipId, slotIdx) {
  const chip = gameChipsState.find(c => c.id === chipId);
  if (!chip) return;

  const existingChip = gameSlotsState[slotIdx];
  if (existingChip) {
    existingChip.placed = false;
  }

  const oldSlotIdx = gameSlotsState.indexOf(chip);
  if (oldSlotIdx >= 0) {
    gameSlotsState[oldSlotIdx] = null;
  }

  gameSlotsState[slotIdx] = chip;
  chip.placed = true;
  gameFeedbackMessage = '';

  if (currentGameType === 'builder') {
    speakPhoneme(chip.text);
  } else {
    speakSingleWord(chip.text);
  }

  updateWorkspaceOnly();
  checkGameWinCondition();
}

function updateWorkspaceOnly() {
  const ws = document.getElementById('game-workspace');
  if (ws) {
    ws.innerHTML = renderGameWorkspaceHtml();
  }
}

function checkGameWinCondition() {
  if (gameSlotsState.includes(null)) {
    return;
  }

  const builtWord = gameSlotsState.map(s => s.text).join('').toLowerCase();
  const targetWord = currentGameWord.toLowerCase().replace(/[^a-z0-9']/g, '');
  const cleanBuilt = builtWord.replace(/[^a-z0-9']/g, '');

  if (cleanBuilt === targetWord) {
    gameSuccess = true;
    gameFeedbackMessage = "Victory!";
    gameFeedbackIsSuccess = true;
    
    setTimeout(() => {
      updateWorkspaceOnly();
      speakCurrentGameWord();
    }, 400);
  } else {
    gameFeedbackMessage = "Not quite right yet! Try swapping some pieces.";
    gameFeedbackIsSuccess = false;
    updateWorkspaceOnly();
    
    const slotsEl = document.getElementById('game-slots-container');
    if (slotsEl) {
      slotsEl.classList.add('shake-slots');
      setTimeout(() => {
        slotsEl.classList.remove('shake-slots');
      }, 500);
    }
  }
}

async function generatePrintableFlashcards() {
  const words = getSavedWordBank();
  if (!words.length) {
    showToast("Word Bank is empty. Save some words to print flashcards!");
    return;
  }

  showToast("Preparing printable flashcards layout... Please wait.");

  const imageMap = {};
  const defMap = {};

  try {
    await Promise.all(words.map(async (word) => {
      const lower = word.toLowerCase();
      const [imgUrl, definition] = await Promise.all([
        fetchVisualDictionaryImage(word),
        fetchWordDefinition(word)
      ]);
      imageMap[lower] = imgUrl;
      defMap[lower] = definition;
    }));
  } catch (e) {
    console.error("Error loading print assets:", e);
  }

  let deck = document.getElementById('printable-flashcards-deck');
  if (deck) deck.remove();

  deck = document.createElement('div');
  deck.id = 'printable-flashcards-deck';

  const pageSize = 8;
  const pagesCount = Math.ceil(words.length / pageSize);

  for (let p = 0; p < pagesCount; p++) {
    const pageWords = words.slice(p * pageSize, (p + 1) * pageSize);

    // 1. FRONT PAGE (Word only)
    const frontPage = document.createElement('div');
    frontPage.className = 'flashcard-print-page';
    
    let frontHtml = '';
    for (let i = 0; i < pageSize; i++) {
      if (i < pageWords.length) {
        frontHtml += `
          <div class="print-card print-card-front">
            ${escapeHtml(pageWords[i])}
          </div>
        `;
      } else {
        frontHtml += `
          <div class="print-card print-card-front" style="border: none !important;"></div>
        `;
      }
    }
    frontPage.innerHTML = frontHtml;
    deck.appendChild(frontPage);

    // 2. BACK PAGE (Details, mirrored columns)
    const backPage = document.createElement('div');
    backPage.className = 'flashcard-print-page';

    let backHtml = '';
    for (let j = 0; j < pageSize; j++) {
      const idx = (j % 2 === 0) ? j + 1 : j - 1;

      if (idx < pageWords.length) {
        const word = pageWords[idx];
        const lower = word.toLowerCase();
        const syllables = getSyllables(word).join(' • ');
        const phonetic = pronunciationDict[lower] || `/${syllables.toLowerCase()}/`;
        const emoji = emojiDict[lower] || "📖";
        const imgUrl = imageMap[lower];
        const definition = defMap[lower] || "A challenging word to define. Review its sound and letter components!";

        backHtml += `
          <div class="print-card print-card-back">
            <div class="print-card-back-flex">
              ${imgUrl 
                ? `<img src="${imgUrl}" class="print-card-img" alt="${escapeHtml(word)}">`
                : `<div class="print-card-back-emoji">${emoji}</div>`
              }
              <div>
                <h3 class="print-card-title">${escapeHtml(word)}</h3>
                <div class="print-card-syllables">${escapeHtml(syllables)}</div>
                <div class="print-card-phonetics">${escapeHtml(phonetic)}</div>
              </div>
            </div>
            <div class="print-card-definition">
              ${escapeHtml(definition)}
            </div>
          </div>
        `;
      } else {
        backHtml += `
          <div class="print-card print-card-back" style="border: none !important;"></div>
        `;
      }
    }
    backPage.innerHTML = backHtml;
    deck.appendChild(backPage);
  }

  document.body.appendChild(deck);

  setTimeout(() => {
    window.print();
  }, 300);

  window.addEventListener('afterprint', () => {
    if (deck && deck.parentNode) {
      deck.remove();
    }
  }, { once: true });
}

window.startGame = startGame;
window.changeGameWord = changeGameWord;
window.restartCurrentGame = restartCurrentGame;
window.initGamesSandbox = initGamesSandbox;
window.generatePrintableFlashcards = generatePrintableFlashcards;
window.speakCurrentGameWord = speakCurrentGameWord;
window.soundOutCurrentGameWord = soundOutCurrentGameWord;
window.playNextGameWord = playNextGameWord;
window.handleGameDragStart = handleGameDragStart;
window.handleGameDragOver = handleGameDragOver;
window.handleGameDrop = handleGameDrop;
window.handleGameSlotClick = handleGameSlotClick;
window.handleGameChipClick = handleGameChipClick;
window.speakPhoneme = speakPhoneme;