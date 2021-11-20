import React from "react";
import "./Suggested.css";
import users from "../assets/icons/profile.png";
import user1 from "../assets/profiles/user1.png";
import user2 from "../assets/profiles/user2.png";
import user3 from "../assets/profiles/user3.png";
import user4 from "../assets/profiles/user4.png";
import user5 from "../assets/profiles/user5.png";
import user6 from "../assets/profiles/user6.png";
import user7 from "../assets/profiles/user7.png";
import user8 from "../assets/profiles/user8.png";

const Suggested = () => {
  return (
    <div className="suggested">
      <div className="title__suggested">
        <img src={users} alt="" className="userIcon__suggested" />
        <h4>Suggested Profiles</h4>
      </div>
      <ul>
        <li>
          <div className="left__suggested">
            <div className="avatar__suggested">
              <img src={user5} alt="" />
            </div>
            <div className="center__suggested">
              <h5>John Doe</h5>
              <p>Architect</p>
            </div>
          </div>
          <div className="right__suggested">
            <div className="followButton__suggested">
              <p>Follow</p>
            </div>
          </div>
        </li>
        <li>
          <div className="left__suggested">
            <div className="avatar__suggested">
              <img src={user4} alt="" />
            </div>
            <div className="center__suggested">
              <h5>John Doe</h5>
              <p>Architect</p>
            </div>
          </div>
          <div className="right__suggested">
            <div className="followButton__suggested">
              <p>Follow</p>
            </div>
          </div>
        </li>
        <li>
          <div className="left__suggested">
            <div className="avatar__suggested">
              <img src={user2} alt="" />
            </div>
            <div className="center__suggested">
              <h5>John Doe</h5>
              <p>Architect</p>
            </div>
          </div>
          <div className="right__suggested">
            <div className="followButton__suggested">
              <p>Follow</p>
            </div>
          </div>
        </li>
        <li>
          <div className="left__suggested">
            <div className="avatar__suggested">
              <img src={user6} alt="" />
            </div>
            <div className="center__suggested">
              <h5>John Doe</h5>
              <p>Architect</p>
            </div>
          </div>
          <div className="right__suggested">
            <div className="followButton__suggested">
              <p>Follow</p>
            </div>
          </div>
        </li>
        <li>
          <div className="left__suggested">
            <div className="avatar__suggested">
              <img src={user7} alt="" />
            </div>
            <div className="center__suggested">
              <h5>John Doe</h5>
              <p>Architect</p>
            </div>
          </div>
          <div className="right__suggested">
            <div className="followButton__suggested">
              <p>Follow</p>
            </div>
          </div>
        </li>
        <li>
          <div className="left__suggested">
            <div className="avatar__suggested">
              <img src={user8} alt="" />
            </div>
            <div className="center__suggested">
              <h5>John Doe</h5>
              <p>Architect</p>
            </div>
          </div>
          <div className="right__suggested">
            <div className="followButton__suggested">
              <p>Follow</p>
            </div>
          </div>
        </li>
        <li>
          <div className="left__suggested">
            <div className="avatar__suggested">
              <img src={user1} alt="" />
            </div>
            <div className="center__suggested">
              <h5>John Doe</h5>
              <p>Architect</p>
            </div>
          </div>
          <div className="right__suggested">
            <div className="followButton__suggested">
              <p>Follow</p>
            </div>
          </div>
        </li>
        <li>
          <div className="left__suggested">
            <div className="avatar__suggested">
              <img src={user3} alt="" />
            </div>
            <div className="center__suggested">
              <h5>John Doe</h5>
              <p>Architect</p>
            </div>
          </div>
          <div className="right__suggested">
            <div className="followButton__suggested">
              <p>Follow</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Suggested;
