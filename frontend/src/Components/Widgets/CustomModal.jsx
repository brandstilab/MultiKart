import Btn from "@/Elements/Buttons/Btn";
import { useTranslation } from "react-i18next";
import { RiCloseLine } from "react-icons/ri";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const CustomModal = ({ classes = {}, extraFunction, modal, setModal, ...props }) => {
  const { t } = useTranslation("common");
  const toggle = () => (extraFunction ? extraFunction() : setModal((prev) => prev !== prev));

  return (
    <Modal className={classes?.modalClass || ""} isOpen={modal} toggle={toggle} centered>
      {classes?.customChildren ? (
        props.children
      ) : (
        <>
          <ModalHeader className={classes?.modalHeaderClass || ""} toggle={toggle}>
            {classes?.title && t(classes?.title)}
            <Btn className="btn-close" onClick={() => setModal(false)}>
              <RiCloseLine />
            </Btn>
          </ModalHeader>
          <ModalBody className={classes?.modalBodyClass || ""}>{props.children}</ModalBody>
        </>
      )}
    </Modal>
  );
};

export default CustomModal;
