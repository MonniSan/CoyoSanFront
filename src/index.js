import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Summary from "./views/summary";
import Settings from "./views/settings";
import Password from "./views/password";
import Startgame from "./containers/Stargame";
import PrivateRoute from "./containers/PrivateRoute";
import PrivateRedirect from "./containers/PrivateRedirect";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import rootReducer from "./core/rootReducer";
import rootSaga from "./core/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store;
if (process.env.NODE_ENV === "production") {
  store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));
} else {
  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
}

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <PrivateRedirect exact path="/" component={Home} />
        <PrivateRedirect exact path="/login" component={Login} />
        <PrivateRedirect exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/summary" component={Summary} />
        <PrivateRoute exact path="/settings" component={Settings} />
        <Route exact path="/password" component={Password} />
        <PrivateRoute exact path="/startgame" component={Startgame} />
        <Route>
          <h1>Error 404</h1>
        </Route>
      </Switch>
      <Footer />
    </Router>
  </Provider>,
  document.getElementById("root")
);
