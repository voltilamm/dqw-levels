import styles from "./CharacterNameInput.module.css";

interface CharacterNameInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function CharacterNameInput({
  value,
  onChange,
}: CharacterNameInputProps) {
  return (
    <input
      type="text"
      placeholder="名前"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.input}
    />
  );
}
