import React from 'react'
import Nabvar from './Nabvar'


const Hero = () => {
  return (
    <div 
      id="hero" 
      className='min-h-screen bg-no-repeat bg-[url(/me.png)] lg:bg-left bg-cover'
      style={{
        backgroundSize: "30%", // Increase size
        backgroundPosition: "left 100px top 100px",
      }}
    >
      <Nabvar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center '>
          <div>
            <p data-aos="zoom-in-up">`I&apos;m</p>
            <p data-aos="zoom-in-up">Laiba</p>
            <p data-aos="zoom-in-up">Ashfaq</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Hero