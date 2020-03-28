import React from 'react';
import Cookies from 'js-cookie';
import CONSTANTS from '../../constants';

const LogIn = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <form id="sign-in-form" action={CONSTANTS.ENDPOINT.LOGIN} method="POST">
            <h3>Sign In</h3>

            <input type="hidden" name="_csrf" value={Cookies.get("x-csrf-token")} />

            <div className="form-group">
                <label>Email address</label>
                <input type="email" name="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                Forgot password?
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn;