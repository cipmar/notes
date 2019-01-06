import React from "react";
import {Route, Switch} from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import NewNote from "./containers/NewNote";

export default ({childProps}) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps} />
        <AppliedRoute path="/login" component={Login} props={childProps} />
        <AppliedRoute path="/new" component={NewNote} props={childProps} />
        { /* Finally, catch all unmatched routes */ }
        <Route component={NotFound} />        
    </Switch>;