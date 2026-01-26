import {
  JOBS,
  JOB_MAX_LEVELS,
  type Character,
  type JobCategory,
} from "@/types/character";
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

export function calcCharacterRemainingExpByCategory(
  character: Character,
  category: JobCategory,
): number {
  const categoryJobs = JOBS.filter((job) => job.category === category);
  const maxLevel = JOB_MAX_LEVELS[category];
  const expMap = expMapByCategory[category];

  return categoryJobs.reduce((sum, job) => {
    const levelData = character.levels.find((l) => l.jobId === job.id);
    const currentLevel = levelData?.level ?? (category === "basic" ? 1 : 0);

    const maxTotal = expMap.get(maxLevel) ?? 0;
    const currentTotal = expMap.get(currentLevel) ?? 0;

    return sum + (maxTotal - currentTotal);
  }, 0);
}

export function calcAllCharactersRemainingExp(
  characters: Character[],
): Record<
  number,
  { basic: number; advanced: number; special: number; total: number }
> {
  return characters.reduce(
    (acc, character) => {
      const basic = calcCharacterRemainingExpByCategory(character, "basic");
      const advanced = calcCharacterRemainingExpByCategory(
        character,
        "advanced",
      );
      const special = calcCharacterRemainingExpByCategory(character, "special");

      acc[character.id] = {
        basic,
        advanced,
        special,
        total: basic + advanced + special,
      };
      return acc;
    },
    {} as Record<
      number,
      { basic: number; advanced: number; special: number; total: number }
    >,
  );
}
