import styles from "./AppHeader.module.css";

export function AppHeader() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>DQWレベル管理</h1>
    </header>
  );
}
