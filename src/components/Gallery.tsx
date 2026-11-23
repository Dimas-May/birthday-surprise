import { useEffect, useRef, useState } from "react";
import { content, type Photo } from "../data/content";

function PhotoImage({
  photo,
  onMissing,
  style,
  className,
}: {
  photo: Photo;
  onMissing?: () => void;
  style?: React.CSSProperties;
  className?: string;
}) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div className={"photo-placeholder " + (className ?? "")} style={style}>
        Foto belum ditambahkan
        <br />({photo.src})
      </div>
    );
  }

  return (
    <img
      src={photo.src}
      alt={photo.alt}
      loading="lazy"
      className={className}
      style={{ objectPosition: photo.focalPoint, ...style }}
      onError={() => {
        setBroken(true);
        onMissing?.();
      }}
    />
  );
}

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const photos = content.photos;
  const isOpen = index !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowLeft")
        setIndex((i) =>
          i === null ? i : (i - 1 + photos.length) % photos.length,
        );
      if (e.key === "ArrowRight")
        setIndex((i) => (i === null ? i : (i + 1) % photos.length));
    };
    document.addEventListener("keydown", onKey);
    closeBtnRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, photos.length]);

  if (!photos.length) return null;

  const current = index !== null ? photos[index] : null;

  return (
    <section className="section" aria-labelledby="gallery-heading">
      <div className="section-inner">
        <h2 className="section-title" id="gallery-heading">
          {content.galleryTitle}
        </h2>
        <p className="section-subtitle">{content.gallerySubtitle}</p>

        <div className="gallery-grid">
          {photos.map((photo, i) => (
            <button
              key={photo.src + i}
              className="photo-card"
              onClick={() => setIndex(i)}
              aria-label={`Lihat foto: ${photo.caption}`}
            >
              <PhotoImage photo={photo} />
              <div className="photo-caption">{photo.caption}</div>
              {photo.date && <div className="photo-date">{photo.date}</div>}
            </button>
          ))}
        </div>
      </div>

      {isOpen && current && (
        <div className="lightbox-backdrop" onClick={() => setIndex(null)}>
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Foto: ${current.caption}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setIndex(null)}
              aria-label="Tutup foto"
              ref={closeBtnRef}
            >
              ×
            </button>
            <PhotoImage photo={current} style={{ maxHeight: "70vh" }} />
            <div className="lightbox-caption">{current.caption}</div>
            {current.date && (
              <div className="lightbox-date">{current.date}</div>
            )}
            <div className="lightbox-controls">
              <button
                className="btn-ghost"
                onClick={() =>
                  setIndex((i) =>
                    i === null ? i : (i - 1 + photos.length) % photos.length,
                  )
                }
                aria-label="Foto sebelumnya"
              >
                ← Sebelumnya
              </button>
              <button
                className="btn-ghost"
                onClick={() =>
                  setIndex((i) => (i === null ? i : (i + 1) % photos.length))
                }
                aria-label="Foto berikutnya"
              >
                Berikutnya →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
