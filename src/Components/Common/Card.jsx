import React from "react";
import "../../Style/Card.css";
import BorderImg from "../../assets/Border.svg";
import F1 from "../../assets/f1.svg";

const Card = () => {
  return (
    <div className="cardWrapper">
      <div className="cardImgWrapper ">
        <div className="mx-auto w-[253px]">
          <img src={BorderImg} alt="borderImg" />
          <img src={F1} about="img1" />
          <div className="cardPrice">10$</div>
        </div>
      </div>
      <div className="cardBody">
        <div className="rating">5.0 xxx</div>
        <p>Headline</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      </div>
    </div>
  );
};

export default Card;
