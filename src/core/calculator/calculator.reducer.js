const initialState = {
  goal_name: "",
  goal_price: 0,
  goal_months: 6,
  isSubmitted: false
};

export const actionTypes = {
  SET_CALCULATOR: "Calculator | Set calculator values"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CALCULATOR:
      return { ...state, ...action.payload, isSubmitted: true };
    default:
      return state;
  }
};

export default reducer;
