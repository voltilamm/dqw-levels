import { create } from "zustand";
import { persist } from "zustand/middleware";

type SettingsStore = {
  showBasicJobs: boolean;
  showAdvancedJobs: boolean;
  showSpecialJobs: boolean;
  toggleBasicJobs: () => void;
  toggleAdvancedJobs: () => void;
  toggleSpecialJobs: () => void;
};

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      showBasicJobs: true,
      showAdvancedJobs: true,
      showSpecialJobs: true,
      toggleBasicJobs: () =>
        set((state) => ({ showBasicJobs: !state.showBasicJobs })),
      toggleAdvancedJobs: () =>
        set((state) => ({ showAdvancedJobs: !state.showAdvancedJobs })),
      toggleSpecialJobs: () =>
        set((state) => ({ showSpecialJobs: !state.showSpecialJobs })),
    }),
    {
      name: "dqw-levels-settings",
    },
  ),
);
