import CustomModal from "@/Components/Widgets/CustomModal";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useContext } from "react";

const DeliveryReturnModal = ({ modal, setModal }) => {
  const { themeOption } = useContext(ThemeOptionContext);
  return (
    <CustomModal modal={modal ? true : false} setModal={setModal} classes={{ modalClass: "theme-modal-2 modal-lg", title: "Delivery&Return", modalBodyClass: "policy-body" }}>
      <div dangerouslySetInnerHTML={{ __html: themeOption?.product?.shipping_and_return }} />
    </CustomModal>
  );
};

export default DeliveryReturnModal;
