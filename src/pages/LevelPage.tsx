import { CharacterNameInput } from "@/components/features/level/CharacterNameInput";
import { useCharacterStore } from "@/stores/useCharacterStore";
import styles from "./LevelPage.module.css";

export function LevelPage() {
  const characters = useCharacterStore((state) => state.characters);
  const updateCharacterName = useCharacterStore(
    (state) => state.updateCharacterName,
  );

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <CharacterNameInput
          value={characters[0]?.name ?? ""}
          onChange={(name) => updateCharacterName(0, name)}
        />
        <CharacterNameInput
          value={characters[1]?.name ?? ""}
          onChange={(name) => updateCharacterName(1, name)}
        />
        <CharacterNameInput
          value={characters[2]?.name ?? ""}
          onChange={(name) => updateCharacterName(2, name)}
        />
        <CharacterNameInput
          value={characters[3]?.name ?? ""}
          onChange={(name) => updateCharacterName(3, name)}
        />
      </div>
    </div>
  );
}
