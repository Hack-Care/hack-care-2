﻿import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
const NavBar = () => {
  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>
      <nav className="navbar navbar-expand-sm navbar-light border-bottom justify-content-between">
        <Link className="navbar-brand" to="/">
          hack_care_2
        </Link>
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">
            Blank
          </Link>
          <Link className="nav-item nav-link active" to="Master_Detail">
            Master_Detail
          </Link>
          <Link className="nav-item nav-link active" to="List">
            List
          </Link>
          <Link className="nav-item nav-link active" to="Grid">
            Grid
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="userAccountLogin">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/LogIn"}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/SignUp"}>Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}
export default NavBar;
