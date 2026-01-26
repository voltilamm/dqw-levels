import { JOBS, JOB_MAX_LEVELS, type Character } from "@/types/character";
import {
  advancedExpMap,
  basicExpMap,
  specialExpMap,
} from "@/constants/expMaps";

export function getMaxTotalLevel(): number {
  return 4 * JOBS.reduce((sum, job) => sum + JOB_MAX_LEVELS[job.category], 0);
}

const expMapByCategory: Record<string, Map<number, number>> = {
  basic: basicExpMap,
  advanced: advancedExpMap,
  special: specialExpMap,
};

export function calcCharacterRemainingExp(character: Character): number {
  return JOBS.reduce((sum, job) => {
    const expMap = expMapByCategory[job.category];
    if (!expMap) return sum;

    const maxLevel = JOB_MAX_LEVELS[job.category];
    const maxTotal = expMap.get(maxLevel) ?? 0;

    const levelData = character.levels.find((l) => l.jobId === job.id);
    const currentLevel = levelData?.level ?? 1;
    const currentTotal = expMap.get(currentLevel) ?? 0;

    return sum + (maxTotal - currentTotal);
  }, 0);
}

export function calcAllCharactersRemainingExp(
  characters: Character[],
): Record<number, number> {
  return characters.reduce(
    (acc, character) => {
      acc[character.id] = calcCharacterRemainingExp(character);
      return acc;
    },
    {} as Record<number, number>,
  );
}
