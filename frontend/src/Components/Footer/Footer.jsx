import React from 'react'
import './Footer.css'
import theme from '../../assets/theme_pattern.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <div className="logo">
                     <h1>Sachi</h1>
                     <img src={theme} alt="" />
                   </div>
                <p>Passionate developer crafting clean and creative web experiences.</p>
        </div>
        <div className="footer-top-right">
           <div className='social-links'>
                     <h1>Follow Us</h1>
                     <div className='links'>
                       <a href="https://github.com/sachi1010" target='_blank'><i className="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/sachi856" target='_blank'><i className="bi bi-linkedin"></i></a>
                        <a href="https://wa.me/8508312061" target='_blank'><i className="bi bi-whatsapp"></i></a>
                        <a href="https://facebook.com/sachi856" target='_blank'><i className="bi bi-facebook"></i></a>
                     </div>
                </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy; 2025 Sachithananthan. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
