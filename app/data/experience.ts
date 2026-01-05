export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  element: "pyro" | "hydro" | "electro" | "cryo" | "anemo" | "geo" | "dendro";
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "AI Intern",
    organization: "1Stop AI (Remote)",
    period: "May 2025 – June 2025",
    description: "AI problem analysis, ML solution development, and team collaboration",
    achievements: [
      "Analyzed complex AI problems and developed solutions",
      "Collaborated with cross-functional teams",
      "Contributed to machine learning projects",
    ],
    element: "electro",
  },
  {
    id: "exp-2",
    title: "1st Prize – Hacknovation 1.0",
    organization: "GIET University",
    period: "2024",
    description: "Won first place in university hackathon competition",
    achievements: [
      "Developed innovative solution",
      "Demonstrated technical excellence",
      "Outperformed competing teams",
    ],
    element: "pyro",
  },
  {
    id: "exp-3",
    title: "2nd Prize – Lernathon 4.0",
    organization: "GIET University",
    period: "2024",
    description: "Secured second position in learning-focused hackathon",
    achievements: [
      "Created impactful project",
      "Showcased problem-solving skills",
      "Received recognition for innovation",
    ],
    element: "anemo",
  },
  {
    id: "exp-4",
    title: "Smart India Hackathon",
    organization: "Government of India",
    period: "2024",
    description: "Participated in national-level hackathon with hardware project",
    achievements: [
      "Developed hardware-based offline sprinkling system",
      "Integrated IoT sensors and automation",
      "Presented to industry judges",
    ],
    element: "geo",
  },
];
