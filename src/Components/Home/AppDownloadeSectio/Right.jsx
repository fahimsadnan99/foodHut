import React from "react";
import DownloadApp from "../../../assets/DownloadeApp.svg";
import FooterImg from "../../../assets/FooterIcon.svg";

const Right = () => {
  return (
    <div className="relative"> 
      <div>
        <img src={DownloadApp} alt="downlaodeApp" className="w-[570px] ml-auto" />
      </div>

      <img src={FooterImg} alt="footer" className="absolute bottom-[-110px] right-10"/>
    </div>
  );
};

export default Right;
