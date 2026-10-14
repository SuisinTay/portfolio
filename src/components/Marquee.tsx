import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  seconds?: number;
  reverse?: boolean;
  className?: string;
  label?: string;
};

/** Endless horizontal loop. Children render twice; the copy is hidden from AT. */
const Marquee = ({
  children,
  seconds = 40,
  reverse = false,
  className = "",
  label,
}: MarqueeProps) => (
  <div
    className={`marquee overflow-hidden ${className}`}
    role={label ? "group" : undefined}
    aria-label={label}
  >
    <div
      className="marquee-track flex w-max"
      style={{
        animationDuration: `${seconds}s`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      <div className="flex shrink-0">{children}</div>
      <div className="flex shrink-0" aria-hidden="true">
        {children}
      </div>
    </div>
  </div>
);

export default Marquee;
