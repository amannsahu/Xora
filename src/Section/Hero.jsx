import React from 'react'
import ReusableButton from '../Components/ReusableButton';
import zap from "../images/zap.svg";
import hero from "../images/hero.png";
import {Link} from "react-scroll"

const Hero = () => {
  return (
    <div id='hero' className=' relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32'>
      <div className='container'>
        <div className=' relative z-2 max-w-512 max-lg:max-w-388'>
          <h1 className='caption small-2 uppercase text-p3'>video Editing</h1>
          <h2 className='mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12'>
            Amazingly simple
          </h2>
          <p className='max-w-440 mb-10 body-1 md:mb-10'>
            We designed XORA AI Video Editor to be an easy to use, quick to learn, and surprisingly powerful.
          </p>
          <Link to="features" offset={-100} spy={true} smooth={true} className='cursor-pointer'>
            <ReusableButton imgSrc={zap}>
                Try it now
              </ReusableButton>
          </Link>
        </div>

        <div className=' absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res'>
          <img src={hero} alt='hero' className='size-1230 max-lg:h-auto' />
        </div>
      </div>
    </div>
  )
}

export default Hero;
