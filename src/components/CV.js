import React from "react";

const CV = () => {
  return (
    <>
      <div className="download-container">
        <a href="pdf/cv.pdf" download="CV_JULES_DESCHAMPS">
          <embed src="pdf/Aguado.png"></embed>
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
    </>
  );
};

export default CV;
