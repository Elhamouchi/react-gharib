import * as type from "../actions/typeActions";

const admineInitialStateState = {
  loading: false,
  error: null,
};

export const voiture_MAJ = (state = admineInitialStateState, action) => {
  switch (action.type) {
    case type.ADMIN_voiture_MAJ_REQUEST:
      return {
        ...admineInitialStateState,
        loading: true,
      };
    case type.ADMIN_ADD_CAR_SUCCESS:
      return {
        ...admineInitialStateState,
        loading: false,
      };

    case type.ADMIN_ADD_CAR_FAILED:
      return {
        ...admineInitialStateState,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};


