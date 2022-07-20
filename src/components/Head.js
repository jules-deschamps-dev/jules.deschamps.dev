import React from "react";

const Head = (props) => {
  return (
    <head>
      <a href="#bio">
        <div
          className="profil-picture-container"
          onClick={() => props.setShow("home")}
        >
          <div class="wrapper">
            <div class="instamask">
              <img
                class="mask-layer"
                src="img/me.jpg"
                alt=""
                id="profil-picture"
              />
            </div>
          </div>
        </div>
      </a>

      <nav className="head-links-container">
        <div className="sub-container">
          <a
            href="#skills"
            className="btn"
            onClick={() => props.setShow("skills")}
          >
            <span className="margin txt-center w100">Skills</span>
          </a>
          <a
            href="#portfolio"
            className="btn"
            onClick={() => props.setShow("portfolio")}
          >
            <span className="margin txt-center w100">Mes Créations</span>
          </a>
          <a href="#cv">
            <div className="btn " onClick={() => props.setShow("cv")}>
              <span className="margin txt-center w100">Curriculum Vitae</span>
            </div>
          </a>
        </div>

        <div className="sub-container"></div>
      </nav>

      <div className="externals-links-container">
        <a
          href="https://codepen.io/jules-deschamps-dev"
          className="externals-links-header"
        >
          <img src="../img/icons/codepen.svg" alt="codepen" />
        </a>

        <a
          href="https://github.com/jules-deschamps-dev"
          className="externals-links-header"
        >
          <img src="../img/icons/github.svg" alt="github" />
        </a>

        <a
          href="https://www.linkedin.com/in/jules-deschamps-dev/"
          className="externals-links-header"
        >
          <img src="../img/icons/linkedin-in.svg" alt="linkedin" />
        </a>
        <a
          href="mailto:jules-deschamps.dev@gmail.com"
          className="externals-links-header"
        >
          <img src="../img/icons/at.svg" alt="mail" />
        </a>

        <a href="https://t.me/julesdesch/" className="externals-links-header">
          <img src="../img/icons/paper-plane.svg" alt="telegram" />
        </a>
      </div>
    </head>
  );
};

export default Head;
