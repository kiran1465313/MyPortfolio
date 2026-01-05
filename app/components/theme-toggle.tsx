import { Moon, Sun } from "lucide-react";
import { useTheme } from "~/hooks/use-theme";
import styles from "./theme-toggle.module.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.toggle} onClick={toggleTheme} aria-label="Toggle theme">
      <div className={styles.iconWrapper}>
        <Sun className={styles.sunIcon} />
        <Moon className={styles.moonIcon} />
      </div>
      <div className={styles.track}>
        <div className={styles.thumb} />
      </div>
    </button>
  );
}
