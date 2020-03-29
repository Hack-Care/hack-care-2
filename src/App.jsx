import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import CreateClass from "./components/CreateClass";
import CreateSeries from "./components/CreateSeries";
import Master_Detail from "./components/Master_Detail";
import List from "./components/List";
import Grid from "./components/Grid";
import LogIn from "./components/User/Login";
import SignUp from "./components/User/SignUp";
import LandingPage from "./components/LandingPage"
import { TopicSearch } from "./components/topicSearch/TopicSearch";
import CONSTANTS from './constants';

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
        userEmail
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
          <Route path = "/Search" component = { TopicSearch } />
          <Route path = "/Master_Detail" component = { Master_Detail } />
          <PrivateRoute path = "/List" component = { List } />
          <PrivateRoute path = "/Grid" component = { Grid } />
          <Route path = "/Login" component = { LogIn } />
          <Route path = "/SignUp" component = { SignUp } />
          <PrivateRoute path = "/CreateClass" component = { CreateClass } />
          <PrivateRoute path = "/CreateSeries" component = {CreateSeries }/>
        </Switch>
      </React.Fragment>
    );
}

export default App;
