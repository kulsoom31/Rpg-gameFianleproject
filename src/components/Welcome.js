import React from "react";
import { Link } from "react-router-dom";
import introimg from "../assets/image.jpeg"
import Footer from "../components/Footer";
import "./WelcomeStyles.css";

function Welcome() {
  
  return (
    <div className="back">
      <div className="mask">
      <img className="bgimg" src= {introimg} alt="introimg" />
    </div>
    <div className="content">
    
      <h1>Welcome to our Adventure Game!</h1>
      <div>
        <Link to="/adventure">
          <button className="btn-start">Start a new adventure</button>
        </Link>
        <Link to="/login">
          <button className="btn-cancel">Log in</button>
        </Link>
        </div>
        </div>
        <div> <Footer /></div>
    </div>
    
  )
}

export default Welcome;
