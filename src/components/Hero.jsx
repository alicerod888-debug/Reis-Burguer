import { useEffect, useRef, useState } from "react";
import { config } from "../data/config.js";
import Crown from "./Crown.jsx";
// Vídeo original, sem nada por cima. Slogan só abaixo.
export default function Hero() {
  const ref = useRef(null);
  const [blocked, setBlocked] = useState(false);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => setBlocked(true));
  }, []);
  return (
    <section className="hero">
      <video ref={ref} src="/videos/abertura.mp4" autoPlay muted loop playsInline
        controls={blocked} preload="auto" onError={() => setBlocked(true)} />
      <div className="brand">
        <Crown className="crown" />
        <div className="wordmark">{config.logo.text}<span className="gold">{config.logo.accent}</span></div>
        <span className="rule" aria-hidden="true" />
        <h1 className="slogan">{config.slogan.before}<span className="gold">{config.slogan.highlight}</span>{config.slogan.after}</h1>
      </div>
    </section>
  );
}
