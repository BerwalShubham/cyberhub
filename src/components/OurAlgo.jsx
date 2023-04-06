import React from "react";
import { Col, Row } from "react-bootstrap";
import black_blue_parachute from "../assets/images/png/black&blue-parachute.png";
import green_brown_parachute from "../assets/images/png/green&brown-parachute.png";
import bitcoin_parachute from "../assets/images/png/parachute-with-bitcoin.png";

const OurAlgo = () => {
  return (
    <section className="py-5 position-relative">
      <div className="elipse_our_algo"></div>
      <div className="elipse_our_algo_2"></div>
      <div className="cstm-container">
        <Row className="align-items-center flex-column-reverse flex-lg-row text-center text-lg-start">
          <Col lg={6} className="mt-5 mt-lg-0">
            <h2 className="text-white fw_800 fs-xxl">
              Our<span className="color-soil">Algo</span>
            </h2>
            <div className="pe-xl-4 me-xl-3">
              <p className="text-white fs-xsm pt-3 pe-lg-5 me-xl-1">
                We have perfected our algorithm, which prioritizes a low risk
                and consistent profit stream without the need for daily
                micromanagement. While most trading algorithms can't stand up
                against a volatile or risky market, our algorithm thrives in
                those conditions. Early-stage testers have seen a consistent
                flow of income with minimal ups and downs. Our algorithm has
                been in the works for YEARS. This has given us the time to
                rigorously backtest and release any needed hotfixes. As of early
                March 2022, we have close to a quarter of a million under direct
                management!
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
              <div>
                <img
                  className="black_blue_parachute"
                  src={black_blue_parachute}
                  alt="black_blue_parachute"
                />
                <div className="pt-3">
                  <img
                    className="green_brown_parachute"
                    src={green_brown_parachute}
                    alt="black_blue_parachute"
                  />
                </div>
              </div>
              <div className="ps-3">
                <img
                  className="bitcoin_parachute"
                  src={bitcoin_parachute}
                  alt="black_blue_parachute"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default OurAlgo;
