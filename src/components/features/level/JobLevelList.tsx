import { memo } from "react";
import { JOBS } from "@/types/character";
import { JobLevelCell } from "./JobLevelCell";

type JobLevelListProps = {
  charIndex: number;
};

export const JobLevelList = memo(({ charIndex }: JobLevelListProps) => {
  return (
    <>
      {JOBS.map((job) => (
        <JobLevelCell key={job.id} charIndex={charIndex} jobId={job.id} />
      ))}
    </>
  );
});
