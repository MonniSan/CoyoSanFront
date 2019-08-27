const initialState = {
  item: null,
  isLoading: false,
  hasError: false
};

export const actionTypes = {
  GOAL_REQUEST: "GOAL | Request",
  GOAL_SUCCESS: "GOAL | Success",
  GOAL_FAILURE: "GOAL | Failure",
  GOAL_UPDATE: "GOAL | Update",
  GOAL_UPDATE_SUCCESS: "GOAL | Update Success",
  GOAL_UPDATE_FAILURE: "GOAL | Update Failure",
  SAVING_SAVE_REQUEST: "GOAL | Saving Request",
  SAVING_SAVE_SUCCESS: "GOAL | Saving Success",
  SAVING_SAVE_FAILURE: "GOAL | Saving Failure"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GOAL_REQUEST:
      return { ...state, isLoading: true, hasError: false };
    case actionTypes.GOAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        item: action.payload
      };
    case actionTypes.GOAL_FAILURE:
      return { ...state, isLoading: false, hasError: true };
    case actionTypes.GOAL_UPDATE:
      return { ...state, isLoading: true, hasError: false };
    case actionTypes.GOAL_UPDATE_SUCCESS:
      return { ...state, isLoading: false, hasError: false };
    case actionTypes.GOAL_UPDATE_FAILURE:
      return { ...state, isLoading: false, hasError: true };
    case actionTypes.SAVING_SAVE_REQUEST:
      return { ...state, isLoading: false, hasError: false };
    case actionTypes.SAVING_SAVE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false
      };
    case actionTypes.SAVING_SAVE_FAILURE:
      return { ...state, isLoading: false, hasError: true };
    default:
      return state;
  }
};

export default reducer;
