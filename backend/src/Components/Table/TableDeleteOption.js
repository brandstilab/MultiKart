import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiDeleteBinLine } from "react-icons/ri";
import ShowModal from "../../Elements/Alerts&Modals/Modal";
import Btn from "../../Elements/Buttons/Btn";

const TableDeleteOption = ({ isCheck }) => {
  const { t } = useTranslation("common");
  const [modal, setModal] = useState(false);
  const handleDelete = (deleteIds) => {
    // Delete ALL Logic Here
    setModal(false);
  };

  return (
    <>
      <a className="align-items-center btn btn-outline btn-sm d-flex" onClick={() => setModal(true)}>
        <RiDeleteBinLine /> {t("Delete")}
      </a>
      <ShowModal
        open={modal}
        close={false}
        setModal={setModal}
        buttons={
          <>
            <Btn
              title="No"
              onClick={() => {
                setModal(false);
              }}
              className="btn-md btn-outline fw-bold"
            />
            <Btn
              title="Yes"
              className="btn-theme btn-md fw-bold"
              onClick={() => {
                handleDelete(isCheck);
              }}
            />
          </>
        }
      >
        <div className="remove-box">
          <div className="remove-icon">
            <RiDeleteBinLine className="icon-box" />
          </div>
          <h2 className="mt-2">{t("DeleteItem")}?</h2>
          <p>{t("ThisItemWillBeDeletedPermanently") + " " + t("YouCan'tUndoThisAction!!")} </p>
        </div>
      </ShowModal>
    </>
  );
};

export default TableDeleteOption;
