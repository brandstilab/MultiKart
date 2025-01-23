import { useEffect } from "react";
import SimpleInputField from "../InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const MenuPath = ({ values, setFieldValue }) => {
  
  const { t } = useTranslation("common");
  useEffect(() => {
    if (values?.set_page_link !== "") {
      setFieldValue("path", `page/${values?.set_page_link}`);
    } else {
      setFieldValue("path", ``);
    }
  }, [values?.set_page_link]);

  return (
    <>
      {values["link_type"] == "link" && (
        <SimpleInputField
          nameList={[
            {
              name: "path",
              title: "path",
              placeholder: t("EnterPath"),
              helpertext: `*Ensure that the path creates a route in the frontend: "${values?.path}"`,
            },
          ]}
        />
      )}
    </>
  );
};

export default MenuPath;
