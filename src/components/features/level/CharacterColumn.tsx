import { memo } from "react";
import { CharacterNameCell } from "./CharacterNameCell";
import { JobLevelList } from "./JobLevelList";
import styles from "./CharacterColumn.module.css";

type CharacterColumnProps = {
  characterId: number;
};

export const CharacterColumn = memo(({ characterId }: CharacterColumnProps) => {
  return (
    <div className={styles.characterColumn}>
      <CharacterNameCell characterId={characterId} />
      <JobLevelList characterId={characterId} />
    </div>
  );
});
