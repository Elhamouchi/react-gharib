import { createStore } from "redux";
// state
const initialState = {
player1: 0,
player2: 0,
advantage: null,
winner: null,
playing: true,
};
// actions creators
export const playPause = () => ({ type: "playPause" });
export const restartGame = () => ({ type: "restart" });
export const pointScored = (player) => ({
type: "pointScored",
payload: { player: player },
});
function reducer(state = initialState, action) {
  if (action.type === "restart") {
    return initialState;
  }
  if (action.type === "playPause") {
    if (state.winner) {
      return state;
    }
    return {
      ...state,
      playing: !state.playing,
    };
  }
  if (action.type === "pointScored") {
    const player = action.payload.player;
    const otherPlayer = player === "player1" ? "player2" : "player1";
    if (state.winner) {
      // On ne peut pas marquer de point si le set est terminé
      return state;
    }
    if (state.playing === false) {
      // On ne peut pas marquer de point si le set est en pause
      return state;
    }
    const currentPlayerScore = state[player];
    if (currentPlayerScore <= 15) {
      // 0 ou 15 => on ajoute 15
      return { ...state, [player]: currentPlayerScore + 15 };
    }
    if (currentPlayerScore === 30) {
      return { ...state, [player]: 40 };
    }
    if (currentPlayerScore === 40) {
      if (state[otherPlayer] !== 40) {
        // Le joueur à gagné
        return { ...state, winner: player };
      }
      if (state.advantage === player) {
        // Le joueur à gagné
        return { ...state, winner: player };
      }
      if (state.advantage === null) {
        // Le joueur a maintenant l'avantage
        return { ...state, advantage: player };
      }
      // L'autre joueur a perdu l'avantage
      return { ...state, advantage: null };
    }
  }
  return state;
}
export const store = createStore(reducer);