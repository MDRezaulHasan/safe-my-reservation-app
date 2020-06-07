import React from "react";
import "./AboutUs.css";
import NavBar from "../../components/Navbar";

function AboutUs() {
  return (
    <div>
      <NavBar />
      <div
        style={{ marginTop: "6px", marginLeft: "50px", textAlign: "center" }}
      >
        <h2 style={{ textalign: "center" }}>Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="container">
                <h2 className="title">Sweta Balamurali</h2>
                <p className="title">Architect & System tester.</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="container">
                <h2 className="title">Md Rezaul Hasan</h2>
                <p className="title">Designer,Developer & Database.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
