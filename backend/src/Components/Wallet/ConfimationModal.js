import { useTranslation } from "react-i18next";
import { RiQuestionLine } from "react-icons/ri";
import ShowModal from "../../Elements/Alerts&Modals/Modal";
import Btn from "../../Elements/Buttons/Btn";

const ConfimationModal = ({ modal, setModal, setCreditOrDebit, creditOrDebit, handleSubmit, setIsValue, creditLoader, debitLoader }) => {
  const { t } = useTranslation("common");
  const onSubmit = (values) => {
    setIsValue(values);
    handleSubmit();
    setCreditOrDebit("");
    setModal(false);
  };
  return (
    <ShowModal
      open={modal}
      close={false}
      buttons={
        <>
          <Btn
            title="No"
            onClick={() => {
              setModal(false);
            }}
            className="btn-md btn-outline fw-bold"
          />
          <Btn title="Yes" onClick={() => onSubmit(creditOrDebit)} className="btn-theme btn-md fw-bold" />
        </>
      }
    >
      <div className="remove-box">
        <div className="remove-icon">
          <RiQuestionLine className="icon-box wo-bg" />
        </div>
        <h5 className="modal-title">{t("Confirmation")}</h5>
        <p>{t("Areyousureyouwanttoproceed?")} </p>
      </div>
    </ShowModal>
  );
};

export default ConfimationModal;
