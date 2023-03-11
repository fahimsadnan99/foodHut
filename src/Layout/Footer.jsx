import React from "react";
import Facebook from "../assets/FaceBook.svg";
import Instagram from "../assets/Instragram.svg";
import Twitter from "../assets/Twitter.svg";

let socialMedia = [Facebook, Instagram, Twitter];
const AboutUs = ["About Us", "Service Us", "Contact", "Company"];
const Company = ["Partnership", "Terms of Use", "Privacy", "Sitemap"];

const Footer = () => {
  return (
    <div className="bg-black w-full pb-10 font-Poppins">
      <div className=" xs:w-[95%] md:w-[92%] mx-auto xs:pt-16 sm:pt-24 md:pt-36">
        <div className="flex flex-wrap justify-between xs:space-y-8 lg:space-y-0">
          <div className=" space-y-5">
            <p className="text-[#F65F5F] font-semibold xs:text-xl md:text-3xl">Foodhut</p>
            <p className="text-white w-[325px] md:text-lg pr-5 xs:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{" "}
            </p>

            <div className="space-x-7">
              {socialMedia?.map((item, index) => {
                return (
                  <button >
                    <img src={item} alt={item}/>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p
              className="text-[#F65F5F] font-semibold xs:text-base md:text-lg
            pb-5"
            >
              About Us
            </p>
            <div className="xs:space-y-3 md:space-y-5 xs:text-sm md:text-lg">
              {AboutUs?.map((item, index) => {
                return <button className="text-white block">{item}</button>;
              })}
            </div>
          </div>

          <div>
            <p
              className="text-[#F65F5F] font-semibold xs:text-base md:text-lg
            pb-5"
            >
              Company
            </p>
            <div className="xs:space-y-3 md:space-y-5 xs:text-sm md:text-lg">
              {Company?.map((item, index) => {
                return <button className="text-white block">{item}</button>;
              })}
            </div>
          </div>

          <div>
            <p
              className="text-[#F65F5F] font-semibold xs:text-base md:text-lg
            pb-5"
            >
              Get in touch
            </p>

            <p className="text-white w-[325px] xs:text-sm md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>

            <div className="space-y-5">
              <input
                type="email"
                className="max-w-[205px] bg-[#252525] rounded-full p-2"
                placeholder="Email"
              />{" "}
              <button className="bg-[#F65F5F] rounded-full p-2">Subscribe</button>
            </div>
          </div>
        </div>

        <div
          className="text-white text-sm text-center pt-10 font-po
        "
        >
          CopyWrite BY Fahim Sadnan
        </div>
      </div>
    </div>
  );
};

export default Footer;
