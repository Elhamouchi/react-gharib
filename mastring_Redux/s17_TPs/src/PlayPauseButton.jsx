import { useDispatch } from "react-redux";
import { playPause } from "./store";
export function PlayPauseButton() {
  const dispatch = useDispatch();
  return (
    <button
      className="button"
      onClick={() => {
        dispatch(playPause());
      }}
    >
      {" "}
      Pause / Reprendre
    </button>
  );
}
