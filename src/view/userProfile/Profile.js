import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form";
import { v4 as uuidv4 } from "uuid";
import Fire from "../../config/Firebase";
import NavBar from "../../components/Navbar";

class Profile extends Component {
  state = {
    suggestions: [],
    term: [],
  };

  getForcast = async (e) => {
    const locationName = document.getElementById("locationName").value;
    e.preventDefault();
    const data = await fetch(
      `https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=${locationName}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "hotels4.p.rapidapi.com",
          "x-rapidapi-key":
            "3f70a06836msh9d83d8dd7bfeeb8p14ddefjsna687fd42dced",
        },
      }
    )
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
    this.setState({
      suggestions: data.suggestions,
      term: data.term,
    });
    console.log(data);
  };

  render() {
    //JSX code will go here
    return (
      <div>
        <NavBar />
        <div>
          <div className="row">
            <div className="col">
              <Form getForcast={this.getForcast} />
            </div>
            <div className="col">
              <button className="btn btn-succses">
                <Link to="/userinfo">About you</Link>
              </button>
              <button
                className="btn btn-succses"
                onClick={() => {
                  Fire.auth().signOut();
                }}
              >
                <Link to="/">Log Out</Link>
              </button>
            </div>
          </div>

          <h3>{this.state.term}</h3>
          <h4>You are logged in.</h4>
          <p>
            Thank you for your login. Now you can search your desire city from
            the search field. After that you can follow these steps: .
          </p>
          <ol>
            <li>Fill a booking form</li>
            <li>Chose your hotel and rooms</li>
            <li>Confirm your booking</li>
          </ol>
          <p>
            After your booking confirmation system can send you an email(Not
            Implemented yet). There you can see the total price and some payment
            rules.
          </p>
        </div>

        {this.state.suggestions.map((suggestion) => {
          return (
            <div key={uuidv4()} className="row">
              <div className="col-4">
                <h6>{suggestion.group}</h6>
              </div>
              <div className="col-4">
                {suggestion.entities.map((entitie) => {
                  return (
                    entitie.type === "CITY" && (
                      <div className="row" key={uuidv4()}>
                        <div className="col-4">
                          <h6>{entitie.name}</h6>
                        </div>
                        <div className="col-4">
                          <Link
                            to={`/checkincheckout/${entitie.destinationId}`}
                          >
                            {entitie.type}
                          </Link>
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Profile;
