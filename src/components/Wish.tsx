import { useState } from "react";
import { content } from "../data/content";

export default function Wish() {
  const [blown, setBlown] = useState(false);

  const blow = () => setBlown(true);

  return (
    <section className="section wish-section" aria-labelledby="wish-heading">
      <div className="section-inner">
        <h2 className="section-title" id="wish-heading">
          {content.wishTitle}
        </h2>
        <p className="section-subtitle">{content.wishSubtitle}</p>

        <div className="cake">
          <div className="cake-body" />
          <div
            className={"candle" + (blown ? " is-blown" : "")}
            role="button"
            tabIndex={0}
            aria-label={content.wishCandleHint}
            onClick={blow}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                blow();
              }
            }}
          >
            {!blown && <span className="flame" aria-hidden="true" />}
            {blown && <span className="smoke" aria-hidden="true" />}
          </div>
        </div>

        {!blown ? (
          <button className="btn-primary" onClick={blow}>
            {content.wishButton}
          </button>
        ) : (
          <div className="wish-result" role="status" aria-live="polite">
            {content.wishResult}
          </div>
        )}
        <p className="garden-hint">{!blown ? content.wishCandleHint : ""}</p>
      </div>
    </section>
  );
}
