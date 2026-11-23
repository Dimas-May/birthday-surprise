import { useEffect, useRef, useState } from "react";
import { content, type Flower } from "../data/content";
import FlowerSVG from "./FlowerSVG";

export default function FlowerGarden() {
  const [active, setActive] = useState<Flower | null>(null);
  const [bloomed, setBloomed] = useState<Set<string>>(new Set());
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleOpen = (flower: Flower) => {
    setActive(flower);
    setBloomed((prev) => new Set(prev).add(flower.id));
  };

  const close = () => setActive(null);

  // ESC + focus trap sederhana
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    dialogRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section className="section garden" aria-labelledby="garden-heading">
      <div className="section-inner">
        <h2 className="section-title" id="garden-heading">
          {content.gardenTitle}
        </h2>
        <p className="section-subtitle">{content.gardenSubtitle}</p>

        <div className="garden-stage">
          {content.flowers.map((flower) => (
            <button
              key={flower.id}
              className={
                "flower-btn" +
                (flower.hidden && !bloomed.has(flower.id)
                  ? " is-hidden-egg"
                  : "") +
                (bloomed.has(flower.id) ? " is-bloomed" : "")
              }
              style={{
                left: `${flower.x}%`,
                top: `${flower.y}%`,
                width: `${88 * flower.size}px`,
                height: `${88 * flower.size}px`,
              }}
              onClick={() => handleOpen(flower)}
              aria-label={`Bunga ${flower.label}: buka pesan`}
            >
              <FlowerSVG
                type={flower.type}
                color={flower.color}
                className="flower-svg"
              />
              <span className="flower-label">{flower.label}</span>
            </button>
          ))}
        </div>

        <p className="garden-hint">{content.gardenHint}</p>
      </div>

      {active && (
        <div className="flower-modal-backdrop" onClick={close}>
          <div
            className="flower-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="flower-modal-title"
            tabIndex={-1}
            ref={dialogRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-flower">
              <FlowerSVG type={active.type} color={active.color} />
            </div>
            <h3 id="flower-modal-title">{active.label}</h3>
            <p>{active.message}</p>
            <button className="btn-ghost" onClick={close}>
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
