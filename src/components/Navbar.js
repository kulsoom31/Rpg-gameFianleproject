import "./NavbarStyles.css";

import React from "react";

const Navbar = () => {
    return (
        <nav>
            <a href="/">Crazy Adventure Game</a>
            <div>
                <p>Welcome, <span>Geust</span></p>
                <i className="fa user"></i>
            </div>
        </nav>
    )
}

export default Navbar;