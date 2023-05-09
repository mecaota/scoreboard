import { PlayerScore } from '@molecules/scoreboard';
import { FC, useState } from 'react';

type Props = {
  onChange?: (player: PlayerScore) => void;
};

export const PlayerForm: FC<Props> = ({ onChange }) => {
  const [name, setName] = useState<string>('');
  const [positionNumber, setPositionNumber] = useState<number>(0);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onChange?.({ name, positionNumber: positionNumber });
      }}
    >
      <input
        type="number"
        max={9}
        value={positionNumber}
        onChange={(e) => setPositionNumber(Number(e.currentTarget.value))}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <input type="submit" value="反映" />
    </form>
  );
};
