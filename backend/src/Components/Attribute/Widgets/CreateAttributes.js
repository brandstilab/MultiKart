import SimpleInputField from '../../InputFields/SimpleInputField'
import SearchableSelectInput from '../../InputFields/SearchableSelectInput'
import { variantStyle } from '../../../Data/TabTitleListData'
import { useTranslation } from "react-i18next";

const CreateAttributes = () => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <SimpleInputField nameList={[{ name: "name", placeholder: t("EnterAttributeName"), require: "true" }]} />
            <SearchableSelectInput
                nameList={[
                    {
                        name: "style",
                        title: "Style",
                        require: "true",
                        inputprops: {
                            name: "style",
                            id: "style",
                            options: variantStyle,
                            helpertext: "*Choose the desired shape style, such as rectangle or circle. Based on your selection, variant options will be displayed on product page."
                        },
                    },
                ]}
            />
        </>
    )
}

export default CreateAttributes