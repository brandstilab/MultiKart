
import { markAsReadNotice } from "@/Utils/AxiosUtils/API";
import useUpdate from "@/Utils/Hooks/useUpdate";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiCloseLine, RiErrorWarningLine } from "react-icons/ri";
import { Container } from "reactstrap";

const NoticeDashBoard = ({ data ,refetch }) => {
  
  const { t } = useTranslation("common");
  const [ updateId, setUpdateId] = useState(null)
  const { mutate } = useUpdate(markAsReadNotice,updateId ?? null,false,"No");

  const markAsRead = (id)=>{
    setUpdateId(id)
    mutate()
    refetch()
  }

  return (
    <Container
      fluid
      className={`notice-section ${data?.priority === "low" ? "warning" : ""}`}
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
      <Link href={`/notice`}>{t("see_all")}</Link>
      <a className="close-icon" onClick={()=>markAsRead(data?.id) }><RiCloseLine /></a>
    </Container>
  );
};

export default NoticeDashBoard;
