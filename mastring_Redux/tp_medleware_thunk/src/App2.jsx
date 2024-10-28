import { useDispatch } from "react-redux";
import { fetchUsers } from "./actions/actionsFruit";
import "./App.css";
import UserList from "./ListFruits2";

export default function App2() {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h5>composant App 2</h5>
      <button
        onClick={() => {
          dispatch(fetchUsers());
        }}
      >
        Afficher
      </button>
      <UserList />
      {/* <button onClick={() => dispatch(vider_panier())}>vider liste</button> */}
    </div>
  );
}
