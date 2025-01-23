import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RiTimeLine } from "react-icons/ri";
import BadgeContext from "../../Helper/BadgeContext";
import request from "../../Utils/AxiosUtils";
import { NotificationsAPI } from "../../Utils/AxiosUtils/API";
import { dateFormate } from "../../Utils/CustomFunctions/DateFormate";
import Loader from "../CommonComponent/Loader";

const NotificationsData = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { setNotification } = useContext(BadgeContext);
  const { data, isLoading, refetch } = useQuery([NotificationsAPI], () => request({ url: NotificationsAPI }, router), { enabled: false, select: (res) => res.data.data });
  useEffect(() => {
    refetch();
    setNotification(null);
  }, []);
  if (isLoading) return <Loader />;
  return (
    <ul className="notification-setting">
      {data?.map((notification, index) => (
        <li key={index} className={!notification.read_at ? "unread" : ""}>
          <h4>{t(notification.data.message)}</h4>
          <h5>
            <RiTimeLine /> {dateFormate(notification.created_at)}
          </h5>
        </li>
      ))}
    </ul>
  );
};

export default NotificationsData;
