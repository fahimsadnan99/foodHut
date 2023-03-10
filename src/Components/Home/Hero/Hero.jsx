import React from "react";
import Left from "./Left";
import Right from "./Right";

const Hero = () => {
  return (
    <div className="HeroWrapper">
      <div className="grid lg:grid-cols-2 space-x-24">
        <Left></Left>
        <Right></Right>
      </div>
    </div>
  );
};

export default Hero;
