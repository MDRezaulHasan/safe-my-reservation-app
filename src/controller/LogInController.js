import React from "react";
import reservationModel from "../model/RegisterModel";
import { render } from "@testing-library/react";

function LogInController(props) {
  console.log("C: " + props.data.email);

  return <div>{reservationModel.signIn(props)}</div>;
}

export default LogInController;
