import HoverVideoPlayer from 'react-hover-video-player';
import vid1 from '../../assets/vid-burgers.mp4';
import vid2 from '../../assets/vid-champignons.mp4';
import vid3 from '../../assets/vid-citron.mp4';
import vid4 from '../../assets/vid-classical-chicken.mp4';
import vid5 from '../../assets/vid-cobe.mp4';
import vid6 from '../../assets/vid-eminem.mp4';
import vid7 from '../../assets/vid-frite.mp4';
import vid8 from '../../assets/vid.mp4';
import vid9 from '../../assets/vid-lmahal.mp4';
import vid10 from '../../assets/vid-malha.mp4';
import vid11 from '../../assets/vid-snor.mp4';
import vid12 from '../../assets/vid-toto.mp4';



const AboutUs = () => {
  return (
    <div className="py-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-36 flex flex-col justify-center items-center gap-5">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl title text-center">Taste Like Never Before .</h1>

    <h1 className="text-sky-950 text-center">
      Suivez{" "}
      <a
        href="https://www.instagram.com/comptoir.sucre/"
        target="_blank"
        rel="noopener noreferrer"
        className="visited:text-black hover:text-neutral-700 text-inherit"
      >
        <span className="underline">@comptoir.sucre</span>
      </a>{" "}
      sur Instagram pour plus d'inspiration en brownies gourmets !
    </h1>

    <div className='grid grid-cols-4 grid-rows-3  gap-4'>
      <div className=''><HoverVideoPlayer videoSrc= {vid1} /></div> 
      <div className=''><HoverVideoPlayer videoSrc= {vid2} /></div> 
      <div className=''><HoverVideoPlayer videoSrc= {vid3} /></div> 
      <div className=''><HoverVideoPlayer videoSrc= {vid4} /></div> 
      <div className='sm:block'><HoverVideoPlayer videoSrc= {vid5} /></div> 
      <div className='sm:block '><HoverVideoPlayer videoSrc= {vid6} /></div> 
      <div className='sm:block'><HoverVideoPlayer videoSrc= {vid7} /></div> 
      <div className='sm:block'><HoverVideoPlayer videoSrc= {vid8} /></div> 
      <div className='sm:block'><HoverVideoPlayer videoSrc= {vid9} /></div> 
      <div className='sm:block'><HoverVideoPlayer videoSrc= {vid10} /></div> 
      <div className='sm:block'><HoverVideoPlayer videoSrc= {vid11} /></div> 
      <div className='sm:block'><HoverVideoPlayer videoSrc= {vid12} /></div> 
</div>
    </div>
    
  )
}

export default AboutUs