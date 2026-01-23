import { memo, useCallback } from "react";
import { useCharacterStore } from "@/stores/useCharacterStore";
import { CharacterNameInput } from "./CharacterNameInput";

type CharacterNameCellProps = {
  characterId: number;
};

export const CharacterNameCell = memo(
  ({ characterId }: CharacterNameCellProps) => {
    const name = useCharacterStore(
      useCallback(
        (state) =>
          state.characters.find((c) => c.id === characterId)?.name ?? "",
        [characterId],
      ),
    );
    const updateCharacterName = useCharacterStore(
      (state) => state.updateCharacterName,
    );

    return (
      <CharacterNameInput
        value={name}
        onChange={(n) => updateCharacterName(characterId, n)}
      />
    );
  },
);
