export interface Skill {
  id: string;
  name: string;
  category: "ml" | "iot" | "web" | "hardware" | "api" | "cloud";
  icon: string;
  level: number;
  description: string;
}

export const skills: Skill[] = [
  {
    id: "python",
    name: "Python",
    category: "ml",
    icon: "🐍",
    level: 92,
    description: "Primary programming language",
  },
  {
    id: "java",
    name: "Java",
    category: "ml",
    icon: "☕",
    level: 80,
    description: "Object-oriented programming",
  },
  {
    id: "cpp",
    name: "C++",
    category: "ml",
    icon: "⚙️",
    level: 75,
    description: "Systems programming",
  },
  {
    id: "cnn",
    name: "CNNs",
    category: "ml",
    icon: "🧠",
    level: 88,
    description: "Convolutional Neural Networks",
  },
  {
    id: "gans",
    name: "GANs",
    category: "ml",
    icon: "🎨",
    level: 85,
    description: "Generative Adversarial Networks",
  },
  {
    id: "esrgan",
    name: "ESRGAN",
    category: "ml",
    icon: "🔍",
    level: 82,
    description: "Enhanced Super-Resolution GAN",
  },
  {
    id: "cv",
    name: "Computer Vision",
    category: "ml",
    icon: "👁️",
    level: 90,
    description: "Image processing and analysis",
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "cloud",
    icon: "🗄️",
    level: 78,
    description: "Database management",
  },
  {
    id: "aws",
    name: "AWS",
    category: "cloud",
    icon: "☁️",
    level: 75,
    description: "Cloud computing platform",
  },
  {
    id: "dotnet",
    name: ".NET",
    category: "web",
    icon: "🔷",
    level: 70,
    description: "Application framework",
  },
  {
    id: "raspberry-pi",
    name: "Raspberry Pi",
    category: "iot",
    icon: "🥧",
    level: 95,
    description: "Single-board computer projects",
  },
  {
    id: "sensors",
    name: "IoT Sensors",
    category: "iot",
    icon: "📡",
    level: 88,
    description: "Sensor integration and data",
  },
];

export const skillCategories = {
  ml: { name: "Machine Learning", color: "var(--hydro)" },
  iot: { name: "IoT Systems", color: "var(--pyro)" },
  web: { name: "Web Development", color: "var(--electro)" },
  hardware: { name: "Hardware", color: "var(--geo)" },
  api: { name: "API Integration", color: "var(--anemo)" },
  cloud: { name: "Cloud & DevOps", color: "var(--cryo)" },
};
