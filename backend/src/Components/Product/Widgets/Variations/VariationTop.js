
import MultiSelectField from "../../../InputFields/MultiSelectField";
import SearchableSelectInput from "../../../InputFields/SearchableSelectInput";

import { useTranslation } from "react-i18next";

const VariationTop = ({ data, index, values, setFieldValue, errors }) => {
  
  const { t } = useTranslation( 'common');
  const setVariationValue = (name, value, index) => {
    setFieldValue("combination",values["combination"]?.map((item, i) => (i == index ? { ...item, name: value, values: [] } : item)),);
  };
  const setAttributesValues = (name, value) => {
    setFieldValue("attributes_ids", values["combination"]?.map((el) => el?.["name"]?.id))
    setFieldValue("combination", values["combination"].map((item, i) => (i == index ? { ...item, values: value } : item)));
  };
  const handleRemove = () => {
    // if (values["combination"].length == 1) {
    //   setFieldValue("combination", []);
    // }
    if (values["combination"].length > 1) {
      setFieldValue("combination", values["combination"].filter((item, i) => index !== i),)
    }
  }
  return (
    <div className="variant-row">
      <SearchableSelectInput
        nameList={[
          {
            name: "attribute_name",
            title: "Attributes",
            inputprops: {
              name: "attribute_name",
              id: "attribute_name",
              options: data?.filter((item) => (values["combination"].find((elem) => elem?.name?.name == item.name) ? false : true)),
              value: values["combination"][index]["name"]?.["name"],
            },
            index: index,
            store: "obj",
            setvalue: setVariationValue,
          },
        ]}
      />
      <MultiSelectField errors={errors} values={values["combination"][index]} setFieldValue={setAttributesValues} name="values" title="Value" data={values?.["combination"]?.[index]?.["name"]?.["attribute_values"]?.map((elem) => ({ name: elem.value, id: elem.id }))} />
      <div className="delete-variant">
        <a onClick={handleRemove}>{t("Remove")}</a>
      </div>
    </div>
  );
};

export default VariationTop;
