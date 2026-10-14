export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const experienceConfig: ExperienceItem[] = [
  {
    company: "Deriv Sdn Bhd",
    role: "Senior Frontend Developer",
    period: "Apr 2022 — Present",
    highlights: [
      "Promoted to Senior Frontend Developer in July 2026 for technical leadership and delivery on migration initiatives.",
      "Completed the V1 to V2 migration and now lead the EU V1 to V2 migration, coordinating scope and delivery across the initiative.",
      "Own third-party integrations on the frontend, including consent flows.",
      "Built an automated Docker release workflow for the Passkey project in Bash, plus an n8n workflow that automates Slack translation.",
      "Shipped phone number verification, RTL website support and multi-language translation management.",
      "Adopted AI-assisted development and built internal skills and tooling to streamline production releases and patches.",
    ],
  },
  {
    company: "Panda Software Sdn Bhd",
    role: "Web Developer (Intern / part-time)",
    period: "Mar 2021 — Dec 2021",
    highlights: [
      "Built business overview dashboards and an e-commerce system from scratch with Vue 3.",
      "Worked with the BI team to integrate APIs and SQL data pipelines.",
    ],
  },
];

export const education = [
  {
    school: "Taylor's University",
    credential: "Bachelor of Software Engineering (Hons)",
    year: "2021",
  },
  {
    school: "INTI Nilai University",
    credential: "Foundation in IT",
    year: "2018",
  },
];

export const certifications = [
  {
    title: "Applied Data Science Program",
    issuer: "MIT Professional Education",
    period: "Sep – Dec 2022",
    issued: "Issued Jan 2023",
    skills: [
      "Machine learning",
      "Deep learning",
      "Neural networks",
      "Computer vision",
      "Python",
      "Statistics",
    ],
    url: "https://www.credential.net/89e502b1-a40f-4bbe-a7ce-514029b76bb3",
  },
];
