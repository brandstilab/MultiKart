import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import Btn from "@/Elements/Buttons/Btn";
import { useTranslation } from "react-i18next";
import { Modal, ModalBody } from "reactstrap";

const ShippingNote = ({ setOpenReceiptModal, openReceiptModal, values, mutate, setFieldValue, refetch }) => {
  const originalDateTime = values?.date;
  const parsedDateTime = new Date(originalDateTime);
  const formattedDateTime = parsedDateTime.toISOString();
  const { t } = useTranslation("common");
  const handleSubmit = () => {
    const sendValue = {
      _method: "put",
      order_status_id: values?.order_status_id?.id,
      note: values?.note,
      changed_at: formattedDateTime,
    };
    // Put your logic here
    refetch();
    setOpenReceiptModal(false);
    setFieldValue("note", "");
    setFieldValue("date", "");
  };
  return (
    <Modal modalClassName="shipping-modal" centered isOpen={openReceiptModal}>
      <ModalBody>
        <h5 className="modal-title text-center">{t("ShippingNote")}</h5>
        <div className="mb-4 mt-2">
          <SimpleInputField
            nameList={[
              {
                name: "note",
                title: "StoreDescription",
                notitle: "true",
                type: "textarea",
                placeholder: t("EnterDescription(optional)"),
              },
            ]}
          />
          <div className="mt-2">
            <SimpleInputField
              nameList={[
                {
                  type: "datetime-local",
                  name: "date",
                  notitle: "true",
                },
              ]}
            />
          </div>
        </div>
        <div className="button-box">
          <Btn
            className="btn btn-md btn-secondary fw-bold"
            onClick={() => {
              setOpenReceiptModal(false);
            }}
          >
            {t("Cancel")}
          </Btn>
          <Btn className="btn btn-md btn-secondary btn-theme fw-bold" onClick={handleSubmit}>
            {t("Submit")}
          </Btn>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ShippingNote;
