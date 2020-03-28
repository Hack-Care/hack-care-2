import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Blank from "./components/Blank";
import Master_Detail from "./components/Master_Detail";
import List from "./components/List";
import Grid from "./components/Grid";
import LogIn from "./components/User/Login";
import SignUp from "./components/User/SignUp";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path = "/" component = { Blank } />
          <Route path = "/Master_Detail" component = { Master_Detail } />
          <Route path = "/List" component = { List } />
          <Route path = "/Grid" component = { Grid } />
          <Route path = "/Login" component = { LogIn } />
          <Route path = "/SignUp" component = { SignUp } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
}

export default App;
