import React from "react";
import GooglePlay from "../../../assets/GooglePlay.svg";
import AppStore from "../../../assets/AppStore.svg";

const Left = () => {
  return (
    <div>
      <div className="space-y-12">
        <div className="xs:max-w-[400px] md:max-w-[643px] font-Poppins xs:text-[7vw] sm:text-[6vw] md:text-[3.5vw] lg:text-[3.2vw] text-white font-bold xs:leading-snug  md:leading-[67px] pt-28">
          It’s Now
          <span className="text-[#F54748]"> More Easy </span>
          to <span className="text-[#FDC55E]">Order </span> by Our Mobile
          <span className="text-[#F54748]"> App</span>
        </div>

        <div className="font-Poppins xs:text-sm md:text-lg leading-6 max-w-[550px] text-white opacity-80">
          All you need to do is downlode one of the best delivery apps, make a and most companies
          are opting for mobile app devlopment for food delivery
        </div>

        <div className="flex space-x-7">
          <button>
            <img src={GooglePlay} alt="googleImg"  className="xs:w-[120px] sm:w-[130px] md:w-auto"/>
          </button>
          <button>
            <img src={AppStore} alt="googleImg"  className="xs:w-[110px] sm:w-[120px] md:w-auto"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
