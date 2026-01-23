import { memo } from "react";
import { CharacterNameCell } from "./CharacterNameCell";
import { JobLevelList } from "./JobLevelList";
import styles from "./CharacterColumn.module.css";

type CharacterColumnProps = {
  charIndex: number;
};

export const CharacterColumn = memo(({ charIndex }: CharacterColumnProps) => {
  return (
    <div className={styles.characterColumn}>
      <CharacterNameCell charIndex={charIndex} />
      <JobLevelList charIndex={charIndex} />
    </div>
  );
});
