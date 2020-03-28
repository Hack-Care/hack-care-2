import React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form id="sign-up-form" method="POST">
            <h3>Sign Up</h3>

            <input type="hidden" name="_csrf" value={Cookies.get("x-csrf-token")} />

            <div className="form-group row">
                <label className="col-md-2">First name</label>
                <div className="col-md-10">
                  <input type="text" name="firstName" className="form-control" placeholder="First name" />
                </div>
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" name="lastName" className="form-control" placeholder="Last name" />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" name="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered? <Link to={"/LogIn"}>Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;