import SimpleInputField from "@/Components/Widgets/InputFields/SimpleInputField";
import { AllCountryCode } from "@/Data/CountryCode";
import SearchableSelectInput from "@/Utils/CommonComponents/InputFields/SearchableSelectInput";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";

const ShippingAddressForm = ({ values, data }) => {
  const { t } = useTranslation("common");
  return (
    <div className="checkbox-main-box">
      <div className="checkout-title1">
        <h2>{t("ShippingDetails")}</h2>
      </div>
      <Row className="checkout-form g-md-4 g-sm-3 g-2">
        <SimpleInputField
          nameList={[
            { name: "shipping_address.title", placeholder: t("EnterTitle"), toplabel: "Title", colprops: { xs: 12 }, require: "true" },
            { name: "shipping_address.street", placeholder: t("EnterAddress"), toplabel: "Address", colprops: { xs: 12 }, require: "true" },
          ]}
        />
        <SearchableSelectInput
          nameList={[
            {
              name: "shipping_address.country_id",
              require: "true",
              title: "Country",
              toplabel: "Country",
              colprops: { xxl: 6, lg: 12, sm: 6 },
              inputprops: {
                name: "shipping_address.country_id",
                id: "shipping_address.country_id",
                options: data,
                defaultOption: "Select state",
              },
            },

            {
              name: "shipping_address.state_id",
              require: "true",
              title: "State",
              toplabel: "State",
              colprops: { xxl: 6, lg: 12, sm: 6 },
              inputprops: {
                name: "shipping_address.state_id",
                id: "shipping_address.state_id",
                options: values?.shipping_address?.country_id ? data?.filter((country) => Number(country.id) === Number(values?.shipping_address?.country_id))?.[0]?.["state"] : [],
                defaultOption: "Select state",
              },
              disabled: values?.["shipping_address.country_id"] ? false : true,
            },
          ]}
        />
        <SimpleInputField
          nameList={[
            { name: "shipping_address.city", placeholder: t("EnterCity"), toplabel: "City", colprops: { md: 6 }, require: "true" },
            { name: "shipping_address.pincode", placeholder: t("EnterPincode"), toplabel: "Pincode", colprops: { md: 6 }, require: "true" },
          ]}
        />
         <Col xs={12} className="phone-field">
          <div className="form-box position-relative">
            <div className="country-input">
              <SimpleInputField nameList={[{ name: "shipping_address.phone", type: "number", placeholder: t("EnterPhoneNumber"), require: "true", toplabel: "Phone", colprops: { xs: 12 }, colclass: "country-input-box" }]} />
              <SearchableSelectInput
                nameList={[
                  {
                    name: "shipping_address.country_code",
                    notitle: "true",
                    inputprops: {
                      name: "shipping_address.country_code",
                      id: "shipping_address.country_code",
                      options: AllCountryCode,
                    },
                  },
                ]}
              />
            </div>
          </div>
        </Col>
        {/* <div className="col-12">
          <div className="country-input">
            <SimpleInputField nameList={[{ name: "shipping_address.phone", type: "number", placeholder: t("EnterPhoneNumber"), require: "true", toplabel: "Phone", colprops: { md: 12 }, colclass: "country-input-box" }]} />
            <SearchableSelectInput
              nameList={[
                {
                  name: "shipping_address.country_code",
                  notitle: "true",
                  inputprops: {
                    name: "shipping_address.country_code",
                    id: "shipping_address.country_code",
                    options: AllCountryCode,
                  },
                },
              ]}
            />
          </div>
        </div> */}
      </Row>
    </div>
  );
};

export default ShippingAddressForm;
