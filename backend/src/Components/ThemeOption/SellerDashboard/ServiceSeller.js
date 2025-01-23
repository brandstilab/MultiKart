import SimpleInputField from "../../InputFields/SimpleInputField"
import ServiceWrapper from "./ServiceWrapper";
import CheckBoxField from "../../InputFields/CheckBoxField";


import { useTranslation } from "react-i18next";

const ServiceSeller = ({ values, errors, setFieldValue }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <CheckBoxField name="[options][seller][services][status]" title="status" />
            <SimpleInputField nameList={[{ name: '[options][seller][services][title]', title: 'Title', placeholder: t('EnterTitle') }]} />
            <ServiceWrapper values={values} errors={errors} serviceName={{ value: "service_1", title: "ServiceBox1", imageName: "serviceImage1" }} setFieldValue={setFieldValue} />
            <ServiceWrapper values={values} errors={errors} serviceName={{ value: "service_2", title: "ServiceBox2", imageName: "serviceImage2" }} setFieldValue={setFieldValue} />
            <ServiceWrapper values={values} errors={errors} serviceName={{ value: "service_3", title: "ServiceBox3", imageName: "serviceImage3" }} setFieldValue={setFieldValue} />
            <ServiceWrapper values={values} errors={errors} serviceName={{ value: "service_4", title: "ServiceBox4", imageName: "serviceImage4" }} setFieldValue={setFieldValue} />
        </>
    )
}

export default ServiceSeller