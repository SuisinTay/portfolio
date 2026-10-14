import Marquee from "./Marquee";

const phrases = [
  "Frontend architecture",
  "Platform migrations",
  "Release tooling",
  "Accessibility",
  "Multi-language & RTL",
  "Real-time systems",
];

const Ticker = () => (
  <div
    aria-hidden="true"
    className="-rotate-1 scale-[1.03] bg-accent py-5 text-base"
  >
    <Marquee seconds={38}>
      {phrases.map((p) => (
        <span
          key={p}
          className="flex items-center whitespace-nowrap font-serif text-4xl italic sm:text-5xl"
        >
          <span className="px-8">{p}</span>
          <span className="text-2xl not-italic">✦</span>
        </span>
      ))}
    </Marquee>
  </div>
);

export default Ticker;
