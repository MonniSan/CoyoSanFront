import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/home';
import Login from './views/login';
import Signup from './views/signup';
import Summary from './views/summary';
import Settings from './views/settings';
import Password from './views/password';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/summary" component={Summary} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/password" component={Password} />
            <Route>
                <h1>Error 404</h1>
            </Route>
        </Switch>
        <Footer/>
    </Router>, 
    document.getElementById('root')
);


