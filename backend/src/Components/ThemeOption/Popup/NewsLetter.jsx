import CheckBoxField from '@/Components/InputFields/CheckBoxField';
import FileUploadField from '@/Components/InputFields/FileUploadField';
import SimpleInputField from '@/Components/InputFields/SimpleInputField';
import { getHelperText } from '@/Utils/CustomFunctions/getHelperText';
import { useTranslation } from "react-i18next";

const NewsLetter = ({values ,setFieldValue}) => {
  
  const { t } = useTranslation( 'common');

  return (
    <>
      <CheckBoxField name="[options][popup][news_letter][is_enable]" title="Status" />
      <SimpleInputField
             nameList={[
               { name: "[options][popup][news_letter][offer]", title: "Offer", placeholder: t("Offer"), },
               { name: "[options][popup][news_letter][title]", title: "Title", placeholder: t("Title") },
               { name: "[options][popup][news_letter][description]", title: "Description", placeholder: t("Description") },
             ]} />
      <FileUploadField name="newsLetterImage" title='Image' id="newsLetterImage" showImage={values['newsLetterImage']} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText('90x90px')} />
    </>
  )
}

export default NewsLetter