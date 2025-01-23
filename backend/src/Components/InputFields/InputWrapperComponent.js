import { useTranslation } from "react-i18next";
import { Col, Label, Row } from "reactstrap";
import NameConversion from "../../Utils/CustomFunctions/NameConversion";

const InputWrapperComponent = (props) => {
  const { t } = useTranslation("common");
  return (
    <div className="input-error">
      <div className={`${props.removeExtraSpace !== "true" ? "mb-4" : ""} ${props.nolabel == "true" ? "form-floating" : "align-items-center row"}`}>
        {props.nolabel !== "true" && (
          <Col sm="3">
            <Label className="col-form-label form-label-title">
              {t(NameConversion(props.name))}
              {props.require == "true" && <span className="theme-color ms-2 required-dot">*</span>}
            </Label>
          </Col>
        )}
        {props.nolabel !== "true" ? (
          <Col sm="9" className={props.classes ? props.classes : ""}>
            {props.isremovefield ? (
              <Row>
                <Col sm="10">{props.children}</Col>
                {props.values["value"].length > 1 && (
                  <Col sm="2" xs="3" className="mt-0 ps-sm-2 ps-0 attribute-remove">
                    <a className="h-100 w-100 cursor-pointer text-danger" onClick={() => props.isremovefield.remove(props.keys)}>
                      {t("Remove")}
                    </a>
                  </Col>
                )}
              </Row>
            ) : (
              <>{props.children}</>
            )}
          </Col>
        ) : (
          props.children
        )}
      </div>
    </div>
  );
};

export default InputWrapperComponent;
