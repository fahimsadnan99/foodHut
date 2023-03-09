import React from "react";
import Facebook from "../assets/FaceBook.svg";
import Instagram from "../assets/Instragram.svg";
import Twitter from "../assets/Twitter.svg";

let socialMedia = [Facebook, Instagram, Twitter];
const AboutUs = ["About Us", "Service Us", "Contact", "Company"];
const Company = ["Partnership", "Terms of Use", "Privacy", "Sitemap"];

const Footer = () => {
  return (
    <div className="bg-black w-full h-[70vh] font-Poppins">
      <div className="w-[92%] mx-auto pt-36">
        <div className="grid grid-cols-4">
          <div className=" space-y-5">
            <p className="text-[#F65F5F] font-semibold text-3xl">Foodhut</p>
            <p className="text-white w-[325px] text-lg pr-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{" "}
            </p>

            <div className="space-x-7">
              {socialMedia?.map((item, index) => {
                return (
                  <button>
                    <img src={item} alt={item} />{" "}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p
              className="text-[#F65F5F] font-semibold text-lg
            pb-5"
            >
              About Us
            </p>
            <div className="space-y-5">
              {AboutUs?.map((item, index) => {
                return <button className="text-white block">{item}</button>;
              })}
            </div>
          </div>

          <div>
            <p
              className="text-[#F65F5F] font-semibold text-lg
            pb-5"
            >
              Company
            </p>
            <div className="space-y-5">
              {Company?.map((item, index) => {
                return <button className="text-white block">{item}</button>;
              })}
            </div>
          </div>

          <div>
            <p
              className="text-[#F65F5F] font-semibold text-lg
            pb-5"
            >
              Get in touch
            </p>

            <p className="text-white w-[325px] text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>

            <div className="space-y-5">
              <input type="email" className="w-[205px] bg-[#252525] rounded-full p-2" placeholder="Email" /> <button className="bg-[#F65F5F] rounded-full p-2">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
