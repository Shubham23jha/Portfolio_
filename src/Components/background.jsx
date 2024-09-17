import IntroVideo1 from '../assets/IntroVideo.mp4';
// import TypingAnimation from './Typewriter';


function Background(){ 
  return(
    <div className=' max-h-screen w-full home'>
     <video src={IntroVideo1} autoPlay loop muted className='bg-video cover absolute top-0'/>
     {/* <TypingAnimation className='z-10 bottom-10 fixed'/> */}
    </div>
  );
}
export default Background;