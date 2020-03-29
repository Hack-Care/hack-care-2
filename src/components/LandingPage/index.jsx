import React from "react";
import CONSTANTS from "../../constants";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";
import styles from "./landingpage.module.css";

const LandingPage = (landingPageProps) => {

  const { userEmail, setUserEmail } = landingPageProps;

  const handleLogout = () => {
    fetch(CONSTANTS.ENDPOINT.LOGOUT, {method: 'POST', headers: {
      "x-csrf-token": Cookies.get('x-csrf-token')
    }});
    setUserEmail(null);
  }

  return (
    <div className={styles.landingContainer}>
      <h1 className={styles.welcomeText}>Welcome to Hack-Care!</h1>
      <div className={styles.welcomeSubtitle}>Interested in sharing your knowledge or learning more about other topics on an interactive platform?</div>
      <div className={styles.buttonContainer}>
      <Link className={styles.homeButton + " btn btn-secondary"} to={"/SignUp"}>Sign up as new user</Link>
      <Link className={styles.homeButton + " btn btn-primary"} to={"/LogIn"}>Login as existing user</Link>
      </div>
    </div>
  );
}
export default LandingPage;
