import React from "react";
import dogecoinparachute from "../assets/images/svg/parachute-with-doge-coin.svg";
import redcoinparachute from "../assets/images/svg/rainbow-parachute-with-red-coin.svg";
import binancecoinparachute from "../assets/images/svg/parachute-with-binance-coin.svg";
import bitcoinparachute from "../assets/images/svg/parachute-with-bitcoin-coin.svg";
import shibcoinparachute from "../assets/images/svg/parachute-with-shib-coin.svg";
import blueparachute_dogecoin from "../assets/images/svg/blue-yellow-parachute-with-doge-coin.svg";
import bluecoin_parachute from "../assets/images/svg/parachute-with-blue-coin.svg";
import yellowcoin_parachute from "../assets/images/svg/rainbow-parachute-with-yellow-coin.svg";
import absolute_bluecoin_parachute from "../assets/images/svg/absolute-bluecoin-parachute.svg";
import absolute_orange_parachute from "../assets/images/svg/absolute-orange-white-parachute-blue-coin.svg";
import arrow from "../assets/images/svg/roadmap-arrow.svg";

const Roadmap = () => {
  return (
    <section className="py-5 roadmap-bg-img position-relative">
      <div className="elipse_roadmap"></div>
      <img
        width={200}
        height={300}
        className="absolute_bluecoin_parachute_raodmap d-none d-sm-block"
        src={absolute_bluecoin_parachute}
        alt="parachute"
      />
      <img
        width={200}
        height={300}
        className="absolute_orange_parachute"
        src={absolute_orange_parachute}
        alt="parachute"
      />
      <img
        width={200}
        height={300}
        className="absolute_bluecoin_parachute_roadmap"
        src={absolute_bluecoin_parachute}
        alt="parachute"
      />
      <div className="cstm-container py-5">
        <h2 className="text-white text-center fw-bold fs-xxl">
          Road<span className="color-soil">Map</span>
        </h2>
        <div className="d-flex align-items-center justify-content-lg-center mt-4">
          <div className="timeline mt-5">
            <div>
              <img
                className="dogecoinparachute"
                src={dogecoinparachute}
                alt="parachute-carrying-doge-coin"
              />
              <img className="arrow" src={arrow} alt="arrow" />
              <div className="dogecoin-text">
                <h2 className="fw-semibold fs-md text-white">March 2022</h2>
                <p className="mb-0 text-white fs-xxsm">
                  1000 Drops Launch on Ethereum
                </p>
              </div>
            </div>

            <div>
              <img
                className="redcoinparachute"
                src={redcoinparachute}
                alt="parachute-carrying-red-coin"
              />
              <img className="arrow-red-coin" src={arrow} alt="arrow" />
              <div className="redcoin-text text-lg-end text-nowrap">
                <h2 className="fw-semibold fs-md text-white">March 2022</h2>
                <p className="mb-0 text-white fs-xxsm">
                  1000 Drops Launch on Ethereum
                </p>
              </div>
            </div>

            <div>
              <img
                className="binancecoin-parachute"
                src={binancecoinparachute}
                alt="parachute-carrying-doge-coin"
              />
              <img className="arrow-binance-coin" src={arrow} alt="arrow" />
              <div className="binance-coin-text">
                <h2 className="fw-semibold fs-md text-white">March 2022</h2>
                <p className="mb-0 text-white fs-xxsm">Creation of Treasury</p>
              </div>
            </div>

            <div>
              <img
                className="bitcoin-parachute"
                src={bitcoinparachute}
                alt="parachute-carrying-doge-coin"
              />
              <img className="arrow-bit-coin" src={arrow} alt="arrow" />
              <div className="bit-coin-text text-lg-end text-nowrap">
                <h2 className="fw-semibold fs-md text-white">April 2022</h2>
                <p className="mb-0 text-white fs-xxsm">Our First Airdrop</p>
              </div>
            </div>

            <div>
              <img
                className="blueparachute_dogecoin"
                src={blueparachute_dogecoin}
                alt="parachute-carrying-doge-coin"
              />
              <img className="arrow-blue-doge-coin" src={arrow} alt="arrow" />
              <div className="blue-dogecoin-text">
                <h2 className="fw-semibold fs-md text-white">June 2022</h2>
                <p className="mb-0 text-white fs-xxsm">Major Collabs</p>
              </div>
            </div>

            <div>
              <img
                className="shibcoin_parachute"
                src={shibcoinparachute}
                alt="parachute-carrying-doge-coin"
              />
              <img className="arrow-shib-coin" src={arrow} alt="arrow" />
              <div className="shib-coin-text text-lg-end text-nowrap">
                <h2 className="fw-semibold fs-md text-white">Sometime in Q3</h2>
                <p className="mb-0 text-white fs-xxsm">
                  Cyber Celebs come on Ethereum
                </p>
              </div>
            </div>

            <div>
              <img
                className="bluecoin_parachute"
                src={bluecoin_parachute}
                alt="parachute-carrying-doge-coin"
              />
              <img className="arrow-blue-coin" src={arrow} alt="arrow" />
              <div className="blue-coin-text ">
                <h2 className="fw-semibold fs-md text-white">Sometime in Q3</h2>
                <p className="mb-0 text-white fs-xxsm">Streetwear + Merch</p>
              </div>
            </div>

            <div>
              <img
                className="yellowcoin_parachute"
                src={yellowcoin_parachute}
                alt="parachute-carrying-doge-coin"
              />
              <img className="arrow-yellow-coin" src={arrow} alt="arrow" />
              <div className="yellow-coin-text text-lg-end text-nowrap">
                <h2 className="fw-semibold fs-md text-white">Sometime in Q4</h2>
                <p className="mb-0 text-white fs-xxsm">Enhanced Partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
