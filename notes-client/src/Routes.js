import React from "react";
import {Route, Switch} from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default ({childProps}) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps} />
        <UnauthenticatedRoute  path="/login" component={Login} props={childProps} />
        <AuthenticatedRoute path="/new" component={NewNote} props={childProps} />
        <AuthenticatedRoute path="/:id" component={Notes} props={childProps} />
        { /* Finally, catch all unmatched routes */ }
        <Route component={NotFound} />        
    </Switch>;