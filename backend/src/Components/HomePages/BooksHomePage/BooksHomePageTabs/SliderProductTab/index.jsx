import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SliderProduct1 from "./SliderProduct1";
import SliderProduct2 from "./SliderProduct2";
import { mediaConfig } from "@/Data/MediaConfig";

const SliderProductTab = ({ values, setFieldValue, description, productData, setSearch }) => {
  const [active, setActive] = useState(0);

  const { t } = useTranslation("common");
  return (
    <>
      <h4 className="fw-semibold mb-3 txt-primary w-100">{t("ProductSlider")} </h4>
      <CheckBoxField name={`[content][slider_products][status]`} title="Status" />
      <SimpleInputField
        nameList={[
          { name: `[content][slider_products][tag]`, placeholder: t("EnterTag"), title: "Tag" },
          { name: `[content][slider_products][title]`, placeholder: t("EnterTitle"), title: "Title" },
        ]}
      />
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="sliderProductImage" title="Image" id="sliderProductImage" showImage={values["sliderProductImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("1920x1018px")} />
      <SliderProduct1 active={active} setActive={setActive} values={values} productData={productData} setSearch={setSearch} setFieldValue={setFieldValue} />
      <SliderProduct2 active={active} setActive={setActive} values={values} description={description} productData={productData} setSearch={setSearch} setFieldValue={setFieldValue} />
    </>
  );
};
export default SliderProductTab;
