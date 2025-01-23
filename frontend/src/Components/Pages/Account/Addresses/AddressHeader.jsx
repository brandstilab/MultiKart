import CustomModal from "@/Components/Widgets/CustomModal";
import NoDataFound from "@/Components/Widgets/NoDataFound";
import AccountContext from "@/Context/AccountContext";
import Btn from "@/Elements/Buttons/Btn";
import { AddressAPI } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiAddLine } from "react-icons/ri";
import { Card, CardBody } from "reactstrap";
import AddAddressForm from "./AddAddressForm";
import AddressData from "./AddressData";
import { ImagePath } from "@/Utils/Constants";

const AddressHeader = () => {
  const { t } = useTranslation("common");
  const [addressState, setAddressState] = useState([]);
  const [editAddress, setEditAddress] = useState();
  const [modal, setModal] = useState("");
  const { accountData, refetch } = useContext(AccountContext);
  useEffect(() => {
    accountData?.address.length > 0 && setAddressState((prev) => [...accountData?.address]);
  }, [accountData]);
  const { mutate, isLoading } = useCreate(AddressAPI, false, false, "Address Added successfully", (resDta) => {
    setAddressState((prev) => [...prev, resDta?.data]);
    refetch();
    setModal("");
  });
  const { mutate: editMutate, isLoading: editLoader } = useCreate(`${AddressAPI}/${editAddress?.id}`, false, false, "Address Updated successfully", (resDta) => {
    setAddressState((prev) =>
      prev.map((elem) => {
        if (elem?.id == resDta?.data?.id) {
          return (elem = resDta?.data);
        } else {
          return elem;
        }
      })
    );
    refetch();
    setModal("");
    setEditAddress("");
  });
  return (
    <Card>
      <CardBody>
        <div className="top-sec">
          <h3>{t("AddressBook")}</h3>
          <Btn tag="a" size="sm" color="transparent" className=" btn-solid" onClick={() => setModal("add")}>
            + {t("AddNew")}
          </Btn>
        </div>
        {addressState?.length > 0 ? (
          <>
            <div className="address-book-section">
              <AddressData addressState={addressState} setAddressState={setAddressState} modal={modal} setModal={setModal} setEditAddress={setEditAddress} />
            </div>
          </>
        ) : (
          <NoDataFound customClass="no-data-added" imageUrl={`/assets/svg/empty-items.svg`} title="NoAddressFound" description="NoAddressDescription" height="300" width="300" />
        )}
        <div className="checkout-detail">
          <CustomModal modal={modal == "add" || modal == "edit" ? true : false} setModal={setModal} classes={{ modalClass: "theme-modal-2 view-modal address-modal", title: modal == "add" ? "AddAddress" : "EditAddress" }}>
            <div className="right-sidebar-box">
              <AddAddressForm mutate={modal == "add" ? mutate : editMutate} method={modal == "add" ? "POST" : ""} isLoading={isLoading || editLoader} setModal={setModal} setEditAddress={setEditAddress} editAddress={editAddress} modal={modal} setAddressState={setAddressState} />
            </div>
          </CustomModal>
        </div>
      </CardBody>
    </Card>
  );
};

export default AddressHeader;
