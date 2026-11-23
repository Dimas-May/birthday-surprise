import { content } from "../data/content";

type Props = { onOpen: () => void };

export default function Intro({ onOpen }: Props) {
  return (
    <section className="intro" aria-labelledby="intro-heading">
      <div className="intro-envelope" aria-hidden="true">
        ✉️
      </div>
      <svg className="intro-flower" viewBox="0 0 100 100" aria-hidden="true">
        <g fill="none" stroke="#e8a0b4" strokeWidth="2">
          <circle cx="50" cy="30" r="14" fill="#f7e4e1" />
          <circle cx="70" cy="45" r="14" fill="#f7e4e1" />
          <circle cx="63" cy="68" r="14" fill="#f7e4e1" />
          <circle cx="37" cy="68" r="14" fill="#f7e4e1" />
          <circle cx="30" cy="45" r="14" fill="#f7e4e1" />
          <circle cx="50" cy="50" r="9" fill="#f2cf7a" stroke="none" />
        </g>
      </svg>
      <h1 id="intro-heading">{content.introGreeting}</h1>
      <p>{content.introSubtext}</p>
      <button className="btn-primary" onClick={onOpen}>
        {content.introCta}
        <span aria-hidden="true">→</span>
      </button>
    </section>
  );
}
