import React from "react";
import playbit from "../assets/images/svg/playbit.svg";
import twofour from "../assets/images/svg/24logo.svg";
import tradinghive from "../assets/images/svg/tradinghive.svg";
import focusgroup from "../assets/images/svg/focusgroup.svg";
const Partners = () => {
  return (
    <>
      <h2 className="text-white text-center fw-bold fs-xxl pt-5">
        Part<span className="color-soil">ners</span>
      </h2>
      <section className="py-5 bg-img-partners">
        <div className="cstm-container py-xl-5">
          <div className="d-flex align-items-center justify-content-evenly flex-xl-row flex-column mt-xl-5">
            <div className="d-flex">
              <div className="text-center">
                <img className="w-100" src={playbit} alt="palybit" />
                <p className="mb-0 fs-xsm fw-bold">Playbit</p>
              </div>
              <div className="text-center ps-4">
                <img className="w-100" src={twofour} alt="palybit" />
                <p className="mb-0 fs-xsm fw-bold">24 Capital</p>
              </div>
            </div>
            <div className="d-flex mt-4 mt-xl-0">
              <div className="text-center">
                <img className="w-100" src={tradinghive} alt="palybit" />
                <p className="mb-0 fs-xsm fw-bold">TradingHive</p>
              </div>
              <div className="text-center ps-4">
                <img className="w-100" src={focusgroup} alt="palybit" />
                <p className="mb-0 fs-xsm fw-bold">Focus Group Equities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p className="color-soil fs-xsm fw-bold text-center pt-3 pt-xl-0">
        For business and collaborations, contact us team@cyberdrops.finance
      </p>
    </>
  );
};

export default Partners;
