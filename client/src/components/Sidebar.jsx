import React, { useState } from "react";
import {
  BiChevronRight,
  BiGridAlt,
  BiUser,
  BiBell,
  BiHeart,
  BiBookmark,
  BiMessageRounded,
  BiLogOutCircle,
} from "react-icons/bi";

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
            <img
              src="assets/icons/logo.svg"
              alt="Logo"
              className="sidebar__logo-icon"
            />
            {isExpanded && (
              <span className="sidebar__logo-text">Bedimcode</span>
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
              { name: "Home", icon: <BiGridAlt className="sidebar__icon" /> },
              { name: "User", icon: <BiUser className="sidebar__icon" /> },
              {
                name: "Notification",
                icon: <BiBell className="sidebar__icon" />,
              },
              {
                name: "Favorites",
                icon: <BiHeart className="sidebar__icon" />,
              },
              { name: "Saved", icon: <BiBookmark className="sidebar__icon" /> },
              {
                name: "Chat",
                icon: <BiMessageRounded className="sidebar__icon" />,
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
          {isExpanded && <span className="sidebar__text">Close</span>}
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
