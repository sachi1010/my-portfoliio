import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/heroimg.png'
import full_stack from '../../assets/full_stack.png'
import { useState } from 'react'

   

const About = () => {

   const [popupImage, setPopupImage] = useState(null);

    const openPopup = (img) => {
        setPopupImage(img);
    };

    const closePopup = () => {
        setPopupImage(null);
    };

  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
                <div className="about-left" data-aos="zoom-in">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right" data-aos="fade-In">
                    <p>
                        Hi, I'm Sachithananthan, a recent B.E. Computer Science graduate with a strong interest in full stack web development.
                        I enjoy learning new technologies and building responsive, user-friendly web applications.
                    </p>
                    <p>
                        As a fresher, I'm eager to apply my academic knowledge to real-world projects, grow as a developer,
                        and contribute meaningfully to a dynamic team.
                    </p>
                </div>
            </div>
            <div className="about-achivements" data-aos="slide-up">
                <div className="about-achievement">
                    <h2>Full Stack Certificate</h2>
                    <div className="certificate-container">
                        <img src={full_stack} alt="certificate" className="certificate-img" />
                        <button className="view-btn" onClick={() => openPopup(full_stack)}>
                            View Certificate
                        </button>
                    </div>
                </div>
                <hr />
                <div className="about-achievement">
                    <h2>Sports Certificate</h2>
                    <div className="certificate-container">
                        <img src={full_stack} alt="certificate" className="certificate-img" />
                        <button className="view-btn" onClick={() => openPopup(full_stack)}>
                            View Certificate
                        </button>
                    </div>
                </div>

                {popupImage && (
                    <div className="popup-overlay" onClick={closePopup}>
                        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                            <img src={popupImage} alt="Full Certificate" />
                            <button onClick={closePopup} className="close-btn">Close</button>
                        </div>
                    </div>
                )}
            </div>
    </div>
  )
}

export default About
