import React from "react";
import varunmuthu from "../assets/images/png/varunmathu.png";
import shubhsharma from "../assets/images/png/shubhsharma.png";
import mlogo from "../assets/images/svg/m-orange-logo.svg";
import discord from "../assets/images/svg/discord-orange.svg";
import twitter from "../assets/images/svg/twitter-orange.svg";
import { Col, Row } from "react-bootstrap";
import absolute_bluecoin_parachute from "../assets/images/svg/absolute-bluecoin-parachute.svg";
import absolute_parachute from "../assets/images/svg/absolute-rainbow-parachute.svg";
import Slider from "react-slick";

const MeetTheTeam = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="py-5 position-relative">
      <div className="elipse_our_team"></div>
      <img
        width={150}
        height={250}
        className="absolute_bluecoin_parachute d-none d-sm-block"
        src={absolute_bluecoin_parachute}
        alt="parachute"
      />

      <div className="cstm-container">
        <h2 className="text-white fw_800 fs-xxl text-center pb-xl-5">
          Meet the<span className="color-soil"> Team</span>
        </h2>
        <Slider className="mt-5" {...settings}>
          <Col className="px-2 ps-sm-5">
            <div className="bg-white slides-border">
              <Row className="align-items-center">
                <Col className="" sm={6}>
                  <div>
                    <img className="w-100" src={varunmuthu} alt="varunmuthu" />
                  </div>
                </Col>
                <Col className="my-3 my-sm-0" sm={6}>
                  <div className="text-center">
                    <h2 className="fs-md fw-bold">Varun Muthu</h2>
                    <h3 className="fw-medium fs-xsm">Marketing Director</h3>
                    <a
                      className="text-black"
                      href="https://www.linkedin.com/in/varunmuthu1"
                    >
                      https://www.linkedin.com/{" "}
                      <span className="d-block">in/varunmuthu1</span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center gap-3 justify-content-center mt-3">
                    <div>
                      <img src={discord} alt="discord" />
                    </div>
                    <div>
                      <img src={twitter} alt="twitter" />
                    </div>
                    <div>
                      <img src={mlogo} alt="mlogo" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col className="px-2 ps-sm-5">
            <div className="bg-white slides-border">
              <Row className="align-items-center">
                <Col sm={6}>
                  <div>
                    <img
                      className="w-100"
                      src={shubhsharma}
                      alt="shubhsharma"
                    />
                  </div>
                </Col>
                <Col className="my-3" sm={6}>
                  <div className="text-center my-sm-0">
                    <h2 className="fs-md fw-bold">Shubh Sharma</h2>
                    <h3 className="fw-medium fs-xsm">Operations Director</h3>
                    <a
                      className="text-black"
                      href="https://www.linkedin.com/in/shubhsharma01/"
                    >
                      https://www.linkedin.com/
                      <span className="d-block">in/shubhsharma01/</span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center gap-3 justify-content-center mt-3">
                    <div>
                      <img src={discord} alt="discord" />
                    </div>
                    <div>
                      <img src={twitter} alt="twitter" />
                    </div>
                    <div>
                      <img src={mlogo} alt="mlogo" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col className="px-2 ps-sm-5">
            <div className="bg-white slides-border">
              <Row className="align-items-center">
                <Col sm={6}>
                  <div>
                    <img
                      className="w-100"
                      src={shubhsharma}
                      alt="shubhsharma"
                    />
                  </div>
                </Col>
                <Col className="p-0 px-sm-3 my-3 my-sm-0" sm={6}>
                  <div className="text-center">
                    <h2 className="fs-md fw-bold">Shubh Sharma</h2>
                    <h3 className="fw-medium fs-xsm">Operations Director</h3>
                    <a
                      className="text-black"
                      href="https://www.linkedin.com/in/shubhsharma01/"
                    >
                      https://www.linkedin.com/
                      <span className="d-block">in/shubhsharma01/</span>
                    </a>
                  </div>
                  <div className="d-flex align-items-center gap-3 justify-content-center mt-3">
                    <div>
                      <img src={discord} alt="discord" />
                    </div>
                    <div>
                      <img src={twitter} alt="twitter" />
                    </div>
                    <div>
                      <img src={mlogo} alt="mlogo" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Slider>
      </div>
    </section>
  );
};

export default MeetTheTeam;
