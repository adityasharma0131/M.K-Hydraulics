import React, { useState } from "react";
import logo from "../assets/footer-logo.png";
import { AiFillProduct } from "react-icons/ai";
import { RiGalleryFill } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
import { IoShareSocialOutline } from "react-icons/io5";
import { BiChevronRight, BiLogOutCircle } from "react-icons/bi";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div
      className={`sidebar ${isExpanded ? "sidebar--expanded" : ""}`}
      id="navbar"
    >
      <nav className="sidebar__nav">
        <div>
          <a href="#" className="sidebar__logo">
            <img src={logo} alt="Logo" className="sidebar__logo-icon" />
            {isExpanded && (
              <span className="sidebar__logo-text">M.K Hydraulics</span>
            )}
          </a>

          <div
            className={`sidebar__toggle ${isExpanded ? "rotate" : ""}`}
            id="nav-toggle"
            onClick={toggleSidebar}
          >
            <BiChevronRight />
          </div>

          <ul className="sidebar__list">
            {[
              {
                name: "Dashboard",
                icon: <LuLayoutDashboard className="sidebar__icon" />,
              },
              {
                name: "Products",
                icon: <AiFillProduct className="sidebar__icon" />,
              },
              {
                name: "Galllery",
                icon: <RiGalleryFill className="sidebar__icon" />,
              },
              {
                name: "Users",
                icon: <FiUsers className="sidebar__icon" />,
              },
              {
                name: "Contact Us",
                icon: <RiContactsLine className="sidebar__icon" />,
              },
              {
                name: "Socials",
                icon: <IoShareSocialOutline className="sidebar__icon" />,
              },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href="#"
                  className={`sidebar__link ${
                    activeLink === link.name ? "sidebar__link--active" : ""
                  }`}
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.icon}
                  {isExpanded && (
                    <span className="sidebar__text">{link.name}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a href="#" className="sidebar__link">
          <BiLogOutCircle className="sidebar__icon" />
          {isExpanded && <span className="sidebar__text">Logout</span>}
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
