import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Landing from './../../page/Landing';
import Login from './../../page/Login';
import Register from './../../page/Register';
import Subscribe from './../../page/Subscribe';

export default class Routers extends Component {
    render() {
        return(
            <>
                <Switch>
                    <Route exactpath="/dashboard" component={Landing}/>
                    {/* <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/subscribe" component={Subscribe}/> */}
                </Switch>
            </>
        )
    }
}

