import { PlayPauseButton } from "./PlayPauseButton";
import { Display } from "./Display";
import { ResetButton } from "./ResetButton";
import { PointScoredButton } from "./PointScoredButton";
export default function App() {
  return (
    // fiiin achabab
    // jfdskkjkf
    // fasdjklfjkalsdjfklj
    <div>
      <Display />
      <div className="buttons-row">
        <h2>abdellah</h2>
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
