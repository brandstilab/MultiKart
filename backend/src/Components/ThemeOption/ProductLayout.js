import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Row } from "reactstrap";
import { SettingProductBoxOptions, SettingProductLayoutOptions } from "../../Data/TabTitleListData";
import { getHelperText } from "../../Utils/CustomFunctions/getHelperText";
import CheckBoxField from "../InputFields/CheckBoxField";
import FileUploadField from "../InputFields/FileUploadField";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import SimpleInputField from "../InputFields/SimpleInputField";
import DescriptionInput from "../Widgets/DescriptionInput";

const ProductLayout = ({ values, setFieldValue }) => {
  const { t } = useTranslation("common");
  useEffect(() => {
    setFieldValue("[options][product][product_box_variant]", values?.options?.product?.product_box_variant ? values?.options?.product?.product_box_variant : "basic");
  }, []);
  const handleClick = (val) => {
    setFieldValue("[options][product][product_layout]", val.value);
  };
  useEffect(() => {
    if (values["options"]["product"]?.["product_box_bg"]) {
      setFieldValue("[options][product][image_bg]", false);
      setFieldValue("[options][product][full_border]", false);
    }
  }, [values["options"]["product"]?.["product_box_bg"]]);
  useEffect(() => {
    if (values["options"]["product"]?.["image_bg"]) {
      setFieldValue("[options][product][product_box_bg]", false);
      setFieldValue("[options][product][full_border]", false);
    }
  }, [values["options"]["product"]?.["image_bg"]]);
  useEffect(() => {
    if (values["options"]["product"]?.["product_box_border"]) {
      setFieldValue("[options][product][full_border]", false);
    }
  }, [values["options"]["product"]?.["product_box_border"]]);
  useEffect(() => {
    if (values["options"]["product"]?.["full_border"]) {
      setFieldValue("[options][product][product_box_bg]", false);
      setFieldValue("[options][product][product_box_border]", false);
      setFieldValue("[options][product][image_bg]", false);
    }
  }, [values["options"]["product"]?.["full_border"]]);

  return (
    <>
      <SearchableSelectInput
        nameList={[
          {
            name: "[options][product][product_layout]",
            title: "ProductPageLayout",
            inputprops: {
              name: "[options][product][product_layout]",
              id: "[options][product][product_layout]",
              options: SettingProductLayoutOptions,
              defaultOption: "Select Product Box Style",
            },
          },
        ]}
      />
      <SearchableSelectInput
        nameList={[
          {
            name: "[options][product][product_box_variant]",
            title: "LayoutVariation",
            inputprops: {
              name: "[options][product][product_box_variant]",
              id: "[options][product][product_box_variant]",
              options: SettingProductBoxOptions,
              defaultOption: "Select Product Box Style",
            },
          },
        ]}
      />
      <SearchableSelectInput
        nameList={[
          {
            name: "[options][product][image_variant]",
            title: "ImageVariation",
            inputprops: {
              name: "[options][product][image_variant]",
              id: "[options][product][image_variant]",
              options: [
                { id: "image_thumbnail", name: "ImageThumbnail" },
                { id: "image_slider", name: "ImageSlider" },
                { id: "image_flip", name: "ImageFlip" },
                { id: "image_zoom", name: "ImageZoom" },
              ],
              defaultOption: "Select Image Variation",
            },
          },
        ]}
      />

      <Row className="mt-5 align-items-center g-2">
        <CheckBoxField name="[options][product][is_trending_product]" title="TrendingProduct" helpertext="*Enabling this will showcase the product in the sidebar of the product page as a trending item." />

        <CheckBoxField name="[options][product][safe_checkout]" title="SafeCheckout" helpertext="*A safe checkout image will appear on the product page." />
        <FileUploadField name="safe_checkout_image" title="SafeCheckoutImage" id="safe_checkout_image" showImage={values["safe_checkout_image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("50x50px")} />

        <CheckBoxField name="[options][product][secure_checkout]" title="SecureCheckout" helpertext="*A secure checkout image will appear on the product page." />
        <FileUploadField name="secure_checkout_image" title="SecureCheckoutImage" id="secure_checkout_image" showImage={values["secure_checkout_image"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("50x50px")} />

        <CheckBoxField name="[options][product][encourage_order]" title="EncourageOrder" helpertext="*A random order count between 1 and 100 will be displayed to motivate user purchases." />
        <SimpleInputField
          nameList={[
            {
              name: "[options][product][encourage_max_order_count]",
              title: "EncourageMaxOrderCount",
              max: "100",
              min: "0",
              type: "number",
              helpertext: "*Specify a number between 1 and 10 to encourage orders.",
            },
          ]}
        />
        <CheckBoxField name="[options][product][encourage_view]" title="EncourageView" helpertext="*This feature encourages users to view products by presenting engaging content or prompts." />
        <SimpleInputField
          nameList={[
            {
              name: "[options][product][encourage_max_view_count]",
              title: "EncourageMaxViewCount",
              max: "100",
              min: "0",
              type: "number",
              helpertext: "*Specify a number between 1 and 10 to encourage product view.",
            },
          ]}
        />
        <CheckBoxField name="[options][product][sticky_checkout]" title="StickyCheckout" helpertext="*Enable to make the Add to Cart and checkout options sticky at the bottom of the product page." />
        <CheckBoxField name="[options][product][sticky_product]" title="StickyProduct" helpertext="*Enable to showcase random products at the bottom of the website." />
        <CheckBoxField name="[options][product][social_share]" title="SocialShare" helpertext="*Enable this option to allow users to share the product on social media platforms." />
        <DescriptionInput values={values} setFieldValue={setFieldValue} title={"ShippingAndReturn"} nameKey="[options][product][shipping_and_return]" helpertext="*This area contains the shipping and return policies. A minimum of 500 characters is recommended for effective communication." />
      </Row>
    </>
  );
};

export default ProductLayout;
