import React, { useState } from "react";
import "./Details.css";

import Detail from "../detail/Detail";

const Details = ({ data }) => {
  const [show, setShow] = useState(false);
  const { name, thumbnailUrl, starRating, address, ratePlan } = data;

  return (
    <div className="row">
      <div className="col-md-9 recipe">
        <h4>{name}</h4>
        <img src={thumbnailUrl} alt={name} />
        <h6>Rating: {starRating}</h6>
        <h6>Price: {ratePlan.price.current}</h6>
        <button onClick={() => setShow(!show)}>Address</button>
      </div>
      <div className="col-md-5">
        {show && (
          <Detail
            address={{ address: address, price: ratePlan.price.current }}
          />
        )}
      </div>
    </div>
  );
};

export default Details;
