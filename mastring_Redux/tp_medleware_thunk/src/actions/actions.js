import * as type from "./typeActions";
import axios from "axios";

export const fetchUsersRequest = () => {
  return {
    type: type.FETCH_USERS_REQUESTED,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: type.FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: type.FETCH_USERS_FAILED,
    payload: error,
  };
};

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        setTimeout(()=>{
          dispatch(fetchUsersSuccess(users));
        }, 1000)
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
