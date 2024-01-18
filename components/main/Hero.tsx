import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <section id='about'>
    <div className='relative flex flex-col h-full w-full'>
        <video 
            autoPlay
            muted
            loop 
            className=' absolute top-[-1px] left-0 z-[1] w-full h-full object-cover' style={{ filter: 'hue-rotate(100deg)'}}
            >
                {/* <source src='/cards-video.webm' type='video/webm'/> */}
                <source src='/space.mp4' type='video/mp4'/>
        </video>
        <HeroContent />
    </div>
    </section>
  )
}

export default Hero