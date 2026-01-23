import styles from "./JobLevelInput.module.css";

type JobLevelInputProps = {
  value: number;
  onChange: (value: number) => void;
  maxLevel: number;
  minLevel?: number;
};

export function JobLevelInput({
  value,
  onChange,
  maxLevel,
  minLevel = 0,
}: JobLevelInputProps) {
  const options = Array.from(
    { length: maxLevel - minLevel + 1 },
    (_, i) => i + minLevel,
  );

  return (
    <select
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className={styles.input}
    >
      {options.map((level) => (
        <option key={level} value={level}>
          {level}
        </option>
      ))}
    </select>
  );
}
