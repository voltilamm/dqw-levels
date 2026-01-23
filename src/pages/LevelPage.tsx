import { CharacterNameInput } from "@/components/features/level/CharacterNameInput";
import { useCharacterStore } from "@/stores/useCharacterStore";
import { JOBS } from "@/types/character";
import { JobLevelInput } from "@/components/features/level/JobLevelInput";
import { JOB_MAX_LEVELS } from "@/types/character";
import styles from "./LevelPage.module.css";

export function LevelPage() {
  const characters = useCharacterStore((state) => state.characters);
  const updateCharacterName = useCharacterStore(
    (state) => state.updateCharacterName,
  );
  const updateLevel = useCharacterStore((state) => state.updateLevel);

  return (
    <div className={styles.container}>
      <div className={styles.charactersGrid}>
        {characters.map((character, charIndex) => (
          <div key={character.id} className={styles.characterColumn}>
            <CharacterNameInput
              value={character.name}
              onChange={(name) => updateCharacterName(charIndex, name)}
            />
            {JOBS.map((job) => {
              const levelData = character.levels.find(
                (l) => l.jobId === job.id,
              );
              const level = levelData?.level ?? 0;
              const maxLevel = JOB_MAX_LEVELS[job.category];

              return (
                <div key={job.id} className={styles.jobRow}>
                  <div className={styles.jobName} data-category={job.category}>
                    {job.name}
                  </div>
                  <JobLevelInput
                    value={level}
                    onChange={(newLevel) =>
                      updateLevel(charIndex, job.id, newLevel)
                    }
                    maxLevel={maxLevel}
                    minLevel={job.category === "basic" ? 1 : 0}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
