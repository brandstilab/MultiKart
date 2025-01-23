import React from "react";
import { Col, Label, Row } from "reactstrap";
import { Field } from "formik";
import NameConversion from "../../Utils/CustomFunctions/NameConversion";

import { useTranslation } from "react-i18next";

import { ReactstrapInput } from "../ReactstrapFormik";

const NewInput = ({ nameList, ...rest }) => {

  const { t } = useTranslation("common");

  return (
    <>
      {nameList.map(({ name, notitle, require, nolabel, ...fieldProps }, i) => (
        <div className="input-error" key={i}>
          <div className={`mb-4 ${notitle ? "form-floating" : "align-items-center row"}`}>
            {!notitle && (
              <Col sm="3">
                <Label className="col-form-label form-label-title">
                  {t(NameConversion(name))}
                  {require && <span className="theme-color ms-2 required-dot">*</span>}
                </Label>
              </Col>
            )}
            <Col sm="9" {...(notitle ? { className: "form-floating" } : {})}>
              <Field
                type="text"
                name={name}
                id={name}
                {...fieldProps}
                component={ReactstrapInput}
              />
            </Col>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewInput;
