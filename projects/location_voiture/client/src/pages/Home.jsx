import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser, logoutUser} from "../actions/authActions";

function Home() {
  console.log('render');
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.details);

  console.log('is authenticated:  - ', isAuthenticated );

  useEffect(() => {
    console.log('useEffect - from home');
    dispatch(verifyUser());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="container mt-4">
      {isAuthenticated ? (
        <div>
          <h3>you are Atuhorized -- {user.name}</h3>
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h3>{}</h3>
          <h3>Login Now</h3>
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        </div>
      )}
    </div>
  );
}

export default Home;
