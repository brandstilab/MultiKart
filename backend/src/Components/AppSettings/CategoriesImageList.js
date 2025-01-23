
import { useTranslation } from "react-i18next";
import CheckBoxField from '../InputFields/CheckBoxField';
import MultiSelectField from '../InputFields/MultiSelectField';
import SimpleInputField from '../InputFields/SimpleInputField';

const CategoriesImageList = ({ values, setFieldValue, categoryData }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <SimpleInputField nameList={[{ name: `[values][categories_list][title]`, placeholder: t("EnterTitle"), title: "Title" },]} />
            <MultiSelectField values={values} setFieldValue={setFieldValue} name='categoryIconList' title="Categories" data={categoryData} />
            <CheckBoxField name={`[values][categories_list][status]`} title="Status" />
        </>
    )
}

export default CategoriesImageList