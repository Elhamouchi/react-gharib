import * as type from "./typeActions";
import axios from "axios";

export const registerUserRequest = () => {
  return {
    type: type.REGISTER_USER_REQUEST,
  };
};

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
    console.log("dispatch request");
    dispatch(registerUserRequest());

    axios
      .post("http://localhost:3005/auth/register", values, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.data.message === "Success") {
          console.log("register successfuly");
          dispatch(registerUserSuccess());
        } else {
          console.log("register failed");
          dispatch(registerUserFailure(res.data.message));
        }
      })
      .catch((err) => {
        console.log("register failed");
        dispatch(registerUserFailure(err.response.data.error));
      });
  };
};

export const loginUserRequest = () => {
  return {
    type: type.LOGIN_USER_REQUEST,
  };
};

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
    dispatch(loginUserRequest());
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:3005/auth/login", values)
      .then((res) => {
        if (res.data.message === "Success") {
          dispatch(
            loginUserSuccess({
              id: 23,
              name: "abdellah",
              email: "a@a.com",
            })
          );
        } else {
          console.log("then error");
          dispatch(loginUserFailure(res.data.message));
        }
      })
      .catch((err) => {
        console.log("catch error");
        console.log(err);
        // dispatch(loginUserFailure(err.response.data.error));
      });
  };
};

export const logoutUserRequest = () => {
  return {
    type: type.LOGOUT_USER_REQUEST,
  };
};

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
    console.log("logout request");
    dispatch(logoutUserRequest());
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:3005/auth/logout")
      .then((res) => {
        if (res.data.message === "Success") {
          console.log("success");
          dispatch(
            logoutUserSuccess({ id: 23, name: "abdellah", email: "a@a.com" })
          );
        }
      })
      .catch((err) => dispatch(logoutUserFailure(err)));
  };
};

export const verifyUserRequest = () => {
  
      console.log("hi from verify requist");
  return {
    type: type.VERIFY_USER_AUTHENTICATION_REQUEST,
  };
};

export const verifyUserSuccess = (userData) => {
  console.log(" ----- hi from verify Success");
  return {
    type: type.VERIFY_USER_AUTHENTICATION_SUCCEEDED,
    payload: userData,
  };
};


export const verifyUserFailure = (error) => {
  console.log("---------- hi from verify failed");
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
          console.log("----- we know this user");
          dispatch(
            verifyUserSuccess(res.data.message, {
              name: "abdellah",
              email: "a@a.com",
            })
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
