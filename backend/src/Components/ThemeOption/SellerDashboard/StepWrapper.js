
import SimpleInputField from "../../InputFields/SimpleInputField"

import { useTranslation } from "react-i18next";

const StepWrapper = ({ stepDetails }) => {
  
  const { t } = useTranslation( 'common');
  return (
    <div>
      <h4 className="fw-semibold mb-3 txt-primary w-100">{t(stepDetails?.title)}</h4>
      <SimpleInputField
        nameList={[
          { name: `[options][seller][steps][${stepDetails.value}][title]`, title: 'Title', placeholder: t('EnterTitle') },
          { name: `[options][seller][steps][${stepDetails.value}][description]`, type: "textarea", title: 'description', placeholder: t('EnterDescription') },
        ]}
      />
    </div>
  )
}

export default StepWrapper