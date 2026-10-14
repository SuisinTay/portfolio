import type { CSSProperties } from "react";
import {
  skillsRowOne,
  skillsRowTwo,
  type Skill,
} from "../constants/skillsConfig";
import Marquee from "./Marquee";

// Near-black brand colours would vanish on the dark background.
const tint = (hex: string) =>
  parseInt(hex.slice(0, 2), 16) +
    parseInt(hex.slice(2, 4), 16) +
    parseInt(hex.slice(4, 6), 16) <
  150
    ? "#f1ece4"
    : `#${hex}`;

const Tile = ({ skill }: { skill: Skill }) => (
  <div className="pr-6 sm:pr-10">
    <div
      className="skill group relative flex h-28 w-28 items-center justify-center rounded-2xl border border-line bg-surface-1 transition-[transform,border-color] duration-300 hover:-translate-y-1.5 hover:border-[color:var(--brand)] sm:h-32 sm:w-32"
      style={{ "--brand": tint(skill.hex) } as CSSProperties}
      role="img"
      aria-label={skill.title}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-9 w-9 fill-muted transition-colors duration-300 group-hover:fill-[color:var(--brand)] sm:h-10 sm:w-10"
        aria-hidden="true"
      >
        <path d={skill.path} />
      </svg>
      <span className="absolute bottom-2.5 text-xs text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {skill.title}
      </span>
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="overflow-hidden py-16 md:py-24">
    <div className="container-page mb-10 grid gap-8 md:grid-cols-12">
      <h2 className="font-serif text-4xl leading-[0.95] md:sticky md:top-24 md:self-start md:col-span-3">Tools of the <em className="text-accent">trade</em></h2>
      <p className="text-lg text-muted md:col-span-9 md:max-w-[40ch] md:self-end">
        Frontend first, full stack when the product needs it.
      </p>
    </div>

    <div className="space-y-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <Marquee seconds={45} label="Frontend tools" className="py-3">
        {skillsRowOne.map((s) => (
          <Tile key={s.title} skill={s} />
        ))}
      </Marquee>
      <Marquee seconds={55} reverse label="Backend and tooling" className="py-3">
        {skillsRowTwo.map((s) => (
          <Tile key={s.title} skill={s} />
        ))}
      </Marquee>
    </div>
  </section>
);

export default Skills;
