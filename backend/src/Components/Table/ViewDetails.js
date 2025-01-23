import { usePathname, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { RiEyeLine } from "react-icons/ri";
import ShowModal from "../../Elements/Alerts&Modals/Modal";
import Btn from "../../Elements/Buttons/Btn";
import BadgeContext from "../../Helper/BadgeContext";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";
import ViewDetailBody from "./ViewDetailBody";

const ViewDetails = ({ fullObj, tableData }) => {
  const [loadingState, setLoadingState] = useState("");
  const [action] = usePermissionCheck(["action"], tableData?.permissionKey);
  const router = useRouter();
  const pathname = usePathname();
  const { state, dispatch } = useContext(BadgeContext);
  const [modal, setModal] = useState(false);
  const OnStatusClick = (value) => {
    setModal(false);
  };
  const redirectLink = () => {
    const order_number = fullObj?.order_number?.props?.children?.[1];
    router.push(`${tableData?.redirectUrl}/${order_number}`);
  };
  return (
    <>
      <div>
        <a
          onClick={() => {
            tableData?.redirectUrl ? redirectLink() : setModal(true);
          }}
        >
          <RiEyeLine className="ri-pencil-line" />
        </a>
      </div>
      <ShowModal
        open={modal}
        title={tableData.modalTitle}
        close={true}
        setModal={setModal}
        buttons={
          <>
            {action && fullObj?.status == "pending" && (
              <>
                <Btn title="Rejected" onClick={() => OnStatusClick("rejected")} loading={Number(loadingState == "rejected" && isLoading)} className="btn-md btn-outline fw-bold" />
                <Btn title="Approved" loading={Number(loadingState == "approved" && isLoading)} onClick={() => OnStatusClick("approved")} className="btn-theme btn-md fw-bold" />
              </>
            )}
          </>
        }
      >
        <ViewDetailBody fullObj={fullObj} />
      </ShowModal>
    </>
  );
};

export default ViewDetails;
