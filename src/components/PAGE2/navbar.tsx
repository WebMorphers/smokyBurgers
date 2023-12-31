import logo from "../../assets/logohd.png";
import {  useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import "../PAGE1/Navbar/navbar.css";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const navigate = useNavigate();

  function chang() {
    setnav(!nav);
  }
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
       console.log(`Scrolling to ${sectionId} at position ${section.offsetTop}`);
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const navigateAndScrollToSection = (sectionId: string) => {
    if (window.location.pathname === "/menu") {
      console.log("Navigating to '/'");
      navigate("/");
      setTimeout(() => {
        console.log(`Scrolling to ${sectionId}`);
        scrollToSection(sectionId);
      }, 500);
    } else {
      console.log(`Scrolling to ${sectionId}`);
      scrollToSection(sectionId);
    }
  };

  return (
    <div
      id="nav"
      className="flex  w-full absolute top-0  justify-between items-center h-24 mx-auto px-10 z-10 text-white bg-gray-900"
    >
      <a href="/">
        <img className="h-20 w-23" src={logo} />
      </a>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a
            onClick={() => navigateAndScrollToSection("Favorites")}
            className="no-underline mx-4 cursor-pointer font-normal	 hover:text-red-600"
          >
            Favorites
          </a>
        </li>
        <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-normal	 hover:text-[#FE181A]"
            onClick={() => navigateAndScrollToSection("videos")}
          >
            Videos
          </a>
        </li>
        <li className="p-4">
          <a
            onClick={() => navigateAndScrollToSection("Find")}
            className="no-underline mx-4 cursor-pointer font-normal hover:text-red-600"
          >
            Find us
          </a>
        </li>
         
      </ul>
      <div></div>

      <div onClick={chang} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} color={"white"} />
        ) : (
          <AiOutlineMenu size={20} color={"white"} />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0  h-full w-full border-r border-r-gray-900  bg-[#FFD596] ease-in-out duration-500 flex items-center justify-center flex-col"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <div onClick={chang} className="absolute top-20 right-20 z-10">
          <AiOutlineClose size={20} color={"white"} />
        </div>

        <ul className="flex flex-col justify-center items-center">
          <a onClick={() => {
              chang();
            }} href="/">
            <img className="h-20 w-23" src={logo} alt="" />
          </a>
          <div className="absolute top-0 object-top z-0"></div>
          <li className="p-4">
          <a
             
            className="no-underline mx-4 cursor-pointer font-normal	 hover:text-red-600"
            onClick={() => {
              navigateAndScrollToSection("Favorites");
              chang();
            }}
            
          >
            Favorites
          </a>
        </li>
        <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-normal	 hover:text-[#FE181A]"
             
            onClick={() => {
              navigateAndScrollToSection("Videos");
              chang();
            }}
          >
            Videos
          </a>
        </li>
        <li className="p-4">
          <a
             
            onClick={() => {
              navigateAndScrollToSection("Find");
              chang();
            }}
            className="no-underline mx-4 cursor-pointer font-normal hover:text-red-600"
          >
            Find us
          </a>
        </li> 
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
