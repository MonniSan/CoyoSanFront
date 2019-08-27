const initialState = {
  token: null,
  isLoading: false,
  hasError: true
};
export const actionTypes = {
  SIGNUP_REQUEST: "AUTH | signup request",
  SIGNIN_REQUEST: "AUTH | signin request",
  SIGNUP_SUCCESS: "AUTH | signup success",
  SIGNIN_SUCCESS: "AUTH | signin success",
  SIGNUP_FAILURE: "AUTH | signup failure",
  SIGNIN_FAILURE: "AUTH | signin failure"
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_REQUEST:
      return {
        ...state,
        hasError: false,
        isLoading: true
      };
    case actionTypes.SIGNIN_REQUEST:
      return {
        ...state,
        hasError: false,
        isLoading: true
      };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        token: action.payload,
        hasError: false,
        isLoading: false
      };
    case actionTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        hasError: false,
        isLoading: false
      };
    case actionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        token: action.payload,
        hasError: true,
        isLoading: false
      };
    case actionTypes.SIGNIN_FAILURE:
      return {
        ...state,
        token: action.payload,
        hasError: true,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
