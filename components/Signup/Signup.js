import React, { useRef, useState } from "react";
import NavbarOther from "../NavbarOther/NavbarOther";
import "./Signup.css";

function Signup() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  let formRef = useRef();

  const validateField = (fieldName, value) => {
    let error = null;

    if (fieldName === "username") {
      error = value ? null : "Please enter a username";
    } else if (fieldName === "password") {
      error = value ? null : "Please enter a password";
    } else if (fieldName === "email") {
      if (!value) {
        error = "Please enter an email";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Please enter a valid email";
      }
    } else if (fieldName === "mobile") {
      if (!value) {
        error = "Please enter a mobile number";
      } else if (!/^\d{10}$/.test(value)) {
        error = "Please enter a valid 10-digit mobile number";
      }
    }

    return error;
  };

  const handleUsernameAction = (e) => {
    const value = e.target.value;
    const error = validateField("username", value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      username: error,
    }));

    setUser((prevUser) => ({
      ...prevUser,
      username: value,
    }));
  };

  const handlePasswordAction = (e) => {
    const value = e.target.value;
    const error = validateField("password", value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      password: error,
    }));

    setUser((prevUser) => ({
      ...prevUser,
      password: value,
    }));
  };

  const handleEmailAction = (e) => {
    const value = e.target.value;
    const error = validateField("email", value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      email: error,
    }));

    setUser((prevUser) => ({
      ...prevUser,
      email: value,
    }));
  };

  const handleMobileAction = (e) => {
    const value = e.target.value;
    const error = validateField("mobile", value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      mobile: error,
    }));

    setUser((prevUser) => ({
      ...prevUser,
      mobile: value,
    }));
  };

  const registerAction = async () => {
    try {
      const validationErrors = {};
      Object.keys(user).forEach((key) => {
        const error = validateField(key, user[key]);
        if (error) {
          validationErrors[key] = error;
        }
      });

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      // Primary task of this method is to connect to the backend
      const url = `http://localhost:4000/addUser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`;

      const res = await fetch(url);
      if (res.status !== 200) {
        throw new Error("Server Error");
      } else {
        setUser({
          username: "",
          password: "",
          email: "",
          mobile: "",
        });
      }

      formRef.current.classList.remove("was-validated");
      setIsSuccess(true);
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 3000);
    }
  };

  return (
    <div className="my-img2 d-flex flex-column">
      <NavbarOther />

      <div
        className="row justify-content-center flex-grow-1"
        style={{ marginTop: "10%" }}
      >
        <div className="col-sm-12 col-md-6 align-item-center">
          <h1 className="text-center text-white">Sign Up</h1>
          <form ref={formRef} className="needs-validation" noValidate>
            <input
              type="text"
              className={`form-control form-control-lg ${
                errors.username ? "is-invalid" : ""
              }`}
              placeholder="Enter Username"
              value={user.username}
              onChange={handleUsernameAction}
              required
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}

            <input
              type="password"
              className={`form-control form-control-lg mt-2 ${
                errors.password ? "is-invalid" : ""
              }`}
              placeholder="Enter Password"
              value={user.password}
              onChange={handlePasswordAction}
              required
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}

            <input
              type="text"
              className={`form-control form-control-lg mt-2 ${
                errors.email ? "is-invalid" : ""
              }`}
              placeholder="Enter E-mail"
              value={user.email}
              onChange={handleEmailAction}
              required
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}

            <input
              type="number"
              className={`form-control form-control-lg mt-2 ${
                errors.mobile ? "is-invalid" : ""
              }`}
              placeholder="Enter Mobile Number"
              value={user.mobile}
              onChange={handleMobileAction}
              required
            />
            {errors.mobile && (
              <div className="invalid-feedback">{errors.mobile}</div>
            )}

            <input
              type="button"
              value="Register"
              className="btn btn-secondary w-100 mt-2"
              onClick={registerAction}
            />

            {isSuccess && (
              <div className="alert alert-success mt-3">Success</div>
            )}
            {isError && <div className="alert alert-danger mt-3">Error</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
