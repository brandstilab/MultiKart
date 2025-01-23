import TabTitle from "@/Components/Widgets/TabTitle";

import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useContext, useRef, useState } from "react";
import { Card, Col, Row } from "reactstrap";
import { ElectronicsThreeSettingTitle } from "@/Data/TabTitleListData";
import FormBtn from "@/Elements/Buttons/FormBtn";
import request from "@/Utils/AxiosUtils";
import { HomePageAPI } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import Loader from "@/Components/CommonComponent/Loader";
import AllTabElectronicsThree from "./AllTabElectronicsThree";
import ElectronicsThreeInitialValue from "./ElectronicsThreeFormValues/ElectronicsThreeInitialValue";
import ElectronicsThreeSubmit from "./ElectronicsThreeFormValues/ElectronicsThreeSubmit";

const ElectronicsThreeForm = ({ title,apiData }) => {
  
  const { t } = useTranslation( "common");
  const [activeTab, setActiveTab] = useState("1");
  const refRefetch = useRef();
  const { data, isLoading } = useQuery([HomePageAPI], () => request({ url: `${HomePageAPI}/electronics_three`, params: { slug: "electronics_three" } }), {
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
      initialValues={{ ...ElectronicsThreeInitialValue(NewSettingsData) }}
      onSubmit={(values) => {
        values["_method"] = "put";
        ElectronicsThreeSubmit(values, mutate);
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
                  <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={ElectronicsThreeSettingTitle} errors={errors} touched={touched} />
                </Col>
                <AllTabElectronicsThree apiData={apiData} activeTab={activeTab} values={values} setFieldValue={setFieldValue} ref={refRefetch} />
                <FormBtn loading={createLoader} />
              </Row>
            </Form>
          </Card>
        </Col>  
      )}
    </Formik>
  );
};
export default ElectronicsThreeForm;
