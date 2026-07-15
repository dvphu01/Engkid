// EngKids - Audio System
const Audio = {
  ctx: null,
  enabled: true,

  init() {
    try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } 
    catch(e) { console.warn('AudioContext not supported'); }
  },

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  },

  play(type) {
    if (!this.enabled || !this.ctx) return;
    this.resume();
    const now = this.ctx.currentTime;
    switch(type) {
      case 'click': this._tone(800, 0.05, 'sine'); break;
      case 'correct': this._melody([523, 659, 784], 0.12, 'sine'); break;
      case 'wrong': this._tone(200, 0.2, 'sawtooth', 0.15); break;
      case 'star': this._melody([784, 988, 1175], 0.1, 'sine'); break;
      case 'complete': this._melody([523, 659, 784, 1047], 0.15, 'sine'); break;
      case 'pop': this._tone(600, 0.05, 'sine'); break;
      case 'whoosh': this._noise(0.1); break;
    }
  },

  _tone(freq, dur, type, vol = 0.2) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(vol, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + dur);
  },

  _melody(freqs, dur, type) {
    freqs.forEach((f, i) => {
      setTimeout(() => this._tone(f, dur, type, 0.15), i * (dur * 800));
    });
  },

  _noise(dur) {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * dur;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const source = this.ctx.createBufferSource();
    const gain = this.ctx.createGain();
    source.buffer = buffer;
    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
    source.connect(gain);
    gain.connect(this.ctx.destination);
    source.start();
  },

  speak(text, lang = 'en-US') {
    if (!('speechSynthesis' in window)) {
      console.warn('SpeechSynthesis API not supported');
      return;
    }
    
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = 0.85;
    u.pitch = 1.1;
    
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      const enVoice = voices.find(v => v.lang === 'en-US') || voices.find(v => v.lang.startsWith('en'));
      if (enVoice) u.voice = enVoice;
    }
    
    u.onerror = (e) => console.warn('Speech error:', e);
    
    // Ensure speech synthesis is awake and speaking
    window.speechSynthesis.resume();
    window.speechSynthesis.speak(u);
  },

  toggle() { this.enabled = !this.enabled; return this.enabled; }
};
