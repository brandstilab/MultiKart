import { ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import CkEditorComponent from '../InputFields/CkEditorComponent';
import { useTranslation } from "react-i18next";

const DescriptionInput = ({ values, setFieldValue, nameKey, errorMessage, title, helpertext }) => {

    const { t } = useTranslation('common');
    const [editorLoaded, setEditorLoaded] = useState(false);
    useEffect(() => {
        setEditorLoaded(true);
    }, []);
    return (
        <>
            <div className="input-error">
                <Row className="mb-4 align-items-center g-md-4 g-2">
                    <Col sm={3}>
                        <span className="col-form-label form-label-title form-label">{t(title)} {errorMessage && <span className='theme-color ms-2 required-dot'>*</span>}</span>
                    </Col>
                    <Col sm={9}>
                        <CkEditorComponent name={nameKey} onChange={(data) => {
                            setFieldValue(nameKey, data)
                        }} errorMessage={errorMessage} values={values} value={values[nameKey]} editorLoaded={editorLoaded}
                        />
                        {helpertext && <p className='help-text'>{helpertext}</p>}
                    </Col>
                </Row>

            </div>
        </>
    )
}

export default DescriptionInput