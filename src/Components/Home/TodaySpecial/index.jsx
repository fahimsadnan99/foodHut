import React from "react";
import TodaysIcon from "../../../assets/TodaysIcon.svg";
import Card from "../../Common/Card";

const index = () => {
  return (
    <div className="todayWrapper">
      <div className="todaysIcon">
        <img src={TodaysIcon} alt="Todays Icon" />
      </div>
      <div className="todayHeadline">
        Today <span className="text-[#F54748]">special</span> offers
      </div>
      <div className="todayDescription">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s
      </div>

      <div className="left-12 my-10">
        <div className="grid grid-cols-4">
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default index;
