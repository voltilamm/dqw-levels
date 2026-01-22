import { useForm } from "react-hook-form";

import { CharacterNameInput } from "@/components/features/level/CharacterNameInput";
import styles from "./LevelPage.module.css";

interface LevelFormData {
  characterNames: string[];
}

export function LevelPage() {
  const { register } = useForm<LevelFormData>({
    defaultValues: {
      characterNames: ["", "", "", ""],
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <CharacterNameInput register={register("characterNames.0")} />
        <CharacterNameInput register={register("characterNames.1")} />
        <CharacterNameInput register={register("characterNames.2")} />
        <CharacterNameInput register={register("characterNames.3")} />
      </div>
    </div>
  );
}
