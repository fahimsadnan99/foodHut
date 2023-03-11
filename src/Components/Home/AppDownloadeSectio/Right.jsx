import React from "react";
import DownloadApp from "../../../assets/DownloadeApp.svg";
import FooterImg from "../../../assets/FooterIcon.svg";

const Right = () => {
  return (
    <div className="relative"> 
      <div>
        <img src={DownloadApp} alt="downlaodeApp" className="xs:max-w-[350px] sm:max-w-[400px]  md:max-w-[570px] lg:ml-auto xs:mx-auto " />
      </div>

      <img src={FooterImg} alt="footer" className="absolute xs:bottom-[-80px] sm:bottom-[-90px] md:bottom-[-100px]   lg:bottom-[-110px] right-10
      xs:max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:w-auto
      "/>
    </div>
  );
};

export default Right;
