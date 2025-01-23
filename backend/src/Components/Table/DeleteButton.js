import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiDeleteBinLine } from "react-icons/ri";
import ShowModal from "../../Elements/Alerts&Modals/Modal";
import Btn from "../../Elements/Buttons/Btn";

const DeleteButton = ({ id, mutate, noImage }) => {
  const { t } = useTranslation("common");
  const [modal, setModal] = useState(false);
  return (
    <>
      {id  && (
        <>
          {noImage ? (
            <Btn
              className="btn-outline"
              title="Delete"
              onClick={() => {
                setModal(true);
              }}
            />
          ) : (
            <a>
              <RiDeleteBinLine
                className="text-danger"
                onClick={() => {
                  setModal(true);
                }}
              />
            </a>
          )}
        </>
      )}
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
              onClick={() => {
                setModal(false);
              }}
              className="btn-theme btn-md fw-bold"
            />
          </>
        }
      >
        <div className="remove-box">
          <div className="remove-icon">
            <RiDeleteBinLine className="icon-box" />
          </div>
          <h2>{t("DeleteItem")}?</h2>
          <p>{t("ThisItemWillBeDeletedPermanently") + " " + t("YouCan'tUndoThisAction!!")} </p>
        </div>
      </ShowModal>
    </>
  );
};

export default DeleteButton;
