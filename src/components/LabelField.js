import "./SignUp.css";
import React from "react";
function LabelField(props) {
  return (
    <>
      <label htmlFor="name" className="label-field">
        {props.name}
      </label>
    </>
  );
}
export default LabelField;