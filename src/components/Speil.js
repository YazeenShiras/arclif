import React from "react";
import "./Speil.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import { UilPlus } from "@iconscout/react-unicons";
import { UilAngleRightB } from "@iconscout/react-unicons";

const Speil = () => {
  return (
    <div className="speil">
      <div className="speilContainer" id="speil">
        <div className="createSpeil">
          <span>
            <UilPlus className="plusIcon" />
          </span>
          <h4>Create Spiel</h4>
        </div>
        <div className="spielCard" style={{ backgroundImage: `url(${img1})` }}>
          <h4>John Doe</h4>
        </div>
        <div className="spielCard" style={{ backgroundImage: `url(${img2})` }}>
          <h4>John Doe</h4>
        </div>
        <div className="spielCard" style={{ backgroundImage: `url(${img3})` }}>
          <h4>John Doe</h4>
        </div>
        <div className="spielCard" style={{ backgroundImage: `url(${img4})` }}>
          <h4>John Doe</h4>
        </div>
        <div className="spielCard" style={{ backgroundImage: `url(${img5})` }}>
          <h4>John Doe</h4>
        </div>
      </div>
      <div className="nextIconContainer" id="nextSlide">
        <UilAngleRightB className="arrowRightIcon" />
      </div>
    </div>
  );
};

export default Speil;
