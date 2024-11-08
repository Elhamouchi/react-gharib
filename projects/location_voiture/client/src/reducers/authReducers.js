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
    case type.AUTH_USER_REQUEST:
      return {
        ...initialRegisterState,
        loading: true,
      };

    // login cases ----------------------------

    case type.LOGIN_USER_SUCCEEDED:
      console.log("authReducer case: LOGIN_USER_SUCCEEDED");
      return {
        ...initialAuthState,
        isAuthenticated: true,
        isRegistered: true,
        details: {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
        },
      };

    // logout cases ----------------------------

    case type.LOGOUT_USER_SUCCEEDED:
      console.log("authReducer case: LOGOUT_USER_SUCCEEDED");
      return {
        ...initialAuthState,
        isAuthenticated: false,
      };

    // logout register login faild case

    case type.LOGIN_USER_FAILED || type.LOGOUT_USER_FAILED:
      console.log("authReducer case: LOGIN_USER_FAILED || LOGOUT_USER_FAILED");
      return {
        ...initialAuthState,
        loading: false,
        error: action.error,
      };

    // verify user cases
    case type.VERIFY_USER_AUTHENTICATION_REQUEST:
      console.log("authReducer case: VERIFY_USER_AUTHENTICATION_REQUEST");
      return {
        ...state,
        loading: true,
      };

    case type.VERIFY_USER_AUTHENTICATION_SUCCEEDED:
      console.log("authReducer case: VERIFY_USER_AUTHENTICATION_SUCCEEDED");
      console.log(state);
      return {
        ...initialAuthState,
        isAuthenticated: true,
        loading: false,
        ditails: {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
        },
      };

    case type.VERIFY_USER_AUTHENTICATION_FAILED:
      console.log("authReducer case: VERIFY_USER_AUTHENTICATION_FAILED");
      return initialAuthState;

    // case type.LOGIN_USER_REQUEST:
    //   console.log("authReducer case: LOGIN_USER_REQUEST");
    //   return {
    //     ...initialAuthState,
    //     loading: true,
    //   };

    // case type.LOGOUT_USER_REQUEST:
    //   console.log("authReducer case: LOGOUT_USER_REQUEST");
    //   return {
    //     ...initialAuthState,
    //     loading: true,
    //   };

    default:
      return state;
  }
};

//  ===========================================================

const initialRegisterState = {
  isRegistered: false,
  error: "",
  loading: false
};

const registerReducer = (state = initialRegisterState, action) => {
  switch (action.type) {
    
    case type.REGISTER_USER_REQUEST:
      
      console.log("authReducer case: REGISTER_USER_REQUEST");
      return {
        ...initialRegisterState,
        loading: true,
      };

    case type.REGISTER_USER_SUCCEEDED:
      console.log("authReducer case: REGISTER_USER_SUCCEEDED");
      return {
        ...initialRegisterState,
        loading: false,
        isRegistered: true,
      };
    case type.REGISTER_USER_FAILED:
      console.log("authReducer case: REGISTER_USER_SUCCEEDED");
      return {
        ...initialRegisterState,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export {authReducer, registerReducer};