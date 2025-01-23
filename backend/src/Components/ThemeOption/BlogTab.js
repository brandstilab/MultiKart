import Image from 'next/image';
import { useTranslation } from "react-i18next";
import { Input, Label, Row } from 'reactstrap';
import { BlogStyleOption, BlogTypeOption } from '../../Data/TabTitleListData';
import CheckBoxField from '../InputFields/CheckBoxField';

const BlogTab = ({ values, setFieldValue }) => {
  
  const { t } = useTranslation( 'common');
  const handleClick = (setValueTo, val) => {
    setFieldValue(setValueTo, val.value)
  }
  return (
    <>
      <div className='selection-layout mb-4 radio-type-sec'>
        <h4 className='fw-semibold'>{t("BlogStyle")}</h4>
        <Row xxl={4} xl={3} lg={2} md={3} xs={2} className='g-4 w-100'>
          {BlogStyleOption.map((elem, i) => (
            <div key={i} onClick={() => handleClick("[options][blog][blog_style]", elem)}>
              <div className="selection-box text-center">
                <Input name='product' type="radio" id={elem.id} checked={values['options']?.['blog']?.['blog_style'] == elem.value ? true : false} />
                <Label htmlFor={elem.id}>
                  <div>
                    <Image src={elem.img} className="img-fluid" alt="" width={165} height={100} />
                  </div>
                  <h4 className="mt-2">{t(elem.title)}</h4>
                </Label>
              </div>
            </div>
          ))}
        </Row>
      </div>
      <div className='selection-layout mb-4 radio-type-sec'>
        <h4 className='fw-semibold w-100'>{t("BlogSidebarType")}</h4>
        <Row xxl={4} xl={3} lg={2} md={3} xs={2} className='g-4 w-100'>
          {BlogTypeOption.map((elem, i) => (
            <div key={i} onClick={() => handleClick("[options][blog][blog_sidebar_type]", elem)}>
              <div className="selection-box text-center">
                <Input name='blog' type="radio" id={elem.id} checked={values['options']?.['blog']?.['blog_sidebar_type'] == elem.value ? true : false} />
                <Label htmlFor={elem.id}>
                  <div>
                    <Image src={elem.img} className="img-fluid" alt="" width={165} height={100} />
                  </div>
                  <h4 className="mt-2">{t(elem.title)}</h4>
                </Label>
              </div>
            </div>
          ))}
        </Row>
      </div>
      <CheckBoxField name="[options][blog][blog_author_enable]" title="BlogAuthor" />
      <CheckBoxField name="[options][blog][read_more_enable]" title="ReadMoreLink" />
    </>
  )
}

export default BlogTab