import Lenis from "lenis";

let lenis: Lenis | null = null;

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const startSmoothScroll = () => {
  if (prefersReducedMotion()) return () => {};
  const instance = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis = instance;
  let frame = requestAnimationFrame(function raf(time) {
    instance.raf(time);
    frame = requestAnimationFrame(raf);
  });
  return () => {
    cancelAnimationFrame(frame);
    instance.destroy();
    lenis = null;
  };
};

// Height of the fixed nav bar; sections land flush beneath it.
const NAV_OFFSET = 56;

export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { offset: -NAV_OFFSET });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: "auto" });
  }
  history.replaceState(null, "", `#${id}`);
};
