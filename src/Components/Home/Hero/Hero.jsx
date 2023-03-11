import React from "react";
import Left from "./Left";
import Right from "./Right";

const Hero = () => {
  return (
    <div className="HeroWrapper" id="home">
      <div className="grid lg:grid-cols-2 lg:space-x-24">
        <Left></Left>
        <Right></Right>
      </div>
    </div>
  );
};

export default Hero;
