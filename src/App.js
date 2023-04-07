import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurMission from "./components/OurMission";
import Partners from "./components/Partners";
import OurAlgo from "./components/OurAlgo";
import WhatWeDo from "./components/WhatWeDo";
import HowItWorks from "./components/HowItWorks";
import MeetTheTeam from "./components/MeetTheTeam";
import Faq from "./components/Faq";
import CyberFooter from "./components/CyberFooter";
import Roadmap from "./components/Roadmap";
import CyberHeader from "./components/CyberHeader";
import CyberNav from "./components/CyberNav";

function App() {
  return (
    <>
      <CyberHeader />
      <OurMission />
      <Partners />
      <OurAlgo />
      <WhatWeDo />
      <HowItWorks />
      <MeetTheTeam />
      <Roadmap />
      <Faq />
      <CyberFooter />
    </>
  );
}

export default App;
