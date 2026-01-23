import { memo } from "react";
import { JOBS } from "@/types/character";
import { useSettingsStore } from "@/stores/useSettingsStore";
import { JobLevelCell } from "./JobLevelCell";

type JobLevelListProps = {
  characterId: number;
};

export const JobLevelList = memo(({ characterId }: JobLevelListProps) => {
  const showBasicJobs = useSettingsStore((state) => state.showBasicJobs);
  const showAdvancedJobs = useSettingsStore((state) => state.showAdvancedJobs);
  const showSpecialJobs = useSettingsStore((state) => state.showSpecialJobs);

  const categoryFilter = {
    basic: showBasicJobs,
    advanced: showAdvancedJobs,
    special: showSpecialJobs,
  };

  const filteredJobs = JOBS.filter((job) => categoryFilter[job.category]);

  return (
    <>
      {filteredJobs.map((job) => (
        <JobLevelCell key={job.id} characterId={characterId} jobId={job.id} />
      ))}
    </>
  );
});
