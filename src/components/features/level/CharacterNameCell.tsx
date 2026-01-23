import { memo } from "react";
import { useCharacterStore } from "@/stores/useCharacterStore";
import { CharacterNameInput } from "./CharacterNameInput";

type CharacterNameCellProps = {
  charIndex: number;
};

export const CharacterNameCell = memo(
  ({ charIndex }: CharacterNameCellProps) => {
    const name = useCharacterStore((state) => state.characters[charIndex].name);
    const updateCharacterName = useCharacterStore(
      (state) => state.updateCharacterName,
    );

    return (
      <CharacterNameInput
        value={name}
        onChange={(n) => updateCharacterName(charIndex, n)}
      />
    );
  },
);
