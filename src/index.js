import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/home";
import Login from "./views/login";
import Signup from "./containers/Signup";
import Summary from "./views/summary";
import Settings from "./views/settings";
import Password from "./views/password";
import Startgame from "./views/startgame";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import rootReducer from "./core/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store;
if (process.env.NODE_ENV === "production") {
  store = createStore(rootReducer, compose());
} else {
  store = createStore(rootReducer, composeEnhancers());
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/summary" component={Summary} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/password" component={Password} />
        <Route exact path="/startgame" component={Startgame} />
        <Route>
          <h1>Error 404</h1>
        </Route>
      </Switch>
      <Footer />
    </Router>
  </Provider>,
  document.getElementById("root")
);
