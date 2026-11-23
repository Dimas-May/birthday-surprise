import { useState } from "react";
import { content } from "../data/content";

export default function Letter() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="section letter-section"
      aria-labelledby="letter-heading"
    >
      <div className="section-inner">
        <h2 className="section-title" id="letter-heading">
          {content.letterTitle}
        </h2>

        {!open ? (
          <div className="envelope-wrap">
            <p className="section-subtitle">{content.letterEnvelopeHint}</p>
            <button
              className="envelope"
              onClick={() => setOpen(true)}
              aria-label={content.letterOpenButton}
            >
              <span className="envelope-flap" aria-hidden="true" />
              <span className="envelope-heart" aria-hidden="true">
                💌
              </span>
            </button>
            <button className="btn-primary" onClick={() => setOpen(true)}>
              {content.letterOpenButton}
            </button>
          </div>
        ) : (
          <article className="letter-paper" aria-live="polite">
            <p className="salutation">{content.letterSalutation}</p>
            {content.letterBody.map((par, i) => (
              <p key={i}>{par}</p>
            ))}
            <div className="closing">
              <p>{content.letterClosing}</p>
              <p className="signature">{content.letterSignature}</p>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
