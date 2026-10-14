import { siteConfig } from "../constants/siteConfig";
import { scrollToId } from "../lib/scroll";

const Footer = () => (
  <footer className="border-t border-line py-10">
    <div className="container-page flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
      <p>
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
      <button
        type="button"
        onClick={() => scrollToId("top")}
        className="transition-colors hover:text-ink"
      >
        Back to top ↑
      </button>
    </div>
  </footer>
);

export default Footer;
