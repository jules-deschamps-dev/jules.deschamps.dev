import React from "react";

const Head = (props) => {
  return (
    <head>
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

      <nav className="head-links-container">
        <div className="sub-container">
          <a
            href="#skills-container"
            className="btn"
            onClick={() => props.setShow("skills")}
          >
            <span className="margin txt-center w100">Skills</span>
          </a>
          <a className="btn" onClick={() => props.setShow("portfolio")}>
            <span className="margin txt-center w100">Mes Créations</span>
          </a>
          <div className="btn " onClick={() => props.setShow("cv")}>
            <span className="margin txt-center w100">Curriculum Vitae</span>
          </div>
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

        <img
          src="../img/icons/linkedin-in.svg"
          alt="linkedin"
          className="externals-links-header"
        />
      </div>
    </head>
  );
};

export default Head;
