import { useContext } from "react";

import { useTranslation } from "react-i18next";
import Loader from "@/Components/CommonComponent/Loader";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";

const BrandTab = ({ values, setFieldValue, noDescription, brandData, brandLoader }) => {
  
  const { t } = useTranslation( "common");

  if (brandLoader) return <Loader />;
  return (
    <>
      <MultiSelectField values={values} setFieldValue={setFieldValue} name="brandItems" title="Brand" data={brandData} />
      <CheckBoxField name={`[content][brand][status]`} title="Status" />
    </>
  );
};
export default BrandTab;
