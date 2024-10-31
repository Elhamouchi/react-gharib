import { useSelector } from "react-redux";
import "./userList.css";

export default function ListFruits2() {

  const users = useSelector((state)=> {
    return state.users;
  })
  const loading = useSelector((state) => {
    return state.loading;
  });
  const error = useSelector((state) => {
    return state.error;
  });

  // const { users, loading, error } = useSelector((state) => ({
  //   users: state.users,
  //   loading: state.loading,
  //   error: state.error,
  // }));

  console.log({
    users,
    loading,
    error,
  });

  return (
    <div className="fruits">
      <h5>Composant liste fruits 2</h5>
      {loading && <span className="loader"></span>}

      {users.length > 0 && error === "" && (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      )}

      {error !== "" && error}
    </div>
  );
}
