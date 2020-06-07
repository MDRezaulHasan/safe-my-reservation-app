import React from "react";

const Form = (props) => (
  <form>
    <input
      type="text"
      id="locationName"
      style={{
        background: "transparent",
        textAlign:"center",
        border: "0",
        borderBottom: "solid 2px #2c3e50",
        marginRight: "0px",
        letterSpacing: "2px",
        width: "180px",
        padding: "0.4rem",
      }}
      placeholder="Country name"
    />
    <button className="btn btn-seccess" onClick={props.getForcast}>
      Search
    </button>
  </form>
);
export default Form;
