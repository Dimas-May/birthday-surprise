import { useState } from "react";
import { content } from "../data/content";

export default function Timeline() {
  if (!content.timelineEnabled || !content.timeline.length) return null;

  return (
    <section className="section" aria-labelledby="timeline-heading">
      <div className="section-inner">
        <h2 className="section-title" id="timeline-heading">
          {content.timelineTitle}
        </h2>
        <p className="section-subtitle">{content.timelineSubtitle}</p>
        <div className="timeline">
          {content.timeline.map((entry, i) => (
            <TimelineItem key={i} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ entry }: { entry: (typeof content.timeline)[number] }) {
  const [broken, setBroken] = useState(false);
  return (
    <div className="timeline-item">
      <span className="timeline-dot" aria-hidden="true" />
      {entry.date && <div className="timeline-date">{entry.date}</div>}
      <h3>{entry.title}</h3>
      <p>{entry.caption}</p>
      {entry.photo && !broken && (
        <img
          className="timeline-photo"
          src={entry.photo}
          alt={entry.alt ?? entry.title}
          loading="lazy"
          onError={() => setBroken(true)}
        />
      )}
    </div>
  );
}
