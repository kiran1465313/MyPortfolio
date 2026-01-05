import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import classNames from "classnames";
import styles from "./navigation.module.css";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <NavLink to="/" className={styles.logo}>
          <span className={styles.logoIcon}>✦</span>
          <span>Portfolio</span>
        </NavLink>

        <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X /> : <Menu />}
        </button>

        <div className={classNames(styles.links, { [styles.linksOpen]: isOpen })}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => classNames(styles.link, { [styles.linkActive]: isActive })}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => classNames(styles.link, { [styles.linkActive]: isActive })}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) => classNames(styles.link, { [styles.linkActive]: isActive })}
            onClick={() => setIsOpen(false)}
          >
            Skills
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) => classNames(styles.link, { [styles.linkActive]: isActive })}
            onClick={() => setIsOpen(false)}
          >
            Experience
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => classNames(styles.link, { [styles.linkActive]: isActive })}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
