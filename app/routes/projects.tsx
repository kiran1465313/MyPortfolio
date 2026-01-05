import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "~/components/ui/button/button";
import { Navigation } from "~/components/navigation";
import { ParticleField } from "~/components/particle-field";
import { projects } from "~/data/projects";
import styles from "./projects.module.css";

const elementColors: Record<string, string> = {
  pyro: "var(--pyro)",
  hydro: "var(--hydro)",
  electro: "var(--electro)",
  cryo: "var(--cryo)",
  anemo: "var(--anemo)",
  geo: "var(--geo)",
  dendro: "var(--dendro)",
};

const elementGlows: Record<string, string> = {
  pyro: "0 0 25px rgba(247, 107, 21, 0.3)",
  hydro: "0 0 25px rgba(1, 144, 255, 0.3)",
  electro: "0 0 30px rgba(142, 78, 198, 0.3)",
  cryo: "0 0 25px rgba(0, 196, 204, 0.3)",
  anemo: "0 0 25px rgba(46, 204, 113, 0.3)",
  geo: "0 0 25px rgba(255, 193, 0, 0.3)",
  dendro: "0 0 25px rgba(70, 167, 88, 0.3)",
};

export default function Projects() {
  return (
    <div className={styles.page}>
      <Navigation />
      <ParticleField />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Featured Projects</h1>
          <p className={styles.subtitle}>
            Explore my portfolio of AI/ML, IoT, and web development projects, each crafted with passion and precision.
          </p>
        </header>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article
              key={project.id}
              className={styles.card}
              style={
                {
                  "--element-color": elementColors[project.element],
                  "--element-glow": elementGlows[project.element],
                } as React.CSSProperties
              }
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.image} />
                <span className={styles.elementBadge}>{project.element}</span>
              </div>

              <div className={styles.content}>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.tech}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.actions}>
                  {project.github && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className={styles.icon} />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.link && (
                    <Button asChild size="sm">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className={styles.icon} />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
