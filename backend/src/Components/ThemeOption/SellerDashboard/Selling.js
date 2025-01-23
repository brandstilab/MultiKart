
import SimpleInputField from "../../InputFields/SimpleInputField";
import CheckBoxField from "../../InputFields/CheckBoxField";

import { useTranslation } from "react-i18next";

const Selling = () => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <CheckBoxField name="[options][seller][start_selling][status]" title="status" />
            <SimpleInputField
                nameList={[
                    { name: `[options][seller][start_selling][title]`, title: 'Title', placeholder: t('EnterTitle') },
                    { name: `[options][seller][start_selling][description]`, type: "textarea", rows: 6, title: 'description', placeholder: t('EnterDescription') },
                ]}
            />
        </>
    )
}

export default Selling