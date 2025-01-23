import { Col, TabContent, TabPane } from "reactstrap";
import DigitalTab from "../DigitalTab";
import GeneralTab from "../GeneralTab";
import InventoryTab from "../InventoryTab";
import OptionsTab from "../OptionsTab";
import ProductImageTab from "../ProductImageTab";
import SeoTab from "../SeoTab";
import SetupTab from "../SetupTab";
import ShippingTaxTab from "../ShippingTaxTab";
import { generateTitleList } from "./tittleList";
import { useEffect } from "react";
import VariationsTab from "./Variations/VariationsTab";

const AllProductTabs = ({ setErrors, setTouched, values, setFieldValue, errors, updateId, activeTab, isSubmitting, setActiveTab, touched }) => {
  useEffect(() => {
    let productTabs = generateTitleList(values)
      .map((main) => main.inputs.filter((item) => errors[item] && touched[item]))
      .findIndex((innerArray) => Array.isArray(innerArray) && innerArray.some((item) => typeof item == "string"));

    if (productTabs !== -1 && activeTab !== productTabs + 1) {
      setActiveTab(String(productTabs + 1));
    }
  }, [isSubmitting]);
  return (
    <Col xl="7" lg="8">
      {values.product_type == "physical" && (
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1" className="some">
            <GeneralTab values={values} setFieldValue={setFieldValue} updateId={updateId} />
          </TabPane>
          <TabPane tabId="2">
            <ProductImageTab values={values} setFieldValue={setFieldValue} errors={errors} updateId={updateId} />
          </TabPane>
          <TabPane tabId="3">
            <InventoryTab setErrors={setErrors} setTouched={setTouched} values={values} setFieldValue={setFieldValue} errors={errors} updateId={updateId} touched={touched} />
          </TabPane>

          {/* {values.type == "classified" &&
                        <TabPane tabId="4">
                            <VariationsTab values={values} setFieldValue={setFieldValue} errors={errors} updateId={updateId} />
                        </TabPane>
                    } */}

          <TabPane tabId={values.type == "classified" ? "5" : "4"}>
            <SetupTab values={values} setFieldValue={setFieldValue} errors={errors} updateId={updateId} />
          </TabPane>

          <TabPane tabId={values.type == "classified" ? "6" : "5"}>
            <SeoTab values={values} setFieldValue={setFieldValue} updateId={updateId} />
          </TabPane>

          <TabPane tabId={values.type == "classified" ? "7" : "6"}>
            <ShippingTaxTab values={values} setFieldValue={setFieldValue} updateId={updateId} />
          </TabPane>

          <TabPane tabId={values.type == "classified" ? "8" : "7"}>
            <OptionsTab values={values} setFieldValue={setFieldValue} updateId={updateId} />
          </TabPane>
        </TabContent>
      )}
      {values.product_type == "digital" && (
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1" className="some">
            <GeneralTab values={values} setFieldValue={setFieldValue} updateId={updateId} />
          </TabPane>
          <TabPane tabId="2">
            <ProductImageTab values={values} setFieldValue={setFieldValue} errors={errors} updateId={updateId} />
          </TabPane>
          <TabPane tabId="3">
            <InventoryTab setErrors={setErrors} setTouched={setTouched} values={values} setFieldValue={setFieldValue} errors={errors} updateId={updateId} />
          </TabPane>

          {values.type == "classified" && (
            <TabPane tabId="4">
              <VariationsTab values={values} setFieldValue={setFieldValue} errors={errors} updateId={updateId} />
            </TabPane>
          )}

          <TabPane tabId={values.type == "classified" ? "5" : "4"}>
            <DigitalTab values={values} setFieldValue={setFieldValue} errors={errors} updateId={updateId} />
          </TabPane>

          <TabPane tabId={values.type == "classified" ? "6" : "5"}>
            <SetupTab values={values} setFieldValue={setFieldValue} errors={errors} updateId={updateId} />
          </TabPane>
          <TabPane tabId={values.type == "classified" ? "7" : "6"}>
            <SeoTab values={values} setFieldValue={setFieldValue} updateId={updateId} />
          </TabPane>

          <TabPane tabId={values.type == "classified" ? "8" : "7"}>
            <OptionsTab values={values} setFieldValue={setFieldValue} updateId={updateId} />
          </TabPane>
        </TabContent>
      )}
      {values.product_type == "external" && (
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1" className="some">
            <GeneralTab values={values} setFieldValue={setFieldValue} updateId={updateId} />
          </TabPane>
          <TabPane tabId="2">
            <ProductImageTab values={values} setFieldValue={setFieldValue} errors={errors} updateId={updateId} />
          </TabPane>
          <TabPane tabId="3">
            <InventoryTab setErrors={setErrors} setTouched={setTouched} values={values} setFieldValue={setFieldValue} errors={errors} updateId={updateId} />
          </TabPane>

          <TabPane tabId="4">
            <SetupTab values={values} setFieldValue={setFieldValue} errors={errors} updateId={updateId} />
          </TabPane>
          <TabPane tabId="5">
            <SeoTab values={values} setFieldValue={setFieldValue} updateId={updateId} />
          </TabPane>

          <TabPane tabId="6">
            <OptionsTab values={values} setFieldValue={setFieldValue} updateId={updateId} />
          </TabPane>
        </TabContent>
      )}
    </Col>
  );
};

export default AllProductTabs;
