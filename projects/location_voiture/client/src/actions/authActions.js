import * as type from "./typeActions";
import axios from "axios";


export const authRequest = () => {
  return {
    type: type.AUTH_USER_REQUEST,
  };
} 

// export const registerUserRequest = () => {
//   return {
//     type: type.REGISTER_USER_REQUEST,
//   };
// };

export const registerUserSuccess = (userData) => {
  return {
    type: type.REGISTER_USER_SUCCEEDED,
    payload: userData,
  };
};

export const registerUserFailure = (error) => {
  return {
    type: type.REGISTER_USER_FAILED,
    payload: error,
  };
};

export const registerUser = (values) => {
  return function (dispatch) {
    dispatch(authRequest());

    axios
      .post("http://localhost:3005/auth/register", values, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.data.message === "Success") {
          dispatch(registerUserSuccess());
        } else {
          dispatch(registerUserFailure(res.data.message));
        }
      })
      .catch((err) => {
        dispatch(registerUserFailure(err.response.data.error));
      });
  };
};

// export const loginUserRequest = () => {
//   return {
//     type: type.LOGIN_USER_REQUEST,
//   };
// };

export const loginUserSuccess = (userData) => {
  return {
    type: type.LOGIN_USER_SUCCEEDED,
    payload: userData,
  };
};

export const loginUserFailure = (error) => {
  return {
    type: type.LOGIN_USER_FAILED,
    payload: error,
  };
};

export const loginUser = (values) => {
  return function (dispatch) {
    dispatch(authRequest());
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:3005/auth/login", values)
      .then((res) => {
        if (res.data.message === "Success") {
          dispatch(
            loginUserSuccess(res.data.user)
          );
        } else {
          dispatch(loginUserFailure(res.data.message));
        }
      })
      .catch((err) => {
        console.log(err);
        // dispatch(loginUserFailure(err.response.data.error));
      });
  };
};

// export const logoutUserRequest = () => {
//   return {
//     type: type.LOGOUT_USER_REQUEST,
//   };
// };

export const logoutUserSuccess = (userData) => {
  return {
    type: type.LOGOUT_USER_SUCCEEDED,
    payload: userData,
  };
};

export const logoutUserFailure = (error) => {
  return {
    type: type.LOGOUT_USER_FAILED,
    payload: error,
  };
};

export const logoutUser = () => {
  return function (dispatch) {
    dispatch(authRequest());
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:3005/auth/logout")
      .then((res) => {
        if (res.data.message === "Success") {
          dispatch(
            logoutUserSuccess()
          );
        }
      })
      .catch((err) => dispatch(logoutUserFailure(err)));
  };
};

export const verifyUserRequest = () => {
  return {
    type: type.VERIFY_USER_AUTHENTICATION_REQUEST,
  };
};

export const verifyUserSuccess = (userData) => {
  return {
    type: type.VERIFY_USER_AUTHENTICATION_SUCCEEDED,
    payload: userData,
  };
};


export const verifyUserFailure = (error) => {
  return {
    type: type.VERIFY_USER_AUTHENTICATION_FAILED,
    payload: error,
  };
};

export const verifyUser = () => {
  return function (dispatch) {
    dispatch(verifyUserRequest);
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:3005/auth/")
      .then((res) => {
        console.log("response message: ", res.data.message);
        if (res.data.message === "Success") {
          dispatch(
            verifyUserSuccess(res.data.message)
          );
        } else {
          console.log("from else we don't know this user");
          console.log(res.data.Error);
          dispatch(verifyUserFailure(res.data.Error));
        }
      })
      .catch((err) => {
        console.log("from else we don't know this user");
        console.log(err);
        dispatch(verifyUserFailure(err.data.Error));
      });
  };
};




