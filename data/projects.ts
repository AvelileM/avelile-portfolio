export type Project = {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  learnings: string;
};

export const projects: Project[] = [
  {
    title: "Personal Project — Task Tracker CLI",
    type: "Personal Project",
    description:
      "A command-line task manager built to practise file handling and clean code structure. Supports adding, completing, and filtering tasks stored locally, with a focus on a simple and predictable interface.",
    technologies: ["Python", "SQLite", "Bash"],
    github: "https://github.com/AvelileM/task-tracker-cli",
    learnings:
      "Learned how to structure a small project into modules, handle edge cases in user input, and write basic unit tests to catch regressions early.",
  },
  {
    title: "Team Project — Campus Resource Booking System",
    type: "Team Project",
    description:
      "A web application built with a team of four to let students reserve study rooms and equipment. Focused on clear API design and dividing work across frontend and backend.",
    technologies: ["JavaScript", "HTML", "CSS", "SQL", "Git"],
    github: "https://github.com/AvelileM/campus-booking-system",
    learnings:
      "Practised working with Git branches and pull requests in a team, resolving merge conflicts, and agreeing on shared coding conventions under a deadline.",
  },
  {
    title: "Java Project — Library Management System",
    type: "Java Project",
    description:
      "A console-based library system implementing core object-oriented principles: borrowing, returning, and tracking book availability with basic input validation.",
    technologies: ["Java", "OOP", "Data Structures"],
    github: "https://github.com/AvelileM/library-management-java",
    learnings:
      "Strengthened understanding of encapsulation and class design, and learned to reason about edge cases like duplicate records and overdue items.",
  },
  {
    title: "Python Project — Algorithm & Data Structure Practice",
    type: "Python Project",
    description:
      "A collection of solved algorithmic problems covering sorting, searching, recursion, and basic graph traversal, written while preparing for technical interviews.",
    technologies: ["Python", "Algorithms", "Data Structures"],
    github: "https://github.com/AvelileM/algo-practice-python",
    learnings:
      "Built confidence in analysing time and space complexity, and in explaining my reasoning clearly — a skill as important as the solution itself.",
  },
// -------
  {
    title: "Python Project — RiskLens",
    type: "Python Project",
    description:
      "...",
    technologies: ["Python", "Algorithms", "Data Structures"],
    github: "https://github.com/AvelileM/RiskLens.git",
    learnings:
      "...",
  },
// -------
  {
    title: "JavaScript Project — into_the_land",
    type: "JavaScript Project",
    description:
      "....",
    technologies: ["JavaScript", "VueJS", "NodeJS"],
    github: "https://github.com/AvelileM/into_the_land.git",
    learnings:
      "...",
  },
// -------
  {
    title: "React Project — JonTech",
    type: "React Project",
    description:
      "...",
    technologies: ["React", "...", "..."],
    github: "https://github.com/AvelileM/jontech.git",
    learnings:
      "...",
  },
// -------
  {
    title: "HTML & JavaScript — Algorithm & Data Structure Practice",
    type: "HTML & JavaScript Project",
    description:
      "....",
    technologies: ["HTML", "JavaScript", "..."],
    github: "https://github.com/AvelileM/Ubuntu_ID.git",
    learnings:
      "...",
  },
// -------
  {
    title: "Python & Cloud Project — API-Health-Monitor",
    type: "Python & Cloud Project",
    description:
      "...",
    technologies: ["Python", "Algorithms", "Data Structures"],
    github: "https://github.com/AvelileM/api-health-monitor.git",
    learnings:
      "...",
  },

// -------
  {
    title: "Python Project — clinic-booking",
    type: "Python Project",
    description:
      "...",
    technologies: ["Python", "Algorithms", "Data Structures"],
    github: "https://github.com/AvelileM/clinic-booking.git",
    learnings:
      "...",
  },


];
