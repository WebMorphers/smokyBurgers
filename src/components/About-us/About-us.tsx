import HoverVideoPlayer from 'react-hover-video-player';
import vid1 from '../../assets/vid-burgers.mp4';
import vid2 from '../../assets/vid-champignons.mp4';
import vid3 from '../../assets/vid-citron.mp4';
import vid4 from '../../assets/vid-classical-chicken.mp4';
import vid5 from '../../assets/vid-cobe.mp4';
import vid6 from '../../assets/vid-eminem.mp4';
import vid7 from '../../assets/vid-frite.mp4';
import vid8 from '../../assets/vid-lavoca.mp4';
import vid9 from '../../assets/vid-lmahal.mp4';
import vid10 from '../../assets/vid-malha.mp4';
import vid11 from '../../assets/vid-snor.mp4';
import vid12 from '../../assets/vid-toto.mp4';



const AboutUs = () => {
  return (
    <div className=' grid grid-cols-4 grid-rows-3'>
      <div><HoverVideoPlayer videoSrc= {vid1} /></div> 
      <div><HoverVideoPlayer videoSrc= {vid2} /></div> 
      <div><HoverVideoPlayer videoSrc= {vid3} /></div> 
      <div><HoverVideoPlayer videoSrc= {vid4} /></div> 
      <div><HoverVideoPlayer videoSrc= {vid5} /></div> 
      <div><HoverVideoPlayer videoSrc= {vid6} /></div> 
      <div><HoverVideoPlayer videoSrc= {vid7} /></div> 
      <div><HoverVideoPlayer videoSrc= {vid8} /></div> 
      <div><HoverVideoPlayer videoSrc= {vid9} /></div> 
      <div><HoverVideoPlayer videoSrc= {vid10} /></div> 
      <div><HoverVideoPlayer videoSrc= {vid11} /></div> 
      <div><HoverVideoPlayer videoSrc= {vid12} /></div> 
</div>
  )
}

export default AboutUs