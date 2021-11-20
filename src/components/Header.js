import React from "react";
import "./Header.css";
import logo from "../assets/Arclif_Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { UilSearch } from "@iconscout/react-unicons";
import profile from "../assets/icons/profile.png";
import bell from "../assets/icons/Bell.png";
import explore from "../assets/icons/explore.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <img src={logo} alt="logo@Arclif" />
        </div>
      </div>
      <div className="header__center">
        <div className="searchContainer">
          <div className="left__searchContainer">
            <UilSearch className="searchIcon" />
            <input type="text" placeholder="Search in arclif" />
          </div>
          <div className="right__searchContainer">
            <FontAwesomeIcon className="caretDownIcon" icon={faCaretDown} />
            <h5>Project</h5>
          </div>
        </div>
      </div>
      <div className="header__right">
        <img className="iconHeader" src={explore} alt="" />
        <img className="iconHeader bellIcon" src={bell} alt="" />
        <img className="iconHeader" src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
