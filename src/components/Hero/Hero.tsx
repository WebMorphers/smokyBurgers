import Navbar from "../Navbar/navbar";
import img from "../../assets/imaagehero.png";
import imgLeft from '../../assets/img-left.png'
import imgRight from '../../assets/img-right.png'
import imgMid from '../../assets/img-mid.png'

import "./hero.css"; 
const Hero = () => {
  

  const heroStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100vh",
    width: "100%",
  };

  return (
    <div
      className=" w-full h-screen opa z-0 flex flex-col justify-end pb-20 gap-12 items-center relative bg-[#160808]"
      id="hero"
    >
      <img className="z-0 opacity-40 bg-cover left-0 top-0 bottom-0 my-auto absolute h-[100vh] " src={imgLeft} alt="" />
      <img className="z-0 opacity-40 bg-cover right-0 max-xl:-right-32 top-0 bottom-0 my-auto absolute h-[100vh] " src={imgRight} alt="" />
      <img className="z-0 hidden md:block opacity-30 bg-cover right-0 left-0 top-0 bottom-0 m-auto absolute h-[100vh] " src={imgMid} alt="" />
      <Navbar />
      <h1 className=" title__hero text-9xl z-10 text-center">SMOKY BURGERS</h1>
      <button className="bg-[#FE181A] text-white om text-xl p-2 px-3 border-gray-400 border rounded-2xl bottom-36 ">Our menu</button>
      
    </div>
  );
};

export default Hero;
