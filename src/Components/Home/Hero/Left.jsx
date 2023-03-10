import React from "react";
import LoveIcon from "../../../assets/love.svg";
import UnderLine from "../../../assets/underLine.svg";
import SearchIcon from "../../../assets/SearchIcon.svg";
import SearchBtn from "../../../assets/SearchBtn.svg";
import LongArrowIcon from "../../../assets/HeroLongArrow.svg";
import OrangeIcon from "../../../assets/OrangeIcon.svg";
import watchIcon from "../../../assets/PlayBtn.svg";

const Left = () => {
  return (
    <div className="HeroLeftWrapper">
      <img
        className="ml-[224px] mt-[92.5px] absolute opacity-50"
        src={LongArrowIcon}
        alt="longArrow"
      />
      <img className="xs:invisible lg:visible lg:ml-[580px] mt-[240px]  absolute" src={OrangeIcon} alt="orangeIcon" />
      <div className="HeroLeftWrapperChildWrapper">
        {/* //Love icon Component */}
        <div className="HeroLeftLoveCOmponent">
          <img src={LoveIcon} alt="loveIcon" />
          <span>People Trust us</span>
        </div>

        {/* Hero Main Text Start   */}
        <div className="HeroLeftMainHedline">
          We're <span className="text-[#F54748] ">Serious</span> For
          <br></br>
          <span className="text-[#F54748]">Food </span> &
          <span className="text-[#FDC55E] relative">
            Delivery
            <img className="absolute bottom-2 right-0" src={UnderLine} alt="underLiner" />
          </span>
          .
        </div>

        {/* Hero Description Text */}

        <div className="HeroLeftDescription">
          Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60
          minutes.
        </div>

        {/* Search Button */}

        <div className="HeroSearchBtn">
          <span className=" mx-3">
            <img src={SearchIcon} alt="srcIcon" />
          </span>
          <input
            type="text"
            placeholder="Search food"
            className="bg-inherit outline-none text-white w-[100%]"
          />

          <button className="ml-auto mr-3">
            <img src={SearchBtn} alt="srcIcon" />
          </button>
        </div>

        {/* Download Button And watch Button*/}

        <div className="HeroButtonWrapper">
          <button className="HeroDownloadBtn">Download App</button>

          <button className="HeroWatchBtn">
            <span className="md:w-[52px]">
              <img className="HeroWatchBtnIcon" src={watchIcon} alt="watch" />
            </span>
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
