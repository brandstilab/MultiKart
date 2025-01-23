import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { Row } from "reactstrap";
import Btn from "../../Elements/Buttons/Btn";
import { shippingRule } from "../../Utils/AxiosUtils/API";
import useDelete from "../../Utils/Hooks/useDelete";
import { YupObject, ifShippingTypeIsFree, nameSchema } from "../../Utils/Validation/ValidationSchemas";
import CheckBoxField from "../InputFields/CheckBoxField";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import SimpleInputField from "../InputFields/SimpleInputField";
import DeleteButton from "../Table/DeleteButton";

const FormsShippingRuleCreation = ({ rules, mutate, shipping_id, loading, refetch ,setActive}) => {
  const { t } = useTranslation("common");
  const { mutate: deleteMutate, isLoading } = useDelete(shippingRule, false, () => refetch && refetch());
  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: rules?.name || "",
        rule_type: rules?.rule_type || "",
        min: rules?.min || "",
        max: rules?.max || "",
        shipping_type: rules?.shipping_type || "",
        amount: rules?.amount || "",
        status: rules?.status ? Boolean(Number(rules?.status)) : true,
        shipping_id: rules ? shipping_id : shipping_id.create,
      }}
      validationSchema={YupObject({
        name: nameSchema,
        min: nameSchema,
        max: nameSchema,
        shipping_type: nameSchema,
        amount: ifShippingTypeIsFree,
        status: nameSchema,
      })}
      onSubmit={(values) => {
        if (values["shipping_type"] == "free") {
          delete values["amount"];
        }
        setActive(false)
        
        // Put your logic here
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className="theme-form theme-form-2 mega-form">
          <Row>
            <SimpleInputField nameList={[{ name: "name", title: "Name", placeholder: t("EnterName"), require: "true" }]} />
            <SearchableSelectInput
              nameList={[
                {
                  name: "rule_type",
                  title: "RuleType",
                  require: "true",
                  inputprops: {
                    name: "rule_type",
                    id: "rule_type",
                    options: [
                      { id: "base_on_price", name: "Base On Price" },
                      { id: "base_on_weight", name: "Base On Weight" },
                    ],
                  },
                },
              ]}
            />
            <SimpleInputField
              nameList={[
                { name: "min", type: "number", placeholder: t("EnterMinValue"), require: "true" },
                { name: "max", type: "number", placeholder: t("EnterMaxValue"), require: "true" },
              ]}
            />
            <SearchableSelectInput
              nameList={[
                {
                  name: "shipping_type",
                  title: "ShippingType",
                  require: "true",
                  inputprops: {
                    name: "shipping_type",
                    id: "shipping_type",
                    options: [
                      { id: "free", name: "Free" },
                      { id: "fixed", name: "Fixed" },
                      { id: "percentage", name: "Percentage" },
                    ],
                  },
                },
              ]}
            />
            {values["shipping_type"] !== "free" && <SimpleInputField nameList={[{ name: "amount", type: "number", min: 0, max: "100", placeholder: t("EnterAmount"), require: "true", onInput: values["shipping_type"] == "percentage" && values["amount"] > 100 ? setFieldValue("amount", 100) : "" }]} />}
          </Row>
          <div className="dflex-wgap justify-content-end ms-auto mt-0 save-back-button">
            {rules?.id && <DeleteButton id={rules.id} mutate={deleteMutate} noImage={true} loading={isLoading} />}
            <Btn className="btn-primary" type="submit" title="Submit" loading={Number(loading)} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormsShippingRuleCreation;
