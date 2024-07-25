import React, { useState, useEffect } from "react";
import logo from "../assets/WhatsApp_Image_2024-07-10_at_8.22.02_PM-removebg-preview 3.png";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={isScrollingDown ? "hidden" : ""}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <input
        type="checkbox"
        id="nav_check"
        hidden
        checked={isMenuOpen}
        readOnly
      />
      <nav className={isMenuOpen ? "open" : ""}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="dropdown">
            <div className="dropdown-toggle" onClick={toggleDropdown}>
              Products {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/products" onClick={closeMenu}>
                    Category 1
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products" onClick={closeMenu}>
                    Category 2
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/products" onClick={closeMenu}>
                    Category 3
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav_check" className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes className="close-icon" />
        ) : (
          <FaBars className="hamburger-icon" />
        )}
      </label>
    </header>
  );
};

export default Header;
