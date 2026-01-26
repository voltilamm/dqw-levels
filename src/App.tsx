import { useState, useTransition } from "react";
import { LevelPage } from "./pages/LevelPage";
import { StatisticsPage } from "./pages/StatisticsPage";
import { SettingsPage } from "./pages/SettingsPage";
import { AppHeader } from "./components/common/AppHeader";
import { TabNavigation } from "./components/common/TabNavigation";
import { LoadingSpinner } from "./components/common/LoadingSpinner";
import "./App.css";
import { AboutPage } from "./pages/AboutPage";

type Tab = "levels" | "statistics" | "settings" | "about";

export function App() {
  const [activeTab, setActiveTab] = useState<Tab>("levels");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: Tab) => {
    if (tab === activeTab) return;
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  return (
    <div className="app">
      <AppHeader />
      <main className="main">
        {isPending && <LoadingSpinner />}
        <div
          className={`pageContainer ${activeTab === "levels" ? "" : "hidden"}`}
        >
          <LevelPage />
        </div>
        {activeTab === "statistics" && (
          <div className="pageContainer">
            <StatisticsPage />
          </div>
        )}
        {activeTab === "settings" && (
          <div className="pageContainer">
            <SettingsPage />
          </div>
        )}
        {activeTab === "about" && (
          <div className="pageContainer">
            <AboutPage />
          </div>
        )}
      </main>
      <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}
