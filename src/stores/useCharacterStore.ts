import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Character, Job } from "@/types/character";
import { JOBS } from "@/types/character";

type CharacterStore = {
  characters: [Character, Character, Character, Character];
  jobs: Job[];
  updateCharacterName: (index: number, name: string) => void;
  updateLevel: (charIndex: number, jobId: string, level: number) => void;
};

export const useCharacterStore = create<CharacterStore>()(
  persist(
    (set) => ({
      characters: [
        {
          name: "",
          levels: JOBS.map((job) => ({ jobId: job.id, level: 1 })),
        },
        {
          name: "",
          levels: JOBS.map((job) => ({ jobId: job.id, level: 1 })),
        },
        {
          name: "",
          levels: JOBS.map((job) => ({ jobId: job.id, level: 1 })),
        },
        {
          name: "",
          levels: JOBS.map((job) => ({ jobId: job.id, level: 1 })),
        },
      ],
      jobs: JOBS,
      updateCharacterName: (index, name) =>
        set((state) => {
          const newCharacters = [...state.characters] as [
            Character,
            Character,
            Character,
            Character,
          ];
          newCharacters[index] = { ...newCharacters[index], name };
          return { characters: newCharacters };
        }),
      updateLevel: (charIndex, jobId, level) =>
        set((state) => {
          const newCharacters = [...state.characters] as [
            Character,
            Character,
            Character,
            Character,
          ];
          const char = newCharacters[charIndex];
          if (char) {
            const newLevels = char.levels.map((l) =>
              l.jobId === jobId ? { ...l, level } : l,
            );
            newCharacters[charIndex] = { ...char, levels: newLevels };
          }
          return { characters: newCharacters };
        }),
    }),
    {
      name: "dqw-levels",
    },
  ),
);
