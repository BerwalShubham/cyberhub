import React from "react";
import { Col, Row } from "react-bootstrap";
import parachute from "../assets/images/png/parachute-with-red-ball.png";

const OurMission = () => {
  return (
    <section className="py-5 position-relative">
      <div className="elipse_nav-our_mission"></div>
      <div className="elipse_our_mission"></div>
      <div className="cstm-container">
        <Row className="align-items-center text-center text-lg-start">
          <Col lg={6}>
            <img
              className="parachute_with_red_ball"
              src={parachute}
              alt="parachute"
            />
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0">
            <h2 className="text-white fw_800 fs-xxl">
              Our<span className="color-soil"> Mission</span>
            </h2>
            <div className="pe-xl-4">
              <p className="text-white fs-xsm pt-3 pe-xl-5 me-xl-5">
                We understand that one of the biggest concerns for early-stage
                investors is that it can quickly become stressful, overwhelming,
                and especially extremely time consuming. It isn’t easy to
                balance a full time job, family, and an active investment
                portfolio, especially when just starting out.
              </p>
            </div>
            <button className="rounded-2 px-3 py-2 bg-color-soil border-0 text-white fw-medium mt-4">
              Read More
            </button>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default OurMission;
