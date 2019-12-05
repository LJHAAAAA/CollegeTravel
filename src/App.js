import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './container/Login';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Login} />
            </Router>
        )
    }
}