import React, { useState } from "react";
import Bio from "./components/Bio";
import CV from "./components/CV";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

const Home = () => {
  const [printSkills, setPrintSkills] = useState(false);
  const [printPortfolio, setPrintPortfolio] = useState(false);
  const [printCv, setPrintCv] = useState(false);
  const [printBio, setPrintBio] = useState(true);
  const [show, setShow] = useState("");
  console.log("show", printSkills);

  if (show) {
    switch (show) {
      case "home":
        setPrintBio(true);
        setPrintSkills(false);
        setPrintPortfolio(false);
        setPrintCv(false);
        setShow("");
        break;
      case "skills":
        setPrintSkills(true);
        setPrintPortfolio(false);
        setPrintCv(false);
        setPrintBio(false);
        setShow("");
        break;
      case "portfolio":
        setPrintPortfolio(true);
        setPrintSkills(false);
        setPrintCv(false);
        setPrintBio(false);
        setShow("");
        break;
      case "cv":
        setPrintCv(true);
        setPrintPortfolio(false);
        setPrintSkills(false);
        setPrintBio(false);
        setShow("");
        break;
      default:
        setPrintSkills(false);
        setPrintPortfolio(false);
        setPrintCv(false);
        setPrintBio(false);
        setShow("");
        break;
    }
  }

  return (
    <>
      <Head show={show} setShow={setShow} />
      {printSkills ? <Skills /> : <></>}
      {printPortfolio ? <Portfolio /> : <></>}
      {printCv ? <CV /> : <></>}
      {printBio ? <Bio /> : <></>}
      <Footer />
    </>
  );
};

export default Home;
