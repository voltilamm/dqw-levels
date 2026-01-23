import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { Character, CharacterLevel } from "@/types/character";
import { JOBS } from "@/types/character";

type CharacterStore = {
  characters: [Character, Character, Character, Character];
  updateCharacterName: (index: number, name: string) => void;
  updateLevel: (charIndex: number, jobId: string, level: number) => void;
};

export const useCharacterStore = create<CharacterStore>()(
  immer(
    persist(
      (set) => ({
        characters: [
          {
            id: 1,
            name: "",
            levels: JOBS.map((job) => ({
              jobId: job.id,
              level: job.category === "basic" ? 1 : 0,
            })),
          },
          {
            id: 2,
            name: "",
            levels: JOBS.map((job) => ({
              jobId: job.id,
              level: job.category === "basic" ? 1 : 0,
            })),
          },
          {
            id: 3,
            name: "",
            levels: JOBS.map((job) => ({
              jobId: job.id,
              level: job.category === "basic" ? 1 : 0,
            })),
          },
          {
            id: 4,
            name: "",
            levels: JOBS.map((job) => ({
              jobId: job.id,
              level: job.category === "basic" ? 1 : 0,
            })),
          },
        ],
        updateCharacterName: (index, name) =>
          set((state) => {
            state.characters[index].name = name;
          }),
        updateLevel: (charIndex, jobId, level) =>
          set((state) => {
            const levelData = state.characters[charIndex].levels.find(
              (l: CharacterLevel) => l.jobId === jobId,
            );
            if (levelData) {
              levelData.level = level;
            }
          }),
      }),
      {
        name: "dqw-levels-characters",
      },
    ),
  ),
);
