import React from "react";

const Rate = (props) => {
  let rate = [];
  let className;
  let src;

  for (let i = 0; i < props.rate; i++) {
    if ((i == 1 && props.rate >= 3) || props.rate == 1) {
      src = "img/icons/star.svg";
      className = "rate-star bottom-star rate-star" + i;
    } else if (props.rate > 4) {
      className = "rate-star bottom-star rate-big-star rate-star" + i;
      src = "img/icons/certificate.svg";
    } else {
      className = "rate-star rate-star" + i;
      src = "img/icons/star.svg";
    }

    if (props.rate < 5) {
      rate.push(<img src={src} alt="star" className={className} />);
    } else rate = <img src={src} alt="star" className={className} />;
  }
  return <div className="rate-container"> {rate} </div>;
};

export default Rate;
