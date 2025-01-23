import ConfirmDeleteModal from "@/Components/Widgets/ConfirmDeleteModal";
import AccountContext from "@/Context/AccountContext";
import Btn from "@/Elements/Buttons/Btn";
import { AddressAPI } from "@/Utils/AxiosUtils/API";
import useDelete from "@/Utils/Hooks/useDelete";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";
import AddressTable from "./AddressTable";

const AddressData = ({ addressState, setAddressState, modal, setModal, setEditAddress }) => {
  const [deleteId, setDeleteId] = useState("");
  const { refetch } = useContext(AccountContext);
  const { data, mutate, isLoading } = useDelete(AddressAPI, false);
  const { t } = useTranslation("common");

  const removeAddress = () => {
    setModal(false);
    // Put your logic here
  };
  useEffect(() => {
    if (data?.status) {
      setAddressState((prev) => prev.filter((elem) => elem.id !== deleteId));
      refetch();
      setModal("");
    }
  }, [data]);

  return (
    <Row className="g-4">
      {addressState?.map((address, i) => (
        <Col xl={4} md={6} key={i}>
          <div className="select-box">
            <div className="address-box">
              <AddressTable address={address} />
              <div className="bottom">
                <Btn
                  color="transparent"
                  className="bottom_btn"
                  onClick={() => {
                    setEditAddress(address);
                    setModal("edit");
                  }}
                >
                  {t("Edit")}
                </Btn>
                <Btn
                  color="transparent"
                  className="bottom_btn"
                  onClick={() => {
                    setDeleteId(address?.id);
                    setModal("remove");
                  }}
                >
                  {t("Remove")}
                </Btn>
              </div>
            </div>
          </div>
        </Col>
      ))}
      <ConfirmDeleteModal modal={modal == "remove"} setModal={setModal} loading={isLoading} confirmFunction={removeAddress} setDeleteId={setDeleteId} />
    </Row>
  );
};

export default AddressData;
