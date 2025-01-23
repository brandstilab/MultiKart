import SimpleInputField from "@/Components/Widgets/InputFields/SimpleInputField";
import Btn from "@/Elements/Buttons/Btn";
import Loader from "@/Layout/Loader";
import request from "@/Utils/AxiosUtils";
import { PaymentAccountAPI } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody } from "reactstrap";
import AccountHeading from "../Common/AccountHeading";

const BankDetailForm = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const {
    data,
    refetch,
    isLoading: paymentLoader,
  } = useQuery([PaymentAccountAPI], () => request({ url: PaymentAccountAPI }, router), {
    enabled: false,
    refetchOnWindowFocus: false,
    select: (res) => res?.data,
  });
  useEffect(() => {
    refetch();
  }, []);

  if (paymentLoader) return <Loader />;
  return (
    <Card className="mt-0">
      <CardBody>
        <Formik
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
            // Put your logic here
          }}
        >
          <Form className="themeform-auth">
            <AccountHeading title="BankDetails" classes={"top-sec"} />
            <SimpleInputField
              nameList={[
                { name: "bank_account_no", placeholder: t("EnterBankAccountNumber"), type: "number", title: "BankAccountNumber" },
                { name: "bank_name", placeholder: t("EnterBankName"), title: "BankName" },
                { name: "bank_holder_name", placeholder: t("EnterBankHolderName"), title: "HolderName" },
                { name: "swift", placeholder: t("EnterSwift"), title: "Swift" },
                { name: "ifsc", placeholder: t("EnterIFSC"), title: "IFSC" },
              ]}
            />
            <AccountHeading title="PaymentDetails" classes={"mb-3 top-sec top-sec-2"} />
            <SimpleInputField nameList={[{ name: "paypal_email", type: "email", placeholder: t("EnterPaypalEmail"), title: "PaypalEmail" }]} />
            <div className="text-end">
              <Btn className="btn-solid">{t("Save")}</Btn>
            </div>
          </Form>
        </Formik>
      </CardBody>
    </Card>
  );
};

export default BankDetailForm;
