import { useEffect, useState } from "react";
import InputWrapper from "../../Utils/HOC/InputWrapper";
import useOutsideDropdown from "../../Utils/Hooks/CustomHooks/useOutsideDropdown";
import MultiDropdownBox from "./MultiDropdownBox";
import MultiSelectInput from "./MultiSelectInput";

const MultiSelectField = ({ setFieldValue, values, name, getValuesKey = "id", data, errors, helpertext,initialTittle  }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown();

  const SelectedItemFunction = (data) => {
    for (let i = 0; i < data?.length; i++) {
      if (data[i][getValuesKey] == values[name] || (Array.isArray(values[name]) && values[name].includes(data[i][getValuesKey])) || (Array.isArray(values[name]) && values[name].some(value => value?.id == data[i][getValuesKey]))) {
        setSelectedItems((p) => (p ? [...p, data[i]] : [data[i]]));
      }
      if (data[i].subcategories?.length > 0) {
        SelectedItemFunction(data[i].subcategories);
      } 
      // childs
      if (data[i].child?.length > 0) {
        SelectedItemFunction(data[i].child);
      }
    }
  };
  useEffect(() => {
    setSelectedItems();
    SelectedItemFunction(data && data);
  }, [values?.[name]]);
  return (
    <div className="category-select-box" ref={ref}>
      <MultiSelectInput initialTittle={initialTittle} values={values} name={name} data={data} selectedItems={selectedItems} setIsComponentVisible={setIsComponentVisible} setFieldValue={setFieldValue} setSelectedItems={setSelectedItems} errors={errors} getValuesKey={getValuesKey} />
      {helpertext && <p className="help-text">{helpertext}</p>}
      <MultiDropdownBox  data={data} values={values} setIsComponentVisible={setIsComponentVisible} setFieldValue={setFieldValue} name={name} getValuesKey={getValuesKey} isComponentVisible={isComponentVisible} />
    </div>
  );
};


export default InputWrapper(MultiSelectField);
