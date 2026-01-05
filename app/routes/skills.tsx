import React from "react";
import { Navigation } from "~/components/navigation";
import { ParticleField } from "~/components/particle-field";
import { skills, skillCategories } from "~/data/skills";
import styles from "./skills.module.css";

const categoryGlows: Record<string, string> = {
  ml: "0 0 25px rgba(1, 144, 255, 0.3)",
  iot: "0 0 25px rgba(247, 107, 21, 0.3)",
  web: "0 0 30px rgba(142, 78, 198, 0.3)",
  hardware: "0 0 25px rgba(255, 193, 0, 0.3)",
  api: "0 0 25px rgba(46, 204, 113, 0.3)",
  cloud: "0 0 25px rgba(0, 196, 204, 0.3)",
};

export default function Skills() {
  return (
    <div className={styles.page}>
      <Navigation />
      <ParticleField />

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Skills & Expertise</h1>
          <p className={styles.subtitle}>
            A comprehensive overview of my technical skills across AI/ML, IoT, web development, and more.
          </p>
        </header>

        <div className={styles.grid}>
          {skills.map((skill) => {
            const category = skillCategories[skill.category];
            return (
              <article
                key={skill.id}
                className={styles.skillCard}
                style={
                  {
                    "--category-color": category.color,
                    "--category-glow": categoryGlows[skill.category],
                  } as React.CSSProperties
                }
              >
                <div className={styles.skillHeader}>
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <div className={styles.skillInfo}>
                    <h2 className={styles.skillName}>{skill.name}</h2>
                    <span className={styles.categoryBadge}>{category.name}</span>
                  </div>
                </div>

                <p className={styles.description}>{skill.description}</p>

                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: `${skill.level}%` }} />
                </div>
                <p className={styles.levelText}>{skill.level}% Proficiency</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
