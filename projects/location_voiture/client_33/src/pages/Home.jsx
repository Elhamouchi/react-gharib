import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Home() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3005/auth/")
      .then((res) => {
        if (res.data.message === "Success") {
          setAuth(true);
          setName(res.data.name);
        } else {
          console.log(res);
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  });

  const handleLogout = () => {
    axios
      .get("http://localhost:3005/auth/logout")
      .then((res) => {
        if (res.data.message === "Success") {
          setAuth(false);
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mt-4">
      {auth ? (
        <div>
          <h3>you are Atuhorized -- {name}</h3>
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h3>{message}</h3>
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
