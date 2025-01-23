import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDownSLine } from "react-icons/ri";
import allPossibleCases from "../../../../Utils/CustomFunctions/AllPossibleCases";
import CheckBoxField from "../../../InputFields/CheckBoxField";
import FileUploadField from "../../../InputFields/FileUploadField";
import SearchableSelectInput from "../../../InputFields/SearchableSelectInput";
import SimpleInputField from "../../../InputFields/SimpleInputField";

const VariationsForm = ({ values, setFieldValue, newId, index, elem, errors, updateId }) => {
  useEffect(() => {
    if (values["variations"]?.[index]?.["is_licensable"] && values["variations"]?.[index]?.["digital_file_ids"]?.length) {
      setFieldValue(`variations[${index}]["is_licensekey_auto"]`, values[`variations`][index]["is_licensekey_auto"] ? values[`variations`][index]["is_licensekey_auto"] : false);
    }
  }, [values["variations"][index]?.["is_licensable"], values["variations"][index]?.["digital_file_ids"]?.length]);

  const { t } = useTranslation("common");
  const [active, setActive] = useState(false);
  useEffect(() => {
    setFieldValue(
      `variations[${index}][attribute_values]`,
      allPossibleCases(
        values["combination"]?.map((item) =>
          item?.values?.map((elem) => ({
            name: item.name?.name,
            value: item.name.attribute_values?.find((attr) => {
              attr.id == elem;
            })?.value,
          }))
        )
      )
    );
  }, [values["variation_options"]]);
  useEffect(() => {
    let priceValue, discountValue, salePriceValue;
    priceValue = values[`variations`][index]?.price || 0.0;
    discountValue = values[`variations`][index]?.discount || 0.0;
    salePriceValue = priceValue - (priceValue * discountValue) / 100;
    setFieldValue(`variations[${index}][sale_price]`, salePriceValue);
  }, [values[`variations`][index]?.price, values[`variations`][index]?.discount]);
  return (
    <div className="shipping-accordion-custom" key={index}>
      <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive((prev) => prev !== elem.id && elem.id)}>
        {newId}
        <RiArrowDownSLine />
      </div>
      {active === elem.id && (
        <div className="rule-edit-form">
          <SimpleInputField
            nameList={[
              { name: `variations[${index}][name]`, title: "name", placeholder: "Enter Name", require: "true", errormsg: "Name" },
              { name: `variations[${index}][price]`, title: "price", type: "number", placeholder: "Enter Price", require: "true", inputaddon: "true", errormsg: "Price", min: "0" },
              { name: `variations[${index}][discount]`, title: "discount", type: "number", min: "0", max: "100", inputaddon: "true", placeholder: "Enter Discount", postprefix: "%" },
              { name: `variations[${index}][sale_price]`, title: "Sale Price", type: "number", inputaddon: "true", placeholder: "0.00", readOnly: true },
              { name: `variations[${index}][quantity]`, title: "Stock Quantity", type: "number", require: "true", errormsg: "Quantity", placeholder: "Enter Quantity" },
              { name: `variations[${index}][sku]`, title: "sku", require: "true", placeholder: "Enter SKU", errormsg: "SKU" },
            ]}
          />
          <SearchableSelectInput
            nameList={[
              {
                name: `variations[${index}][stock_status]`,
                require: "true",
                inputprops: {
                  name: `variations[${index}][stock_status]`,
                  id: `variations[${index}][stock_status]`,
                  options: [
                    { id: "in_stock", name: "InStock" },
                    { id: "out_of_stock", name: "OutOfStock" },
                  ],
                },
                title: "StockStatus",
              },
            ]}
          />

          <FileUploadField name={`variations[${index}][variation_image_id]`} id={`variations[${index}][variation_image_id]`} uniquename={values[`variations`][index]["variation_image"]} type="file" values={values} setFieldValue={setFieldValue} title="image" />

          {values.product_type == "digital" ? (
            <>
              <FileUploadField multiple={true} name={`variations[${index}][digital_file_ids]`} id={`variations[${index}][digital_file_ids]`} uniquename={values[`variations`][index]["digital_files"]} type="file" values={values} setFieldValue={setFieldValue} title="Upload Main Files" />
              <CheckBoxField name={`variations[${index}][is_licensable]`} title="Licensable" />
              {values["variations"][index]["is_licensable"] ? (
                <>
                  {values["variations"][index]["digital_file_ids"]?.length > 0 ? <CheckBoxField name={`variations[${index}][is_licensekey_auto]`} title="License Key Auto" /> : null}
                  {!values["variations"][index]["is_licensekey_auto"] ? (
                    <>
                      <SearchableSelectInput
                        nameList={[
                          {
                            name: `variations[${index}][separator]`,
                            title: "Separator",
                            // require: 'true',
                            inputprops: {
                              name: `variations[${index}][separator]`,
                              id: "separator",
                              options: [
                                { id: "comma", name: "Comma ( , )" },
                                { id: "semicolon", name: "Semicolon ( ; )" },
                                { id: "pipe", name: "Pipe ( | )" },
                              ],
                            },
                          },
                        ]}
                      />
                      <SimpleInputField nameList={[{ name: `variations[${index}][license_keys]`, title: "License Key", type: "textarea", rows: "3", placeholder: t("License Key") }]} />
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          ) : null}
          <CheckBoxField name={`variations[${index}][status]`} title="status" require="true" />
        </div>
      )}
    </div>
  );
};

export default VariationsForm;
