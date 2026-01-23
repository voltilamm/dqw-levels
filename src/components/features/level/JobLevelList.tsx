import { memo } from "react";
import { JOBS } from "@/types/character";
import { useSettingsStore } from "@/stores/useSettingsStore";
import { JobLevelCell } from "./JobLevelCell";

type JobLevelListProps = {
  characterId: number;
};

export const JobLevelList = memo(({ characterId }: JobLevelListProps) => {
  const visibleCategories = useSettingsStore(
    (state) => state.visibleCategories,
  );

  const filteredJobs = JOBS.filter((job) => visibleCategories[job.category]);

  return (
    <>
      {filteredJobs.map((job) => (
        <JobLevelCell key={job.id} characterId={characterId} jobId={job.id} />
      ))}
    </>
  );
});

JobLevelList.displayName = "JobLevelList";
