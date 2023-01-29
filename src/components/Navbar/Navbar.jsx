import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToogleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          onClick={() => setToogleMenu(true)}
          fontSize={27}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              className="overlay__close"
              onClick={() => setToogleMenu(false)}
              fontSize={27}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home" onClick={() => setToogleMenu(false)}>
                  Home
                </a>
              </li>
              <li className="p__opensans">
                <a href="#about" onClick={() => setToogleMenu(false)}>
                  About
                </a>
              </li>
              <li className="p__opensans">
                <a href="#menu" onClick={() => setToogleMenu(false)}>
                  Menu
                </a>
              </li>
              <li className="p__opensans">
                <a href="#awards" onClick={() => setToogleMenu(false)}>
                  Awards
                </a>
              </li>
              <li className="p__opensans">
                <a href="#contact" onClick={() => setToogleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
