import styles from "./TabNavigation.module.css";

type Tab = "levels" | "settings";

type TabNavigationProps = {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
};

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <nav className={styles.nav}>
      <button
        type="button"
        className={`${styles.tab} ${activeTab === "levels" ? styles.active : ""}`}
        onClick={() => onTabChange("levels")}
      >
        レベル管理
      </button>
      <button
        type="button"
        className={`${styles.tab} ${activeTab === "settings" ? styles.active : ""}`}
        onClick={() => onTabChange("settings")}
      >
        設定
      </button>
    </nav>
  );
}
