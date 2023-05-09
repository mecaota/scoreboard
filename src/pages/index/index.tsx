import { styled } from '@linaria/react';
import { PlayerForm } from '@molecules/playerForm';
import { PlayerScore, Scoreboard } from '@molecules/scoreboard';
import { FC, memo, useCallback, useState } from 'react';

const AuroraVision = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const IndexPage: FC = memo(() => {
  const [leftPlayers, setLeftPlayers] = useState<PlayerScore[]>([]);
  const [rightPlayers, setRightPlayers] = useState<PlayerScore[]>([]);
  const setMergePlayers = useCallback(
    (player: PlayerScore, team: 'left' | 'right') => {
      const newPlayers = [...(team === 'left' ? leftPlayers : rightPlayers)];
      const index = newPlayers.findIndex((p) => p.name === player.name);
      if (index === -1) {
        newPlayers.push(player);
      } else {
        newPlayers[index] = player;
      }
      team === 'left'
        ? setLeftPlayers(newPlayers)
        : setRightPlayers(newPlayers);
    },
    [leftPlayers, rightPlayers],
  );
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello My page</p>
      </header>
      <main>
        <PlayerForm onChange={(v) => setMergePlayers(v, 'left')} />
        <PlayerForm onChange={(v) => setMergePlayers(v, 'right')} />
        <AuroraVision>
          <Scoreboard players={leftPlayers} />
          <p>ここに画面</p>
          <Scoreboard players={rightPlayers} />
        </AuroraVision>
      </main>
    </div>
  );
});
IndexPage.displayName = 'IndexPage';

export default IndexPage;
