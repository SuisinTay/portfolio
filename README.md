# Tay Sui Sin — portfolio

Personal portfolio built with Vite, React 18, TypeScript and Tailwind CSS 3.
Motion by [Motion](https://motion.dev) and smooth scrolling by [Lenis](https://lenis.darkroom.engineering).

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build    # type-check + production build into dist/
```

## Edit content

All copy lives in `src/constants/`:

| File | Controls |
| --- | --- |
| `siteConfig.ts` | name, email, social links, resume path, form endpoint |
| `workConfig.ts` | selected work entries |
| `experienceConfig.ts` | experience and education |
| `skillsConfig.ts` | toolbox groups |

Design tokens (colour, type scale, container width) are in `tailwind.config.js`.
The resume is served from `public/resume.pdf`.
