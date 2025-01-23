import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { mediaConfig } from "@/Data/MediaConfig";
import Btn from "@/Elements/Buttons/Btn";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDownLine, RiCloseLine } from "react-icons/ri";
import { Col, Row } from "reactstrap";

const ParallaxBannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  const [active, setActive] = useState();
  const removeBanners = (index) => {
    if (values["content"]["parallax_banner"]["banners"].length > 1) {
      let filterValue = values["content"]["parallax_banner"]["banners"].filter((item, i) => i !== index);
      setFieldValue("[content][parallax_banner][banners]", filterValue);
      filterValue?.forEach((elem, i) => {
        elem?.image_url && setFieldValue(`homeBannerImage${i}`, { original_url: elem?.image_url });
        elem?.redirect_link?.link_type && setFieldValue(`homeRedirectLinkType${i}`, elem?.redirect_link?.link_type);
        elem?.redirect_link?.link && setFieldValue(`homeRedirectLink${i}`, elem?.redirect_link?.link);
      });
    }
  };
  return (
    <>
      {<Btn className="btn-theme my-4" onClick={() => setFieldValue("[content][parallax_banner][banners]", [...values["content"]?.["parallax_banner"]["banners"], { title: "", description: "" }])} title="AddBanner" />}
      {values["content"]?.["parallax_banner"]?.["banners"]?.map((elem, index) => {
        return (
          <Row className="align-items-center" key={index}>
            <Col xs="11">
              <div className="shipping-accordion-custom">
                <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive((prev) => prev !== index && index)}>
                  {t("Banner") + " " + (index + 1)}
                  <RiArrowDownLine />
                </div>
                {active == index && (
                  <div className="rule-edit-form">
                    <SimpleInputField
                      nameList={[
                        { name: `[content][parallax_banner][banners][${index}][main_title]`, placeholder: t("EnterMainTitle"), title: "MainTitle" },
                        { name: `[content][parallax_banner][banners][${index}][title]`, placeholder: t("EnterTitle"), title: "Title" },
                        { name: `[content][parallax_banner][banners][${index}][sub_title]`, placeholder: t("EnterSubTitle"), title: "SubTitle" },
                      ]}
                    />
                    <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name={`parallaxBannerImage${index}`} title="Image" id={`parallaxBannerImage${index}`} type="file" values={values} setFieldValue={setFieldValue} showImage={values[`parallaxBannerImage${index}`]} helpertext={getHelperText("376x231px")} />
                    <CheckBoxField name={`[content][parallax_banner][banners][${index}][status]`} title="Status" />
                  </div>
                )}
              </div>
            </Col>
            <Col xs="1">
              <a className="h-100 w-100 cursor-pointer close-icon" onClick={() => removeBanners(index)}>
                <RiCloseLine />
              </a>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default ParallaxBannerTab;
