import { useTranslation } from "react-i18next";
import CheckBoxField from '../InputFields/CheckBoxField';
import SearchableSelectInput from '../InputFields/SearchableSelectInput';
import SimpleInputField from '../InputFields/SimpleInputField';

const AppSettingsProductListTab = ({ nameKey, productData, description, customName, setSearch }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <SimpleInputField nameList={[{ name: `[values][${nameKey}][title]`, placeholder: t("EnterTitle"), title: "Title" }]} />
             {description && <SimpleInputField nameList={[{ name: `[values][${nameKey}][description]`, placeholder: t("EnterDescription"), title: "Description" }]} />}
            {
                productData && <SearchableSelectInput
                nameList={
                        [{
                            name: customName ? customName : 'productListProductIds',
                            title: "Products",
                            inputprops: {
                                name: customName ? customName : 'productListProductIds',
                                id: customName ? customName : 'productListProductIds',
                                options: productData || [],
                                setsearch: setSearch,
                            }
                        },
                        ]}
                />
            }
        <CheckBoxField name={`[values][${nameKey}][status]`} title="Status" />
        </>
    )
}

export default AppSettingsProductListTab