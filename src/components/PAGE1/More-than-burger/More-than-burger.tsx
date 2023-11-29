import moreburger from "../../../assets/more-burger.png";
import "./More-than-burger.css";
import burger from "../../../assets/burger.svg";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const Moreburger = () => {
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
    <div className="cont">
      <div className=" flex max-sm:flex-col items-center justify-between xl:justify-center xl:gap-40  gap-12 relative">
        <div className="bg-[#FB8A8A] rounded-[40px] flex justify-center">
          <img className="pt-24 " src={moreburger} />
        </div>
        <div className="col-span-2 flex items-center flex-col justify-center gap-12 relative ">
          <div className="text-3xl sm:text-5xl text-[#FB8A8A] font-semibold">
            <h1 id="light" className="title text-[#FB8A8A]">
              More than just a burger
            </h1>
          </div>
          <div className="description text-xl text-gray-700">
            Giving the customer a burger that ticks all the boxes from taste to
            price to quality.
          </div>

          <img
            src={burger}
            className=" max-md:w-16 absolute bottom-0 top-0 my-auto right-0 animate-bounceRight"
            alt=""
          />
        </div>

        <img
          src={burger}
          className=" max-md:w-16 absolute top-0 -left-10 max-sm:left-0 animate-bounceLeft"
          alt=""
        />
      </div>
    </div></motion.div>
  );
};

export default Moreburger;
