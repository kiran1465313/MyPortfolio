import styles from "./animated-background.module.css";

export function AnimatedBackground() {
  return (
    <div className={styles.background}>
      <div className={styles.gradient1} />
      <div className={styles.gradient2} />
      <div className={styles.gradient3} />
      <div className={styles.mesh} />
    </div>
  );
}
