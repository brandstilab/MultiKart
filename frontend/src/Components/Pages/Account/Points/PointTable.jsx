import Pagination from "@/Components/Widgets/Pagination";
import SettingContext from "@/Context/SettingContext";
import { ImagePath } from "@/Utils/Constants";
import Capitalize from "@/Utils/CustomFunctions/Capitalize";
import { showMonthWiseDateAndTime } from "@/Utils/CustomFunctions/DateFormate";
import Image from "next/image";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Row, Table } from "reactstrap";

const PointTable = ({ data, setPage }) => {
  const { convertCurrency } = useContext(SettingContext);
  const { settingData } = useContext(SettingContext);
  const { t } = useTranslation("common");
  return (
    <>
      <Row className="g-3">
        <Col xs={12}>
          <Card>
            <CardBody>
              <div className="total-box mt-0">
                <div className="total-contain wallet-bg">
                  <div className="wallet-point-box">
                    <div className="total-image">
                      <Image src={`${ImagePath}/svg/coin.svg`} height={50} width={50} alt="coin" />
                    </div>
                    <div className="total-detail">
                      <div className="total-box">
                        <h5>{t("TotalPoints")}</h5>
                        <h3>{data?.balance ? data?.balance : 0}</h3>
                      </div>
                      <div className="point-ratio">
                        <h3 className="counter">
                          <i className="ri-information-line" /> 1 {t("Points")} = {convertCurrency(1 / settingData?.wallet_points?.point_currency_ratio)} Balance
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col xs={12}>
          <div className="dashboard-table">
            <div className="wallet-table">
              {/* <AccountHeading title={t("Transactions")} classes={"top-sec-2 top-sec mb-3"} /> */}
              <div className="table-responsive">
                <Table className="cart-table order-table">
                  <thead>
                    <tr>
                      <th>{t("Date")}</th>
                      <th>{t("Points")}</th>
                      <th>{t("Remark")}</th>
                      <th>{t("Status")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.transactions?.data.map((transaction, i) => (
                      <tr key={i}>
                        <td>{showMonthWiseDateAndTime(transaction?.created_at)}</td>
                        <td>{transaction?.amount} </td>
                        <td>{transaction?.detail}</td>
                        <td>
                          <div className={`${transaction?.type == "credit" ? "badge bg-credit custom-badge rounded-0" : "badge bg-debit custom-badge rounded-0"}`}>
                            <span>{Capitalize(transaction?.type)}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="product-pagination">
        <div className="theme-pagination-block">
          <nav>
            <Pagination current_page={data?.transactions?.current_page} total={data?.transactions?.total} per_page={data?.transactions?.per_page} setPage={setPage} />
          </nav>
        </div>
      </div>
    </>
  );
};

export default PointTable;
