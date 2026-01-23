import { memo } from "react";
import { JOBS } from "@/types/character";
import { useSettingsStore } from "@/stores/useSettingsStore";
import { JobLevelCell } from "./JobLevelCell";

type JobLevelListProps = {
  charIndex: number;
};

export const JobLevelList = memo(({ charIndex }: JobLevelListProps) => {
  const { showBasicJobs, showAdvancedJobs, showSpecialJobs } = useSettingsStore(
    (state) => ({
      showBasicJobs: state.showBasicJobs,
      showAdvancedJobs: state.showAdvancedJobs,
      showSpecialJobs: state.showSpecialJobs,
    }),
  );

  const categoryFilter = {
    basic: showBasicJobs,
    advanced: showAdvancedJobs,
    special: showSpecialJobs,
  };

  const filteredJobs = JOBS.filter((job) => categoryFilter[job.category]);

  return (
    <>
      {filteredJobs.map((job) => (
        <JobLevelCell key={job.id} charIndex={charIndex} jobId={job.id} />
      ))}
    </>
  );
});
