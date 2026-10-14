import {
  certifications,
  education,
  experienceConfig,
} from "../constants/experienceConfig";
import Reveal from "./Reveal";

const Experience = () => (
  <section id="experience" className="py-16 md:py-24">
    <div className="container-page grid gap-8 md:grid-cols-12">
      <h2 className="font-serif text-4xl leading-[0.95] md:sticky md:top-24 md:self-start md:col-span-3">The road <em className="text-accent">so far</em></h2>
      <div className="md:col-span-9">
        {experienceConfig.map((job) => (
          <Reveal key={job.company} className="border-t border-line py-10 first:border-t-0 first:pt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-serif text-4xl leading-tight sm:text-6xl">
                {job.role}
              </h3>
              <p className="text-sm text-muted">{job.period}</p>
            </div>
            <p className="mt-2 text-muted">{job.company}</p>
            <ul className="mt-6 max-w-[62ch] space-y-3 leading-relaxed">
              {job.highlights.map((h) => (
                <li key={h} className="flex gap-4">
                  <span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span className="text-ink/85">{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}

        <Reveal className="mt-6 border-t border-line pt-10">
          <h3 className="font-serif text-4xl">Always <em className="text-accent">learning</em></h3>
          <ul className="mt-5 space-y-8">
            {certifications.map((c) => (
              <li key={c.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                  <p className="text-lg">
                    {c.title}
                    <span className="text-muted"> — {c.issuer}</span>
                  </p>
                  <p className="text-sm text-muted">{c.period}</p>
                </div>
                <p className="mt-2 text-sm text-muted">{c.skills.join(" · ")}</p>
                <p className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm">
                  <span className="text-muted">{c.issued}</span>
                  <a
                    className="link"
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify credential ↗
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-6 border-t border-line pt-10">
          <h3 className="font-serif text-4xl">Where it <em className="text-accent">started</em></h3>
          <ul className="mt-5 space-y-3">
            {education.map((e) => (
              <li key={e.school} className="flex flex-wrap justify-between gap-x-6">
                <span>
                  {e.school}
                  <span className="text-muted"> — {e.credential}</span>
                </span>
                <span className="text-sm text-muted">{e.year}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Experience;
