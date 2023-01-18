import "./FooterStyles.css"

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                <h4><FaHome size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
                LGH 1234,Blue. </h4>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
                1-2323-343-233</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
                info@gmail.com</h4>
                </div>
            </div>
              <div className="right">
               <h4>Created By</h4>
               <h4>Deepa and Kulsoom </h4>
               <div className="social">
               <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
               <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
               <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
               </div>
              </div>
        </div>
    </div>
  )
}

export default Footer