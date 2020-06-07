import React, { Component } from "react";
import RegisterController from "../../controller/RegisterController";
import { Link } from "react-router-dom";
import "./RegisterView.css";

class RegisterView extends Component {
  state = {
    userName: [],
    email: [],
    password: [],
    confirmPassword: [],
    phoneNumber: [],
  };
  getData = (e) => {
    e.preventDefault();
    const userName = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    console.log("Data: " + userName + "" + email);
    this.setState({
      userName: userName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      phoneNumber: phoneNumber,
    });
  };
  render() {
    return (
      <div>
        <div className="signup-form">
          <form onSubmit={this.getData}>
            <h2>Sign Up</h2>
            <p>Please fill in this form to create an account!</p>
            <hr />
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-user"></i>
                </span>
                <input
                  id="username"
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  required="required"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-paper-plane"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  //   onChange={this.handleChange}
                  id="email"
                  placeholder="Email Address"
                  required="required"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  //   onChange={this.handleChange}
                  placeholder="Password"
                  required="required"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon"></span>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  // onInput ={passwordChecking}
                  placeholder="Confirm Password"
                  required="required"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon"></span>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  //   onChange={this.handleChange}
                  pattern="[0-9]{10}"
                  placeholder="0XXXXXXXXX"
                  required="required"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="checkbox-inline">
                <input type="checkbox" required="required" /> I accept the
                <Link to="/">Terms of Use</Link> &amp;
                <Link to="/">Privacy Policy</Link>
              </label>
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-lg">Sign Up</button>
            </div>
          </form>
          <RegisterController
            data={{
              userName: this.state.userName,
              email: this.state.email,
              password: this.state.password,
              confirmPassword: this.state.confirmPassword,
              phoneNumber: this.state.phoneNumber,
            }}
          />
          <div className="text-center">
            Already have an account?
            <Link to="/">Login here</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterView;
