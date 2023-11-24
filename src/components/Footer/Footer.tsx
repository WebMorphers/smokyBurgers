import React from "react";
import "./Footer.css";
import logo from "../../assets/logohd.png";
import insta from "../../assets/instagram-svg.svg";
import glovo from "../../assets/glovo-svg.svg";
import tiktok from "../../assets/tiktok-svg.svg";


const Footer = () => {
  return (
    <div>
    <div className="bg-black flex flex-col justify-center items-center p-10">
      <ul className="flex flex-row justify-center items-center gap-12 text-white  ">
        <li className="footer font-normal">Menu</li>
        <li className="footer font-normal">About us</li>
        <li className="footer font-normal">Order Now</li>
        <li className="footer font-normal">Location</li>
        <li className="footer font-normal">Contact Us</li>
        <li className="flex justify-end items-end gap-3">
        <img src={insta}  alt="" />          
          <img src={glovo} width={25} alt="" />          
          <img src={tiktok}  alt="" />    

          <img className="h-20 w-23" src={logo} />

        </li>
        
      </ul>
      <hr className="border-t-2 border-white w-[60%] m-3" />

      <div className="flex flex-row justify-center items-center gap-12 text-white  ">
       <p>©2023 WEBMORPHERS . All rights reserved.</p>
    </div>
    </div>
    </div>
  );
};

export default Footer;
