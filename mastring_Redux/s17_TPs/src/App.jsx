import { PlayPauseButton } from "./PlayPauseButton";
import { Display } from "./Display";
import { ResetButton } from "./ResetButton";
import { PointScoredButton } from "./PointScoredButton";
export default function App() {
  return (
    <div>
      <Display />
      <div className="buttons-row">
        <PointScoredButton playerId="player1">Point Joueur 1</PointScoredButton>
        <PointScoredButton playerId="player2">Point Joueur 2</PointScoredButton>
      </div>
      <div className="buttons-row">
        <ResetButton />
        <PlayPauseButton />
      </div>
    </div>
  );
}
