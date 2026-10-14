import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { routesConfig } from "../constants/routesConfig";
import { siteConfig } from "../constants/siteConfig";
import { useActiveSection } from "../hooks/useActiveSection";
import { scrollToId } from "../lib/scroll";

const ids = routesConfig.map((r) => r.to);
const NAV_HEIGHT = 56;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [onAccent, setOnAccent] = useState(false);
  const active = useActiveSection(ids);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // The Contact section is a full-bleed accent block; match the bar to it.
  useEffect(() => {
    const check = () => {
      const el = document.getElementById("contact");
      setOnAccent(!!el && el.getBoundingClientRect().top <= NAV_HEIGHT / 2);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  const idle = onAccent ? "text-base/65 hover:text-base" : "text-muted hover:text-ink";
  const current = onAccent ? "text-base" : "text-ink";
  const bar = onAccent ? "bg-base" : "bg-ink";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-nav border-b backdrop-blur-md transition-colors duration-300 ${
        onAccent
          ? "border-base/20 bg-accent/90 text-base"
          : "border-line bg-base/80 text-ink"
      }`}
    >
      <div className="container-page">
        <nav
          aria-label="Primary"
          className="flex items-center justify-between"
          style={{ height: NAV_HEIGHT }}
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("top");
            }}
            className="font-serif text-2xl leading-none"
          >
            {siteConfig.shortName}
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {routesConfig.map(({ to, title }) => (
              <li key={to}>
                <a
                  href={`#${to}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(to);
                  }}
                  aria-current={active === to ? "true" : undefined}
                  className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                    active === to ? current : idle
                  }`}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden rounded-md border px-3 py-1.5 text-sm transition-colors sm:inline-block ${
                onAccent
                  ? "border-base/40 hover:bg-base hover:text-accent"
                  : "border-line hover:border-accent hover:text-accent"
              }`}
            >
              Resume
            </a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-lg md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 h-px w-5 transition-transform ${bar} ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-5 transition-transform ${bar} ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      <motion.span
        aria-hidden="true"
        style={{ scaleX: progress }}
        className={`absolute -bottom-px left-0 right-0 h-px origin-left ${
          onAccent ? "bg-base" : "bg-accent"
        }`}
      />

      {open && (
        <div
          id="mobile-menu"
          className={`container-page border-t py-3 md:hidden ${
            onAccent ? "border-base/20" : "border-line"
          }`}
        >
          <ul>
            {routesConfig.map(({ to, title }) => (
              <li key={to}>
                <a
                  href={`#${to}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(to);
                  }}
                  className="block rounded-lg py-3 text-lg"
                >
                  {title}
                </a>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className={`block rounded-lg py-3 text-lg ${
                  onAccent ? "" : "text-accent"
                }`}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
