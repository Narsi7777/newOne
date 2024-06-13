import React from "react";
import bmw from "../components/bmw_PNG99547.png";
import './header.css';

function Header() {
  return (
    <header>
      <img src={bmw} alt="BMW logo" />
      <h1>BMW i7</h1>
      <div className="animated-text-container">
        <span className="animated-text">Enjoy unparalleled comfort and eco-friendly <br/>driving with <span className="bmw-text">BMW</span>.</span>
       {/* <span class="reveal-text">Enjoy unparalleled comfort and eco-friendly driving with BMW</span> */}

      
      </div>
    </header>
  );
}

export default Header;
