import AccountContext from "@/Helper/AccountContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Col } from "reactstrap";

const VendorSection = ({ statistics, convertCurrency }) => {
  const { t } = useTranslation("common");
  const { accountData } = useContext(AccountContext);

  return (
    <>
      <Col className="widget-card-box">
        <a className="widget-card card">
          <div className="widget-icon">
            <Image height={26} width={26} src={"/assets/images/svg/receipt-2.svg"} className="img-fluid" alt="receipt2" />
          </div>
          <div>
            <h6>{t("total_refunds")}</h6>
            <h2>{statistics?.total_refunds}</h2>
          </div>
        </a>
      </Col>
      <Col className="widget-card-box">
        <Link href={`/order`} className="widget-card card">
          <div className="widget-icon">
            <Image height={26} width={26} src={"/assets/images/svg/medal-star.svg"} className="img-fluid" alt="medal-star" />
          </div>
          <div>
            <h6>{t("TotalOrders")}</h6>
            <h2>{statistics?.total_orders}</h2>
          </div>
        </Link>
      </Col>
      <Col className="widget-card-box">
        <Link href={`/product`} className="widget-card card">
          <div className="widget-icon">
            <Image height={26} width={26} src={"/assets/images/svg/receipt-2.svg"} className="img-fluid" alt="receipt2" />
          </div>
          <div>
            <h6>{t("TotalProducts")}</h6>
            <h2>{statistics?.total_products}</h2>
          </div>
        </Link>
      </Col>
      <Col className="widget-card-box">
        <Link href={`/vendor_wallet`} className="widget-card card">
          <div className="widget-icon">
            <Image height={26} width={26} src={"/assets/images/svg/empty-wallet.svg"} className="img-fluid" alt="emptyWallet" />
          </div>
          <div>
            <h6>{t("totalBalance")}</h6>
            <h2>{convertCurrency(accountData?.vendor_wallet?.balance)}</h2>
          </div>
        </Link>
      </Col>
    </>
  );
};

export default VendorSection;
