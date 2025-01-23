import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";
import request from "../../Utils/AxiosUtils";
import { product } from "../../Utils/AxiosUtils/API";
import Loader from "../CommonComponent/Loader";
import CheckBoxField from "../InputFields/CheckBoxField";
import MultiSelectField from "../InputFields/MultiSelectField";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import SimpleInputField from "../InputFields/SimpleInputField";

const HeaderTab = ({ values, setFieldValue, categoryData }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const handleClick = (val) => {
    setFieldValue("[options][header][header_options]", val.value);
  };
  const { data, isLoading } = useQuery([product], () => request({ url: product, params: { status: 1 } }, router), { refetchOnWindowFocus: false, select: (res) => res?.data?.data });
  if (isLoading) return <Loader />;
  return (
    <>
      <Row>
        <Col sm="12">
          <SearchableSelectInput
            nameList={[
              {
                name: "[options][header][header_options]",
                title: "HeaderOptions",
                inputprops: {
                  name: "[options][header][header_options]",
                  id: "[options][header][header_options]",
                  options: [
                    { id: "header_one", name: "HeaderOne" },
                    { id: "header_two", name: "HeaderTwo" },
                    { id: "header_three", name: "HeaderThree" },
                    { id: "header_four", name: "HeaderFour" },
                    { id: "header_five", name: "HeaderFive" },
                    { id: "header_six", name: "HeaderSix" },
                    { id: "header_seven", name: "HeaderSeven" },
                    { id: "header_eight", name: "HeaderEight" },
                  ],
                  defaultOption: "Select Header Style",
                },
              },
            ]}
          />
          <CheckBoxField name="[options][header][sticky_header_enable]" title="StickyHeader" />
          <CheckBoxField name="[options][header][page_top_bar_enable]" title="Topbar" />
          {values["options"]?.["header"]?.["page_top_bar_enable"]
            ? values["options"]?.["header"]?.["top_bar_content"]?.map((elem, i) => (
                <SimpleInputField
                  nameList={[
                    {
                      name: `[options][header][top_bar_content]${i}[content]`,
                      title: `TopbarContent${i + 1}`,
                      placeholder: t("EnterTopbarContent"),
                      helpertext: "*Utilize HTML tags for custom content presentation.",
                    },
                  ]}
                  key={i}
                />
              ))
            : null}
          <SimpleInputField nameList={[{ name: "[options][header][support_number]", title: "SupportNumber", placeholder: t("EnterSupportNumber") }]} />
          <MultiSelectField values={values} setFieldValue={setFieldValue} name="headerCategories" title={"Categories"} data={categoryData || []} />
        </Col>
      </Row>
    </>
  );
};

export default HeaderTab;
