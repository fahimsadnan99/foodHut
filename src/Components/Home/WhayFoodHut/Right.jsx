import React from "react";
import OnlineIcon from "../../../assets/OnlineOrder.svg";
import twentyFour from "../../../assets/tweentyFour.svg";
import Booking from "../../../assets/Booking.svg";

const list = [{text : "Online Order", src : OnlineIcon},{text : "24/7 Service", src : twentyFour},{text : "Pre-Reservation"},{text: "Oragonized Foodhut Place"}, {text: "Super Chef"},{text : "Clean Kitchen"}]

const Right = () => {
  return (
    <div>
      <div>
        <div className="text-white font-Poppins w-[452px] font-bold text-[3.56vw] pt-44">
          We are <span className="text-[#F54748]">more</span> than{" "}
          <span className="text-[#FDC55E]">multiple</span> service
        </div>

        <div className="opacity-80  text-white font-Poppins my-5">
          This is a type of resturent which typically serves food and drink, in addition to light
          refreshments such as baked goods or snacks. The term comes frome the rench word meaning
          food
        </div>

        <div className="grid grid-cols-2 text-white font-Poppins text-lg">

          {list.map(item =>{
            return <div className="flex space-x-3 my-5"><img src={item?.src || Booking} alt="img"/><p>{item.text}</p></div>
          })}

        </div>
        <button className="w-[114px] bg-[#F65F5F] p-2 rounded-full my-4 font-Poppins">About Us</button>
      </div>
    </div>
  );
};

export default Right;
