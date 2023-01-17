import "./FooterStyles.css"
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
         <div className="left">
            <div className="location">
                <FaHome size={20} style={{ color:"#fff", marginRight: "2rem" }} />
                <div>
                    <p>LGH 1803 Mandolingatan 9</p>
                    <p>Gothenburg,Sweden</p>
                </div>
            </div>
            <div className="phone">
                <h4>
            <FaPhone size={20} style={{ color:"#fff", marginRight: "2rem" }} />
             +46-764558191 </h4>
            </div>
            <div className="email">
                <h4>
            <FaMailBulk size={20} style={{ color:"#fff", marginRight: "2rem" }} />
           gamezone@gmail.com </h4>
            </div>
         </div>

         <div className="right">
            <h4>Created by</h4>
            <p>Deepa and Kulsoom</p>
            <div className="social">
            <FaFacebook size={20} style={{ color:"#fff", marginRight: "1rem" }} />  
            <FaLinkedin size={20} style={{ color:"#fff", marginRight: "1rem" }} />
            </div>
         </div>
        </div>
    </div>
  )
}

export default Footer