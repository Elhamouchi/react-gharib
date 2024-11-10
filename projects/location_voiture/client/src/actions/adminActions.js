import * as type from "./typeActions";
import axios from "axios";

export const adminVoitureMajrequest = () => {
  return {
    type: type.ADMIN_voiture_MAJ_REQUEST,
  };
};

export const adminAddvoitureSuccess = (carData) => {
  return {
    type: type.ADMIN_ADD_CAR_SUCCESS,
    payload: carData,
  };
};

export const adminAddvoitureFailed = (error) => {
  return {
    type: type.ADMIN_ADD_CAR_FAILED,
    payload: error,
  };
};

export const adminAddVoiture = (values) => {
  return function (dispatch) {
    dispatch(adminVoitureMajrequest(values));
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:3005/admin/add", values)
      .then((res) => {
        if (res.data.message === "Success") {
          dispatch(adminAddvoitureSuccess(res.data.car));
        } else {
          dispatch(adminAddvoitureFailed(res.data.message));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
