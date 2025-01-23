import { useTranslation } from "react-i18next";
import { redirectOptions } from "../../Data/TabTitleListData";
import MultiSelectField from "../InputFields/MultiSelectField";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import SimpleInputField from "../InputFields/SimpleInputField";

const CommonRedirect = ({ values, setFieldValue, productData, categoryData, nameList, setSearch }) => {
  const { selectNameKey, multipleNameKey } = nameList;

  const { t } = useTranslation("common");
  const redirectLink = (name, value) => {
    setFieldValue(selectNameKey, value?.id);
  };
  const selectProduct = (name, value) => {
    setFieldValue(multipleNameKey, value?.id);
  };

  return (
    <>
      <SearchableSelectInput
        nameList={[
          {
            name: selectNameKey,
            title: "Select Link",
            inputprops: {
              name: selectNameKey,
              id: selectNameKey,
              options: redirectOptions || [],
              value: redirectOptions.find((elem) => elem.id == values[selectNameKey])?.name || "",
              close: true,
            },
            store: "obj",
            setvalue: redirectLink,
          },
        ]}
      />
      {values[selectNameKey] == "product" ? (
        <SearchableSelectInput
          nameList={[
            {
              name: multipleNameKey,
              title: "Products",
              inputprops: {
                name: multipleNameKey,
                id: multipleNameKey,
                options: productData || [],
                setsearch: setSearch,
                value: values[multipleNameKey]?.name ? values[multipleNameKey]?.name : productData?.find((elem) => elem.id == values[multipleNameKey])?.name || "",
                close: true,
              },
              store: "obj",
              setvalue: selectProduct,
            },
          ]}
        />
      ) : values[selectNameKey] == "collection" ? (
        <MultiSelectField values={values} setFieldValue={setFieldValue} name={multipleNameKey} title="Collection" data={categoryData || []} key="Collection" getValuesKey="slug" />
      ) : values[selectNameKey] == "external_url" ? (
        <SimpleInputField nameList={[{ name: multipleNameKey, type: "url", placeholder: t("EnterRedirectLink"), title: "RedirectLink" }]} key="RedirectLink" />
      ) : null}
    </>
  );
};

export default CommonRedirect;
