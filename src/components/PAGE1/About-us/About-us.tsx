import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import { useInView } from "react-intersection-observer";
import vid1 from "../../../assets/vid-burgers.mp4";
import vid2 from "../../../assets/vid-champignons.mp4";
import vid3 from "../../../assets/vid-citron.mp4";
import vid4 from "../../../assets/vid-classical-chicken.mp4";
import vid5 from "../../../assets/vid-cobe.mp4";
import vid6 from "../../../assets/vid-eminem.mp4";
import vid7 from "../../../assets/vid-frite.mp4";
import vid8 from "../../../assets/vid.mp4";
import vid9 from "../../../assets/vid-lmahal.mp4";
import vid10 from "../../../assets/vid-malha.mp4";
import vid11 from "../../../assets/vid-snor.mp4";
import vid12 from "../../../assets/vid-toto.mp4";
interface LazyLoadVideoProps {
  videoSrc: string;
}


const LazyLoadVideo: React.FC<LazyLoadVideoProps> = ({ videoSrc }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {inView && (
        <HoverVideoPlayer
          loop={true}
          restartOnPaused
          loading="lazy"
          videoSrc={videoSrc}
        />
      )}
    </div>
  );
};


const AboutUs = () => {
  return (
    <div id="videos"  className="cont">
      <div className=" flex flex-col justify-center items-center gap-5">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl title text-center">
          Taste Like Never Before .
        </h1>

        <h1 className="text-sky-950 text-center">
          Follow{" "}
          <a
            href="https://www.instagram.com/smokyburgersmaroc/"
            target="_blank"
            rel="noopener noreferrer"
            className="visited:text-black hover:text-neutral-700 text-inherit"
          >
            <span className="underline">@smokyburgers</span>
          </a>{" "}
          on Instagram for more burger inspiration !
        </h1>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <LazyLoadVideo videoSrc={vid1} />
        <LazyLoadVideo videoSrc={vid2} />
        <LazyLoadVideo videoSrc={vid3} />
        <LazyLoadVideo videoSrc={vid4} />
        <div className="hidden sm:block">
          <LazyLoadVideo videoSrc={vid5} />
        </div>
        <div className="hidden sm:block ">
          <LazyLoadVideo videoSrc={vid6} />
        </div>
        <div className="hidden sm:block">
          <LazyLoadVideo videoSrc={vid7} />
        </div>
        <div className="hidden sm:block">
          <LazyLoadVideo videoSrc={vid8} />
        </div>
        <div className="hidden sm:block">
          <LazyLoadVideo videoSrc={vid9} />
        </div>
        <div className="hidden sm:block">
          <LazyLoadVideo videoSrc={vid10} />
        </div>
        <div className="hidden sm:block">
          <LazyLoadVideo videoSrc={vid11} />
        </div>
        <div className="hidden sm:block">
          <LazyLoadVideo videoSrc={vid12} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
