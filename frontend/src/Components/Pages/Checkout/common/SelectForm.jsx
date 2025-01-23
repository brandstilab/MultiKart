import { Form } from "formik";
import { Col, ModalFooter, Row } from "reactstrap";
import Btn from "@/Elements/Buttons/Btn";
import { useTranslation } from "react-i18next";
import SearchableSelectInput from "@/Utils/CommonComponents/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/Widgets/InputFields/SimpleInputField";
import { AllCountryCode } from "@/Data/CountryCode";

const SelectForm = ({ values, isLoading, data, setModal, isFooterDisplay = true }) => {
  const { t } = useTranslation("common");
  return (
    <Form>
      <Row className="g-3">
        <SimpleInputField
          nameList={[
            { name: "title", placeholder: t("EnterTitle"), toplabel: "Title", colprops: { xs: 12 }, require: "true" },
            { name: "street", placeholder: t("EnterAddress"), toplabel: "Address", colprops: { xs: 12 }, require: "true" },
          ]}
        />
        <Col xs='12'>
          <div className="country-input position-relative phone-field">
            <SimpleInputField nameList={[{ name: "phone", type: "number", placeholder: t("EnterPhoneNumber"), require: "true", toplabel: "Phone", colclass: "country-input-box" }]} />
            <SearchableSelectInput
              nameList={[
                {
                  toplabel: "Country",
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
              label: "Country",
              colprops: { sm: 6 },
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
              label: "State",
              colprops: { sm: 6 },
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

        {isFooterDisplay && (
          <ModalFooter className="ms-auto justify-content-end save-back-button">
            <Btn size="md" className="btn-outline fw-bold" title="Cancel" onClick={() => setModal(false)} />
            <Btn className="btn-solid" type="submit" title="Submit" loading={Number(isLoading)} />
          </ModalFooter>
        )}
      </Row>
    </Form>
  );
};

export default SelectForm;
