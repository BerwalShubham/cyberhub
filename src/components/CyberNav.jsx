import React, { useState } from "react";
import logo from "../assets/images/png/logo.png";
import boat from "../assets/images/svg/boat.svg";
import discord from "../assets/images/svg/discord.svg";
import twitter from "../assets/images/svg/twitter.svg";
import mlogo from "../assets/images/svg/m-logo.svg";

const CyberNav = () => {
  const [nav, setnav] = useState(true);
  if (nav) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  return (
    <section className="cyber-nav position-relative">
     <div className="elipse_nav-our_mission"></div>
      <div className="cstm-container">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <img className="w-100 logo" src={logo} alt="logo" />
          </div>
          <div className="d-flex align-items-center gap-3 gap-sm-4">
            <ul
              className={
                nav
                  ? "nav-hidden d-lg-flex gap-4 mb-0 p-0 ps-lg-5"
                  : "nav-open d-lg-none gap-3 p-0"
              }
            >
              <li className="">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Roadmap</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
              <button className="rounded-2 mt-3 px-3 py-2 bg-color-soil border-0 text-white fw-medium d-sm-none">
                Connect Wallet
              </button>
            </ul>
            <div className="d-flex align-items-center gap-3 gap-sm-2">
              <a
                href="#"
                className="social-sites-logo d-flex align-items-center justify-content-center position-relative"
              >
                <div className="social-sites-logo-bg"></div>
                <img width={18} height={18} src={boat} alt="boat" />
              </a>
              <a
                href="#"
                className="social-sites-logo d-flex align-items-center justify-content-center position-relative"
              >
                <div className="social-sites-logo-bg"></div>
                <img width={18} height={18} src={discord} alt="boat" />
              </a>
              <a
                href="#"
                className="social-sites-logo d-flex align-items-center justify-content-center position-relative"
              >
                <div className="social-sites-logo-bg"></div>
                <img width={18} height={18} src={twitter} alt="boat" />
              </a>
              <a
                href="#"
                className="social-sites-logo d-flex align-items-center justify-content-center position-relative"
              >
                <div className="social-sites-logo-bg"></div>
                <img width={18} height={18} src={mlogo} alt="boat" />
              </a>
            </div>
            <button className="btn-connect-wallet rounded-2 px-3 py-2 bg-color-soil border-0 text-white fw-medium d-none d-sm-block">
              Connect Wallet
            </button>
            <div className="hamburger" onClick={() => setnav(!nav)}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberNav;
