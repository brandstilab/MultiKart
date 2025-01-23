import { addDays } from 'date-fns';
import { Col, Input, Label, Row } from "reactstrap";
import CheckBoxField from '../InputFields/CheckBoxField';
import FileUploadField from '../InputFields/FileUploadField';
import SimpleInputField from '../InputFields/SimpleInputField';
import { dateFormate } from '@/Utils/CustomFunctions/DateFormate';
import useOutsideDropdown from '@/Utils/Hooks/CustomHooks/useOutsideDropdown';
import { useEffect, useState } from 'react';
import { DateRange } from "react-date-range";
import { useTranslation } from "react-i18next";

const MaintenanceTab = ({ values, setFieldValue, errors }) => {

  const { t } = useTranslation('common');
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown();
  const [state, setState] = useState([{
    startDate: new Date(values['start_date']),
    endDate: addDays(new Date(values['end_date']), 1),
    key: 'selection'
  }
  ]);
  useEffect(() => {
    if (state[0].startDate == state[0].endDate) {
      const updateDate = addDays(new Date(state[0].startDate), 1)
      setFieldValue("start_date", state[0].startDate)
      setFieldValue("end_date", updateDate)
    } else {
      setFieldValue("start_date", state[0].startDate)
      setFieldValue("end_date", state[0].endDate)
    }
  }, [state])
  return (
    <>
      <CheckBoxField name="[values][maintenance][maintenance_mode]" title="MaintenanceMode" />
      <SimpleInputField nameList={[
        { name: "[values][maintenance][title]", title: "Title", placeholder: t("EnterTitle") },
        { name: "[values][maintenance][description]", title: "Description", placeholder: t("EnterDescription") }]} />
      <>
        <div className="input-error" ref={ref}>
          <Row className="mb-0 align-items-center">
            <Col sm={3}>
              <Label className="col-form-label form-label-title">{t("StartDate")}</Label>
            </Col>
            <Col sm={9} className='calender-box'>
              <Input value={dateFormate(values['start_date'], true)} readOnly onClick={() => setIsComponentVisible((prev) => (prev != "startDate" ? "startDate" : ""))} />
              <div className='rdrDateRangePickerWrapper'>
                {isComponentVisible == "startDate" && <DateRange
                  onChange={item => setState([item.selection])}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  definedRangesWrapper={false}
                  months={2}
                  ranges={state}
                  direction="horizontal"
                />}
              </div>
            </Col>
          </Row>
        </div>
        <div className="input-error">
          <Row className="mb-0 align-items-center">
            <Col sm={3}>
              <Label className="col-form-label form-label-title">{t("EndDate")}</Label>
            </Col>
            <Col sm={9} className='calender-box'>
              <Input placeholder="YYYY-DD-MM" value={dateFormate(values['end_date'], true)} readOnly onClick={() => setIsComponentVisible((prev) => (prev != "endDate" ? "endDate" : ""))} />
              <div className='rdrDateRangePickerWrapper'>
                {isComponentVisible == 'endDate' && <DateRange
                  onChange={item => setState([item.selection])}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  definedRangesWrapper={false}
                  months={2}
                  ranges={state}
                  direction="horizontal"
                />}
              </div>
            </Col>
          </Row>
        </div>
      </>
      <FileUploadField name="maintenance_image_id" uniquename={values?.values?.maintenance?.maintenance_image} title="LightLogo" errors={errors} id="maintenance_image_id" type="file" values={values} setFieldValue={setFieldValue} />
    </>
  )
}

export default MaintenanceTab