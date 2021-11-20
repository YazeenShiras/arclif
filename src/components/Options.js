import React from "react";
import "./Options.css";
import jobs from "../assets/icons/Jobs.png";
import estimator from "../assets/icons/estimator.png";
import requirements from "../assets/icons/requirements.png";
import charity from "../assets/icons/charity.png";
import qna from "../assets/icons/qna.png";
import marketPlace from "../assets/icons/marketplace.png";
import projects from "../assets/icons/projects.png";
import companies from "../assets/icons/companies.png";
import professional from "../assets/icons/proffessional.png";

const Options = () => {
  return (
    <div className="options">
      <ul>
        <li>
          <img src={jobs} alt="" className="optionIcon" />
          <div className="optionTitle">
            <h4>Jobs</h4>
          </div>
        </li>
        <li>
          <img src={estimator} alt="" className="optionIcon" />
          <div className="optionTitle">
            <h4>Estimator</h4>
          </div>
        </li>
        <li>
          <img src={requirements} alt="" className="optionIcon" />
          <div className="optionTitle">
            <h4>Requirements</h4>
          </div>
        </li>
        <li>
          <img src={charity} alt="" className="optionIcon" />
          <div className="optionTitle">
            <h4>Charity</h4>
          </div>
        </li>
        <li>
          <img src={qna} alt="" className="optionIcon" />
          <div className="optionTitle">
            <h4>Q&A</h4>
          </div>
        </li>
        <li>
          <img src={marketPlace} alt="" className="optionIcon" />
          <div className="optionTitle">
            <h4>Marketplace</h4>
          </div>
        </li>
        <li>
          <img src={projects} alt="" className="optionIcon" />
          <div className="optionTitle">
            <h4>Projects</h4>
          </div>
        </li>
        <li>
          <img src={companies} alt="" className="optionIcon" />
          <div className="optionTitle">
            <h4>Companies</h4>
          </div>
        </li>
        <li>
          <img src={professional} alt="" className="optionIcon" />
          <div className="optionTitle last__option">
            <h4>Professional</h4>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Options;
