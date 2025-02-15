import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/Frontend_Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;

  return (
    <>
      {" "}
      <div className="container">
        {" "}
        <br />
        <div className="breadcrum">
          HOME <img src={arrow_icon} alt="" />
          SHOP <img src={arrow_icon} alt="" />
          {product?.category || "Unknown Category"}{" "}
          <img src={arrow_icon} alt="" />
          {product?.name || "Unknown Product"} <img src={arrow_icon} alt="" />
        </div>
      </div>
    </>
  );
};

export default Breadcrum;