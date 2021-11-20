import React from "react";
import "./Footer.css";
import logo from "../assets/Arclif_Logo.png";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilFacebook } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="left__footer__top">
          <div className="logo__footer">
            <img src={logo} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quam
            laborum eos in maiores veritatis obcaecati eaque sint voluptatibus
            delectus! Maiores non quos molestiae debitis accusamus
          </p>
        </div>
        <div className="center__footer__top">
          <div className="left__center__footer">
            <h4>What arclif provides</h4>
            <div className="content__cf">
              <div className="left__content__cf">
                <ul>
                  <li>
                    <span className="jobs">Jobs</span>
                  </li>
                  <li>Estimator</li>
                  <li>Requirements</li>
                  <li>Charity</li>
                  <li>Q&A</li>
                </ul>
              </div>
              <div className="right__content__cf">
                <ul>
                  <li>Marketplace</li>
                  <li>Projects</li>
                  <li>Companies</li>
                  <li>Proffesional</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right__center__footer">
            <h4>Quick links</h4>
            <div className="content__cf">
              <div className="left__content__cf">
                <ul>
                  <li>Jobs</li>
                  <li>Estimator</li>
                  <li>Requirements</li>
                  <li>Charity</li>
                  <li>Q&A</li>
                </ul>
              </div>
              <div className="right__content__cf">
                <ul>
                  <li>Marketplace</li>
                  <li>Projects</li>
                  <li>Companies</li>
                  <li>Proffesional</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="right__footer__top">
          <h4>Quick Links</h4>
          <div className="content__rf">
            <ul>
              <li>About</li>
              <li>Help</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
              <li>
                <div className="social__footer">
                  <p>Follow</p>
                  <div>
                    <UilInstagram className="socialIcon" />
                    <UilFacebook className="socialIcon" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p> &copy; Copyright 2021 arclif.com. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
