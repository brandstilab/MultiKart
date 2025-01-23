import { Col, Row } from 'reactstrap';
import CheckBoxField from '../InputFields/CheckBoxField';
import SimpleInputField from '../InputFields/SimpleInputField';

import { useTranslation } from "react-i18next";

const ErrorPage = ({ values }) => {

  const { t } = useTranslation('common');
  return (
    <>
      <Row>
        <Col sm="12">
          <SimpleInputField
            nameList={[
              { name: '[options][error_page][error_page_content]', type: "textarea", title: "ErrorPageContent", placeholder: t("EnterErrorPageContent") }
            ]} />
          <CheckBoxField name="[options][error_page][back_button_enable]" title="BackButton" />
          {values['options']?.['error_page']?.['back_button_enable'] &&
            <SimpleInputField
              nameList={[
                { name: '[options][error_page][back_button_text]', title: "BackButtonText", placeholder: t("EnterButtonText") }
              ]} />
          }
        </Col>
      </Row>
    </>
  )
}

export default ErrorPage