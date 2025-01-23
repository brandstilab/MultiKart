import TabTitle from "@/Components/Widgets/TabTitle";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, Col, Row } from "reactstrap";
import { CouponTabTitleListData } from "../../Data/TabTitleListData";
import request from "../../Utils/AxiosUtils";
import { dateSubmitValue } from "../../Utils/CustomFunctions/DateFormate";
import { YupObject } from "../../Utils/Validation/ValidationSchemas";
import CouponTab from "./CouponTab";
import { CouponInitialValues } from "./Widgets/CouponInitialValues";
import { CouponValidation } from "./Widgets/CouponValidation";
import { useRouter } from "next/navigation";

const CouponForm = ({ updateId, title, buttonName }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  const router = useRouter();
  const { data: oldData, isLoading: oldDataLoading, refetch } = useQuery([updateId], () => request({ url: `/coupon/${updateId}` }, router), { enabled: false, refetchOnWindowFocus: false });
  useEffect(() => {
    if (updateId) {
      refetch();
    }
  }, [updateId]);

  if (updateId && oldDataLoading) return null;
  return (
    <Formik
      initialValues={{ ...CouponInitialValues(updateId, oldData) }}
      validationSchema={YupObject(CouponValidation)}
      onSubmit={(values) => {
        const booleanValues = ["is_expired", "status", "is_unlimited", "is_apply_all", "is_first_order"];
        booleanValues.forEach((item) => (values[item] = Number(values[item])));
        if (values["is_unlimited"]) {
          delete values["usage_per_coupon"];
          delete values["usage_per_customer"];
        } else {
          values["usage_per_coupon"] = Number(values["usage_per_coupon"]);
          values["usage_per_customer"] = Number(values["usage_per_customer"]);
        }
        if (values["is_apply_all"]) {
          delete values["products"];
        } else {
          delete values["exclude_products"];
        }
        values["start_date"] = dateSubmitValue(values["start_date"], true);
        values["end_date"] = dateSubmitValue(values["end_date"], true);
        if (!values["is_expired"]) {
          delete values["start_date"];
          delete values["end_date"];
        }
        if (values["type"] === "free_shipping") {
          delete values["amount"];
        }
        router.push("/coupon");
      }}
    >
      {({ values, setFieldValue, errors, touched, isSubmitting }) => (
        <Col>
          <Card>
            <div className="title-header option-title">
              <h5>{t(title)}</h5>
            </div>
            <Form className="theme-form theme-form-2 mega-form vertical-tabs">
              <Row>
                <Col xl="3" lg="4">
                  <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={CouponTabTitleListData} errors={errors} touched={touched} />
                </Col>
                <Col xl="7" lg="8">
                  <CouponTab buttonName={buttonName} touched={touched} values={values} activeTab={activeTab} isSubmitting={isSubmitting} setFieldValue={setFieldValue} errors={errors} updateId={updateId} setActiveTab={setActiveTab} />
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      )}
    </Formik>
  );
};
export default CouponForm;
