import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logoutUser } from "../actions/authActions";


import { useEffect } from "react";
import { verifyUser} from "../actions/authActions";
function NavBar() {
  console.log("layout - component")
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  console.log("is authenticated: - ", isAuthenticated);

  useEffect(() => {
    console.log("useEffect - from layout"); 
    dispatch(verifyUser());

    console.log('after dispatsh: - ',  isAuthenticated);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);



  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand ms-auto">
            Logo
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    {/* <Link
                      onClick={handleLogout}
                      to="/addVoiture"
                      className="nav-link active btn btn-danger text-white fw-bolder"
                      aria-current="page"
                    >
                      Add voiture
                    </Link> */}

                    <Link
                      to="/addVoiture"
                      className="nav-link active btn btn-primary me-3 text-white fw-bolder"
                      aria-current="page"
                    >
                      Add voiture
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={handleLogout}
                      to="/login"
                      className="nav-link active btn btn-danger text-white fw-bolder"
                      aria-current="page"
                    >
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      to="/register"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/login"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer className="bg-dark text-white text-center py-3">
        <p>Contact us at: info@carrental.com | Follow us on social media</p>
        <div>
          <Link to="#" className="text-white me-3">
            Facebook
          </Link>
          <Link to="#" className="text-white me-3">
            Twitter
          </Link>
          <Link to="#" className="text-white">
            Instagram
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default NavBar;
