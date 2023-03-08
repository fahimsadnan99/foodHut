import React from "react";
import "../Style/Home/Home.css";
import Hero from "../Components/Home/Hero/Hero";
import TodaySpecial from "../Components/Home/TodaySpecial"

const Home = () => {
  return <div className="HomeWrapper">

<Hero></Hero>
<TodaySpecial></TodaySpecial>

  </div>;
};

export default Home;
