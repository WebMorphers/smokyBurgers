import logo from "../../../assets/logohd.png";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import "./navbar.css";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  function chang() {
    setnav(!nav);
  }
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.slice(1);
        if (targetId) {
          scrollToSection(targetId);
        }
      });
    });
  }, []);

  return (
    <div
      id="nav"
      className="flex  w-full absolute top-0  justify-between items-center h-24 mx-auto px-10 z-10 text-white"
    >
      <a href="/">
        <img className="h-20 w-23" src={logo} />
      </a>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a
            href="#favorites"
            className="no-underline mx-4 cursor-pointer font-normal	 hover:text-red-600"
          >
            Favorites
          </a>
        </li>
        <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-normal	 hover:text-[#FE181A]"
            href="#videos"
          >
            Videos
          </a>
        </li>
        <li className="p-4">
          <a
            href="#Find"
            className="no-underline mx-4 cursor-pointer font-normal hover:text-red-600"
          >
            Find us
          </a>
        </li>
        <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-normal	 hover:text-[#FE181A]"
            href="/menu"
          >
            Menu
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
            href="#favorites"
            className="no-underline mx-4 cursor-pointer font-normal	 hover:text-red-600"
            onClick={() => {
              chang();
            }}
          >
            Favorites
          </a>
        </li>
        <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-normal	 hover:text-[#FE181A]"
            href="#videos"
            onClick={() => {
              chang();
            }}
          >
            Videos
          </a>
        </li>
        <li className="p-4">
          <a
            href="#Find"
            onClick={() => {
              chang();
            }}
            className="no-underline mx-4 cursor-pointer font-normal hover:text-red-600"
          >
            Find us
          </a>
        </li>
        <li className="p-4">
          <a
            className="no-underline mx-4 cursor-pointer font-normal	 hover:text-[#FE181A]"
            href="/menu"
            onClick={() => {
              chang();
            }}
          >
            Menu
          </a>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
