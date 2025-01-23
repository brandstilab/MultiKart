import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { RiAddLine, RiMapPinLine } from "react-icons/ri";
import { Row } from "reactstrap";
import ShowModal from "../../../Elements/Alerts&Modals/Modal";
import request from "../../../Utils/AxiosUtils";
import { AddressAPI, user } from "../../../Utils/AxiosUtils/API";
import useCreate from "../../../Utils/Hooks/useCreate";
import CommonAddressForm from "./CommonAddressForm";
import ShowAddress from "./ShowAddress";
import CheckoutCard from "./common/CheckoutCard";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const DeliveryAddress = ({ values, updateId, type, title }) => {
  const router = useRouter() 
  const { t } = useTranslation( 'common');
  const [modal, setModal] = useState(false);
  const [address, setAddress] = useState([])
  // Getting user by its id
  const { data, isLoading: load, refetch } = useQuery([user, updateId], () => request({ url: `/${user}/${updateId}` },router), { enabled: false, refetchOnWindowFocus: false, select: (data) => (data.data) });
  // Creating Address
  const {mutate: addressMutate, isLoading } = useCreate(AddressAPI, false, false, "Address Added successfully", () => {
    refetch(); setModal(false)
  });
  useEffect(() => {
    setAddress(data)
  }, [data ])
  useEffect(() => {
    if(updateId){
      load &&  refetch()
    }
  }, [load ,updateId]);
  return (
    <>
      <CheckoutCard icon={<RiMapPinLine />}>
        <div className="checkout-title">
          <h4>{t(title)} {t("Address")}</h4>
          {values['consumer_id'] && <a className="d-flex align-items-center fw-bold" onClick={() => setModal(true)}><RiAddLine className="me-1"></RiAddLine>{t("AddNew")}</a>}
        </div>
        <div className="checkout-detail">
          {<>
            {values['consumer_id'] && data?.address?.length > 0 ?
              <Row className="g-4">
                {address?.address?.map((item, i) => (
                  <ShowAddress item={item} data={data} key={i} type={type} index={i} />
                ))}
              </Row>
              : <div className="empty-box">
                <h2>{t("NoaddressFound")}</h2>
              </div>}
          </>
          }
          <ShowModal modalAttr={{ className: "modal-lg" }} title={"AddShippingAddress"} open={modal} setModal={setModal}>
            <CommonAddressForm setModal={setModal} loading={isLoading} updateId={values["consumer_id"]} type={type} addressMutate={addressMutate} setAddress={setAddress} />
          </ShowModal>
        </div>
      </CheckoutCard>
    </>
  );
}

export default DeliveryAddress;
