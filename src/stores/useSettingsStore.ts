import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { JobCategory } from "@/types/character";

type SettingsStore = {
  visibleCategories: Record<JobCategory, boolean>;
  toggleCategory: (category: JobCategory) => void;
};

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      visibleCategories: {
        basic: true,
        advanced: true,
        special: true,
      },
      toggleCategory: (category) =>
        set((state) => ({
          visibleCategories: {
            ...state.visibleCategories,
            [category]: !state.visibleCategories[category],
          },
        })),
    }),
    {
      name: "dqw-levels-settings",
    },
  ),
);
