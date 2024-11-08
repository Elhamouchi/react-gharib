import * as type from "../actions/typeActions";

const initialAuthState = {
  isAuthenticated: false,

  details: {
    id: false,
    name: false,
    email: "",
  },

  loading: false,
  error: null,
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    // register cases --------------------------

    case type.REGISTER_USER_REQUEST:
      return {
        ...initialAuthState,
        loading: true,
      };

    case type.REGISTER_USER_SUCCEEDED:
      return {
        ...initialAuthState,
        loading: false,
      };


    // login cases ----------------------------

    case type.LOGIN_USER_REQUEST:
      return {
        ...initialAuthState,
        loading: true,
      };

    case type.LOGIN_USER_SUCCEEDED:
      return {
        ...initialAuthState,
        isAuthenticated: true,
        details: {
          id: action.payload,
          name: false,
          email: "",
        },
      };

    // logout cases ----------------------------

    case type.LOGOUT_USER_REQUEST:
      return {
        ...initialAuthState,
        loading: true,
      };

    case type.LOGOUT_USER_SUCCEEDED:
      return {
        ...initialAuthState,
        isAuthenticated: false,
      };

    // logout register login faild case

    case type.LOGIN_USER_FAILED ||
      type.LOGOUT_USER_FAILED ||
      type.REGISTER_USER_FAILED:
      return {
        ...initialAuthState,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};


export default authReducer;