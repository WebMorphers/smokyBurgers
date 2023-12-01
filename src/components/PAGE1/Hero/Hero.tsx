import Navbar from "../Navbar/navbar";
import img from "../../../assets/imaagehero.png";

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
      className="hero w-full z-0 flex flex-col justify-end pb-20 gap-12 items-center bg-[#160808]"
      style={heroStyle}
      id="hero"
    >
      <Navbar />
      <h1 className=" title__hero text-9xl max-sm:text-8xl text-center">
        SMOKY BURGERS
      </h1>
      <a
        href="/menu"
        className="bg-[#FE181A] hover:shadow-2xl hover:shadow-red-500 text-white om font-medium text-xl p-2 px-3  border-white border rounded-2xl bottom-36 transition-transform duration-500 ease-in-out transform hover:scale-110 "
      >
        Our menu
      </a>
    </div>
    
  );
};

export default Hero;
