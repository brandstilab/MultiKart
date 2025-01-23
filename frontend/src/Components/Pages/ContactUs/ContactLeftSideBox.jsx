import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { RiCellphoneFill, RiMailFill, RiMapPinFill, RiPhoneFill } from "react-icons/ri";
import { Col, Media } from "reactstrap";

const ContactLeftSideBox = () => {
  const { themeOption } = useContext(ThemeOptionContext);
  const { t } = useTranslation("common");

  return (
    <Col xs="12">
      <div className="contact-right">
        <ul>
          <li>
            <div className="contact-icon">
              <RiPhoneFill />
            </div>
            <Media body>
              <h6>{themeOption?.contact_us?.detail_1?.label}</h6>
              <p>{themeOption?.contact_us?.detail_1?.text}</p>
            </Media>
          </li>
          <li>
            <div className="contact-icon">
              <RiMapPinFill />
            </div>
            <Media body>
              <h6>{themeOption?.contact_us?.detail_2?.label}</h6>
              <p>{themeOption?.contact_us?.detail_2?.text}</p>
            </Media>
          </li>
          <li>
            <div className="contact-icon">
              <RiMailFill />
            </div>
            <Media body>
              <h6>{themeOption?.contact_us?.detail_3?.label}</h6>
              <p>{themeOption?.contact_us?.detail_3?.text}</p>
            </Media>
          </li>
          <li>
            <div className="contact-icon">
              <RiCellphoneFill />
            </div>
            <Media body>
              <h6>{themeOption?.contact_us?.detail_4?.label}</h6>
              <p>{themeOption?.contact_us?.detail_4?.text}</p>
            </Media>
          </li>
        </ul>
      </div>
    </Col>
  );
};

export default ContactLeftSideBox;
