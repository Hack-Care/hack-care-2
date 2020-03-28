import React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../constants';

const SignUp = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form id="sign-up-form" action={CONSTANTS.ENDPOINT.SIGN_UP} method="POST">
            <h3>Sign Up</h3>

            <input type="hidden" name="_csrf" value={Cookies.get("x-csrf-token")} />

            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img className="card-img-top" src="http://via.placeholder.com/300x300.png" alt="Profile" />
                  <div className="card-body mx-auto">
                    <button className="btn btn-primary disabled" disabled>Upload</button>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group row">
                  <label className="col-md-3 text-right">First name</label>
                  <div className="col-md-9">
                    <input type="text" name="firstName" className="form-control" placeholder="First name" />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-md-3 text-right">Last name</label>
                  <div className="col-md-9">
                    <input type="text" name="lastName" className="form-control" placeholder="Last name" />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-md-3 text-right">Title</label>
                  <div className="col-md-4">
                  <select className="form-control" id="title" name="title">
                    <option value="">Select...</option>
                    <option value="MR">Mr.</option>
                    <option value="MRS">Mrs.</option>
                    <option value="MISS">Miss</option>
                    <option value="DR">Dr.</option>
                    <option value="MDM">Mdm.</option>
                    <option value="MS">Ms.</option>
                  </select>
                  </div>
                </div>
                
                <div className="form-group row">
                  <label className="col-md-3 text-right">Email address</label>
                  <div className="col-md-9">
                    <input type="email" name="email" className="form-control" placeholder="Enter email" />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-md-3 text-right">Password</label>
                  <div className="col-md-9">
                    <input type="password" name="password" className="form-control" placeholder="Enter password" />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-md-3 text-right">Confirm Password</label>
                  <div className="col-md-9">
                    <input type="password" name="confirmPassword" className="form-control" placeholder="Enter password again" />
                  </div>
                </div>

                <div className="form-group row">
                  <label className="col-md-3 text-right">Job title</label>
                  <div className="col-md-9">
                    <input type="text" name="occupation" className="form-control" placeholder="Technical Project Manager" />
                  </div>
                </div>
                
              </div>
            </div>

            <div className="form-group row">
              <label className="col-md-6 text-right">Quick self introduction (optional)</label>
              <div className="col-md-6">
                <textarea type="text" name="intro" className="form-control" placeholder="About myself" />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-md-6 text-right">Please check where applicable. <br/> Are you interested to be</div>
              <div className="col-md-6">
                <div className="form-check form-check-inline">
                  <input name="interests" className="form-check-input" type="checkbox" value="instructor" id="instructor" />
                  <label className="form-check-label">
                    Instructor
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input name="interests" className="form-check-input" type="checkbox" value="student" id="student" />
                  <label className="form-check-label">
                    Student
                  </label>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <Link className="btn btn-secondary mr-2" to='/'>Cancel</Link>
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
            
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