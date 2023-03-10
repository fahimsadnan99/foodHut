import React from "react";
import OnlineIcon from "../../../assets/OnlineOrder.svg";
import twentyFour from "../../../assets/tweentyFour.svg";
import Booking from "../../../assets/Booking.svg";

const list = [{text : "Online Order", src : OnlineIcon},{text : "24/7 Service", src : twentyFour},{text : "Pre-Reservation"},{text: "Oragonized Foodhut Place"}, {text: "Super Chef"},{text : "Clean Kitchen"}]

const Right = () => {
  return (
    <div>
      <div>
        <div className="text-white font-Poppins xs:max-w-[400px] max-w-[452px] font-bold xs:text-[6vw] sm:text-[5.5vw] md:text-[3.2vw] md:pt-44 xs:leading-tight md:leading-[62px]">
          We are <span className="text-[#F54748]">more</span> than{" "}
          <span className="text-[#FDC55E]">multiple</span> service
        </div>

        <div className="opacity-80 xs:max-w-[400px] sm:max-w-[500px] md:w-auto text-white font-Poppins my-5 xs:text-sm md:text-lg">
          This is a type of resturent which typically serves food and drink, in addition to light
          refreshments such as baked goods or snacks. The term comes frome the rench word meaning
          food
        </div>

        <div className="grid grid-cols-2 text-white font-Poppins text-lg">

          {list.map(item =>{
            return <div className="flex xs:space-x-2 md:space-x-3 my-5"><img className="max-w[26px]" src={item?.src || Booking} alt="img"/><p>{item.text}</p></div>
          })}

        </div>
        <button className="w-[114px] bg-[#F65F5F] p-2 rounded-full my-4 font-Poppins">About Us</button>
      </div>
    </div>
  );
};

export default Right;
