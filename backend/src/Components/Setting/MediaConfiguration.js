
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import SimpleInputField from "../InputFields/SimpleInputField";

import { useTranslation } from "react-i18next";

const MediaConfiguration = ({ values }) => {
    
    const { t } = useTranslation( 'common');
  return (
    <>
      <SearchableSelectInput
        nameList={[
          {
            name: "media_disk",
            title: "Mailer",
            inputprops: {
              name: "media_disk",
              id: "media_disk",
              options: [
                { id: "local", name: "local" },
                { id: "s3", name: "s3" },
              ],
            },
          },
        ]}
      />
      {
        values["media_disk"] === "s3" && 
        <SimpleInputField
        nameList={[
          { name: "[values][media_configuration][aws_access_key_id]", title: t("aws_access_key_id"), placeholder: t("enter_aws_access_key_id") },
          { name: "[values][media_configuration][aws_secret_access_key]", title: t("aws_secret_access_key"), placeholder: t("aws_secret_access_key"),errormsg:"SiteName" },
          { name: "[values][media_configuration][aws_bucket]", title: t("aws_bucket"), placeholder: t("enter_aws_bucket") },
          { name: "[values][media_configuration][aws_default_region]", title: t("aws_default_region"), placeholder: t("enter_aws_default_region") },]}
      /> 
      }
    </>
  );
};

export default MediaConfiguration;
