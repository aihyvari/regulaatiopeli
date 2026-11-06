// Web Audio API -pohjainen äänimoottori "Haluatko regulaatiomiljonääriksi?" -sovellukselle
// Ei vaadi ulkoisia äänitiedostoja, toimii suoraan selaimessa.

class MillionaireAudio {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.tensionTimer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.muted) {
      this.stopTension();
    }
    return this.muted;
  }

  playTone(freq, type, duration, startTimeOffset = 0, gainVal = 0.14) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime + startTimeOffset;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(gainVal, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.03);
  }

  // Pelin aloitusfanfaari
  playGameStart() {
    if (this.muted) return;
    // Dramaattinen c-molli -> G-duuri nousu
    const notes = [
      { f: 130.81, d: 0.4, t: 0.0, g: 0.16 }, // C3
      { f: 196.00, d: 0.4, t: 0.15, g: 0.14 }, // G3
      { f: 261.63, d: 0.5, t: 0.30, g: 0.15 }, // C4
      { f: 311.13, d: 0.6, t: 0.48, g: 0.15 }, // Eb4
      { f: 392.00, d: 1.1, t: 0.68, g: 0.18 }, // G4
      { f: 523.25, d: 1.3, t: 0.68, g: 0.12 }  // C5
    ];
    notes.forEach(n => this.playTone(n.f, "sawtooth", n.d, n.t, n.g));
  }

  // Uuden kysymyksen esilletulo
  playQuestionReveal(levelIndex = 0) {
    if (this.muted) return;
    const base = 220 + levelIndex * 12;
    this.playTone(base, "sine", 0.35, 0, 0.12);
    this.playTone(base * 1.5, "triangle", 0.5, 0.08, 0.10);
  }

  // Vastauksen valinta / "Lukitaanko vastaus?" -jännitysääni
  playLockIn() {
    if (this.muted) return;
    // Klassinen matala isku + korkea jännitysintervalli
    this.playTone(110.0, "sawtooth", 0.7, 0, 0.18);
    this.playTone(164.81, "triangle", 0.7, 0.02, 0.14);
    this.playTone(466.16, "sine", 0.55, 0.06, 0.10);
  }

  // Oikea vastaus!
  playCorrect(isMilestone = false) {
    if (this.muted) return;
    if (isMilestone) {
      // Kynnysrahan tai päävoiton suuri fanfaari
      const fanfare = [
        { f: 261.63, d: 0.25, t: 0.0 },
        { f: 329.63, d: 0.25, t: 0.14 },
        { f: 392.00, d: 0.25, t: 0.28 },
        { f: 523.25, d: 0.40, t: 0.42 },
        { f: 659.25, d: 0.40, t: 0.58 },
        { f: 783.99, d: 1.20, t: 0.75 },
        { f: 523.25, d: 1.20, t: 0.75 }
      ];
      fanfare.forEach(n => this.playTone(n.f, "triangle", n.d, n.t, 0.16));
    } else {
      const notes = [
        { f: 329.63, d: 0.22, t: 0.0 },
        { f: 392.00, d: 0.22, t: 0.12 },
        { f: 523.25, d: 0.65, t: 0.24 }
      ];
      notes.forEach(n => this.playTone(n.f, "triangle", n.d, n.t, 0.15));
    }
  }

  // Väärä vastaus!
  playWrong() {
    if (this.muted) return;
    // Dramaattinen dissonoiva lasku
    this.playTone(233.08, "sawtooth", 0.45, 0.0, 0.18); // Bb3
    this.playTone(220.00, "sawtooth", 0.45, 0.15, 0.18); // A3
    this.playTone(155.56, "sawtooth", 1.10, 0.32, 0.20); // Eb3
    this.playTone(110.00, "triangle", 1.20, 0.32, 0.22); // A2
  }

  // Oljenkorren aktivointi
  playLifeline() {
    if (this.muted) return;
    this.playTone(440, "sine", 0.18, 0.0, 0.13);
    this.playTone(554.37, "sine", 0.18, 0.10, 0.13);
    this.playTone(659.25, "triangle", 0.40, 0.20, 0.15);
  }

  // Puhelinsoiton hälytysääni ("Kilauta asiantuntijalle")
  playPhoneRing() {
    if (this.muted) return;
    this.playTone(425, "sine", 0.35, 0.0, 0.12);
    this.playTone(425, "sine", 0.35, 0.5, 0.12);
  }
}

window.gameAudio = new MillionaireAudio();
