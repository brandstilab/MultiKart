import Btn from "@/Elements/Buttons/Btn";
import { OrderInvoiceAPI } from "@/Utils/AxiosUtils/API";
import { Href } from "@/Utils/Constants";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowLeftLine, RiDownload2Fill, RiRefreshLine } from "react-icons/ri";
import PaynowModal from "./PaynowModal";
import useCreate from "@/Utils/Hooks/useCreate";

const DetailTitle = ({ params, data }) => {
  const [modal, setModal] = useState(false);
  const { t } = useTranslation("common");
  const router = useRouter();

  const { mutate: InvoiceMutate, isLoading } = useCreate(
    OrderInvoiceAPI,
    false,
    false,
    "Downloaded Successfully",
    (resData) => {
      if (resData?.status == 200 || resData?.status == 201) {
        const blob = new Blob([resData.data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `invoice-${data?.order_number}.pdf`;
        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(url);
      }
    },
    false,
    false,
    false,
    false,
    "blob"
  );

  return (
    <>
      <div className="title-header">
        <div className="d-flex align-items-center flex-wrap gap-2 mb-2 justify-content-between">
          <h5>
            <a href={Href} onClick={() => router.back()}>
              <RiArrowLeftLine />
            </a>
            {`${t("OrderNumber")}: #${params}`}
          </h5>
          <div className="right-option">
            {(data?.payment_status === "FAILED" || data?.payment_status === "PENDING") && data?.order_status && data?.order_status?.slug != "cancelled" && data?.payment_method != "cod" && (
              <a className="btn btn-md fw-bold text-light theme-bg-color" onClick={() => setModal(true)}>
                {t("PayNow")}
                <RiRefreshLine className="ms-2" />
              </a>
            )}
            {data?.invoice_url && data?.payment_status && data?.payment_status === "COMPLETED" && (
              <a onClick={() => InvoiceMutate({ order_number: data?.order_number })} size="md" className="btn fw-bold text-light theme-bg-color ms-auto">
                {t("Invoice")} <RiDownload2Fill className="ms-2" />
              </a>
            )}
          </div>
        </div>
      </div>
      <PaynowModal modal={modal} setModal={setModal} params={params} />
    </>
  );
};

export default DetailTitle;
