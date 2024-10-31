import { useDispatch } from "react-redux";
import { fetchUsers } from "./actions/actions";
import "./App.css";
import UserList from "./UserList";

export default function App2() {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h5>composant App</h5>
      <button
        onClick={() => {
          dispatch(fetchUsers());
        }}
      >
        Afficher
      </button>
      <UserList />
    </div>
  );
}
