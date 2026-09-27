/**
 * Web Audio API synthesizer for sci-fi HUD sound effects
 * and SpeechSynthesis narrator for agent voice readouts.
 */

let actx: AudioContext | null = null;

export const initAudio = () => {
  if (!actx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      actx = new AudioContextClass();
    }
  }
  if (actx && actx.state === 'suspended') {
    actx.resume();
  }
  return actx;
};

// Subtle sci-fi click blip
export const playBlip = (freq = 880, dur = 0.05, vol = 0.04) => {
  try {
    const ctx = initAudio();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + dur);
  } catch {
    // Audio contexts might be blocked until user gesture
  }
};

// Startup quantum laser sweep
export const playQuantumSweep = () => {
  try {
    const ctx = initAudio();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.9);

    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.1);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 1.2);
  } catch {
    // Ignore if audio locked
  }
};

// Holographic hum when opening bitácora modal
export const playModalChirp = () => {
  try {
    const ctx = initAudio();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(540, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(840, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.22);
  } catch {
    // Ignore
  }
};

// Speech synthesis voices helper
let spanishVoices: SpeechSynthesisVoice[] = [];

export const getSpanishVoices = (): SpeechSynthesisVoice[] => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return [];
  if (spanishVoices.length === 0) {
    const voices = window.speechSynthesis.getVoices();
    spanishVoices = voices.filter(v => v.lang.toLowerCase().startsWith('es'));
    if (spanishVoices.length === 0) {
      spanishVoices = voices;
    }
  }
  return spanishVoices;
};

if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    getSpanishVoices();
  };
}

export interface NarratorControls {
  stop: () => void;
  pause: () => void;
  resume: () => void;
}

export const speakFrases = (
  frases: string[],
  onFrase: (frase: string, index: number, progress: number) => void,
  onFinish: () => void
): NarratorControls => {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    let i = 0;
    let timer: NodeJS.Timeout;
    const runFallback = () => {
      if (i >= frases.length) {
        onFinish();
        return;
      }
      onFrase(frases[i], i, (i + 1) / frases.length);
      i++;
      timer = setTimeout(runFallback, 2400);
    };
    runFallback();
    return {
      stop: () => clearTimeout(timer),
      pause: () => {},
      resume: () => {}
    };
  }

  window.speechSynthesis.cancel();
  let currentIndex = 0;
  let isStopped = false;

  const speakNext = () => {
    if (isStopped || currentIndex >= frases.length) {
      onFinish();
      return;
    }

    const text = frases[currentIndex];
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 1.05;
    utterance.pitch = 0.98;

    const voices = getSpanishVoices();
    const preferred = voices.find(v => /es[-_](ES|US|MX|CO|419)/i.test(v.lang)) || voices[0];
    if (preferred) {
      utterance.voice = preferred;
    }

    onFrase(text, currentIndex, (currentIndex + 1) / frases.length);

    utterance.onend = () => {
      currentIndex++;
      speakNext();
    };

    utterance.onerror = () => {
      currentIndex++;
      speakNext();
    };

    window.speechSynthesis.speak(utterance);
  };

  speakNext();

  return {
    stop: () => {
      isStopped = true;
      window.speechSynthesis.cancel();
    },
    pause: () => {
      window.speechSynthesis.pause();
    },
    resume: () => {
      window.speechSynthesis.resume();
    }
  };
};

export const speakText = (text: string, onEnd?: () => void): NarratorControls => {
  return speakFrases([text], () => {}, onEnd || (() => {}));
};

export const stopSpeaking = () => {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
};
