import "./NavbarStyles.css";

import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <a href="/">Crazy Adventure Game</a>
            <div className="geust">
                <p>Welcome, <span>Guest</span></p>
                <Link to="/LoginSignup/Login">
                <i><FaUser /></i>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;