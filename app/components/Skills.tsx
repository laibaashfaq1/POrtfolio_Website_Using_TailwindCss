import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl' >Website & Mobile Application That I Design</h2>
          <p className='text-stone-400 pt-8'>
          I design mobile applications, websites, and web applications, using design sprints to address challenges 
          users face while interacting with apps or making online purchases. With a passion for learning, 
          I stay updated on the latest technologies to continuously enhance my skill set
          </p>
        </div>
        <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
          <div className='space-y-4'>
            <h2 data-aos="zoom-in-up" className='text-2xl sm:text-3xl text-[#f8cf53]'>Adobe Photoshop</h2>
            <h2 data-aos="zoom-in-up" className='text-2xl sm:text-3xl text-[#f8cf53]'>Adobe Illustrator</h2>
            <h2 data-aos="zoom-in-up" className='text-2xl sm:text-3xl text-[#f8cf53]'>Adobe Xd</h2>
            <h2 data-aos="zoom-in-up" className='text-2xl sm:text-3xl text-[#f8cf53]'>Figma</h2>
            <h2 data-aos="zoom-in-up" className='text-2xl sm:text-3xl text-[#f8cf53]'>Canva</h2>
          </div>
          <div className='space-y-4'>
            <h2 data-aos="zoom-in-up" className='text-2xl sm:text-3xl text-[#f8cf53]'>Typography</h2>
            <h2 data-aos="zoom-in-up" className='text-2xl sm:text-3xl text-[#f8cf53]'>Color Theory</h2>
            <h2 data-aos="zoom-in-up" className='text-2xl sm:text-3xl text-[#f8cf53]'>Time Managment</h2>
            <h2 data-aos="zoom-in-up" className='text-2xl sm:text-3xl text-[#f8cf53]'>Problem solving</h2>
            <h2 data-aos="zoom-in-up" className='text-2xl sm:text-3xl text-[#f8cf53]'>Branding</h2>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Skills