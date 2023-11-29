import Navbar from "../Navbar/navbar";
import img from "../../../assets/imaagehero.png";

import "./hero.css";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
 
const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100vh",
    width: "100%",
  };
  const [ref, inView] = useInView({
    triggerOnce: false,  
  });

  const iconVariants = {
    hidden: { opacity: 0, y:  80 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    variants={iconVariants}
    transition={{ duration: 0.5 }}
   >
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
        className="bg-[#FE181A] text-white om text-xl p-2 px-3  border-gray-400 border rounded-2xl bottom-36 "
      >
        Our menu
      </a>
    </div>
    </motion.div>
  );
};

export default Hero;
