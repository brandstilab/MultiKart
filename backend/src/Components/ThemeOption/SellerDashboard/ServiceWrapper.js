

import SimpleInputField from "../../InputFields/SimpleInputField"
import FileUploadField from "../../InputFields/FileUploadField";
import { getHelperText } from "../../../Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";

const ServiceWrapper = ({ values, serviceName, setFieldValue }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <div>
                <h4 className="fw-semibold mb-3 txt-primary w-100">{t(serviceName?.title)}</h4>
                <SimpleInputField
                    nameList={[
                        { name: `[options][seller][services][${serviceName.value}][title]`, title: 'Title', placeholder: t('EnterTitle') },
                        { name: `[options][seller][services][${serviceName.value}][description]`, type: "textarea", title: 'description', placeholder: t('EnterDescription') },
                    ]}
                />
                <FileUploadField name={serviceName?.imageName} title='Image' id={serviceName?.imageName} showImage={values[serviceName?.imageName]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText('90x90px')} />
            </div>
        </>
    )
}

export default ServiceWrapper