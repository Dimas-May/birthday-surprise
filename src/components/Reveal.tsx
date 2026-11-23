import { useEffect, useMemo, useState } from "react";
import { content } from "../data/content";

const COLORS = ["#e8a0b4", "#f2b9a0", "#b9a4d6", "#f2cf7a", "#8faa84"];

export default function Reveal() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 120);
    return () => clearTimeout(t);
  }, []);

  const confetti = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.8,
        color: COLORS[i % COLORS.length],
      })),
    [],
  );

  return (
    <section className="reveal" aria-labelledby="reveal-heading">
      {confetti.map((c) => (
        <span
          key={c.id}
          className="confetti-piece"
          aria-hidden="true"
          style={{
            left: `${c.left}%`,
            background: c.color,
            animationDelay: `${c.delay}s`,
          }}
        />
      ))}
      <h2
        id="reveal-heading"
        style={{ opacity: show ? 1 : 0, transition: "opacity 0.8s" }}
      >
        {content.revealTitle}
      </h2>
      <p
        className="recipient"
        style={{ opacity: show ? 1 : 0, transition: "opacity 0.8s 0.3s" }}
      >
        {content.recipientName}
      </p>
      <p style={{ opacity: show ? 1 : 0, transition: "opacity 0.8s 0.6s" }}>
        {content.revealMessage}
      </p>
    </section>
  );
}
