import "./footer.css";
import logo from "../../../assets/logohd.png";
import insta from "../../../assets/instagram-svg.svg";
import glovo from "../../../assets/glovo-svg.svg";
import tiktok from "../../../assets/tiktok-svg.svg";

const Footer = () => {
  return (
    <div className="">
      <div className="cont bg-black flex flex-col justify-center items-center text-center">
        <ul className="grid lg:grid-cols-6  grid-cols-2  max-lg:gap-8  text-white  ">
          {" "}
          <li className="footer font-normal p-6">
            <a href="" className="hover:text-red-600">
              Menu
            </a>
          </li>
          <li className="footer font-normal p-6">
            {" "}
            <a href="" className="hover:text-red-600">
              About us
            </a>
          </li>{" "}
          <li className="footer font-normal p-6">
            <a href="" className="hover:text-red-600">
              Order Now
            </a>
          </li>
          <li className="footer font-normal p-6">
            <a href="" className="hover:text-red-600">
              Location
            </a>
          </li>{" "}
          <li className="footer font-normal p-6">
            <a href="" className="hover:text-red-600">
              Contact Us
            </a>
          </li>
          <li className="flex justify-end max-lg:justify-center max-lg:items-center items-end  gap-3">
            <a
              href="https://www.instagram.com/smokyburgersmaroc/"
              target="-blank"
            >
              <img className="hover:scale-125" src={insta} alt="" />{" "}
            </a>
            <a
              href="https://glovoapp.com/ma/fr/casablanca/smoky-burgers/?utm_campaign=maplinks&utm_medium=organic&utm_source=googlemaps"
              target="-blank"
            >
              <img className="hover:scale-125" src={glovo} width={25} alt="" />{" "}
            </a>
            <a href="https://www.tiktok.com/@smokyburgers" target="-blank">
              <img className="hover:scale-125" src={tiktok} alt="" />{" "}
            </a>
            <img className="h-20 w-23" src={logo} />
          </li>
        </ul>
        <hr className="border-t-2 border-white w-[60%] m-3" />
        <div className="flex flex-row justify-center items-center gap-12 text-white  ">
          <p>
            ©2023{" "}
            <a href="" className="text-amber-600 hover:text-orange-500">
              WEBMORPHERS
            </a>{" "}
            . All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
