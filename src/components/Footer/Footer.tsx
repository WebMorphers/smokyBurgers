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
      <ul className="grid lg:grid-cols-6  grid-cols-2  max-lg:gap-8  text-white  ">
      <a href=""> <li className="footer font-normal">Menu</li></a>
      <a href=""><li className="footer font-normal">About us</li></a>
      <a href=""> <li className="footer font-normal">Order Now</li></a>
      <a href=""><li className="footer font-normal">Location</li></a>
       <a href=""> <li className="footer font-normal">Contact Us</li></a>
        <li className="flex justify-end max-lg:justify-center max-lg:items-center items-end  gap-3">
        <img src={insta}  alt="" />          
        <img src={glovo} width={25} alt="" />          
        <img src={tiktok}  alt="" />     
         <img className="h-20 w-23" src={logo} /> 
        </li> 
      </ul>
      <hr className="border-t-2 border-white w-[60%] m-3" /> 
      <div className="flex flex-row justify-center items-center gap-12 text-white  ">
       <p>©2023 <a href="" className="text-amber-600 hover:text-orange-500">WEBMORPHERS</a> . All rights reserved.</p>
    </div>
    </div>
    </div>
  );
};

export default Footer;
