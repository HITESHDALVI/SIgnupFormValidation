import "./SignUp.css";
import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import LabelField from "./LabelField";
function SignUp() {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const [records, setRecords] = useState([]);

  const [errors, setErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUserRegistration({
      ...userRegistration,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(userRegistration));
    setIsSubmit(true);
    const newrecord = { ...userRegistration };
    setRecords([...records, newrecord]);
    // setUserRegistration({
    //   username: "",
    //   email: "",
    //   phone: "",
    //   password: "",
    //   cpassword: "",
    // });

  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
    }
  }, [errors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;
    const phoneregex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/i;
    if (!values.username) {
      errors.username = "username is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email not valid";
    }
    if (!values.phone) {
      errors.phone = "phone is required";
    } else if (!phoneregex.test(values.phone)) {
      errors.phone = "valid phone is required";
    }
    if (!values.password) {
      errors.password = "password  is required";
    } else if (values.password.length < 4) {
      errors.password = "password is to short";
    } else if (values.password.length > 10) {
      errors.password = "password exceed 10 numbers";
    }
    if (!values.cpassword) {
      errors.cpassword = "confirm password is required";

    } else if (values.password !== values.cpassword) {
      errors.cpassword = "password does not match";

    }
    return errors;
  };
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <form action="" onSubmit={handleSubmit}
        className="form-details">
        <div className="data-row">
          <LabelField name={"Name:"} />
          <InputField onChange={handleInput}
            value={userRegistration.username}
            type={"text"}
            name={"username"} error={errors.username}
          />
          <LabelField name={"Email:"} />
          <InputField onChange={handleInput} value={userRegistration.email} type={"email"} name={"email"} error={errors.email}
          />
          <LabelField name={"Phone:"} />
          <InputField onChange={handleInput} value={userRegistration.phone} type={"text"} name={"phone"} error={errors.phone}
          />
          <LabelField name={"Password:"} />
          <InputField onChange={handleInput} value={userRegistration.password} type={"password"} error={errors.password}
            name={"password"}
          />
          <LabelField name={"Confirm Password:"} />
          <InputField onChange={handleInput} value={userRegistration.cpassword} type={"password"} name={"cpassword"} error={errors.cpassword}
          />
        </div>
        <button type="submit" className="sign-up-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}
export default SignUp;