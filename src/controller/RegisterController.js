import React from "react";
import registerModel from "../model/RegisterModel";
import { render } from "@testing-library/react";

function RegisterController(props) {
  console.log("C: " + props.data.userName);

  const checkPassword = (props) => {
    if (props.data.password === props.data.confirmPassword) {
      registerModel.setRegisterData(props);
      registerModel.signUp(props);
      console.log("Password matched");
    } else {
      alert("Check Password please!");
    }
  };

  return <div>{props.data.password !== " " ? checkPassword(props) : " "}</div>;
}

export default RegisterController;
