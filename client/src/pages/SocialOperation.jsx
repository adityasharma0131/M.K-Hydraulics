import React, { useEffect, useState } from "react";
import { MdEditNote } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const SocialOperation = () => {
  const [socialMediaAccounts, setSocialMediaAccounts] = useState([]);

  useEffect(() => {
    const fetchSocialMediaAccounts = async () => {
      try {
        const response = await fetch("/api/socials");
        const data = await response.json();
        setSocialMediaAccounts(data);
      } catch (error) {
        console.error("Error fetching social media accounts:", error);
      }
    };

    fetchSocialMediaAccounts();
  }, []);

  // Helper function to get the corresponding icon for each social media platform
  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case "instagram":
        return <FaInstagram />;
      case "facebook":
        return <FaFacebook />;
      case "linkedin":
        return <FaLinkedin />;
      case "whatsapp":
        return <FaWhatsapp />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="dashboard-name">
        <h1>Socials Page</h1>
      </div>
      <div className="admin-users">
        <h1 className="heading">Social Media Accounts</h1>
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
              <tr key={account._id}>
                <td>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    {getSocialIcon(account.name)} {account.name}
                  </span>
                </td>
                <td>
                  <a
                    href={account.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    {account.link}
                  </a>
                </td>
                <td className="action-icons">
                  <Link
                    to={`/social-operation/edit-socials/${account._id}`}
                    className="edit-link"
                  >
                    <MdEditNote className="edit-icon" />
                  </Link>
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
