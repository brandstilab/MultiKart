import CheckBoxField from '@/Components/InputFields/CheckBoxField';
import FileUploadField from '@/Components/InputFields/FileUploadField';
import SimpleInputField from '@/Components/InputFields/SimpleInputField';
import { getHelperText } from '@/Utils/CustomFunctions/getHelperText';
import { useTranslation } from "react-i18next";

const ExitModal = ({values ,setFieldValue}) => {
  
  const { t } = useTranslation( 'common');

  return (
    <>
      <CheckBoxField name="[options][popup][exit][is_enable]" title="Status" />
      <SimpleInputField
        nameList={[
          { name: "[options][popup][exit][title]", title: "Tittle", placeholder: t("Tittle") },
          { name: "[options][popup][exit][sub_title]", title: "SubTitle", placeholder: t("EnterSubTitle") },
          { name: "[options][popup][exit][description]", title: "Description", placeholder: t("Description") },
      ]} />
      <FileUploadField name="exitImage" title='Image' id="exitImage" showImage={values['exitImage']} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText('90x90px')} />
    </>
  )
}

export default ExitModal