import SimpleInputField from "../../InputFields/SimpleInputField"
import FileUploadField from "../../InputFields/FileUploadField";
import CheckBoxField from "../../InputFields/CheckBoxField";
import { getHelperText } from "../../../Utils/CustomFunctions/getHelperText";


import { useTranslation } from "react-i18next";

const AboutSeller = ({ values, setFieldValue, errors }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <CheckBoxField name="[options][seller][about][status]" title="status" />
            <SimpleInputField
                nameList={[
                    { name: '[options][seller][about][title]', title: 'Title', placeholder: t('EnterTitle') },
                    { name: '[options][seller][about][description]', title: 'description', type: "textarea", placeholder: t('EnterDescription'), rows: 8 },
                ]}
            />
            <FileUploadField name="aboutSellerImage" title='Image' id="aboutSellerImage" showImage={values['aboutSellerImage']} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText('512x438px')} />
        </>
    )
}

export default AboutSeller