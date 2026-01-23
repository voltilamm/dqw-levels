import styles from "./LoadingSpinner.module.css";

export function LoadingSpinner() {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner} />
    </div>
  );
}
