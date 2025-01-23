import AccountContext from "@/Context/AccountContext";
import Image from "next/image";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";
import SettingContext from "@/Context/SettingContext";
import { ImagePath } from "@/Utils/Constants";
import ProfileInformation from "./ProfileInformation";

const DashboardContent = () => {
  const { t } = useTranslation("common");
  const { accountData } = useContext(AccountContext);
  const { convertCurrency } = useContext(SettingContext);

  return (
    <div className="counter-section">
      <div className="welcome-msg">
        <h4>
          {t("Hello")}, {accountData?.name ?? t("User")} !
        </h4>
        <p>{t("DashboardDescription")}</p>
      </div>

      <div className="total-box">
        <Row>
          <Col md={4}>
            <div className="counter-box">
              <Image src={`${ImagePath}/icon/dashboard/account1.png`} alt="wallerSvg" height={50} width={50} className="img-fluid" />
              <div>
                <h3>{accountData?.wallet ? convertCurrency(accountData?.wallet?.balance) : 0?.toFixed(2)}</h3>
                <h5>{t("Balance")}</h5>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="counter-box">
              <Image src={`${ImagePath}/icon/dashboard/account2.png`} className="img-fluid" alt="coinSvg" height={50} width={50} />
              <div>
                <h3>{Number(accountData?.point ? accountData?.point?.balance : 0)}</h3>
                <h5>{t("TotalPoints")}</h5>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="counter-box">
              <Image src={`${ImagePath}/icon/dashboard/account3.png`} className="img-fluid" alt="orderSvg" height={50} width={50} />
              <div>
                <h3>{Number(accountData?.orders_count)}</h3>
                <h5>{t("TotalOrders")}</h5>
              </div>
            </div>
          </Col>
          <ProfileInformation />
        </Row>
      </div>
    </div>
  );
};

export default DashboardContent;
