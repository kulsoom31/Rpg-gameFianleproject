import React from "react";
import { Link } from "react-router-dom";
import introimg from "../assets/image.jpeg"
import Footer from "../components/Footer";
import Navbar from "./Navbar";
import "./WelcomeStyles.css";

function Welcome() {
  <div> <Navbar/></div>
  return (
    
    
    <div className="back">
      <div className="mask">
      <img className="bgimg" src= {introimg} alt="introimg" />
    </div>
    <div className="content">
    
      <h1>Welcome to our Crazy Adventure Game!</h1>
      <div>
        <Link to="/LoginSignup/Login">
          <button className="btn-cancel">Log in</button>
        </Link>

        </div>
        </div>
        <div> <Footer /></div>
    </div>
    
  )
}

export default Welcome;
