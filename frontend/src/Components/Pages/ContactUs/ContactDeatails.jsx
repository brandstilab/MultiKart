import React from "react";
import { useTranslation } from "react-i18next";
import { RiFacebookFill, RiInstagramFill, RiPinterestFill, RiTwitterFill } from "react-icons/ri";

const ContactDetails = () => {
  const { t } = useTranslation("common");
  return (
    <div className="contact-title">
      <h2>{t("GetInTouch")}</h2>
      <p>{t("ContactUsDescription")}</p>
      <div className="footer-social">
        <ul>
          <li>
            <a target="_blank" href="https://facebook.com/">
              <RiFacebookFill />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/">
              <RiTwitterFill />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://instagram.com/">
              <RiInstagramFill />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://pinterest.com/">
              <RiPinterestFill />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
