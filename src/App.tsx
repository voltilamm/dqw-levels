import { useState, useTransition } from "react";
import { LevelPage } from "./pages/LevelPage";
import { SettingsPage } from "./pages/SettingsPage";
import { TabNavigation } from "./components/common/TabNavigation";
import { LoadingSpinner } from "./components/common/LoadingSpinner";
import "./App.css";

type Tab = "levels" | "settings";

export function App() {
  const [activeTab, setActiveTab] = useState<Tab>("levels");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: Tab) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  return (
    <div className="app">
      <main className="main">
        {isPending && <LoadingSpinner />}
        <div
          className={`pageContainer ${activeTab === "levels" ? "" : "hidden"}`}
        >
          <LevelPage />
        </div>
        <div
          className={`pageContainer ${activeTab === "settings" ? "" : "hidden"}`}
        >
          <SettingsPage />
        </div>
      </main>
      <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}
