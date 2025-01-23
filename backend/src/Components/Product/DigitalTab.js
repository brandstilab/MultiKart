import FileUploadField from "../InputFields/FileUploadField";
import SimpleInputField from "../InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";
import CheckBoxField from "../InputFields/CheckBoxField";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import { mediaConfig } from "@/Data/MediaConfig";

const ImagesTab = ({ values, setFieldValue, errors, updateId }) => {
  
  const { t } = useTranslation( 'common');
  return (
    <>
      {values["type"] == "simple" &&
        <FileUploadField errors={errors} name="files" id="files" title="Upload Main Files" type="file" values={values} setFieldValue={setFieldValue} updateId={updateId} />
      }

      {values["type"] == "simple" &&
        <CheckBoxField name="is_licensable" title="Licensable" />
      }


      {values["is_licensable"] && values["files"] &&
        <CheckBoxField name="is_licensekey_auto" title="License Key Auto" />
      }

      {values["is_licensable"] && !values["is_licensekey_auto"] &&
        <SearchableSelectInput
          nameList={
            [
              {
                name: 'separator',
                title: "Separator",
                require: 'true',
                inputprops: {
                  name: 'separator',
                  id: 'separator',
                  options: [
                    { id: "comma", name: "Comma ( , )" },
                    { id: "semicolon", name: "Semicolon ( ; )" },
                    { id: "pipe", name: "Pipe ( | )" },
                    { id: "newline", name: "Newline" },
                  ],
                },
              },
            ]} />
      }
      {values["is_licensable"] && !values["is_licensekey_auto"] &&
        <SimpleInputField nameList={[
          { name: "license_key",type:"textarea",rows:"3", title: "License Key",  placeholder: t("License Key") }]}
        />
      }

      <SearchableSelectInput
        nameList={
          [
            {
              name: 'preview_type',
              title: "Preview Type",
              require: 'true',
              inputprops: {
                name: 'preview_type',
                id: 'preview_type',
                options: [
                  { id: "video", name: "Video" },
                  { id: "audio", name: "Audio" },
                  { id: "url", name: "URL" },
                ],
              },
            },
          ]} />

      {values["preview_type"] == "video" &&
        <FileUploadField paramsProps={{ mime_type: mediaConfig.video.join(",") }} errors={errors} name="preview_audio_file_id" id="preview_audio_file_id" title="Preview Video File" type="file" multiple={true} values={values} setFieldValue={setFieldValue} updateId={updateId} />
      }
      {values["preview_type"] == "audio" &&
        <FileUploadField errors={errors} paramsProps={{ mime_type: mediaConfig.audio.join(",") }} name="preview_video_file_id" id="preview_video_file_id" title="Preview Audio File" type="file" values={values} setFieldValue={setFieldValue} updateId={updateId} />
      }
      {values["preview_type"] == "url" &&
        <SimpleInputField nameList={[
          { name: "preview_url", title: "Preview Url", placeholder: t("Enter Preview Url") }]}
        />
      }
    </>
  );
};

export default ImagesTab;
