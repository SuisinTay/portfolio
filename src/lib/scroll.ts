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

export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  // The full-bleed contact block should sit flush under the bar.
  const offset = id === "contact" ? 0 : -72;
  if (lenis) lenis.scrollTo(el, { offset });
  else el.scrollIntoView({ behavior: "auto", block: "start" });
  history.replaceState(null, "", `#${id}`);
};
