import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const handleInputs = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;

    setuser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const res = await response.json();

    if (response.status === 422 || !res) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate("/login");
    }
  };

  return (
    <>
      <section>
        <div>
          <div>
            <div>
              <h2 className="forms">Sign Up</h2>
              <form className="forms" id="register-form" method="POST">
                <div className="mb-3">
                  <label for="Inputname" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label for="InputEmail" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                  />
                </div>
                <div className="mb-3">
                  <label for="InputNumber" className="form-label">
                    Your Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    name="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                  />
                </div>
                <div className="mb-3">
                  <label for="InputWork" className="form-label">
                    Your Profession
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="work"
                    name="work"
                    autoComplete="off"
                    value={user.work}
                    onChange={handleInputs}
                  />
                </div>
                <div className="mb-3">
                  <label for="InputPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                  />
                </div>
                <div className="mb-3">
                  <label for="InputCPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="cpassword"
                    name="cpassword"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="register"
                    onClick={PostData}
                  />
                </div>
              </form>
              <div>
                <NavLink to="/login">I have an account</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
