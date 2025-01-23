import SimpleInputField from "../../../InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const WholesalePriceType = ({ data, index, values, setFieldValue, errors,touched  }) => {
  const { t } = useTranslation( 'common');
  const handleRemove = () => {
    if (values["wholesale_prices"].length == 1) {
      setFieldValue("wholesale_prices", [{}]);
    }
    if (values["wholesale_prices"].length > 1) {
      setFieldValue("wholesale_prices", values["wholesale_prices"].filter((item, i) => index !== i),)
    }
  }

  return (
    <>
          <div className="variant-row variant-row-2">
            <SimpleInputField nameList={[
              { name:`wholesale_prices[${index}][min_qty]`,   title: "Min Qty", placeholder: t("Enter Min Qty"),type: "number"  }]}
            />
            <SimpleInputField nameList={[
              { name: `wholesale_prices[${index}][max_qty]`,  title: "Max Qty", placeholder: t("Enter Max Qty"), type: "number" }]}
            />
          

            {values["wholesale_price_type"] === "fixed" &&
              <SimpleInputField nameList={[
                { name: `wholesale_prices[${index}][value]`, title: "Price", placeholder: t("Enter Price"), type: "number", inputaddon: "true", min: "0" }]}
              />
            }
            {values["wholesale_price_type"] === "percentage" &&
              <SimpleInputField nameList={[
                { name: `wholesale_prices[${index}][value]`, title: "Percentage", type: "number", min: '0', max: '100', inputaddon: "true", placeholder: "Enter Percentage", postprefix: "%",  }]}
              />
            }
            <div className="delete-variant">
              <a onClick={handleRemove}>{t("Remove")}</a>
            </div>
          </div>
    </>
  )
};

export default WholesalePriceType;
