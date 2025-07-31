import React from 'react'
import '../Hero/Hero.css'

import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <div className="hero-img-container">
        <div className="glow-background" ></div>
        <div className='hero-image' data-aos="zoom-in"><img src="http://localhost:5000/public/heroimg.png" alt="Profile" /></div>  
      </div>
      <h1 data-aos="zoom-in"><span>I'm Sachithananthan</span><br />Full Stack Developer</h1>
      <p data-aos="zoom-in">I'm a dedicated Full Stack Developer with a strong interest in building responsive web applications.</p>
      <div className="hero-action" data-aos="zoom-in">
        <div className="hero-connect">
          <AnchorLink className='ancher-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
        <a href="http://localhost:5000/api/resume" download target="_blank" rel="noopener noreferrer" className='hero-resume'>
    My Resume
  </a>
      </div>
    </div>
  )
}

export default Hero
