import styles from "./TabNavigation.module.css";

type Tab = "levels" | "statistics" | "settings" | "about";

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
        レベル表
      </button>
      <button
        type="button"
        className={`${styles.tab} ${activeTab === "statistics" ? styles.active : ""}`}
        onClick={() => onTabChange("statistics")}
      >
        統計
      </button>
      <button
        type="button"
        className={`${styles.tab} ${activeTab === "settings" ? styles.active : ""}`}
        onClick={() => onTabChange("settings")}
      >
        設定
      </button>
      <button
        type="button"
        className={`${styles.tab} ${activeTab === "about" ? styles.active : ""}`}
        onClick={() => onTabChange("about")}
      >
        About
      </button>
    </nav>
  );
}
