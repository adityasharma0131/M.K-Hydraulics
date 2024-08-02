import React from "react";
import { MdEditNote } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SocialOperation = () => {
  const socialMediaAccounts = [
    {
      id: 1,
      icon: <FaInstagram />,
      name: "Instagram",
      link: "https://www.instagram.com/john.doe",
    },
    {
      id: 2,
      icon: <FaFacebook />,
      name: "Facebook",
      link: "https://www.facebook.com/jane.smith",
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/michael.brown",
    },
    {
      id: 4,
      icon: <FaWhatsapp />,
      name: "WhatsApp",
      link: "https://wa.me/1234567890",
    },
  ];

  return (
    <>
      <div className="dashboard-name">
        <h1>Socials Page</h1>
      </div>
      <div className="admin-users">
        <h1 className="heading">Social media accounts</h1>
        <table className="modern-table">
          <thead>
            <tr>
              <th>Social</th>
              <th>Link</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {socialMediaAccounts.map((account) => (
              <tr key={account.id}>
                <td>
                  {account.icon} {account.name}
                </td>
                <td>
                  <Link
                    to={{ pathname: account.link }}
                    target="_blank"
                    className="social-link"
                    rel="noopener noreferrer"
                  >
                    {account.link}
                  </Link>
                </td>
                <td className="action-icons">
                  <Link
                    to="/social-operation/edit-socials"
                    className="edit-link"
                  >
                    <MdEditNote className="edit-icon" />
                  </Link>
                  <AiFillDelete className="delete-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SocialOperation;
