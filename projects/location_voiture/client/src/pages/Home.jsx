// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { verifyUser} from "../actions/authActions";
import '../style/home.css';
function Home() {
  // const dispatch = useDispatch();
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const user = useSelector((state) => state.auth.details);

  // console.log('is authenticated: - ', isAuthenticated );

  // useEffect(() => {
  //   console.log('useEffect - from home');
  //   dispatch(verifyUser(user));
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dispatch]);

  

  return (
    <div className="container mt-4">
      <section className="hero-image">
        <h1>Your Journey Starts Here</h1>
      </section>
    </div>
  );
}

export default Home;
