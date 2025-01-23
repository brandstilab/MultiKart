import Btn from "@/Elements/Buttons/Btn";
import { Href } from "@/Utils/Constants";
import { obscureEmail } from "@/Utils/CustomFunctions/EmailFormates";
import useOtpVerification from "@/Utils/Hooks/useOtpVerification";
import { Form, Formik } from "formik";
import Cookies from "js-cookie";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "reactstrap";

const OTPVerificationForm = ({ setState }) => {
  const countryCode = Cookies.get("uc");
  const mobileNumber = Cookies.get("up");
  const email = Cookies.get("ue");
  const [otp, setOtp] = useState("");
  const { t } = useTranslation("common");
  const { mutate: otpVerification } = useOtpVerification(setState);
  const handleChange = (e) => {
    if (e.target.value.length <= 5 && !isNaN(Number(e.target.value))) {
      setOtp(e.target.value);
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={(values) => otp && otp.length === 5 && otpVerification({ country_code: countryCode, phone: mobileNumber, token: otp })}
      >
        {() => (
          <Form className="auth-form-box">
            <div className="log-in-title">
              <h5>
                {t("CodeSend") + " "}
                <span>{mobileNumber||obscureEmail(email)}</span>
              </h5>
            </div>
            <div className="auth-box mb-3 outer-otp">
              <div className="inner-otp" id="otp">
                <Input type="text" className="no-background" maxLength="5" onChange={handleChange} value={otp} />
              </div>
            </div>
            <Btn type="submit" title={"Verify"} />
            <a onClick={() => setState("forgot")} href={Href} className="modal-back">
              <i className="ri-arrow-left-line"></i>
            </a>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default OTPVerificationForm;
