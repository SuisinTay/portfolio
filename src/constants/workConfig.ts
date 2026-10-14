import DerivDashboard from "../assets/deriv-dashboard.webp";
import Fullstack from "../assets/fullstack.webp";

export type WorkItem = {
  title: string;
  role: string;
  year: string;
  summary: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  imageSize?: [number, number];
  webLabel?: string;
  webUrl?: string;
  githubUrl?: string;
};

export const workConfig: WorkItem[] = [
  {
    title: "Deriv Home dashboard",
    role: "Frontend developer, team rebuild",
    year: "V1 to V2 migration",
    summary:
      "The hub where Deriv traders manage their trading accounts. My team rebuilt it from scratch as part of the V1 to V2 migration, moving it off a third-party platform onto a new design and a codebase we own and maintain. It shares its backend and database with Deriv's web and mobile apps, which serve 3M+ customers worldwide.",
    tags: ["Next.js", "TypeScript", "Platform migration", "Multi-language"],
    image: DerivDashboard,
    imageAlt:
      "Preview of the Deriv Home dashboard with total value, trading accounts and an Explore Deriv row. Balances are examples.",
    imageSize: [1400, 856],
    webUrl: "https://home.deriv.com/dashboard",
    webLabel: "Landing page",
  },
  {
    title: "Fitnect",
    role: "Backend developer & co-founder",
    year: "Ongoing",
    summary:
      "A fitness marketplace connecting users with trainers, with booking and real-time chat. I own the backend architecture, hosting and a merge-to-main deployment pipeline, and I'm currently evaluating payment gateway providers.",
    tags: ["Golang", "Node.js", "MongoDB", "WebSocket", "Render"],
  },
  {
    title: "First fullstack website",
    role: "Design & development",
    year: "Personal project",
    summary:
      "My first end-to-end build: a responsive site with a frontend and its own backend, deployed on Vercel.",
    tags: ["React", "Node.js", "Tailwind"],
    image: Fullstack,
    imageAlt: "Screenshot of the first fullstack website",
    webUrl: "https://first-fullstack-website.vercel.app/",
    githubUrl: "https://github.com/SuisinTay/first_fullstack_website",
  },
];
