import Avatar from "@/Components/Widgets/Avatar";
import CustomModal from "@/Components/Widgets/CustomModal";
import SimpleInputField from "@/Components/Widgets/InputFields/SimpleInputField";
import { placeHolderImage } from "@/Components/Widgets/Placeholder";
import SettingContext from "@/Context/SettingContext";
import Btn from "@/Elements/Buttons/Btn";
import { YupObject, nameSchema } from "@/Utils/Validation/ValidationSchema";
import { Form, Formik } from "formik";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const RefundModal = ({ modal, setModal, storeData }) => {
  const { t } = useTranslation("common");
  const { convertCurrency } = useContext(SettingContext);

  return (
    <CustomModal modal={modal ? true : false} setModal={setModal} classes={{ modalClass: "theme-modal-2 refund-modal", modalHeaderClass: "p-0", title: "Refund" }}>
      <Formik
        initialValues={{ reason: "", payment_type: "wallet", product_id: storeData?.pivot?.product_id, order_id: storeData?.pivot?.order_id }}
        validationSchema={YupObject({
          reason: nameSchema,
          payment_type: nameSchema,
        })}
        onSubmit={(values) => {
          // Put your logic here
          setModal(false);
        }}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form className="product-review-form">
            <div className="product-wrapper">
              <div className="product-image">
                <Avatar data={storeData?.product_thumbnail ? storeData?.product_thumbnail : placeHolderImage} customImageClass="img-fluid" name={storeData?.name} />
              </div>
              <div className="product-content">
                <h5 className="name">{storeData?.name}</h5>
                <div className="product-review-rating">
                  <div className="product-rating">
                    <h6 className="price-number">{convertCurrency(storeData?.pivot?.single_price)}</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="review-box">
              <SimpleInputField nameList={[{ name: "reason", placeholder: t("EnterReason"), type: "textarea", toplabel: "Reason", require: "true", rows: 3 }]} />
              {/* {errors["payment_type"] && <div className="invalid-feedback d-block">{t("Paymenttypeisrequired")}</div>} */}
            </div>
            <div className="review-box">
              <div className="form-box">
                {/* <Label htmlFor="address1">{t("PaymentOption")}</Label> */}
                <select className="form-select" name="payment_type" value={values?.payment_type} onChange={(e) => setFieldValue("payment_type", e.target.value)}>
                  <option disabled>{t("SelectPaymentOption")}</option>
                  <option value="wallet">{t("Wallet")}</option>
                  <option value="paypal">{t("Paypal")}</option>
                </select>
                {errors["payment_type"] && touched["payment_type"] && <div className="invalid-feedback d-block">{t("Paymenttypeisrequired")}</div>}
              </div>
            </div>
            <div className="refund-footer-button">
              <Btn className="btn-md btn-outline fw-bold" title="Cancel" type="button" onClick={() => setModal("")} />
              <Btn className="btn-solid" title="Submit" type="submit" />
            </div>
          </Form>
        )}
      </Formik>
    </CustomModal>
  );
};

export default RefundModal;
