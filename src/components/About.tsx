import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";

const statement =
  "I've spent four years shipping production interfaces and was recently trusted to lead a platform migration. I care most about the unglamorous parts: performance, accessibility, release tooling, and the handoff between design and backend.";

const Word = ({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  );
};

const About = () => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.6"],
  });
  const words = statement.split(" ");

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container-page grid gap-8 md:grid-cols-12">
        <h2 className="font-serif text-4xl leading-[0.95] md:sticky md:top-24 md:self-start md:col-span-3">The short <em className="text-accent">version</em></h2>
        <p
          ref={ref}
          className="font-serif text-4xl leading-[1.1] sm:text-5xl md:col-span-9 md:text-6xl"
        >
          {words.map((w, i) => (
            <Word
              key={i}
              word={w}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
            />
          ))}
        </p>
      </div>
    </section>
  );
};

export default About;
