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


export const registerUser = ()=>{
  return function (dispatch){
    dispatch(registerUserRequest());
    axios
    .post("http://localhost:3005/auth/register")
    .then((res)=>{
      if(res.data.message === 'Success'){
        dispatch(registerUserSuccess({name: 'abdellah', email: 'a@a.com'}));
      }else{
        dispatch(registerUserFailure(res.data.message));
      }
    })
    .catch((err)=> dispatch(registerUserFailure(err.response.data.error)))
  }
}




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

export const loginUser = () => {
  return function (dispatch) {
    dispatch(loginUserRequest());
    axios
      .post("http://localhost:3005/auth/login")
      .then((res) => {
        if (res.data.message === "Success") {
          dispatch(
            loginUserSuccess("user logined successfully", {
              name: "abdellah",
              email: "a@a.com",
            })
          );
        } else {
          dispatch(loginUserFailure(res.data.message));
        }
      })
      .catch((err) => dispatch(loginUserFailure(err.response.data.error)));
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
    dispatch(logoutUserRequest());
    axios
      .post("http://localhost:3005/auth/logout")
      .then((res) => {
        if (res.data.message === "Success") {
          dispatch(
            logoutUserSuccess("user logouted successfully", {
              name: "abdellah",
              email: "a@a.com",
            })
          );
        } else {
          dispatch(logoutUserFailure(res.data.message));
        }
      })
      .catch((err) => dispatch(logoutUserFailure(err.response.data.error)));
  };
};