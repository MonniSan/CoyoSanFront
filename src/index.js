import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Header from './components/Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


ReactDOM.render(
    <Router>
        <Header>
        </Header>
    </Router>, 
    document.getElementById('root')
);


