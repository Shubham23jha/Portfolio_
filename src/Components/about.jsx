import React, { Suspense, lazy } from 'react';
import '../styles/about.css';


const Avatar = lazy(() => import('./avatar'));
const Timeline = lazy(() => import('./timeline'));
const Overview = lazy(() => import('./Overview'));
const Skills = lazy(() => import('./skills'));

const About = () => {
  return (
    <div className='about'>
      <div className='w-full top-0 -z-10 max-h-fit '>
        <div className="w-full flex justify-around lg:block">
          <div className='px-10 mt-10 w-1/2 lg:my-0 lg:py-10 lg:justify-center lg:w-full lg:px-5'>
            <Suspense fallback={<div>Loading Avatar and Timeline...</div>}>
              <Avatar />
          </Suspense>
           
          </div>
          <div className='skills lg:block lg:-mt-60'>
          <Timeline />
        <Suspense fallback={<div>Loading Skills...</div>}>
          <Skills />
        </Suspense>
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
