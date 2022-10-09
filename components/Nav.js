import Link from "next/link";
import styles from "../styles/Nav.module.css";

export default function nav() {
  return (
    <main>
      <nav className={styles.Nav}>
        <Link href="/">
          <a className={styles.NavItem}>Home</a>
        </Link>
        <Link href="/about-us">
          <a className={styles.NavItem}>About</a>
        </Link>
        <Link href="/results">
          <a className={styles.NavItem}>Results</a>
        </Link>
      </nav>
    </main>
  );
}
