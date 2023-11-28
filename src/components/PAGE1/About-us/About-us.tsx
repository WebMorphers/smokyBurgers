import HoverVideoPlayer from "react-hover-video-player";
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
          <div className="">
            <HoverVideoPlayer
              loadingOverlay={
                <div className="loading-overlay">
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              }
              videoSrc={vid1}
            />
          </div>
          <div className="">
            <HoverVideoPlayer
              loop={true}
              restartOnPaused
              loading="lazy"
              videoSrc={vid2}
            />
          </div>
          <div className="">
            <HoverVideoPlayer
              loop={true}
              restartOnPausedloading="lazy"
              videoSrc={vid3}
            />
          </div>
          <div className="">
            <HoverVideoPlayer
              loop={true}
              restartOnPaused
              loading="lazy"
              videoSrc={vid4}
            />
          </div>
          <div className="hidden sm:block">
            <HoverVideoPlayer
              loop={true}
              restartOnPaused
              loading="lazy"
              videoSrc={vid5}
            />
          </div>
          <div className="hidden sm:block ">
            <HoverVideoPlayer
              loop={true}
              restartOnPaused
              loading="lazy"
              videoSrc={vid6}
            />
          </div>
          <div className="hidden sm:block">
            <HoverVideoPlayer
              loop={true}
              restartOnPaused
              loading="lazy"
              videoSrc={vid7}
            />
          </div>
          <div className="hidden sm:block">
            <HoverVideoPlayer
              loop={true}
              restartOnPaused
              loading="lazy"
              videoSrc={vid8}
            />
          </div>
          <div className="hidden sm:block">
            <HoverVideoPlayer
              loop={true}
              restartOnPaused
              loading="lazy"
              videoSrc={vid9}
            />
          </div>
          <div className="hidden sm:block">
            <HoverVideoPlayer
              loop={true}
              restartOnPaused
              loading="lazy"
              videoSrc={vid10}
            />
          </div>
          <div className="hidden sm:block">
            <HoverVideoPlayer
              loop={true}
              restartOnPaused
              loading="lazy"
              videoSrc={vid11}
            />
          </div>
          <div className="hidden sm:block">
            <HoverVideoPlayer
              loop={true}
              restartOnPaused
              loading="lazy"
              videoSrc={vid12}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
