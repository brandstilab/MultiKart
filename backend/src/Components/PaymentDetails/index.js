import TabTitle from "@/Components/Widgets/TabTitle";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import { PaymentDetailTab } from "../../Data/TabTitleListData";
import Btn from "../../Elements/Buttons/Btn";
import request from "../../Utils/AxiosUtils";
import { PaymentAccount } from "../../Utils/AxiosUtils/API";
import useCreate from "../../Utils/Hooks/useCreate";
import BankDetailTab from "./BankDetailTab";
import PaypalTab from "./PaypalTab";

const PaymentDetailsForm = () => {
  const [activeTab, setActiveTab] = useState("1");
  const router = useRouter();
  const {
    data,
    isLoading: getPaymentLoader,
    refetch,
  } = useQuery([PaymentAccount], () => request({ url: PaymentAccount }, router), {
    enabled: false,
    refetchOnWindowFocus: false,
    select: (res) => {
      return res?.data;
    },
  });
  useEffect(() => {
    refetch();
  }, []);
  const { mutate, isLoading } = useCreate(PaymentAccount, false, "/payment_account");
  return (
    <Formik
      enableReinitialize
      initialValues={{
        bank_account_no: data ? data?.bank_account_no : "",
        bank_holder_name: data ? data?.bank_holder_name : "",
        bank_name: data ? data?.bank_name : "",
        paypal_email: data ? data?.paypal_email : "",
        swift: data ? data?.swift : "",
        ifsc: data ? data?.ifsc : "",
        paypal_email: data ? data?.paypal_email : "",
      }}
      onSubmit={(values) => {
        // Put Add Or Update Logic Here
      }}
    >
      {({}) => (
        <Form className="theme-form theme-form-2 mega-form">
          <div className="inside-horizontal-tabs">
            <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={PaymentDetailTab} />
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <BankDetailTab />
              </TabPane>
              <TabPane tabId="2">
                <PaypalTab />
              </TabPane>
            </TabContent>
          </div>
          <Btn className="btn btn-theme ms-auto mt-4" type="submit" title="Save" loading={Number(isLoading)} />
        </Form>
      )}
    </Formik>
  );
};

export default PaymentDetailsForm;
