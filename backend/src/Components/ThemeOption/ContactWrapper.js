import { useTranslation } from "react-i18next";
import SimpleInputField from '../InputFields/SimpleInputField';

const ContactWrapper = ({ contactDetails }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <div>
            <h4 className="fw-semibold mb-3 txt-primary w-100">{t(contactDetails?.title)}</h4>
            <SimpleInputField
                nameList={[
                    { name: `[options][contact_us][${contactDetails.value}][label]`, title: 'Label', placeholder: t('EnterLabel') },
                    { name: `[options][contact_us][${contactDetails.value}][icon]`, title: 'Icon', placeholder: t('EnterIcon') },
                    { name: `[options][contact_us][${contactDetails.value}][text]`, title: 'Text', placeholder: t('EnterText') },
                ]}
            />
        </div>
    )
}

export default ContactWrapper