import React from "react";
import Card from "react-bootstrap/Card";
import logo192 from "../images/logo192.png";
import Hometab from "./Hometab";
import Profiletab from "./Profiletab";

const About = () => {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "auto" }}
      >
        <Card
          style={{
            width: "72rem",
            height: "36rem",
            padding: "30px",
          }}
        >
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              <div className="row">
                <div className="col-md-4">
                  <img src={logo192} alt="dp" style={{ marginLeft: "50px" }} />
                </div>
                <div className="col-md-6">
                  <div>
                    <h5>Yash Jasani</h5>
                    <h6>Web Developer</h6>
                    <p className="mt-3 mb-5">
                      Rankings: <span>1/10</span>
                    </p>
                  </div>
                  <ul className="nav nav-tabs" role="tablist" aria-label="tabs">
                    <li
                      className="nav-link active nav-item"
                      id="home-tab"
                      // data-toggle="tab"
                      // href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                      tabIndex="0"
                    >
                      About
                    </li>
                    <li
                      className="nav-link nav-item"
                      id="profile-tab"
                      // data-toggle="tab"
                      // href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                      tabindex="-1"
                    >
                      Profile
                    </li>
                  </ul>
                </div>
                <div className="col-md-2">
                  <input
                    type="submit"
                    value="Edit Profile"
                    name="btnAddMore"
                  ></input>
                </div>
              </div>

              <div
                className="row"
                style={{ marginTop: "40px", marginLeft: "50px" }}
              >
                {/* left side url  */}
                <div className="col-md-4">
                  <div>
                    <p>WORK LINK</p>
                    <a href="https://www.google.com" taget="link">
                      Google Link
                    </a>
                    <br />
                    <a href="https://www.google.com" taget="link">
                      Google Link
                    </a>
                    <br />
                    <a href="https://www.google.com" taget="link">
                      Google Link
                    </a>
                    <br />
                    <a href="https://www.google.com" taget="link">
                      Google Link
                    </a>
                    <br />
                    <a href="https://www.google.com" taget="link">
                      Google Link
                    </a>
                    <br />
                    <a href="https://www.google.com" taget="link">
                      Google Link
                    </a>
                    <br />
                  </div>
                </div>
                {/* right side toggle  */}

                <div className="col-md-8 pl-5">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                      tabIndex="0"
                    >
                      <Hometab></Hometab>
                    </div>
                    <div
                      className="tab-pane fade show"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                      tabIndex="0"
                    >
                      <Profiletab></Profiletab>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default About;
