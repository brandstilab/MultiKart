import { addDays } from "date-fns";
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { Col, Input, Label, Row } from "reactstrap";
import { dateFormate } from "../../../Utils/CustomFunctions/DateFormate";
import useOutsideDropdown from "../../../Utils/Hooks/CustomHooks/useOutsideDropdown";
import CheckBoxField from "../../InputFields/CheckBoxField";

import { useTranslation } from "react-i18next";

const ProductDateRangePicker = ({ values, setFieldValue }) => {
  const { t } = useTranslation("common");
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown();
  const [state, setState] = useState([
    {
      startDate: values["sale_starts_at"] ? values["sale_starts_at"] : null,
      endDate: values["sale_expired_at"] ? values["sale_expired_at"] : null,
      key: "selection",
    },
  ]);
  useEffect(() => {
    if (state[0].startDate == state[0].endDate) {
      const updateDate = state[0].startDate?  addDays(new Date(state[0].startDate), 1):null;
      setFieldValue("sale_starts_at", state[0].startDate);
      setFieldValue("sale_expired_at", updateDate);
    } else {
      setFieldValue("sale_starts_at", state[0].startDate);
      setFieldValue("sale_expired_at", state[0].endDate);
    }
  }, [state]);
  return (
    <>
      <CheckBoxField name="is_sale_enable" title="SaleStatus" />
      <div className="input-error" ref={ref}>
        <Row className="mb-4 align-items-center g-md-4 g-2">
          <Col sm={3}>
            <Label className="col-form-label form-label-title">{t("StartDate")}</Label>
          </Col>
          <Col sm={9} className="calender-box">
            <Input placeholder="YYYY-DD-MM" value={values["sale_starts_at"] == null ? values["sale_starts_at"] : dateFormate(values["sale_starts_at"], true)} readOnly onClick={() => setIsComponentVisible((prev) => (prev != "startDate" ? "startDate" : ""))} />
            <div className="rdrDateRangePickerWrapper">{isComponentVisible == "startDate" && <DateRange onChange={(item) => setState([item.selection])} showSelectionPreview={true} moveRangeOnFirstSelection={false} definedRangesWrapper={false} months={2} ranges={state} direction="horizontal" />}</div>
          </Col>
        </Row>
      </div>
      <div className="input-error">
        <Row className="mb-4 align-items-center g-md-4 g-2">
          <Col sm={3}>
            <Label className="col-form-label form-label-title">{t("EndDate")}</Label>
          </Col>
          <Col sm={9} className="calender-box">
            <Input placeholder="YYYY-DD-MM" value={values["sale_expired_at"] == null ? values["sale_expired_at"] : dateFormate(values["sale_expired_at"], true)} readOnly onClick={() => setIsComponentVisible((prev) => (prev != "endDate" ? "endDate" : ""))} />
            <div className="rdrDateRangePickerWrapper">{isComponentVisible == "endDate" && <DateRange onChange={(item) => setState([item.selection])} showSelectionPreview={true} moveRangeOnFirstSelection={false} definedRangesWrapper={false} months={2} ranges={state} direction="horizontal" />}</div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductDateRangePicker;
