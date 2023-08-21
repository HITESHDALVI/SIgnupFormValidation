import "./SignUp.css";
import React from "react";

function InputField(props) {
  console.log(props.error);
  return (
    <>
      <input
        className="input-field"
        onChange={props.onChange}
        value={props.value}
        type={props.type}
        name={props.name}
      />
      <span className="error">{props.error}</span>
    </>
  );
}
export default InputField