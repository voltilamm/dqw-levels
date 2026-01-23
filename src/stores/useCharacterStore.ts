import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { Character } from "@/types/character";
import { JOBS } from "@/types/character";

type CharacterStore = {
  characters: [Character, Character, Character, Character];
  updateCharacterName: (id: number, name: string) => void;
  updateLevel: (characterId: number, jobId: string, level: number) => void;
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
        updateCharacterName: (id, name) =>
          set((state) => {
            const character = state.characters.find((c) => c.id === id);
            if (character) {
              character.name = name;
            }
          }),
        updateLevel: (characterId, jobId, level) =>
          set((state) => {
            const character = state.characters.find(
              (c) => c.id === characterId,
            );
            if (character) {
              const levelData = character.levels.find((l) => l.jobId === jobId);
              if (levelData) {
                levelData.level = level;
              }
            }
          }),
      }),
      {
        name: "dqw-levels-characters",
      },
    ),
  ),
);
