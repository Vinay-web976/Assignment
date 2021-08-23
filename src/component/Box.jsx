import React from "react";
import { Link } from "react-router-dom";
import "../Box.css";
const Box = ({ name, year, bgcolor, id }) => {
  return (
    <div
      className="box col-md-3 col-sm-5"
      style={{ backgroundColor: `${bgcolor}` }}
      onClick={() => window.location.replace(`/resources/${id}`)}
    >
      <p>{name}</p>
      <p>{year}</p>
    </div>
  );
};

export default Box;
