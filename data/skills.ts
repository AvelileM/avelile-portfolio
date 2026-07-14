export type SkillCategory = {
  label: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    label: "Web",
    items: ["HTML", "CSS"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Linux", "Bash"],
  },
  {
    label: "Ways of working",
    items: ["Problem Solving", "Team Collaboration"],
  },
];
