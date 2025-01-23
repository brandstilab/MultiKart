import { Fragment, useEffect, useState } from "react";

const VariantDropDown = ({ product, selectedOption }) => {
    const [result, setResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            if(product.variations?.length){
             setResult(generateCombinations(product))
            }
          }, 1);
    }, [])
      // Select First Attribute
  const checkVariant = (item, i) =>{
    if(item.stock_status == 'in_stock' && item.status){
      if(item.stock_status === 'in_stock' && item.status && i === result.findIndex(obj => obj.value.stock_status === 'in_stock' && obj.value.status)){
        return true;
      }
    }
  }

   const generateCombinations = (attributes) => {
        const selectVariations = [];
    
        attributes.variations.forEach(variation => {
            const labelAttributes = variation.attribute_values.map(attr => attr.value)?.join('/');
            const value = variation;
    
            selectVariations.push({ label: labelAttributes, value });
        });
    
        // Selected Variation While Page Load
        selectVariations.forEach((item,i) => {
          if(item.value.stock_status == 'in_stock' && !!item.value.status){
            if(item.value.stock_status === 'in_stock' && !!item.value.status && i === selectVariations.findIndex(obj => obj.value.stock_status === 'in_stock' && obj.value.status)){
              if( item.value){
                selectedOption(item.value)
              }
              return true;
            }
          }
        })
    
        return selectVariations;
      }

      const getSelectedVariant = (item) => {
        if(item.target.options && item.target.selectedIndex){
            const data = item.target.options[item.target.selectedIndex].getAttribute('data');
            selectedOption(data);
        }
      }
 
  return (
    <div>
              <select className='form-control form-select select-dropdown' defaultValue={'DEFAULT'}  onChange={(e) => getSelectedVariant(e)}>
              <option value="DEFAULT" disabled>
                Choose
              </option>
                  {result.map((item,i) => 
                 <Fragment key={i}>
                    <option data={JSON.stringify(item.value)} value={checkVariant(item.value, i)} disabled={!item.value.status ||  item.value.stock_status === 'out_of_stock'}>
                      {item?.label}
                    </option>
                </Fragment>
                    )}
            </select>
    </div>
  );
};

export default VariantDropDown;
