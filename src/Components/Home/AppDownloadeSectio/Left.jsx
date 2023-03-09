import React from "react";
import GooglePlay from "../../../assets/GooglePlay.svg";
import AppStore from "../../../assets/AppStore.svg";

const Left = () => {
  return (
    <div>
      <div className="space-y-12">
        <p className="w-[643px] font-Poppins text-[3.2vw] text-white font-bold leading-[67px] pt-28">
          It’s Now
          <span className="text-[#F54748]"> More Easy </span>
          to <span className="text-[#FDC55E]">Order </span> by Our Mobile
          <span className="text-[#F54748]"> App</span>
        </p>

        <div className="font-Poppins text-lg leading-6 w-[550px] text-white opacity-80">
          All you need to do is downlode one of the best delivery apps, make a and most companies
          are opting for mobile app devlopment for food delivery
        </div>

        <div className="flex space-x-7">
          <button>
            <img src={GooglePlay} alt="googleImg" />
          </button>{" "}
          <button>
            <img src={AppStore} alt="googleImg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
