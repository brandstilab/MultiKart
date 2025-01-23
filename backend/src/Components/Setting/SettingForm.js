import TabTitle from "@/Components/Widgets/TabTitle";
import { dateSubmitValue } from "@/Utils/CustomFunctions/DateFormate";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, Col, Row } from "reactstrap";
import { SettingTabTitleListData } from "../../Data/TabTitleListData";
import Btn from "../../Elements/Buttons/Btn";
import request from "../../Utils/AxiosUtils";
import { setting } from "../../Utils/AxiosUtils/API";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";
import { YupObject, emailSchema, nameSchema } from "../../Utils/Validation/ValidationSchemas";
import AllTabs from "./AllTabs";

const SettingForm = ({ mutate, loading, title }) => {
  const { t } = useTranslation("common");
  const [edit] = usePermissionCheck(["edit"]);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("1");
  const { data, isLoading, refetch } = useQuery([setting], () => request({ url: setting }, router), { enabled: false, refetchOnWindowFocus: false, select: (res) => res.data });
  let IncludeList = ["status", "coupon_enable", "point_enable", "product_auto_approve", "stock_product_hide", "wallet_enable", "same_day_delivery", "is_category_based_commission", "multivendor", "sandbox_mode", "store_auto_approve", "maintenance_mode"];
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
  useEffect(() => {
    refetch();
  }, []);

  let NewSettingsData = data?.values || {};
  RecursiveSet({ data: NewSettingsData });
  if (isLoading && !data) return null;

  const validationSchema = YupObject({
    email: emailSchema,
    values: YupObject({
      general: YupObject({ site_title: nameSchema }),
    }),
  });
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        submitButtonClicked: false,
        email: "",
        start_date: NewSettingsData ? NewSettingsData?.start_date || new Date() : new Date(),
        end_date: NewSettingsData ? NewSettingsData?.end_date || new Date() : new Date(),
        media_disk: NewSettingsData?.media_configuration?.media_disk || "local",
        light_logo_image: "",
        light_logo_image_id: "",
        dark_logo_image: "",
        dark_logo_image_id: "",
        tiny_logo_image: "",
        tiny_logo_image_id: "",
        favicon_image: "",
        favicon_image_id: "",
        values: NewSettingsData || {},
        default_timezone: NewSettingsData?.general?.default_timezone || "Asia/Kolkata",
        mail_mailer: NewSettingsData?.email?.mail_mailer || "smtp",
        maintenance_image: "",
        maintenance_image_id: "",
        mail_encryption: NewSettingsData?.email?.mail_encryption || "",
      }}
      onSubmit={(values) => {
        values["_method"] = "put";
        values["values"]["maintenance"]["start_date"] = dateSubmitValue(values["start_date"]);
        values["values"]["maintenance"]["end_date"] = dateSubmitValue(values["end_date"]);
        values["values"]["general"]["default_timezone"] = values["default_timezone"];
        values["values"]["email"]["mail_mailer"] = values["mail_mailer"];
        values["values"]["email"]["mail_encryption"] = values["mail_encryption"];
        values["values"]["general"]["light_logo_image_id"] = values["light_logo_image_id"] ? values["light_logo_image_id"] : "";
        values["values"]["general"]["favicon_image_id"] = values["favicon_image_id"] ? values["favicon_image_id"] : "";
        values["values"]["general"]["dark_logo_image_id"] = values["dark_logo_image_id"] ? values["dark_logo_image_id"] : "";
        values["values"]["general"]["tiny_logo_image_id"] = values["tiny_logo_image_id"] ? values["tiny_logo_image_id"] : "";
        values["values"]["maintenance"]["maintenance_image_id"] = values["maintenance_image_id"] ? values["maintenance_image_id"] : "";
        // Put Your Logic Here  
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
                  <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={SettingTabTitleListData} errors={errors} touched={touched} />
                </Col>
                <AllTabs values={values} activeTab={activeTab} setFieldValue={setFieldValue} errors={errors} touched={touched} />
                <div className="ms-auto justify-content-end dflex-wgap mt-4 save-back-button">
                  {/* <Btn className="me-2 btn-outline btn-lg" title="Back" onClick={() => router.back()} /> */}
                   <Btn className="btn-primary btn-lg" type="submit" title="Save" loading={Number(loading)} />
                </div>
              </Row>
            </Form>
          </Card>
        </Col>
      )}
    </Formik>
  );
};

export default SettingForm;
