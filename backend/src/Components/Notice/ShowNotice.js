import request from "@/Utils/AxiosUtils";
import { Notice } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { RiErrorWarningLine } from "react-icons/ri";

const ShowNotice = () => {
  const router = useRouter()
  const { data } = useQuery([Notice], () => request({ url: Notice },router), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    select: (res) => res?.data?.data,
  });
  return (
    <>
      {data?.length && (
        <ul className="notification-setting notification-page">
          {data?.map((data, index) => (
            <li
              className={`notice-section ${
                data?.priority === "low" ? "warning" : ""
              }`}
              key={index}
            >
              <div className="notice-content">
                <div className="icon-box">
                  <RiErrorWarningLine />
                </div>
                <div className="notice-box">
                  <h3>{data?.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: data?.description }} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ShowNotice;
