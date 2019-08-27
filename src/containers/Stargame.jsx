import { connect } from "react-redux";
import { actionTypes as goalTypes } from "../core/goal/goal.reducer";
import stargame from "../views/startgame";

const mapStateToProps = state => ({
  token: state.auth.token || "",
  goal: state.goal.item || null,
  isLoading: state.goal.isLoading
});
const mapDispatchToProps = (dispatch, ownprops) => ({
  getGoal: token => dispatch({ type: goalTypes.GOAL_REQUEST, payload: token }),
  saveSaving: ({ amount, token }) =>
    dispatch({
      type: goalTypes.SAVING_SAVE_REQUEST,
      payload: { amount, token }
    }),
  goalUpdate: () => dispatch({ type: goalTypes.GOAL_UPDATE })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(stargame);
