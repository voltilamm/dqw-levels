import { useSettingsStore } from "@/stores/useSettingsStore";
import styles from "./SettingsPage.module.css";

export function SettingsPage() {
  const showBasicJobs = useSettingsStore((state) => state.showBasicJobs);
  const showAdvancedJobs = useSettingsStore((state) => state.showAdvancedJobs);
  const showSpecialJobs = useSettingsStore((state) => state.showSpecialJobs);
  const toggleBasicJobs = useSettingsStore((state) => state.toggleBasicJobs);
  const toggleAdvancedJobs = useSettingsStore(
    (state) => state.toggleAdvancedJobs,
  );
  const toggleSpecialJobs = useSettingsStore(
    (state) => state.toggleSpecialJobs,
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>表示設定</h2>
      <div className={styles.section}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={showBasicJobs}
            onChange={toggleBasicJobs}
            className={styles.checkbox}
          />
          <span className={styles.labelText}>基本職を表示</span>
        </label>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={showAdvancedJobs}
            onChange={toggleAdvancedJobs}
            className={styles.checkbox}
          />
          <span className={styles.labelText}>上級職を表示</span>
        </label>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={showSpecialJobs}
            onChange={toggleSpecialJobs}
            className={styles.checkbox}
          />
          <span className={styles.labelText}>特級職を表示</span>
        </label>
      </div>
    </div>
  );
}
