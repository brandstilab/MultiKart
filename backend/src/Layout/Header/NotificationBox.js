import useOutsideDropdown from "@/Utils/Hooks/CustomHooks/useOutsideDropdown";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RiNotificationLine, RiRecordCircleLine } from "react-icons/ri";
import BadgeContext from "../../Helper/BadgeContext";
import request from "../../Utils/AxiosUtils";
import { NotificationsAPI } from "../../Utils/AxiosUtils/API";

const NotificationBox = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown(false);
  const { t } = useTranslation("common");
  const { notification, setNotification } = useContext(BadgeContext);
  const router = useRouter();
  const { data, isLoading, refetch } = useQuery(["NotificationsAPI"], () => request({ url: NotificationsAPI }, router), { enabled: false, select: (res) => res.data.data });

  useEffect(() => {
    isLoading && refetch();
  }, [isLoading]);

  useEffect(() => {
    setNotification(data?.filter((notification) => notification.read_at === null));
  }, [data]);
  return (
    <li className={`${data && data.length === 0 ? "" : "onhover-dropdown"} `}>
      <div className="notification-box" onClick={() => setIsComponentVisible((prev) => !prev)}>
        <RiNotificationLine />
        {notification?.length > 0 && <span className="badge badge-theme">{notification.length}</span>}
      </div>
      <ul ref={ref} className={`notification-dropdown onhover-show-div ${isComponentVisible ? "active" : ""}`}>
        <li>
          <h6 className="f-18 mb-0">{t("Notifications")}</h6>
        </li>
        {data?.slice(0, 3)?.map((notification, i) => (
          <li key={i}>
            <p>
              <RiRecordCircleLine className="me-2 f-12 text-primary" />
              {t(notification?.data?.message)}
            </p>
          </li>
        ))}
        <li>
          <Link className="btn" href="/notifications">
            {t("CheckAllNotification")}
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default NotificationBox;
