import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import logo192 from "../images/logo192.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const response = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      setUserData(data);
      console.log(userData);

      if (response.status !== 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (e) {
      console.log("eroor " + e);
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);
  // eslint-disable-next-line

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "auto" }}
      >
        <form method="GET">
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
                    <img
                      src={logo192}
                      alt="dp"
                      style={{ marginLeft: "50px" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <div>
                      <h5>{userData.name}</h5>
                      <h6>{userData.work}</h6>
                      <p className="mt-3 mb-5">
                        Rankings: <span>1/10</span>
                      </p>
                    </div>
                    <ul
                      className="nav nav-tabs"
                      role="tablist"
                      aria-label="tabs"
                    >
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
                        <div className="row mt-3">
                          <div className="col-md-6">
                            <label>USER ID</label>
                          </div>
                          <div className="col-md-6">
                            <p>{userData._id}</p>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-6">
                            <label>NAME</label>
                          </div>
                          <div className="col-md-6">
                            <p>{userData.name}</p>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-6">
                            <label>EMAIL</label>
                          </div>
                          <div className="col-md-6">
                            <p>{userData.email}</p>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-6">
                            <label>PHONE</label>
                          </div>
                          <div className="col-md-6">
                            <p>{userData.phone}</p>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-6">
                            <label>PROFESSION</label>
                          </div>
                          <div className="col-md-6">
                            <p>{userData.work}</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade show"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                        tabIndex="0"
                      >
                        <div className="row mt-3">
                          <div className="col-md-6">
                            <label>USER ID</label>
                          </div>
                          <div className="col-md-6">
                            <p>asdkansdijfn</p>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-6">
                            <label>NAME</label>
                          </div>
                          <div className="col-md-6">
                            <p>yash jasani</p>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-6">
                            <label>EMAIL</label>
                          </div>
                          <div className="col-md-6">
                            <p>yash jasani</p>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-6">
                            <label>PHONE</label>
                          </div>
                          <div className="col-md-6">
                            <p>yash jasani</p>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-md-6">
                            <label>PROFESSION</label>
                          </div>
                          <div className="col-md-6">
                            <p>yash jasani</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </form>
      </div>
    </>
  );
};

export default About;
