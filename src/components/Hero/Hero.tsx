import Navbar from "../Navbar/navbar";
import img from "../../assets/imaagehero.png";

import "./hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const heroStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100vh",
    width: "100%",
  };

  return (
    <div
      className="hero w-full relative z-0 flex flex-col justify-center items-center bg-[#160808]"
      style={heroStyle}
      id="hero"
    >
      <Navbar />
    </div>
  );
};

export default Hero;
