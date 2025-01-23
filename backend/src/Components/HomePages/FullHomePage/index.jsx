import TabTitle from "@/Components/Widgets/TabTitle";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, Col, Row } from "reactstrap";
import { FullHomePageSettingTitle } from "@/Data/TabTitleListData";
import FormBtn from "@/Elements/Buttons/FormBtn";
import request from "@/Utils/AxiosUtils";
import { HomePageAPI } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import Loader from "@/Components/CommonComponent/Loader";
import AllTabsFullHomePage from "./AllTabFullHomePage";
import FullHomePageInitialValue from "./FullHomePageFormValues/FullHomePageInitialValue";
import FullHomePageSubmit from "./FullHomePageFormValues/FullHomePageSubmit";

const FullHomePageForm = ({ title,apiData }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  const refRefetch = useRef();
  const { data, isLoading } = useQuery([HomePageAPI], () => request({ url: `${HomePageAPI}/full_page`, params: { slug: "full_page" } }), {
    refetchOnWindowFocus: false,
    select: (res) => res.data,
  });

  const { mutate, isLoading: createLoader } = useCreate(`${HomePageAPI}/${data?.id}`, false, false, false, (resDta) => {
    refRefetch?.current?.call();
  });

  let IncludeList = ["status"];
  let NewSettingsData = data || {};
  const RecursiveSet = ({ data }) => {
    if (data && typeof data == "object") {
      Object.keys(data).forEach((key) => {
        if (data[key] == 0 && IncludeList.includes(key)) {
          data[key] = false;
        } else if (data[key] == 1 && IncludeList.includes(key)) {
          data[key] = true;
        } else {
          RecursiveSet({ data: data[key] });
        }
      });
    }
  };
  RecursiveSet({ data: NewSettingsData });
  if (isLoading) return <Loader />;
  return (
    <Formik
      enableReinitialize
      initialValues={{ ...FullHomePageInitialValue(NewSettingsData) }}
      onSubmit={(values) => {
        values["_method"] = "put";
        FullHomePageSubmit(values, mutate);
      }}
    >
      {({ values, errors, touched, setFieldValue }) => (
        <Col>
          <Card>
            <div className="title-header option-title">
              <h5>{t(title)}</h5>
            </div>
            <Form className="theme-form theme-form-2 mega-form vertical-tabs">
              <Row>
                <Col xl="3" lg="4">
                  <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={FullHomePageSettingTitle} errors={errors} touched={touched} />
                </Col>
                <AllTabsFullHomePage apiData={apiData} activeTab={activeTab} values={values} setFieldValue={setFieldValue} ref={refRefetch} />
                <FormBtn loading={createLoader} />
              </Row>
            </Form>
          </Card>
        </Col>
      )}
    </Formik>
  );
};
export default FullHomePageForm;
