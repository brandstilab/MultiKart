import { addDays } from 'date-fns';
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { Col, Input, Label, Row } from "reactstrap";
import { dateFormate } from "../../../Utils/CustomFunctions/DateFormate";
import useOutsideDropdown from "../../../Utils/Hooks/CustomHooks/useOutsideDropdown";
import CheckBoxField from "../../InputFields/CheckBoxField";
import SearchableSelectInput from "../../InputFields/SearchableSelectInput";
import SimpleInputField from "../../InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const GeneralTabContent = ({ values, setFieldValue }) => {

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
      <SimpleInputField nameList={[{ name: "title", require: "true", placeholder: t("EnterTitle") }, { name: "description", require: "true", placeholder: t("EnterDescription") }, { name: "code", require: "true", placeholder: t("EnterCode") }]} />
      <SearchableSelectInput
        nameList={[
          {
            name: "type",
            title: "Type",
            require: "true",
            inputprops: {
              name: "type",
              id: "type",
              options: [
                { id: "free_shipping", name: "Free Shipping" },
                { id: "fixed", name: "Fixed" },
                { id: "percentage", name: "Percentage" },
              ],
            },
          },
        ]}
      />
      {values["type"] !== "free_shipping" && <SimpleInputField nameList={[{ name: "amount", type: "number", require: "true", inputaddon: "true", placeholder: t("EnterAmount") }]} />}
      <CheckBoxField name="is_expired" title="IsExpired" />
      {values["is_expired"] && (
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
      )}
      <CheckBoxField name="is_first_order" title="IsFirstOrder" />
      <CheckBoxField name="status" />
    </>
  );
};

export default GeneralTabContent;
