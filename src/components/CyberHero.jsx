import React from "react";
import { Col, Row } from "react-bootstrap";
import parachute from "../assets/images/png/parachute-with-blue-ball.png";

const CyberHero = () => {
  return (
    <section className="flex_grow d-flex flex-column align-items-center justify-content-center">
      <div className="cstm-container">
        <Row className="align-items-center flex-column-reverse flex-lg-row">
          <Col lg={6} className="text-center text-lg-start mt-5 mt-lg-0">
            <h1 className="text-white fw_800 fs-2xl">
              Welcome to <span className="color-soil">Cyber Drops</span>
            </h1>
            <p className="text-white fs-xsm pt-3 pe-lg-5 me-lg-4">
              Viverra felis, dui adipiscing ipsum pharetra donec. Pretium,
              tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit nec
              curabitur purus. Ullamcorper mattis risus suspendisse pretium
              tristique.
            </p>
            <button className="rounded-2 btns px-3 py-2 bg-color-soil border-0 text-white fw-medium mt-4">
              Explore Now
            </button>
          </Col>
          <Col lg={6} className="text-center">
            <img
              width={410}
              height={510}
              className="parachute"
              src={parachute}
              alt="parachute"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CyberHero;
