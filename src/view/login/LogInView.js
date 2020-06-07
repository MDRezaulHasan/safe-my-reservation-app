import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogInController from "../../controller/LogInController";
import "./LogInView.css";

class LogInView extends Component {
  state = {
    email: " ",
    password: " ",
  };
  getData = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("Data: " + email + "  " + password);
    this.setState({
      email: email,
      password: password,
    });
  };
  render() {
    return (
      <div>
        <div className="login-page">
          <div className="form">
            <form className="login-form" onSubmit={this.getData}>
              <input id="email" type="email" placeholder="email address" />
              <input id="password" type="password" placeholder="password" />

              <div className="form-group row">
                <div className="col-md-6">
                  <button className="btn btn-primary btn-lg">login</button>
                </div>
              </div>
              <p className="message">
                Not registered?
                <Link to="/registerview">Create an account</Link>
              </p>
            </form>
            <LogInController
              data={{
                email: this.state.email,
                password: this.state.password,
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LogInView;
