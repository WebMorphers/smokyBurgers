import "../PAGE1/Footer/footer.css";
import logo from "../../../src/assets/logohd.png";
import insta from "../../../src/assets/instagram-svg.svg";
import glovo from "../../../src/assets/glovo-svg.svg";
import tiktok from "../../../src/assets/tiktok-svg.svg";

const Footer = () => {
  return (
    
    <div className="bg-black text-white">
      <div className="md:px-24 py-10 px-7 w-full">
        <div className="flex flex-col gap-5 ">
          <div className="flex justify-center items-center flex-wrap-reverse max-sm:justify-center gap-32  ">  
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
              <a href="/">
                <img className="h-20 w-23" src={logo} alt="" />
              </a>
            </div>
            
           
          <div  className="lg:h-1 h-[2px] lg:px-40"><div className="bg-white h-full rounded-lg "></div></div>
          <div className="text-right">
          <p>
            ©2023{" "}
            <a href="https://www.webmorphers.org" target="_blanck" className=" hover:text-red-600">
              WEBMORPHERS
            </a>{" "}
            . All rights reserved.
          </p>
                    </div>
        </div>
      </div>
    </div>
    
  );
};

export default Footer;