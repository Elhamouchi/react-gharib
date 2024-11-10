import { useState } from "react";
import { useDispatch } from "react-redux";
import { adminAddVoiture } from "../actions/adminActions";
function Register() {
  const [values, setValues] = useState({
    mat: "",
    marque: "",
    model: "",
    color: "",
    nb_place: "",
    transmission: "",
  });

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const isAuthenticated = useSelector((state) => state.auth.isRegistered);
  // const regState = useSelector((state) => state.register)
  // console.log(regState);
  // console.log(isAuthenticated);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-white p-3 rounded w-25 border">
        <h2>Ajouter voiture</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(adminAddVoiture(values));
          }}
        >
          <div className="mb-3">
            <label htmlFor="mat" className="form-label">
              mat
            </label>
            <input
              type="text"
              className="form-control"
              id="mat"
              onChange={(e) => setValues({ ...values, mat: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="marque" className="form-label">
              marque
            </label>
            <input
              type="text"
              className="form-control"
              id="marque"
              aria-describedby="emailHelp"
              onChange={(e) => setValues({ ...values, marque: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="marque" className="form-label">
              model
            </label>
            <input
              type="text"
              className="form-control"
              id="model"
              aria-describedby="emailHelp"
              onChange={(e) => setValues({ ...values, model: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              color
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              onChange={(e) => setValues({ ...values, color: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nb_place" className="form-label">
              nb_place
            </label>
            <input
              type="number"
              className="form-control"
              id="nb_place"
              onChange={(e) =>
                setValues({ ...values, nb_place: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              transmission
            </label>
            <input
              type="text"
              className="form-control"
              id="transmission"
              onChange={(e) =>
                setValues({ ...values, transmission: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary rounded-2 ms-auto me-auto  w-100 rounded-0"
          >
            ajouter voiture
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
