import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const mapDispatchToProps = state => ({
  token: state.auth.token
});

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        rest.token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default connect(mapDispatchToProps)(PrivateRoute);
