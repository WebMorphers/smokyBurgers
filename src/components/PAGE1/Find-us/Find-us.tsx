import Map from "../../mapContainer";

import location from "../../../assets/location-svg.svg";
import phone from "../../../assets/phone-svg.svg";
import time from "../../../assets/time-svg.svg";

import "./find-us.css";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FindUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <div id="Find" className="cont flex justify-center items-center font-semibold">
      <div className="">
        <h1 className="title text-5xl text-center mb-8">Find US</h1>
        <div className="flex max-md:flex-col gap-12 ">
          <div className="border-4 border-red-600">
            <Map />
          </div>
          <div className="flex flex-col md:py-11 gap-4 xl:justify-center xl:gap-9  justify-between items-start">
            <div className="flex justify-center items-center gap-3">
              <img src={location} alt="" />
              <p className="adress font-extrabold text-lg">
                18A Avenue Tantan , residence jardin du phare
              </p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <img src={phone} alt="" />
              <p className="text-[#3E84D8]">0520-273808</p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <img src={time} alt="" />
              <p className="text-slate-800">
                Tue-Sun :
                <span className="text-[#3E84D8] font-medium">
                  12 AM - 11 PM
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
     </motion.div>
  );
};

export default FindUs;
