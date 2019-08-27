const initialState = {
  items: [],
  isLoading: false,
  hasError: false
};
export const actionTypes = {
  LOAD_REQUEST: "SenseiTypes | Load request",
  LOAD_SUCCESS: "SenseiTypes | Load success",
  LOAD_FAILURE: "SenseiTypes | Load failure"
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_REQUEST:
      return { ...state, isLoading: true, hasError: false };
    case actionTypes.LOAD_SUCCESS:
      return { ...state, isLoading: false, items: action.payload };
    case actionTypes.LOAD_FAILURE:
      return { ...state, isLoading: false, hasError: false };
    default:
      return state;
  }
};

export default reducer;
