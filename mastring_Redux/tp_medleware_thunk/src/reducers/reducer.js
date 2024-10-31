import * as type from "../actions/typeActions";

const initialState = {
  loading: false,
  users: [],
  error: "",
};


const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case type.FETCH_USERS_REQUESTED:
      return {
        // ...state,
        loading: true,
        users: [],
        error: "",
      };
    case type.FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case type.FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
