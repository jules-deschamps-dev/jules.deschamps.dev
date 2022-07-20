import React from "react";

const CV = () => {
  return (
    <div id="cv" className="container">
      <div className="download-container">
        <a href="pdf/CV.pdf" download="CV_JULES_DESCHAMPS">
          <embed src="pdf/CV.png" alt="cv" />
          <img
            src="img/icons/cloud.svg"
            alt="download"
            className="download-icon"
          />
          <img
            src="img/icons/arrow-down.svg"
            alt="download arrow"
            className="download-arrow"
          />
        </a>
      </div>
    </div>
  );
};

export default CV;
