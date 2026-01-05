export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  element: "pyro" | "hydro" | "electro" | "cryo" | "anemo" | "geo" | "dendro";
  tech: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "kisan",
    title: "Kisan – Offline Plant Disease Detection",
    description: "Raspberry Pi 5 powered ML-based disease detection with automated sprinkling system",
    longDescription:
      "An innovative agricultural solution using machine learning for offline plant disease detection with severity analysis. Features automated sprinkling system to treat affected plants. Built on Raspberry Pi 5 for edge computing capabilities, making it accessible to farmers in areas with limited internet connectivity.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    element: "dendro",
    tech: ["Raspberry Pi 5", "Computer Vision", "Python", "ML", "IoT Sensors"],
    github: "https://github.com/kiran1465313",
  },
  {
    id: "agribot",
    title: "AgriBot – Smart Agricultural Assistant",
    description: "WhatsApp bot providing real-time government crop prices based on location",
    longDescription:
      "A smart chatbot integrated with WhatsApp that provides farmers with location-based real-time government crop prices. Helps farmers make informed decisions about when and where to sell their produce by accessing official price data and market information.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80",
    element: "anemo",
    tech: ["WhatsApp API", "Python", "Chatbot", "API Integration", "Location Services"],
    github: "https://github.com/kiran1465313",
  },
  {
    id: "esrgan",
    title: "Satellite Image Super-Resolution",
    description: "Enhanced low-resolution satellite images using ESRGAN and BasicSR framework",
    longDescription:
      "Advanced computer vision project using Enhanced Super-Resolution Generative Adversarial Networks (ESRGAN) to enhance low-resolution satellite imagery. Leverages the BasicSR framework to improve image quality for better analysis and visualization of satellite data.",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80",
    element: "electro",
    tech: ["ESRGAN", "GANs", "BasicSR", "Python", "Computer Vision"],
    github: "https://github.com/kiran1465313",
  },
];
