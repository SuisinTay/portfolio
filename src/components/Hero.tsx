import { motion } from "motion/react";
import { siteConfig } from "../constants/siteConfig";
import { scrollToId } from "../lib/scroll";

const ease = [0.22, 1, 0.36, 1] as const;

const facts = [
  ["Role", "Senior Frontend Developer"],
  ["Leading", "EU V1 to V2 platform migration"],
  ["Also building", "Fitnect, a fitness marketplace"],
  ["Speaks", "English, Chinese, Bahasa Melayu"],
];

const Hero = () => (
  <section
    id="top"
    className="flex min-h-[82dvh] items-center pb-12 pt-28 md:pb-16 md:pt-32"
  >
    <div className="container-page">
      <motion.p
        className="mb-6 flex items-center gap-3 text-sm font-medium text-accent"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        <span className="h-px w-10 bg-accent" />
        {siteConfig.role}
      </motion.p>

      <h1 className="text-display" aria-label={siteConfig.name}>
        <span className="block overflow-hidden pb-[0.1em]" aria-hidden="true">
          {siteConfig.name.split("").map((ch, i) => (
            <motion.span
              key={i}
              className="inline-block origin-bottom cursor-default whitespace-pre transition-[transform,color] duration-300 hover:-translate-y-[0.06em] hover:-rotate-6 hover:text-accent"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease, delay: i * 0.035 }}
            >
              {ch}
            </motion.span>
          ))}
        </span>
      </h1>

      <motion.p
        className="mt-8 max-w-[22ch] font-serif text-3xl leading-[1.1] sm:text-5xl md:max-w-[28ch]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.5 }}
      >
        Frontend developer who ships <em className="text-accent">migrations</em>,
        not just screens.
      </motion.p>

      <motion.div
        className="mt-16 grid gap-10 border-t border-line pt-8 md:grid-cols-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <dl className="grid gap-x-8 gap-y-4 text-sm sm:grid-cols-2 md:col-span-8">
          {facts.map(([k, v]) => (
            <div key={k} className="flex gap-4">
              <dt className="w-28 shrink-0 text-muted">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <p className="flex items-center gap-6 md:col-span-4 md:justify-end">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("work");
            }}
            className="rounded-md bg-ink px-5 py-3 text-sm font-medium text-base transition-colors hover:bg-accent active:translate-y-px"
          >
            See my work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("contact");
            }}
            className="link text-sm"
          >
            Say hello
          </a>
        </p>
      </motion.div>
    </div>
  </section>
);

export default Hero;
