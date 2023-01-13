import React, { useState } from "react";
import { Link } from "react-router-dom";

function Welcome() {
  
  return (
    <div>
      <h1>Welcome to our Adventure Game!</h1>
        <Link to="/adventure">
          <button>Start a new adventure</button>
        </Link>
        <Link to="/login">
          <button>Log in</button>
        </Link>
    </div>
  );
}

export default Welcome;
