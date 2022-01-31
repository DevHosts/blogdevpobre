import styles from "../styles/navbar.module.css";

interface titleNavProps {
  title: string;
}

export default function Navbar(props: titleNavProps) {
  return <div className={styles.nav}>{props.title.toLocaleUpperCase()}</div>;
}
