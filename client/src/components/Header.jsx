import React, { useState, useEffect } from "react";
import logo from "../assets/Black_and_Blue_Airplane_Travel_Logo-removebg-preview.png";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    // Fetch categories from backend
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://mkhydraulics.co.in/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
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
                {categories.length > 0 ? (
                  categories.map((category) => (
                    <li key={category._id}>
                      <NavLink
                        to={`/products/${category._id}`} // Pass category ID in URL
                        onClick={closeMenu}
                      >
                        {category.name}
                      </NavLink>
                    </li>
                  ))
                ) : (
                  <li>No categories available</li>
                )}
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
