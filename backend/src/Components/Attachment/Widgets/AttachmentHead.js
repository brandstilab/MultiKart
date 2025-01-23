import { useMutation } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiAddLine, RiDeleteBin2Line, RiDeleteBinLine } from "react-icons/ri";
import ShowModal from "../../../Elements/Alerts&Modals/Modal";
import Btn from "../../../Elements/Buttons/Btn";
import request from "../../../Utils/AxiosUtils";
import { attachmentDelete } from "../../../Utils/AxiosUtils/API";
import SuccessHandle from "../../../Utils/CustomFunctions/SuccessHandle";
import usePermissionCheck from "../../../Utils/Hooks/usePermissionCheck";
import AttachmentModal from "./AttechmentModal";

const AttachmentHead = ({ isattachment, state, dispatch, refetch }) => {
  const { t } = useTranslation("common");
  const [create, destroy] = usePermissionCheck(["create", "destroy"]);
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { mutate } = useMutation((data) => request({ url: attachmentDelete, data: { ids: data }, method: "post" }, router), {
    onSuccess: (resData) => {
      SuccessHandle(resData, router, "/attachment", "Deleted Sucessfully", pathname);
      resData.status == 200 && dispatch({ type: "DeleteSelectedImage", payload: [] });
      refetch();
    },
  });
  return (
    <>
      <div className="title-header option-title media-title">
        <div className="left-content">
          <h5>{t("MediaLibrary")}</h5>
          {state.deleteImage.length > 0 && (
            <div className="selected-options">
              <ul>
                <li>
                  {t("selected")}({state.deleteImage.length})
                </li>
                {destroy && (
                  <li onClick={() => setDeleteModal(true)}>
                    <a href="#javascript">
                      <RiDeleteBin2Line />
                    </a>
                  </li>
                )}
                <ShowModal
                  open={deleteModal}
                  close={false}
                  buttons={
                    <>
                      <Btn title="No" onClick={() => setDeleteModal(false)} className="btn-md btn-outline fw-bold" />
                      <Btn
                        title="Yes"
                        className="btn-theme btn-md fw-bold"
                        onClick={() => {
                          setDeleteModal(false);
                        }}
                      />
                    </>
                  }
                >
                  <div className="remove-box">
                    <RiDeleteBinLine className="icon-box" />
                    <h2>{t("DeleteItem")}?</h2>
                    <p>{t("ThisItemWillBeDeletedPermanently") + " " + t("YouCan'tUndoThisAction!!")} </p>
                  </div>
                </ShowModal>
              </ul>
            </div>
          )}
        </div>
        {create && (
          <div className="right-options">
            <ul>
              <li>
                <Btn className="btn btn-solid btn-theme" onClick={() => setModal(true)}>
                  <RiAddLine />
                  {t("AddMedia")}
                </Btn>
              </li>
            </ul>
          </div>
        )}
      </div>
      <AttachmentModal modal={modal} setModal={setModal} isattachment={isattachment} noAPICall />
    </>
  );
};

export default AttachmentHead;
