import request from "@/Utils/AxiosUtils";
import { OrderStatusAPI } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import cancelledImage from "../../../../../public/assets/svg/tracking/cancelled.svg";
import deliveredImage from "../../../../../public/assets/svg/tracking/delivered.svg";
import outfordeliveryImage from "../../../../../public/assets/svg/tracking/out-for-delivery.svg";
import pendingImage from "../../../../../public/assets/svg/tracking/pending.svg";
import processingImage from "../../../../../public/assets/svg/tracking/processing.svg";
import shippedImage from "../../../../../public/assets/svg/tracking/shipped.svg";

const StatusDetail = ({ data }) => {
  const router = useRouter();
  const { data: orderStatus } = useQuery([OrderStatusAPI], () => request({ url: OrderStatusAPI }, router), {
    enabled: true,
    refetchOnWindowFocus: false,
    select: (res) => res?.data?.data,
  });
  const imageObj = {
    processing: processingImage,
    pending: pendingImage,
    shipped: shippedImage,
    delivered: deliveredImage,
    outfordelivery: outfordeliveryImage,
    cancelled: cancelledImage,
  };

  const modifyWord = (value) => {
    return value
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const dateFormate = (dateString) => {
    if (!dateString) return undefined; // Handle undefined case
    let date = new Date(dateString);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let hour = date.getHours() % 12; // Convert hour to 12-hour format
    let minute = date.getMinutes();
    let period = date.getHours() >= 12 ? "PM" : "AM";
    return `${day} ${month} ${year}, ${hour === 0 ? 12 : hour}:${minute} ${period}`; // Fixed time format
  };
  return (
    <div className="mb-4">
      <div className="tracking-panel">
        {data && !data?.sub_orders?.length ? (
          <ul>
            {orderStatus?.length > 0
              ? orderStatus?.map((elem, index) => {
                  elem = elem;
                  const isCancelled = (elem?.sequence >= data?.order_status?.sequence && data?.order_status?.slug === "cancelled") || elem?.slug === "cancelled" || (data?.is_digital_only && (elem?.slug == "shipped" || elem?.slug == "out-for-delivery"));
                  const isActive = elem?.sequence <= data?.order_status?.sequence;
                  return (
                    <li className={`${isCancelled ? "d-none" : ""} ${isActive ? "active" : ""}`} key={index}>
                      <div className="panel-content">
                        <div className="icon">{elem?.slug && <Image src={elem?.slug == "out-for-delivery" ? imageObj["outfordelivery"] : imageObj[elem?.slug]} className="img-fluid" alt={elem?.slug} height={40} width={40} />}</div>
                        <div className="status">{modifyWord(elem?.name)}</div>
                        {/* <span className='panel-content-sm'>
                        {isActive ? dateFormate(data?.order_status_activities?.find((data) => data?.status === elem?.name)?.changed_at) : null}
                      </span> */}
                      </div>
                    </li>
                  );
                })
              : null}
            {data?.order_status?.slug == "cancelled" ? (
              <li className="active cancelled-box">
                <div className="panel-content">
                  <div className="icon">{imageObj[data?.order_status?.slug] && <Image src={imageObj[data?.order_status?.slug] || cancelledImage} className="img-fluid" alt="image" height={40} width={40} />}</div>
                  <div className="status">{modifyWord(data?.order_status.name)}</div>
                  <span className="panel-content-sm">{isActive ? dateFormate(data?.order_status_activities?.find((data) => data?.status === elem?.name)?.changed_at) : null}</span>
                </div>
              </li>
            ) : null}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default StatusDetail;
