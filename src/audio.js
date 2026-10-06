const EVENT_TONES = {
  deploy: [220, 330, 0.06],
  upgrade: [440, 660, 0.10],
  money: [520, 780, 0.08],
  pop: [180, 120, 0.025],
  danger: [160, 90, 0.11],
  ability: [300, 900, 0.22],
  victory: [392, 523, 0.30],
  defeat: [220, 110, 0.35],
  click: [260, 300, 0.03]
};

export class AudioSystem {
  constructor() {
    this.context = null;
    this.master = 0.055;
    this.muted = false;
    this.initialized = false;
  }

  ensureContext() {
    if (this.initialized) {
      return;
    }

    const AudioContext =
      window.AudioContext ||
      window.webkitAudioContext;

    if (!AudioContext) {
      return;
    }

    this.context = new AudioContext();
    this.initialized = true;
  }

  unlock() {
    this.ensureContext();

    if (this.context?.state === "suspended") {
      this.context.resume();
    }
  }

  setMuted(muted) {
    this.muted = Boolean(muted);
  }

  setVolume(value) {
    this.master = Math.max(
      0,
      Math.min(0.20, Number(value) || 0)
    );
  }

  tone(
    frequency,
    duration,
    {
      type = "sine",
      volume = 1,
      endFrequency = null
    } = {}
  ) {
    if (
      this.muted ||
      !this.context ||
      this.context.state === "closed"
    ) {
      return;
    }

    const oscillator =
      this.context.createOscillator();

    const gain =
      this.context.createGain();

    const now =
      this.context.currentTime;

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(
      Math.max(20, frequency),
      now
    );

    if (endFrequency) {
      oscillator.frequency.exponentialRampToValueAtTime(
        Math.max(20, endFrequency),
        now + duration
      );
    }

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(
      this.master * volume,
      now + 0.006
    );
    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      now + duration
    );

    oscillator.connect(gain);
    gain.connect(this.context.destination);

    oscillator.start(now);
    oscillator.stop(now + duration + 0.01);
  }

  chord(notes, duration = 0.12) {
    if (!this.context || this.muted) {
      return;
    }

    notes.forEach(
      (note, index) =>
        this.tone(
          note,
          duration,
          {
            volume: 0.65 / (index + 1)
          }
        )
    );
  }

  event(kind) {
    this.unlock();

    const tone = EVENT_TONES[kind];

    if (!tone) {
      return;
    }

    const [
      start,
      end,
      duration
    ] = tone;

    this.tone(
      start,
      duration,
      {
        type:
          kind === "danger"
            ? "sawtooth"
            : "triangle",
        endFrequency:
          end !== start
            ? end
            : null
      }
    );
  }

  roundStart() {
    this.unlock();
    this.chord(
      [330, 440, 550],
      0.12
    );
  }

  roundEnd() {
    this.unlock();
    this.chord(
      [392, 494, 587],
      0.15
    );
  }
}