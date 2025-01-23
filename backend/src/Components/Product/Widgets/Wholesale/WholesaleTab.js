import React, { useEffect } from "react";
import Btn from "../../../../Elements/Buttons/Btn";
import WholesalePriceType from "../Wholesale/WholesalePriceType"

const WholesaleTab = ({ values, setFieldValue, errors, updateId,setvalue,touched ,setErrors, setTouched }) => {
  return (
    <>
    {values["type"] === "simple" && values["wholesale_price_type"] === "fixed" || values["wholesale_price_type"] === "percentage" ?
    (
     <div className="variant-box">
       {values["wholesale_prices"]?.map((_, i) => (<WholesalePriceType key={i} index={i}  setFieldValue={setFieldValue} values={values} touched={touched} errors={errors} />))}
      <div className="save-back-button">
          
<Btn className="btn-primary" title="Add More"   onClick={() => {
    const wholesalePrices = values.wholesale_prices;
    const lastIndex = wholesalePrices.length - 1;
    const lastPrice = wholesalePrices[lastIndex];
    
    if(wholesalePrices.length == 0){
      setFieldValue("wholesale_prices", [...values["wholesale_prices"], {id:"",min_qty:"",max_qty:"",value:""}])
    }
    if (lastPrice && lastPrice.min_qty !== '' && lastPrice.max_qty !== '' && lastPrice.value !== "" ) {
      setFieldValue("wholesale_prices", [...values["wholesale_prices"], {id:"",min_qty:"",max_qty:"",value:""}])
    } else {
      function addKeyValuePair(key, value, object) {
        const keys = key.split(/\.|\[|\]/).filter(Boolean);
        let parent = object;
        for (let i = 0; i < keys.length - 1; i++) {
          const currentKey = keys[i];
          if (!(currentKey in parent)) {
            parent[currentKey] = {};
          }
          parent = parent[currentKey];
        }
        parent[keys[keys.length - 1]] = value;
      }
      const newErrors = { ...errors };
      const newTouched = { ...touched };
      addKeyValuePair(`wholesale_prices[${lastIndex}].min_qty`, 'Minimum value is required', newErrors);
      addKeyValuePair(`wholesale_prices[${lastIndex}].min_qty`, true, newTouched);
      addKeyValuePair(`wholesale_prices[${lastIndex}].max_qty`, 'Maximum value is required', newErrors);
      addKeyValuePair(`wholesale_prices[${lastIndex}].max_qty`, true, newTouched);
      addKeyValuePair(`wholesale_prices[${lastIndex}].value`, 'This field is required', newErrors);
      addKeyValuePair(`wholesale_prices[${lastIndex}].value`, true, newTouched);
      setErrors(newErrors);
      setTouched(newTouched);
    }
  }} />
      </div>
    </div>) :
    null
  }
    </>
  );
};

export default WholesaleTab;
