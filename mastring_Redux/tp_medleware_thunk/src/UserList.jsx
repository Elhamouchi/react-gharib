import { useSelector } from "react-redux";
import "./userList.css";

export default function ListFruits2() {
  const { users, loading, error } = useSelector((state) => ({
    users: state.users,
    loading: state.loading,
    error: state.error,
  }));

  console.log({
    users,
    loading,
    error,
  });

  return (
    <div className="fruits">
      <h5>Composant liste fruits 2</h5>
      {loading && "spinner"}

      {users.length !== 0 && error === "" && (
        <ul>
          {users.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      )}

      {error !== "" && error}
    </div>
  );
}
