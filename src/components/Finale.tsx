import { useMemo, useState } from "react";
import { content } from "../data/content";

type Props = { onReplay: () => void };

export default function Finale({ onReplay }: Props) {
  const [showEgg, setShowEgg] = useState(false);

  const stars = useMemo(
    () =>
      Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 3,
      })),
    [],
  );

  return (
    <section className="finale" aria-labelledby="finale-heading">
      <div className="stars" aria-hidden="true">
        {stars.map((s) => (
          <span
            key={s.id}
            className="star"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>

      <button
        className="secret-star"
        aria-label="Bintang rahasia"
        onClick={() => setShowEgg((v) => !v)}
      >
        ✦
      </button>

      <h2 id="finale-heading">{content.finaleTitle}</h2>
      <p>{content.finaleMessage}</p>
      <p className="finale-sig">{content.finaleSignature}</p>

      <button className="btn-primary" onClick={onReplay}>
        {content.replayButton}
      </button>

      {showEgg && (
        <div className="easter-message" role="status">
          {content.easterEggMessage}
        </div>
      )}
    </section>
  );
}
