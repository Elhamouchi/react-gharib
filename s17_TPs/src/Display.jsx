// on import useSelector depuis react-redux
import { useSelector } from "react-redux";
export function Display() {
  // on utilise useSelector avec en paramètre une fonction
  // qui permet de récupérer uniquement la propriété `playing`
  // du state
  const gameIsPlaying = useSelector((state) => state.playing);
  const winner = useSelector((state) => state.winner);
  const player1Score = useSelector((state) => state.player1);
  const player2Score = useSelector((state) => state.player2);
  const advantage = useSelector((state) => state.advantage);
  if (winner) {
    if (winner === "player1") {
      return <p className="display">Joueur 1 gagne</p>;
    } else {
      return <p className="display">Joueur 2 gagne</p>;
    }
  } else if (gameIsPlaying === false) {
    return <p className="display"> C&apos;est la pause</p>;
  } else {
    let text = "Le score est: " + player1Score + " - " + player2Score;
    if (advantage) {
      if (advantage === "player1") {
        text += " avantage joueur 1";
      } else {
        text += " avantage joueur 2";
      }
    }
    return <p className="display">{text}</p>;
  }
}
