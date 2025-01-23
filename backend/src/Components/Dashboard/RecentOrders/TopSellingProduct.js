import { topStoreOption } from "@/Data/TabTitleListData";
import SettingContext from "@/Helper/SettingContext";
import request from "@/Utils/AxiosUtils";
import { product } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Table } from "reactstrap";

import { dateWithOnlyMonth } from "@/Utils/CustomFunctions/DateFormate";
import Avatar from "../../CommonComponent/Avatar";
import NoDataFound from "../../CommonComponent/NoDataFound";
import SearchableSelectInput from "../../InputFields/SearchableSelectInput";
import DashboardWrapper from "../DashboardWrapper";
import { useRouter } from "next/navigation";
import { placeHolderImage } from "@/Data/CommonPath";

const TopSellingProduct = ({ setFieldValue, values }) => {
  const { convertCurrency } = useContext(SettingContext);
  const { t } = useTranslation("common");
  const router = useRouter();
  const { data, refetch, isLoading } = useQuery([product, values["filter_by"]], () => request({ url: product, params: { status: 1, top_selling: 1, filter_by: values["filter_by"]?.value ?? "this_year", paginate: 5 } }, router), { enabled: false, refetchOnWindowFocus: false, select: (data) => data.data.data });
  const onFilterChange = (name, value) => {
    setFieldValue("filter_by", value);
  };
  useEffect(() => {
    refetch();
  }, [values["filter_by"]]);
  return (
    <DashboardWrapper
      classes={{
        title: "TopSellingProduct",
        headerRight: (
          <SearchableSelectInput
            nameList={[
              {
                name: "filter_by",
                notitle: "true",
                inputprops: {
                  name: "filter_by",
                  id: "filter_by",
                  options: topStoreOption || [],
                  value: values["filter_by"] ? values["filter_by"]?.name : "",
                },
                store: "obj",
                noSearchBar: true,
                setvalue: onFilterChange,
              },
            ]}
          />
        ),
      }}
    >
      <div className="top-selling-table datatable-wrapper table-responsive">
        {isLoading && (
          <div className="table-loader">
            <span>{t("Pleasewait")}...</span>
          </div>
        )}
        <Table>
          <tbody>
            {data?.slice(0, 5)?.map((elem, i) => (
              <tr key={i}>
                <td>
                  <Link className="img-info cursor-pointer" href={`/product/edit/${elem?.id}`}>
                    <Avatar data={elem?.product_thumbnail} placeHolder={placeHolderImage} name={elem} />
                    <div>
                      <h6>{dateWithOnlyMonth(elem?.created_at)}</h6>
                      <h5>{elem?.name}</h5>
                    </div>
                  </Link>
                </td>
                <td>
                  <h6>{t("price")}</h6>
                  <h5>{convertCurrency(elem?.sale_price)}</h5>
                </td>
                <td>
                  <h6>{t("orders")}</h6>
                  <h5>{elem?.orders_count}</h5>
                </td>
                <td>
                  <h6>{t("stock")}</h6>
                  <h5>{elem?.quantity}</h5>
                </td>
                <td>
                  <h6>{t("amount")}</h6>
                  <h5>{elem?.order_amount?.toFixed(2)}</h5>
                </td>
              </tr>
            ))}
            {!data?.length && (
              <tr>
                <td>
                  <NoDataFound noImage={true} />
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </DashboardWrapper>
  );
};

export default TopSellingProduct;
