import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Landing from './../../page/Landing';
import Login from './../../page/Login';
import Register from './../../page/Register';
import Subscribe from './../../page/Subscribe';
import User from './../../page/User';

export default class Routers extends Component {
    render() {
        return(
            <>
                <Switch>
                    <Route path="/" component={Landing}/>
                    <Route path="/user" component={User}/>
                    {/* <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/subscribe" component={Subscribe}/> */}
                </Switch>
            </>
        )
    }
}

