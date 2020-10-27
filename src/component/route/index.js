import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Landing from './../../page/Landing';

export default class Routers extends Component {
    render() {
        return(
            <>
                <Switch>
                    <Route exactpath="/dashboard" component={Landing}/>
                </Switch>
            </>
        )
    }
}

