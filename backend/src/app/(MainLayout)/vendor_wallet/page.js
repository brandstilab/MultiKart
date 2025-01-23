"use client";
import SelectUser from "@/Components/Wallet/SelectUser";
import SeleteWalletPrice from "@/Components/Wallet/SeleteWalletPrice";
import UserTransationsTable from "@/Components/Wallet/UserTransationsTable";
import AccountContext from "@/Helper/AccountContext";
import { VendorTransations, VendorWalletCredit, VendorWalletDebit } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import usePermissionCheck from "@/Utils/Hooks/usePermissionCheck";
import { YupObject, nameSchema } from "@/Utils/Validation/ValidationSchemas";
import { Form, Formik } from "formik";
import { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiWallet2Line } from "react-icons/ri";
import { Col, Row } from "reactstrap";

const VendorWallet = () => {
  const { role, setRole } = useContext(AccountContext);
  useEffect(() => {
    setRole(JSON.parse(localStorage.getItem("role"))?.name);
  }, []);

  const { t } = useTranslation("common");
  const [credit, debit] = usePermissionCheck(["credit", "debit"]);
  const [isValue, setIsValue] = useState("");
  const refRefetch = useRef();
  const { mutate: CreateWalletCredit, isLoading: creditLoader } = useCreate(VendorWalletCredit, false, "/vendor_wallet", false, () => {
    refRefetch.current.call();
  });
  const { mutate: CreateWalletDebit, isLoading: debitLoader } = useCreate(VendorWalletDebit, false, "/vendor_wallet", false, () => {
    refRefetch.current.call();
  });
  return (
    <div className="save-back-button">
      <Formik
        initialValues={{
          vendor_id: "",
          showBalance: "",
          balance: "",
        }}
        validationSchema={YupObject({ vendor_id: nameSchema })}
        onSubmit={(values) => {
          if (isValue == "credit") {
            // Put Your Logic Here
          } else {
            // Put Your Logic Here
          }
        }}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <>
            <Form>
              <div className="card-spacing">
                <Row>
                  {role !== "vendor" && <SelectUser title={t("SelectVendor")} values={values} setFieldValue={setFieldValue} role={"vendor"} name={"vendor_id"} userRole={role} />}
                  <SeleteWalletPrice values={values} setFieldValue={setFieldValue} handleSubmit={handleSubmit} setIsValue={setIsValue} creditLoader={creditLoader} debitLoader={debitLoader} title={t("Wallet")} description={t("WalletBalance")} selectUser={"vendor_id"} icon={<RiWallet2Line />} isCredit={credit} isDebit={debit} role={role} />
                </Row>
              </div>
            </Form>
            <Col sm="12">
              <UserTransationsTable filterHeader={{ customTitle: "Transactions" }} url={VendorTransations} moduleName="UserTransactions" setFieldValue={setFieldValue} values={values} ref={refRefetch} dateRange={true} userIdParams={true} paramsProps={{ vendor_id: values["vendor_id"] ? values["vendor_id"] : null }} />
            </Col>
          </>
        )}
      </Formik>
    </div>
  );
};

export default VendorWallet;
