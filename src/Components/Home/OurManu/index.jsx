import React, { useState } from "react";
import Card from "../../Common/Card";

const menu = ["Ramen", "Breakfast", "Lunch", "Dinner", "Maxican", "Italian", "Desserts", "Drinks"];

const index = () => {
  const [menuSelect, setMenuSelect] = useState("Ramen");
  return (
    <div className="OurMenuWrapper">
      <div className="menuChildWrapper">
        <div className="menuHeadline">
          <span className="text-[#F54748]">Menu </span> that
          <span className="text-[#FDC55E]"> always </span>
          make you fall in <span className="text-[#F54748]">love</span>
        </div>

        <div
          className="menuWrapper "
        >
          {menu?.map((item, index) => {
            return (
              <button
                className={`menuBtn ${
                  menuSelect == item &&
                  "menuActiveBtn "
                }`}
                onClick={() => setMenuSelect(item)}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-4">
          {Array(8)
            .fill(0)
            .map((item, ind) => {
              return (
                <div className="pt-56">
                  <Card></Card>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default index;
