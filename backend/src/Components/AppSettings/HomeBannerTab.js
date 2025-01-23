import { useState } from 'react';
import { RiArrowDownLine, RiCloseLine } from 'react-icons/ri';
import { Col, Row } from 'reactstrap';
import Btn from '@/Elements/Buttons/Btn';
import { getHelperText } from '@/Utils/CustomFunctions/getHelperText';
import { useTranslation } from "react-i18next";
import CommonRedirect from '../HomePages/CommonRedirect';
import CheckBoxField from '../InputFields/CheckBoxField';
import FileUploadField from '../InputFields/FileUploadField';

const HomeBannerTab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  
  const { t } = useTranslation( 'common');
  const [active, setActive] = useState();
  const removeBanners = (index) => {
    if (values['values']['home_banner']['banners'].length > 1) {
      let filterValue = values['values']['home_banner']['banners'].filter((item, i) => i !== index)
      setFieldValue("[values][home_banner][banners]", filterValue)
      filterValue?.forEach((elem, i) => {
        elem?.image_url && setFieldValue(`home_bannerImage${i}`, { original_url: elem?.image_url })
        elem?.redirect_link?.link_type && setFieldValue(`home_bannerRedirectLinkType${i}`, elem?.redirect_link?.link_type)
        elem?.redirect_link?.link && setFieldValue(`home_bannerRedirectLink${i}`, elem?.redirect_link?.link)
      })
    }
  }
  return (
    <>
      {<Btn className="btn-theme my-4" onClick={() => setFieldValue("[values][home_banner][banners]", [...values['values']['home_banner']['banners'], { title: "", description: "" }])} title="AddBanner" />}
      {
        values['values']?.['home_banner']?.['banners'].map((elem, index) => {
          return <Row className='align-items-center' key={index}>
            <Col xs="11">
              <div className='shipping-accordion-custom'>
                <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive((prev) => prev !== index && index)}>
                  {t("Banner") + " " + (index + 1)}<RiArrowDownLine />
                </div>
                {active == index && (
                  <div className="rule-edit-form">
                    <FileUploadField name={`home_bannerImage${index}`} title='Image' id={`home_bannerImage${index}`} type="file" values={values} setFieldValue={setFieldValue} showImage={values[`home_bannerImage${index}`]} helpertext={getHelperText('376x231px')} />
                    <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: `home_bannerRedirectLinkType${index}`, multipleNameKey: `home_bannerRedirectLink${index}` }} setSearch={setSearch} />
                    <CheckBoxField name={`[values][home_banner][banners][${index}][status]`} title="Status" />
                  </div>
                )}
              </div>
            </Col>
            <Col xs="1">
              <a className="h-100 w-100 cursor-pointer close-icon"
                onClick={() => removeBanners(index)}><RiCloseLine /></a>
            </Col>
          </Row>
        })
      }
    </>
  )
}

export default HomeBannerTab