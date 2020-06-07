import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogInView from "./view/login/LogInView";
import RegisterView from "./view/register/RegisterView";
import CheckInCheckOut from "./view/checkIn/CheckInCheckOut";
import Profile from "./view/userProfile/Profile";
import AboutUs from "./view/aboutus/AboutUs"
import UserInfo from "./view/userInformation/UserInfo";
import "./App.css";
import Fire from "./config/Firebase";

import NavBar from "./components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
    this.authListener = this.authListener.bind(this);
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    //this.setState({ user: "rezaul" });
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <Router>
            <Switch>
              <Route path="/" component={Profile} exact />
              <Route path="/checkincheckout/:id" component={CheckInCheckOut} />
              <Route path="/aboutus" component={AboutUs} />
              <Route path="/userinfo" component={UserInfo} />
            </Switch>
          </Router>
        ) : (
          <Router>
            <NavBar />
            <Switch>
              <Route path="/" exact component={LogInView} />
              <Route path="/registerview" component={RegisterView} />
              <Route path="/aboutus" component={AboutUs} />
            </Switch>
          </Router>
        )}
      </div>
    );
  }
}

export default App;
