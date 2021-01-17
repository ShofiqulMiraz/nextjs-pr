import Link from "next/link";
import styles from "./nav.module.scss";

export default function NavBar() {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <a>Register</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
