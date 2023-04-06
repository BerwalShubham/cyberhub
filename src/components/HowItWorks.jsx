import React from "react";
import { Col, Row } from "react-bootstrap";

const HowItWorks = () => {
  return (
    <section className="py-5">
      <div className="cstm-container">
        <h2 className="text-white fw_800 fs-xxl text-center">
          How it<span className="color-soil"> works</span>
        </h2>
        <Row className="mt-5">
          <Col xl={3} lg={4} sm={6}>
            <div className="how-it-works-cards  py-3 d-flex flex-column align-items-center justify-content-center">
              <div className="numbers-circle d-flex align-items-center justify-content-center">
                <p className="mb-0 fw-bold fs-lg">01</p>
              </div>
              <p className="mb-0 text-white fw-bold fs-sm pt-4">Mint NFT</p>
              <p className="mb-0 text-white text-center pt-3 px-3">
                You must own our NFT to connect to direct management or
                participate in governance
              </p>
            </div>
          </Col>
          <Col className="mt-4 mt-sm-0 " xl={3} lg={4} sm={6}>
            <div className="how-it-works-cards cards py-3 d-flex flex-column align-items-center justify-content-center">
              <div className="numbers-circle d-flex align-items-center justify-content-center mt-24">
                <p className="mb-0 fw-bold fs-lg">02</p>
              </div>
              <p className="mb-0 text-white fw-bold fs-sm pt-4">
                Verify NFT Ownership
              </p>
              <p className="mb-0 text-white text-center pt-3 px-4">
                Only Cyber Drops that are have verified are eligible to be
                connected under direct management
              </p>
            </div>
          </Col>
          <Col className="mt-4 mt-lg-0" xl={3} lg={4} sm={6}>
            <div className="how-it-works-cards py-3 d-flex flex-column align-items-center justify-content-center">
              <div className="numbers-circle d-flex align-items-center justify-content-center">
                <p className="mb-0 fw-bold fs-lg">03</p>
              </div>
              <p className="mb-0 text-white fw-bold fs-sm pt-4">
                Link API to your account
              </p>
              <p className="mb-0 text-white text-center pt-3 px-3">
                Only HODLers that submit their API key and secret will be under
                direct management
              </p>
            </div>
          </Col>
          <Col className="mt-4 mt-xl-0 mx-lg-auto mx-xl-0" xl={3} lg={4} sm={6}>
            <div className="how-it-works-cards py-3 d-flex flex-column align-items-center justify-content-center">
              <div className="numbers-circle d-flex align-items-center justify-content-center mt-24">
                <p className="mb-0 fw-bold fs-lg">04</p>
              </div>
              <div className="">
                <p className="mb-0 text-white fw-bold fs-sm pt-4">
                  Passive Income for life
                </p>
              </div>
              <p className="mb-0 text-white text-center pt-3 px-3">
                As long as your HODL your Cyber Drop, you will be connected
                under direct management
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HowItWorks;
