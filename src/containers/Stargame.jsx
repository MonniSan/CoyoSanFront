import { connect } from "react-redux";
import { actionTypes as goalTypes } from "../core/goal/goal.reducer";
import stargame from "../views/startgame";

const mapStateToProps = state => ({
  token: state.auth.token || "",
  goal: state.goal.item || null
});
const mapDispatchToProps = dispatch => ({
  getGoal: token => dispatch({ type: goalTypes.GOAL_REQUEST, payload: token })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(stargame);
