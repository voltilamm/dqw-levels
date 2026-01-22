import type { UseFormRegisterReturn } from "react-hook-form";

import styles from "./CharacterNameInput.module.css";

interface CharacterNameInputProps {
  register: UseFormRegisterReturn;
}

export function CharacterNameInput({ register }: CharacterNameInputProps) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="名前"
      {...register}
    />
  );
}
