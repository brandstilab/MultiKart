
import { useTranslation } from "react-i18next";

import SimpleInputField from "../InputFields/SimpleInputField";

const PaypalTab = () => {
    
    const { t } = useTranslation( 'common');
    return (
        <SimpleInputField nameList={[
            { name: 'paypal_email', title: 'PaypalEmail', placeholder: t('EnterPaypalEmail') }
        ]} />
    )
}

export default PaypalTab