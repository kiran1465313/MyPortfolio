import React from "react";
import { Navigation } from "~/components/navigation";
import { ParticleField } from "~/components/particle-field";
import { experiences } from "~/data/experience";
import styles from "./experience.module.css";

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

export default function Experience() {
  return (
    <div className={styles.page}>
      <Navigation />
      <ParticleField />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Experience Timeline</h1>
          <p className={styles.subtitle}>My professional journey through AI/ML, IoT, and web development projects.</p>
        </header>

        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className={styles.timelineItem}
              style={
                {
                  "--element-color": elementColors[exp.element],
                  "--element-glow": elementGlows[exp.element],
                } as React.CSSProperties
              }
            >
              <div className={styles.node} />

              <div className={styles.card}>
                <h2 className={styles.cardTitle}>{exp.title}</h2>
                <p className={styles.organization}>{exp.organization}</p>
                <p className={styles.description}>{exp.description}</p>
                <ul className={styles.achievements}>
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className={styles.achievement}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.period}>{exp.period}</div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
