﻿import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import CreateClass from "./components/CreateClass";
import LogIn from "./components/User/Login";
import SignUp from "./components/User/SignUp";
import LandingPage from "./components/LandingPage"
import TopicSearch from "./components/TopicSearch/TopicSearch";
import CONSTANTS from './constants';
import User from "./components/User/User";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
    const [userEmail, setUserEmail] = useState(null);
    useEffect(() => {
      fetch(CONSTANTS.ENDPOINT.USER_EMAIL)
      .then(response => {
        response.text().then(email => {
          setUserEmail(email)
        }).catch(err => {
          console.log(err);
        });
      });
    });

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        userEmail || window.location.search.includes('routeFrom=Login')
          ? <Component {...props} userEmail = {userEmail}/>
          : <Redirect to='/Login' />
      )} />
    )

    return (
      <React.Fragment>
        <NavBar userEmail={userEmail} setUserEmail={setUserEmail} />
        <Switch>
          <Route exact path = "/" component = {() => 
            userEmail ? <TopicSearch /> : <LandingPage />
          } />
          <Route path = "/Login" component = { LogIn } />
          <Route path = "/SignUp" component = { SignUp } />
          <PrivateRoute path = "/User" component={ User } />
          <PrivateRoute path = "/CreateClass" component = { CreateClass } />
        </Switch>
      </React.Fragment>
    );
}

export default App;
