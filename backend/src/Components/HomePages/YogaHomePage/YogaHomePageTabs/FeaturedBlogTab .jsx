
import { useTranslation } from "react-i18next";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";

const FeaturedBlogTab = ({ values, setFieldValue, setSearch, blogData }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][featured_blogs][tag]`, placeholder: t("Tag"), title: "Tag" },
          { name: `[content][featured_blogs][title]`, placeholder: t("Title"), title: "Title" },
        ]}
      />
      <SearchableSelectInput
        nameList={[
          {
            name: "featuredBlogList",
            title: "Blogs",
            inputprops: {
              name: "featuredBlogList",
              id: "featuredBlogList",
              options: blogData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
      <CheckBoxField name={`[content][featured_blogs][status]`} title="Status" />
    </>
  );
};
export default FeaturedBlogTab;
