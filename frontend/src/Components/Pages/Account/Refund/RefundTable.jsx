import NoDataFound from "@/Components/Widgets/NoDataFound";
import Pagination from "@/Components/Widgets/Pagination";
import Loader from "@/Layout/Loader";
import request from "@/Utils/AxiosUtils";
import { RefundAPI } from "@/Utils/AxiosUtils/API";
import Capitalize from "@/Utils/CustomFunctions/Capitalize";
import { showMonthWiseDate } from "@/Utils/CustomFunctions/DateFormate";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Table } from "reactstrap";
import AccountHeading from "../Common/AccountHeading";

const RefundTable = () => {
  const { t } = useTranslation("common");
  const [page, setPage] = useState(1);
  const { data, isLoading, refetch } = useQuery([RefundAPI], () => request({ url: RefundAPI, params: { page, paginate: 10 } }), {
    enabled: false,
    refetchOnWindowFocus: false,
    select: (res) => res?.data,
  });
  useEffect(() => {
    refetch();
  }, [page]);

  if (isLoading)
    return (
      <div className="box-loader">
        <Loader classes={"blur-bg"} />
      </div>
    );
  return (
    <Card className="dashboard-table mt-0">
      <CardBody className="p-0">
        <AccountHeading title="Refund" classes={"top-sec"} />
        {data?.data?.length > 0 ? (
          <>
            <div className="total-box mt-0">
              <div className="wallet-table mt-0">
                <div className="table-responsive">
                  <Table className="table cart-table order-table">
                    <thead>
                      <tr>
                        <th>{t("Order")}</th>
                        <th>{t("Status")}</th>
                        <th>{t("Reason")}</th>
                        <th>{t("CreatedAt")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.data?.map((refund, i) => (
                        <tr key={i}>
                          <td>
                            <span className="fw-bolder">#{refund?.order?.order_number}</span>
                          </td>
                          <td>
                            <div className={`${refund.status.toLowerCase() === "pending" ? "badge bg-pending" : refund.status.toLowerCase() === "completed" ? "badge bg-completed" : "status-rejected"} custom-badge rounded-pill`}>
                              <span>{Capitalize(refund.status)}</span>
                            </div>
                          </td>

                          <td>{refund?.reason}</td>
                          <td>{showMonthWiseDate(refund?.created_at)}</td>
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
                  <Pagination current_page={data?.transactions?.current_page} total={data?.transactions?.total} per_page={data?.transactions?.per_page} setPage={setPage} />
                </nav>
              </div>
            </div>
          </>
        ) : (
          <NoDataFound customClass="no-data-added" imageUrl={'/assets/images/svg/empty-items.svg'} title="NoRefundsFound" description="YouHaveNoRefundsProcessedYet" height="300" width="300" />
        )}
      </CardBody>
    </Card>
  );
};

export default RefundTable;
