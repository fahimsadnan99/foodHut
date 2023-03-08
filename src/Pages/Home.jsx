import React from "react";
import "../Style/Home/Home.css";
import Hero from "../Components/Home/Hero/Hero";
import TodaySpecial from "../Components/Home/TodaySpecial"
import WhyFoodHut from "../Components/Home/WhayFoodHut"

const Home = () => {
  return <div className="HomeWrapper">

<Hero></Hero>
<TodaySpecial></TodaySpecial>
<WhyFoodHut></WhyFoodHut>

  </div>;
};

export default Home;
