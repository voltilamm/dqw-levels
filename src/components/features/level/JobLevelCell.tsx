import { memo, useCallback } from "react";
import { useCharacterStore } from "@/stores/useCharacterStore";
import { JOBS, JOB_MAX_LEVELS } from "@/types/character";
import { JobLevelInput } from "./JobLevelInput";
import styles from "./JobLevelCell.module.css";

type JobLevelCellProps = {
  characterId: number;
  jobId: string;
};

export const JobLevelCell = memo(
  ({ characterId, jobId }: JobLevelCellProps) => {
    const level = useCharacterStore(
      useCallback(
        (state) =>
          state.characters
            .find((c) => c.id === characterId)
            ?.levels.find((l) => l.jobId === jobId)?.level ?? 0,
        [characterId, jobId],
      ),
    );
    const updateLevel = useCharacterStore((state) => state.updateLevel);

    const job = JOBS.find((j) => j.id === jobId);
    if (!job) return null;

    const maxLevel = JOB_MAX_LEVELS[job.category];

    return (
      <div className={styles.jobRow}>
        <div className={styles.jobName} data-category={job.category}>
          {job.name}
        </div>
        <JobLevelInput
          value={level}
          onChange={(newLevel) => updateLevel(characterId, jobId, newLevel)}
          maxLevel={maxLevel}
          minLevel={job.category === "basic" ? 1 : 0}
        />
      </div>
    );
  },
);
