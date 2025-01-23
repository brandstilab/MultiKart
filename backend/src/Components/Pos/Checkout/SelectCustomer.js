import { useEffect, useState } from "react";
import { RiAddLine, RiUserLine } from "react-icons/ri";
import ShowModal from "../../../Elements/Alerts&Modals/Modal";
import { user } from "../../../Utils/AxiosUtils/API";
import useCreate from "../../../Utils/Hooks/useCreate";
import SearchableSelectInput from "../../InputFields/SearchableSelectInput";
import UserForm from "../../User/UserForm";
import CheckoutCard from "./common/CheckoutCard";
import { useTranslation } from "react-i18next";

const SelectCustomer = ({ values, setFieldValue, userData, userRefetch, setSearch ,userLoader }) => {
  
  const { t } = useTranslation( 'common');
  const [modal, setModal] = useState(false);
  const { mutate: userCreate, isLoading } = useCreate(user, false, false, "Customer created Successfully", () => {userRefetch();  isLoading && setModal(false); });

  useEffect(() => {
    setFieldValue("billing_address_id", "");
    setFieldValue("shipping_address_id", "");
  }, [values["consumer_id"]]);

  return (
    <CheckoutCard icon={<RiUserLine />}>
      <div className="checkout-title">
        <h4>{t("SelectCustomer")}</h4>
        <a className="d-flex align-items-center fw-bold" onClick={() => setModal(true)}>
          <RiAddLine className="me-1"></RiAddLine>
          {t("AddNew")}
        </a>
      </div>
      <SearchableSelectInput
        nameList={[
          {
            name: "consumer_id",
            notitle: "true",
            inputprops: {
              name: "consumer_id",
              id: "consumer_id",
              options: userData?.map((item) => ({ name: item.name, id: item.id })) || [],
              defaultOption: "Select Customer",
              setsearch: setSearch,
            },
          },
        ]}
      />
      <ShowModal modalAttr={{ className: "modal-lg" }} title={"Addcustomer"} open={modal} setModal={setModal} >
        <UserForm mutate={userCreate} loading={isLoading} noRoleField  fixedRole />
      </ShowModal>
    </CheckoutCard>
  );
}

export default SelectCustomer;
