import { useCharacterStore } from "@/stores/useCharacterStore";
import { useMemo } from "react";
import styles from "./StatisticsPage.module.css";
import {
  getMaxTotalLevel,
  calcAllCharactersRemainingExp,
} from "@/utils/characterUtils";

export function StatisticsPage() {
  const characters = useCharacterStore((state) => state.characters);

  const maxLevel = getMaxTotalLevel();

  const totalLevel = useMemo(
    () =>
      characters.reduce(
        (sum, character) =>
          sum + character.levels.reduce((s, l) => s + l.level, 0),
        0,
      ),
    [characters],
  );

  const remainingExpMap = useMemo(
    () => calcAllCharactersRemainingExp(characters),
    [characters],
  );

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3>全キャラクターの合計レベル</h3>
        <p>
          {totalLevel} / {maxLevel}（最大）
        </p>
      </div>

      <div className={styles.section}>
        <h3>全職カンストまでの必要経験値</h3>
        {characters.map((character) => (
          <div key={character.id} className={styles.item}>
            <span>
              {character.name && character.name.trim().length > 0
                ? character.name
                : `キャラ${characters.indexOf(character) + 1}`}
            </span>
            <span className={styles.expValue}>
              {remainingExpMap[character.id].toLocaleString()} exp
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
