import { useEffect } from "react";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import SimpleInputField from "../InputFields/SimpleInputField";
import WholesaleTab from "./Widgets/Wholesale/WholesaleTab";
import { useTranslation } from "react-i18next";

const InventoryTab = ({ values, setFieldValue, errors, updateId ,touched ,setErrors, setTouched}) => {

  const { t } = useTranslation( 'common');
  // Set the value of sale price
  useEffect(() => {
    if (values['price'] || values['discount']) {
      let salePriceValue = values['price'] - ((values['price'] * values['discount']) / 100);
      setFieldValue("sale_price", salePriceValue)
    }
  }, [values['price'], values['discount']])
  return (
    <> 
     {values['product_type'] == "external" &&
      <SimpleInputField nameList={[
        {name: "external_url", title: "External Url", require: "true", placeholder: t("Enter External Url") },
        { name: "external_button_text", title: "External Button Text", placeholder: t("Enter External Button Text"), type: "text"}]} 
      /> 
      } 
      {values['product_type'] == "external" ? (
        null
      ):
      <SearchableSelectInput
        nameList={[
          {
            name: "type",
            require: "true",
            inputprops: {
              name: "type",
              id: "type",
              options: [
                { id: "simple", name: "Simple Product" },
                { id: "classified", name: "Variable Product" },
              ],
            },
          },
        ]}
      />
    }
       <SearchableSelectInput
        nameList={[
          {
            name: "stock_status",
            title: "StockStatus",
            require: 'true',
            inputprops: {
              name: "stock_status",
              id: "stock_status",
              options: [
                { id: "in_stock", name: "InStock" },
                { id: "out_of_stock", name: "OutOfStock" },
              ],
            },
          },
        ]}
      />
      <SimpleInputField nameList={[
        {name: "sku", title: "SKU", require: "true", placeholder: t("EnterSKU") },
        { name: "quantity", title: "StockQuantity", placeholder: t("EnterQuantity"), type: "number", require: "true" }]} 
         />
       {values["type"] === "simple" && <SimpleInputField nameList={[
        { name: "price", type: "number", inputaddon: "true", placeholder: t("EnterPrice") },
        { name: "discount", type: "number", inputaddon: "true", postprefix: "%", placeholder: t("EnterDiscount"), min: "0", max: "100" },
        { name: "sale_price", title: "SalePrice", type: "number", inputaddon: "true", readOnly: 'true' },]} 
         />
        }
        {values['product_type'] == "external" || values["type"] == "classified" ?  ( null):
         <SearchableSelectInput
        nameList={[
          {
            name: "wholesale_price_type",
            require: "wholesale_price_type",
            inputprops: {
              name: "wholesale_price_type",
              id: "wholesale_price_type",
              close:values["wholesale_price_type"] ?true :false,
              options: [
                { id: "fixed", name: "Fixed" },
                { id: "percentage", name: "Percentage" },
              ],
              helpertext: "*Enabling this feature will present wholesale prices as a table list on the frontend."

            },
          },
        ]}
        />
      }
      <WholesaleTab setErrors={setErrors} setTouched={setTouched}  updateId={updateId} values={values} setFieldValue={setFieldValue} errors={errors} touched={touched} />
    </>
  );
};
export default InventoryTab;
