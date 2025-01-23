import NoDataFound from "@/Components/Widgets/NoDataFound";
import Pagination from "@/Components/Widgets/Pagination";
import SettingContext from "@/Context/SettingContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { RiEyeLine } from "react-icons/ri";
import { Card, CardBody, Table } from "reactstrap";
import request from "@/Utils/AxiosUtils";
import { OrderAPI } from "@/Utils/AxiosUtils/API";
import { showMonthWiseDateAndTime } from "@/Utils/CustomFunctions/DateFormate";
import { useQuery } from "@tanstack/react-query";
import { ImagePath } from "@/Utils/Constants";
import { useTranslation } from "react-i18next";
import AccountHeading from "../Common/AccountHeading";
import Loader from "@/Layout/Loader";
import Capitalize from "@/Utils/CustomFunctions/Capitalize";

const MyOrders = () => {
  const [badgeClass, setBadgeClass] = useState("");
  const [page, setPage] = useState(1);
  const { t } = useTranslation("common");
  const { convertCurrency } = useContext(SettingContext);
  const { data, isLoading, refetch } = useQuery([page], () => request({ url: OrderAPI, params: { page: page, paginate: 10 } }), {
    enabled: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    select: (res) => res?.data,
  });

  useEffect(() => {
    isLoading && refetch();
  }, [isLoading]);

  if (isLoading)
    return (
      <div className="box-loader">
        <Loader classes={"blur-bg"} />
      </div>
    );
  return (
    <Card className="dashboard-table mt-0">
      <CardBody className="p-0">
        <AccountHeading title="MyOrders" classes={"top-sec"} />
        {data?.data?.length > 0 ? (
          <>
            <div className="total-box mt-0">
              <div className="wallet-table mt-0">
                <div className="table-responsive">
                  <Table className="table cart-table order-table">
                    <thead>
                      <tr className="table-head">
                        <th>{t("OrderNumber")}</th>
                        <th>{t("Date")}</th>
                        <th>{t("Amount")}</th>
                        <th>{t("PaymentStatus")}</th>
                        <th>{t("PaymentMethod")}</th>
                        <th>{t("Option")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.data?.map((order, i) => (
                        <tr key={i}>
                          <td>
                            <span className="fw-bolder">#{order.order_number}</span>
                          </td>
                          <td>{showMonthWiseDateAndTime(order?.created_at)}</td>
                          <td>{convertCurrency(order?.total)} </td>
                          <td>
                            <div className={`${order.payment_status.toLowerCase() === "pending" ? "badge bg-pending" : order.payment_status.toLowerCase() === "completed" ? "badge bg-completed" : "badge bg-cancelled custom-badge rounded-0"} custom-badge rounded-0`}>
                              <span>{Capitalize(order?.payment_status)}</span>
                            </div>
                          </td>

                          <td>{order.payment_method.toUpperCase()}</td>
                          <td>
                            <Link href={`/account/order/details/${order.order_number}`}>
                              <RiEyeLine />
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
            <div className="product-pagination">
              <div className="theme-pagination-block">
                <nav>
                  <Pagination current_page={data?.current_page} total={data?.total} per_page={data?.per_page} setPage={setPage} />
                </nav>
              </div>
            </div>
          </>
        ) : (
          <NoDataFound customClass="no-data-added" imageUrl={`/assets/svg/empty-items.svg`} title="NoOrdersFound" description="NoOrdersHaveBeenMadeYet" height="300" width="300" />
        )}
      </CardBody>
    </Card>
  );
};

export default MyOrders;
