import { Col, Row } from 'reactstrap'
import { getHelperText } from '../../Utils/CustomFunctions/getHelperText'
import CheckBoxField from '../InputFields/CheckBoxField'
import FileUploadField from '../InputFields/FileUploadField'
import SearchableSelectInput from '../InputFields/SearchableSelectInput'
import SimpleInputField from '../InputFields/SimpleInputField'
import { useTranslation } from "react-i18next"

const GeneralTab = ({ values, setFieldValue, errors }) => {
  const { t } = useTranslation('common');
  return (
    <>
      <Row>
        <Col sm="12">
          <FileUploadField name="header_logo_id" uniquename={values?.options?.logo?.header_logo} title={"HeaderLogo"} errors={errors} id="header_logo_id" type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText('180x50px')} />

          <FileUploadField errors={errors} name="footer_logo_id" id="footer_logo_id" uniquename={values?.options?.logo?.footer_logo} title={"FooterLogo"} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText('180x50px')} />

          <FileUploadField errors={errors} name="favicon_icon_id" title={"FaviconIcon"} id="favicon_icon_id" type="file" values={values} setFieldValue={setFieldValue} uniquename={values?.options?.logo?.favicon_icon} helpertext={getHelperText('16x16px')} />
          <SimpleInputField
            nameList={[
              { name: "[options][general][site_title]", title: "SiteTitle", placeholder: t("EnterSiteTitle") },
              { name: "[options][general][site_tagline]", title: "SiteTagline", placeholder: t("EnterSiteTagline") },
            ]} />
          <SimpleInputField
            nameList={[
              { name: "[options][general][primary_color]", title: "PrimaryColor", type: "color" },
              { name: "[options][general][secondary_color]", title: "SecondaryColor", type: "color" },
            ]} />
          <CheckBoxField name="[options][general][back_to_top_enable]" title="BacktoTop" />
          <CheckBoxField name="[options][general][sticky_cart_enable]" title="StickyCart" />
          <SearchableSelectInput
            nameList={[
              {
                name: "[options][general][cart_style]",
                title: "CartStyle",
                inputprops: {
                  name: "[options][general][cart_style]",
                  id: "[options][general][cart_style]",
                  options: [
                    { id: "cart_sidebar", name: "Cart Sidebar" },
                    { id: "cart_mini", name: "Cart Mini" },
                  ],
                  defaultOption: "Select Cart Style",
                },
              },
              {
                name: "[options][general][language_direction]",
                title: "LanguageDirection",
                inputprops: {
                  name: "[options][general][language_direction]",
                  id: "[options][general][language_direction]",
                  options: [
                    { id: "ltr", name: "LTR" },
                    { id: "rtl", name: "RTL" },
                  ],
                  defaultOption: "Select Language Direction",
                },
              },
              {
                name: "[options][general][mode]",
                title: "SelectMode",
                inputprops: {
                  name: "[options][general][mode]",
                  id: "[options][general][mode]",
                  options: [
                    { id: "light", name: "Light" },
                    { id: "dark", name: "Dark" },
                  ],
                  defaultOption: "Select Mode",
                },
              },

            ]}
          />
          <SimpleInputField nameList={[{ name: "[options][general][seller_register_url]", title: "seller_register_url", placeholder: t("Enterseller_register_url") },]} />
          <CheckBoxField name="[options][general][celebration_effect]" title="CelebrationEffect" />
          <CheckBoxField name="[options][general][exit_tagline_enable]" title="ExitTabTagline" />
          {values?.options?.general?.taglines?.map((val, index) =>
            <SimpleInputField key={index} nameList={[{ name: `[options][general][taglines][${index}]`, title: `Tag Line ${index + 1}`, placeholder: t("EnterTagLine") },]} />
          )}
        </Col>
      </Row>
    </>
  )
}

export default GeneralTab