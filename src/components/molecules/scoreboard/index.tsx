import { styled } from '@linaria/react';
import type { FC } from 'react';

const ScoreTable = styled.div`
  border: 1px solid black;
  background-color: darkblue;
  width: 160px;
`;

const MemberRow = styled.div`
  display: flex;
  justify-content: stretch;
  gap: 8px;
  color: white;
  flex-direction: row;
  background-color: blue;
  padding: 4px;
  margin: 8px 0;
`;

const Name = styled.p`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export type PlayerScore = {
  name: string;
  positionNumber: number;
};

type Props = {
  players: PlayerScore[];
};

export const Scoreboard: FC<Props> = ({ players }) => {
  return (
    <ScoreTable>
      {players.map((player) => (
        <MemberRow key={player.name}>
          <p>{player.positionNumber}</p>
          <Name>{player.name}</Name>
        </MemberRow>
      ))}
    </ScoreTable>
  );
};
