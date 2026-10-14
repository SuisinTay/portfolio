import {
  siDocker,
  siExpress,
  siGit,
  siGnubash,
  siGo,
  siHtml5,
  siJest,
  siMobx,
  siMongodb,
  siN8n,
  siNextdotjs,
  siNodedotjs,
  siPostman,
  siReact,
  siSass,
  siTypescript,
  siVuedotjs,
  siCss,
} from "simple-icons";

export type Skill = { title: string; path: string; hex: string };

const pick = (i: { title: string; path: string; hex: string }): Skill => ({
  title: i.title,
  path: i.path,
  hex: i.hex,
});

export const skillsRowOne: Skill[] = [
  siReact,
  siNextdotjs,
  siTypescript,
  siMobx,
  siSass,
  siHtml5,
  siCss,
  siVuedotjs,
].map(pick);

export const skillsRowTwo: Skill[] = [
  siGo,
  siNodedotjs,
  siExpress,
  siMongodb,
  siDocker,
  siGnubash,
  siN8n,
  siGit,
  siJest,
  siPostman,
].map(pick);
