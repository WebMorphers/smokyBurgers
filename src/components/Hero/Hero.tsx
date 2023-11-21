import Navbar from "../Navbar/navbar";
import img from "../../assets/imaagehero.png";

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
      className="hero w-full z-0 flex flex-col justify-center items-center bg-[#160808]"
      style={heroStyle}
      id="hero"
    >
      <Navbar />
      <h1 className="text-9xl">SMOKY BURGERS</h1>
      <button className="bg-red-700 text-white om text-3xl p-2 rounded-2xl font-extrabold  absolute bottom-36 ">Our menu</button>

    </div>
  );
};

export default Hero;
