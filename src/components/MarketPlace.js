import React from "react";
import "./MarketPlace.css";
import marketPlace from "../assets/icons/marketplace.png";
import { UilAngleLeftB } from "@iconscout/react-unicons";
import { UilAngleRightB } from "@iconscout/react-unicons";
import img6 from "../assets/img6.png";

const MarketPlace = () => {
  return (
    <div className="marketPlace">
      <div className="title__marketPlace">
        <div className="left">
          <img src={marketPlace} alt="" className="cartIcon__marketplace" />
          <h4>Arclif Marketplace</h4>
        </div>
        <div className="right">
          <UilAngleLeftB className="arrow__marketPlace leftArrow" />
          <UilAngleRightB className="arrow__marketPlace" />
        </div>
      </div>
      <div
        className="image__marketplace"
        style={{ backgroundImage: `url(${img6})` }}
      >
        <div className="indicatorsContaniner">
          <div className="indicators actived__indicator"></div>
          <div className="indicators"></div>
          <div className="indicators"></div>
          <div className="indicators"></div>
        </div>
      </div>
      <div className="description__marketplace">
        <h4>Interior plant for home decor</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          ullam explicabo.
        </p>
        <h3>
          <span className="rupee">₹</span> 500
        </h3>
      </div>
      <div className="buttonContainer__marketplace">
        <div className="button__marketplace">
          <p>Buy now</p>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
