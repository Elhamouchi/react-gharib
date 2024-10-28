import { useSelector } from "react-redux";
import "./listFruits.css";

export default function ListFruits2() {
  const { users, loading, error } = useSelector((state) => {
    if (!state) {
      return {
        loading: false,
        users: [],
        error: "",
      };;
    }
    return {
      users: state.users,
      loading: state.loading,
      error: state.error,
    };
  });

  console.log({
    users,
    loading,
    error,
  });

  if (!users) {
    return null;
  }

  return (
    <div className="fruits">
      <h5>Composant liste fruits 2</h5>
      <ul>
        {users.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
