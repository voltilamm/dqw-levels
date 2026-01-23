import { useSettingsStore } from "@/stores/useSettingsStore";
import { JOB_CATEGORIES } from "@/types/character";
import styles from "./SettingsPage.module.css";

const CATEGORY_LABELS = {
  basic: "基本職を表示",
  advanced: "上級職を表示",
  special: "特級職を表示",
} as const;

export function SettingsPage() {
  const visibleCategories = useSettingsStore(
    (state) => state.visibleCategories,
  );
  const toggleCategory = useSettingsStore((state) => state.toggleCategory);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>表示設定</h2>
      <div className={styles.section}>
        {JOB_CATEGORIES.map((category) => (
          <label key={category} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={visibleCategories[category]}
              onChange={() => toggleCategory(category)}
              className={styles.checkbox}
            />
            <span className={styles.labelText}>
              {CATEGORY_LABELS[category]}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
