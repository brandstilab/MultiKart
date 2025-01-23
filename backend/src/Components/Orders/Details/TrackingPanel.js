import Image from "next/image";

const TrackingPanel = ({ orderStatusData, orderStatus, order }) => {
  const dateFormate = (dateString) => {
    if (!dateString) return undefined; // Handle undefined case
    let date = new Date(dateString);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    // let hour = date.getHours() % 12; // Convert hour to 12-hour format
    // let minute = date.getMinutes();
    // let period = date.getHours() >= 12 ? "PM" : "AM";
    return `${day} ${month} ${year}`; // Fixed time format
  };

  const capitalizeAndReplace = (str) => {
    // Your capitalization and replacement logic
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/_/g, " ");
  };

  let elem;
  return (
    <ul>
      {orderStatusData?.map((item, index) => {
        elem = item;
        const isCancelled = (elem?.sequence >= orderStatus?.sequence && orderStatus?.slug === "cancelled") || elem?.slug === "cancelled" || (order?.is_digital_only && (elem?.slug == "shipped" || elem?.slug == "out-for-delivery"));
        const isActive = elem?.sequence <= orderStatus?.sequence;
        return (
          <li className={`${isCancelled ? "d-none" : ""} ${isActive ? "active" : ""}`} key={index}>
            <div className="panel-content">
              <div className="icon">
                <Image className="img-fluid" src={`/assets/svg/tracking/${elem.slug}.svg`} alt="tracking status" height={40} width={40} />
              </div>
              <div>
                <div className="status">{capitalizeAndReplace(elem?.name)}</div>
                <span className="panel-content-sm">{isActive ? dateFormate(order?.order_status_activities?.find((data) => data?.status === item?.name)?.changed_at) : null}</span>
              </div>
            </div>
          </li>
        );
      })}
      {orderStatus?.slug === "cancelled" && (
        <li className="active cancelled-box">
          <div className="panel-content">
            <div className="icon">{<Image src={`/assets/images/tracking/cancelled.svg`} alt="image" height={40} width={40} />}</div>
            <div>
              <div className="status">{capitalizeAndReplace(orderStatus?.name)}</div>
              <span className="panel-content-sm">25 Jun 2024</span>
            </div>
          </div>
        </li>
      )}
    </ul>
  );
};

export default TrackingPanel;
