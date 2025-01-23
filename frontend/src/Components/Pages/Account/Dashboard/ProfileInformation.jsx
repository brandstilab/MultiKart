import AccountContext from "@/Context/AccountContext";
import { CapitalizeMultiple } from "@/Utils/CustomFunctions/Capitalize";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";
import EmailPassword from "./EmailPassword";

const ProfileInformation = () => {
  const { t } = useTranslation("common");
  const { accountData } = useContext(AccountContext);
  return (
    <div className='box-account box-info'>
      <Row>
        <Col xs={12}>
          <div className='box-account box-info'>
            <div className='box-head'>
              <h4>{t("AccountInformation")}</h4>
            </div>
            <ul className='box-content'>
              <li>
                <h6>
                  {t("FullName")} : {CapitalizeMultiple(accountData?.name)}
                </h6>
              </li>
              <li>
                <h6>
                  {t("Phone")} : +{accountData?.country_code} {accountData?.phone}
                </h6>
              </li>
              {accountData?.address[0] ? (
                <li>
                  <h6>
                    {t("Address")} : {accountData?.address[0]?.street}
                    {accountData?.address[0]?.city}, {accountData?.address[0]?.state.name}, {accountData?.address[0]?.country.name} {accountData?.address[0]?.pincode}
                  </h6>
                </li>
              ) : null}
            </ul>
            <div className='box mt-3'>
              <div className='box-head'>
                <h4>{t("LoginDetails")}</h4>
              </div>
            </div>
            <EmailPassword />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileInformation;
