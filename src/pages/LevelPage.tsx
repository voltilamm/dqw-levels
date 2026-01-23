import { useCharacterStore } from "@/stores/useCharacterStore";
import { CharacterColumn } from "@/components/features/level/CharacterColumn";
import styles from "./LevelPage.module.css";

export function LevelPage() {
  const characters = useCharacterStore((state) => state.characters);

  return (
    <div className={styles.container}>
      <div className={styles.charactersGrid}>
        {characters.map((character) => (
          <CharacterColumn key={character.id} characterId={character.id} />
        ))}
      </div>
    </div>
  );
}
