import React from "react";
import FileUploadField from "../InputFields/FileUploadField";
import { getHelperText } from "../../Utils/CustomFunctions/getHelperText";
import CheckBoxField from "../InputFields/CheckBoxField";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import {waterMarkPosition} from "@/Data/TabTitleListData"
import { mediaConfig } from "@/Data/MediaConfig";

const ImagesTab = ({ values, setFieldValue, errors, updateId }) => {
  return (
    <>
      <FileUploadField  paramsProps={{ mime_type: mediaConfig.image.join(",") }}  errors={errors} name="product_thumbnail_id" id="product_thumbnail_id" title="Thumbnail" type="file" values={values} setFieldValue={setFieldValue} updateId={updateId} helpertext={getHelperText('600x600px')} />
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} errors={errors} name="product_galleries_id" id="product_galleries_id" title="Images" type="file" multiple={true} values={values} setFieldValue={setFieldValue} updateId={updateId} helpertext={getHelperText('600x600px')} />
      {values["product_type"] === "digital" ? (
        null
      ):
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} errors={errors} name="size_chart_image_id" id="size_chart_image_id" title="Size Chart" type="file" values={values} setFieldValue={setFieldValue} updateId={updateId} helpertext={'*Upload an image showcasing the size chart tailored for fashion products. A table format image is suggested for easy reference.'} />
      }
      <CheckBoxField name="watermark" title="Watermark" helpertext="*Enabling this setting will apply a watermark to images" />
      {values["watermark"] &&
      <SearchableSelectInput
        nameList={[
          {
            name: "watermark_position",
            title: "Watermark Position",
            require: "true",
            inputprops: {
              name: "watermark_position",
              id: "watermark_position",
              options: waterMarkPosition,
            },
          },
        ]}
      />
    }
    {values["watermark"] &&
      <FileUploadField errors={errors} name="watermark_image_id" id="watermark_image_id" title="Watermark Image"  require="true" type="file" values={values} setFieldValue={setFieldValue} updateId={updateId} helpertext={'*Upload image size 180x50px recommended'} />
    }
      </>
  );
};

export default ImagesTab;