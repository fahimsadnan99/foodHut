import React from "react";
import "../../Style/Card.css";
import BorderImg from "../../assets/Border.svg";
import F1 from "../../assets/f1.svg";
import R1 from "../../assets/R1.svg";
import Start from "../../assets/Start.svg";

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
        <div className="Rating">
          <img src={R1} alt="R1" />
          <img src={Start} alt="Star" />
          <p className="self-center">(4.8)</p>
        </div>
        <p className="cardBodyHeadline">Kebab</p>
        <p className="cardDescription">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>

        <button className="cardBtn">Order Now</button>
      </div>
    </div>
  );
};

export default Card;
