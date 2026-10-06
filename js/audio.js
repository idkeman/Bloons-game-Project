let ctx = null;
let master = null;
let enabled = true;

function ensureAudio() {
  if (!enabled) return null;
  if (!ctx) {
    ctx = new AudioContext();
    master = ctx.createGain();
    master.gain.value = 0.07;
    master.connect(ctx.destination);
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

function tone(frequency, duration, type = "sine", volume = 0.08, slide = 0) {
  const audio = ensureAudio();
  if (!audio) return;
  const now = audio.currentTime;
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, now);
  if (slide) osc.frequency.linearRampToValueAtTime(frequency + slide, now + duration);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, volume), now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.connect(gain);
  gain.connect(master);
  osc.start(now);
  osc.stop(now + duration + 0.03);
}

export function setSoundEnabled(value) {
  enabled = Boolean(value);
}

export function playSound(name) {
  switch (name) {
    case "place": tone(240, 0.08, "triangle", 0.10, 90); break;
    case "upgrade": tone(440, 0.16, "square", 0.07, 120); break;
    case "sell": tone(180, 0.12, "sawtooth", 0.05, -40); break;
    case "wave": tone(160, 0.22, "triangle", 0.08, 220); break;
    case "boss": tone(75, 0.5, "sawtooth", 0.09, -15); break;
    case "leak": tone(90, 0.3, "square", 0.08, -40); break;
    case "ability": tone(700, 0.18, "sine", 0.08, 300); break;
    case "apex": tone(120, 0.8, "triangle", 0.10, 860); break;
    case "win": tone(420, 0.35, "triangle", 0.09, 260); break;
    case "lose": tone(120, 0.45, "sine", 0.08, -70); break;
    default: break;
  }
}
