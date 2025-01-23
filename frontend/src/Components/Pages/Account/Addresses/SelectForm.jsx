import SearchableSelectInput from "@/Components/Widgets/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/Widgets/InputFields/SimpleInputField";
import { AllCountryCode } from "@/Data/CountryCode";
import Btn from "@/Elements/Buttons/Btn";
import { Form } from "formik";
import { useTranslation } from "react-i18next";
import { Col, ModalFooter, Row } from "reactstrap";

const SelectForm = ({ values, isLoading, data, setModal, isFooterDisplay = true }) => {
  const { t } = useTranslation("common");
  return (
    <Form>
      <Row>
        <SimpleInputField
          nameList={[
            { name: "title", placeholder: t("EnterTitle"), toplabel: "Title", colprops: { xs: 12 }, require: "true" },
            { name: "street", placeholder: t("EnterAddress"), toplabel: "Address", colprops: { xs: 12 }, require: "true" },
          ]}
        />
        <Col xs="12" className="phone-field">
          <div className="country-input position-relative">
            <SimpleInputField nameList={[{ name: "phone", type: "number", placeholder: t("EnterPhoneNumber"), require: "true", toplabel: "Phone", colclass: "country-input-box" }]} />
            <SearchableSelectInput
              nameList={[
                {
                  name: "country_code",
                  notitle: "true",
                  inputprops: {
                    name: "country_code",
                    id: "country_code",
                    options: AllCountryCode,
                  },
                },
              ]}
            />
          </div>
        </Col>
        <SearchableSelectInput
          nameList={[
            {
              name: "country_id",
              require: "true",
              title: "Country",
              toplabel: "Country",
              colprops: { xxl: 6, lg: 12, sm: 6 },
              inputprops: {
                name: "country_id",
                id: "country_id",
                options: data,
                defaultOption: "Select state",
              },
            },
            {
              name: "state_id",
              require: "true",
              title: "State",
              toplabel: "State",
              colprops: { xxl: 6, lg: 12, sm: 6 },
              inputprops: {
                name: "state_id",
                id: "state_id",
                options: values?.["country_id"] ? data?.filter((country) => Number(country.id) === Number(values?.["country_id"]))?.[0]?.["state"] : [],
                defaultOption: "Select state",
              },
              disabled: values?.["country_id"] ? false : true,
            },
          ]}
        />
        <SimpleInputField
          nameList={[
            { name: "city", placeholder: t("EnterCity"), toplabel: "City", colprops: { xxl: 6, lg: 12, sm: 6 }, require: "true" },
            { name: "pincode", placeholder: t("EnterPincode"), toplabel: "Pincode", colprops: { xxl: 6, lg: 12, sm: 6 }, require: "true" },
          ]}
        />

        <Col xs="12">
          {isFooterDisplay && (
            <ModalFooter className="ms-auto justify-content-end save-back-button mt-0">
              <Btn className="btn-md btn-outline fw-bold" color="transparent" onClick={() => setModal(false)}>
                {t("Cancel")}
              </Btn>
              <Btn className="btn-solid" type="submit" loading={Number(isLoading)}>
                {t("Submit")}
              </Btn>
            </ModalFooter>
          )}
        </Col>
      </Row>
    </Form>
  );
};

export default SelectForm;
