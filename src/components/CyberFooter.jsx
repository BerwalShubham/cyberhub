import React from "react";
import parachute from "../assets/images/png/parachute-with-blue-ball.png";
import boat from "../assets/images/svg/boat.svg";
import discord from "../assets/images/svg/discord.svg";
import twitter from "../assets/images/svg/twitter.svg";
import mlogo from "../assets/images/svg/m-logo.svg";

const CyberFooter = () => {
  return (
    <section className="pt-5 pb-3 position-relative">
      <div className="elipse_footer"></div>
      <div className="cstm-container">
        <div className="text-center">
          <img width={151} height={188} src={parachute} alt="parachute" />
          <h2 className="color-soil fw-semibold fs-xl">Cyber Drops</h2>
          <div className="px-sm-5 mx-sm-3 mt-3">
            <div className="px-md-5 mx-md-5">
              <div className="px-lg-5 mx-lg-5">
                <p className="mb-0 text-white px-xl-5 mx-xl-5">
                  Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                  nisl. Mattis maecenas libero lacinia accumsan amet.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3 gap-3 gap-sm-2">
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
        </div>
      </div>
      <hr className="border-white" />
      <p className="text-center text-white opacity-50 mb-0">
        Copyright By 2022
      </p>
    </section>
  );
};

export default CyberFooter;
