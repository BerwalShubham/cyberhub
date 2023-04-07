import React from "react";
import CyberNav from "./CyberNav";
import CyberHero from "./CyberHero";

const CyberHeader = () => {
  return (
    <section className="min_vh_100 d-flex flex-column">
      <CyberNav />
      <CyberHero />
    </section>
  );
};

export default CyberHeader;
