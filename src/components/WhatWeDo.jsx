import React from "react";
import { Col, Row } from "react-bootstrap";
import rainbow_parachute from "../assets/images/png/what-we-do-rainbow-parachute.png";
import binance_parachute from "../assets/images/png/what-we-do-binance-parachute.png";
import shib_parachute from "../assets/images/png/what-we-do-shib-parachute.png";
import absolute_parachute from "../assets/images/svg/absolute-rainbow-parachute.svg";

const WhatWeDo = () => {
  return (
    <section className="py-5 position-relative">
      <div className="elipse_we_do"></div>
      <img
        className="absolute_parachute d-none d-md-block"
        width={200}
        height={300}
        src={absolute_parachute}
        alt="parachute"
      />
      <div className="cstm-container">
        <Row className="align-items-center text-center text-lg-start">
          <Col lg={7}>
            <div className="d-flex d-sm-block">
              <div>
                <img
                  className="what-we-do-parachute-img"
                  src={rainbow_parachute}
                  alt="rainbow_parachute"
                />
                <img
                  className="what-we-do-parachute-img"
                  src={binance_parachute}
                  alt="binance_parachute"
                />
              </div>
              <div>
                <img
                  className="what-we-do-parachute-img shib_parachutes"
                  src={shib_parachute}
                  alt="shib_parachute"
                />
                <img
                  className="what-we-do-parachute-img shib_parachutes"
                  src={shib_parachute}
                  alt="shib_parachute"
                />
              </div>
            </div>
          </Col>
          <Col lg={5} className="mt-5 mt-lg-0 ps-lg-4 ps-xl-0">
            <h2 className="text-white fw_800 fs-xxl">
              What<span className="color-soil"> we do</span>
            </h2>
            <p className="text-white fs-xsm pt-3">
              1000 Cyber Drops will be dropping on Ethereum in March 2022. Each
              and every Cyber Drop is uniquely hand crafted. This is just the
              beginning of our journey. Owning a Cyber Drop will unlock monthly
              airdrops and future governance rights in addition to our
              revolutionary algorithm. We strive to always bring innovation and
              keep BUILDing. Cyber Drops is a community driven project and
              always will be that way. That’s our promise.lose to a quarter of a
              million under direct management!
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default WhatWeDo;
