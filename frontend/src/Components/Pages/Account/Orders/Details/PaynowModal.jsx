import CustomModal from "@/Components/Widgets/CustomModal";
import SettingContext from "@/Context/SettingContext";
import Btn from "@/Elements/Buttons/Btn";
import { RePaymentAPI } from "@/Utils/AxiosUtils/API";
import { ModifyString } from "@/Utils/CustomFunctions/ModifyString";
import useCreate from "@/Utils/Hooks/useCreate";
import { handleModifier } from "@/Utils/Validation/ModifiedErrorMessage";
import { YupObject, nameSchema } from "@/Utils/Validation/ValidationSchema";
import { ErrorMessage, Form, Formik } from "formik";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Col, Input, Label, ModalBody, ModalHeader, Row } from "reactstrap";

const PaynowModal = ({ modal, setModal, params }) => {
  const { t } = useTranslation("common");
  const { settingData } = useContext(SettingContext);
  const { mutate, isLoading } = useCreate(RePaymentAPI, false, false, "No", (resDta) => {
    if (resDta?.status == 200 || resDta?.status == 201) {
      if (resDta?.data?.["payment_method"] == "cod") {
        router.push(`/account/order/${resDta?.data?.order_number}`);
      } else {
        window.open(resDta?.data?.url, "_self");
      }
    }
  });
  return (
    <CustomModal modal={modal} setModal={setModal} classes={{ modalClass: 'pay-modal theme-modal-2', customChildren: true }}>
      <ModalHeader className="modal-header">
        Pay Now
        <Btn color="transparent" className="btn-close" onClick={() => setModal(false)}>
          <div>
            <i className="ri-close-line"></i>
          </div>
        </Btn>
      </ModalHeader>
      <ModalBody>
        <Formik
          initialValues={{ payment_method: "" }}
          validationSchema={YupObject({
            payment_method: nameSchema,
          })}
          onSubmit={(values) => {
            values["return_url"] = `${process.env.PAYMENT_RETURN_URL}/account/order/details`;
            values["cancel_url"] = process.env.PAYMENT_CANCEL_URL;
            values["order_number"] = params;
// Put your logic here
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="checkout-box">
                <div className="checkout-detail">
                  <Row className="g-3">
                    {settingData?.payment_methods?.map((payment, i) => (
                      <Col md={6} key={i}>
                        <div className="payment-option">
                          <div className="payment-category w-100">
                            <div className="form-check">
                              <Input className="form-check-input" type="radio" name="payment_method" value={payment.name} id={payment.name} onChange={() => setFieldValue("payment_method", payment.name)} />
                              <Label className="form-check-label" htmlFor={payment.name}>
                                {ModifyString(payment.name, "upper")}
                              </Label>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
              <ErrorMessage name={"payment_method"} render={(msg) => <div className="invalid-feedback d-block">{handleModifier(msg)}</div>} />
              <div className="modal-footer">
                <Btn className=" btn-outline " onClick={() => setModal(false)}>
                  {t("Cancel")}
                </Btn>
                <Btn type="submit" className="btn-solid" loading={Number(isLoading)}>
                  {t("Submit")}
                </Btn>
              </div>
            </Form>
          )}
        </Formik>
      </ModalBody>
    </CustomModal>
  );
};

export default PaynowModal;
