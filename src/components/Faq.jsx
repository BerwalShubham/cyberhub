import React from "react";
import Accordion from "react-bootstrap/Accordion";
import absolute_dogecoin_parachute from "../assets/images/svg/absolute-dogecoin-parachute.svg";

const Faq = () => {
  return (
    <section className="py-5 position-relative">
      <div className="elipse_faq"></div>
      <img
        className="absolute_dogecoin_parachute"
        width={180}
        height={280}
        src={absolute_dogecoin_parachute}
        alt="parachute"
      />
      <div className="cstm-container">
        <h2 className="color-soil fs-xxl text-center fw-bold">
          FAQ<span className="text-white">’s</span>
        </h2>
        <div className="mt-5">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="ps-sm-5 ps-3">
                Egestas scelerisque duis quis aliquet. Consectetur?
              </Accordion.Header>
              <Accordion.Body className="ps-sm-5 ps-3">
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mt-4">
              <Accordion.Header className="ps-sm-5 ps-3">
                Ac nec enim amet, leo lorem quis neque vitae aliquet?
              </Accordion.Header>
              <Accordion.Body className="ps-sm-5 ps-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="2" className="mt-4">
              <Accordion.Header className="ps-sm-5 ps-3">
                Sit laoreet nibh sit hac potenti. Non ullamcorper fames nibh
                donec?
              </Accordion.Header>
              <Accordion.Body className="ps-sm-5 ps-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="mt-4">
              <Accordion.Header className="ps-sm-5 ps-3">
                Porta amet tortor nec pulvinar urna. Et blandit sit id?
              </Accordion.Header>
              <Accordion.Body className="ps-sm-5 ps-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="mt-4">
              <Accordion.Header className="ps-sm-5 ps-3">
                Tellus hendrerit fermentum ut hendrerit ac vestibulum?
              </Accordion.Header>
              <Accordion.Body className="ps-sm-5 ps-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
