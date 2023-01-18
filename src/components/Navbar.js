import "./NavbarStyles.css";

import React from "react";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav>
            <a href="/">Crazy Adventure Game</a>
            <div className="geust">
                <p>Welcome, <span>Guest</span></p>
                <i><FaUser /></i>
            </div>
        </nav>
    )
}

export default Navbar;