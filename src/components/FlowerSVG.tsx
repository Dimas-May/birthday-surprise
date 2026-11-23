type FlowerType = "rose" | "daisy" | "tulip" | "sunflower" | "lavender";

type Props = {
  type: FlowerType;
  color: string;
  className?: string;
};

export default function FlowerSVG({ type, color, className }: Props) {
  const common = {
    className,
    viewBox: "0 0 100 100",
    "aria-hidden": true as const,
  };
  const stem = (
    <>
      <line
        x1="50"
        y1="60"
        x2="50"
        y2="96"
        stroke="#8faa84"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <ellipse
        cx="38"
        cy="80"
        rx="10"
        ry="5"
        fill="#8faa84"
        transform="rotate(-25 38 80)"
      />
      <ellipse
        cx="62"
        cy="84"
        rx="10"
        ry="5"
        fill="#8faa84"
        transform="rotate(25 62 84)"
      />
    </>
  );

  if (type === "daisy") {
    return (
      <svg {...common}>
        {stem}
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={i}
            cx="50"
            cy="28"
            rx="7"
            ry="16"
            fill={color}
            transform={`rotate(${i * 45} 50 45)`}
            stroke="#e7d9b8"
            strokeWidth="1"
          />
        ))}
        <circle cx="50" cy="45" r="9" fill="#f2cf7a" />
      </svg>
    );
  }

  if (type === "tulip") {
    return (
      <svg {...common}>
        {stem}
        <path
          d="M35 45 Q35 18 50 18 Q65 18 65 45 Q50 55 35 45 Z"
          fill={color}
        />
        <path
          d="M43 45 Q43 25 50 22 Q57 25 57 45"
          fill="rgba(255,255,255,0.35)"
        />
      </svg>
    );
  }

  if (type === "sunflower") {
    return (
      <svg {...common}>
        {stem}
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse
            key={i}
            cx="50"
            cy="22"
            rx="5"
            ry="14"
            fill={color}
            transform={`rotate(${i * 30} 50 42)`}
          />
        ))}
        <circle cx="50" cy="42" r="13" fill="#7a5230" />
        <circle cx="50" cy="42" r="8" fill="#5e3d22" />
      </svg>
    );
  }

  if (type === "lavender") {
    return (
      <svg {...common}>
        {stem}
        {Array.from({ length: 7 }).map((_, i) => (
          <circle
            key={i}
            cx={46 + (i % 2) * 8}
            cy={26 + i * 6}
            r="5"
            fill={color}
          />
        ))}
        <circle cx="50" cy="20" r="4" fill={color} />
      </svg>
    );
  }

  // rose
  return (
    <svg {...common}>
      {stem}
      <circle cx="50" cy="42" r="22" fill={color} />
      <path
        d="M50 24 a18 18 0 1 0 0.1 0 M50 32 a10 10 0 1 1 -0.1 0"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="50" cy="42" r="6" fill="rgba(255,255,255,0.5)" />
    </svg>
  );
}
