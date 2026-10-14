import { workConfig } from "../constants/workConfig";
import Reveal from "./Reveal";

const Work = () => (
  <section id="work" className="py-16 md:py-24">
    <div className="container-page">
      <div className="grid gap-8 md:grid-cols-12">
        <h2 className="font-serif text-4xl leading-[0.95] md:sticky md:top-24 md:self-start md:col-span-3">Things I've <em className="text-accent">shipped</em></h2>
        <ol className="md:col-span-9">
          {workConfig.map((item) => (
            <li key={item.title} className="border-t border-line first:border-t-0 first:pt-0">
              <Reveal>
                <article className="group py-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="font-serif text-5xl leading-none transition-transform duration-500 group-hover:translate-x-3 group-hover:italic group-hover:text-accent sm:text-7xl">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted">
                      {item.role} · {item.year}
                    </p>
                  </div>
                  <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-muted">
                    {item.summary}
                  </p>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.imageAlt ?? item.title}
                      width={item.imageSize?.[0] ?? 1200}
                      height={item.imageSize?.[1] ?? 740}
                      loading="lazy"
                      className="mt-8 w-full rounded-lg border border-line transition-transform duration-500 group-hover:-rotate-[0.6deg] group-hover:scale-[1.015]"
                    />
                  )}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm">
                    <p className="text-muted">{item.tags.join(" · ")}</p>
                    {(item.webUrl || item.githubUrl) && (
                      <p className="flex gap-6">
                        {item.webUrl && (
                          <a
                            className="link"
                            href={item.webUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.webLabel ?? "Live site"} ↗
                          </a>
                        )}
                        {item.githubUrl && (
                          <a
                            className="link"
                            href={item.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Source ↗
                          </a>
                        )}
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Work;
