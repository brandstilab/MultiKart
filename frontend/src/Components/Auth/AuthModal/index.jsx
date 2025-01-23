import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Btn from "@/Elements/Buttons/Btn";
import { Href } from "@/Utils/Constants";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiSmartphoneLine } from "react-icons/ri";
import { Modal, ModalBody } from "reactstrap";
import ForgotPasswordForm from "./ForgotPasswordForm";
import LoginForm from "./LoginForm";
import OTPVerificationForm from "./OTPVerificationForm";
import NumberLoginForm from "./PhnLogin/LoginForm";
import RegisterForm from "./RegisterForm";

const AuthModal = () => {
  const [state, setState] = useState("login");
  const [title, setTitle] = useState("Sign in");
  const { t } = useTranslation("common");
  const [logOrNew, setLogOrNew] = useState(false);
  const path = usePathname();
  const isAuthenticated = Cookies.get("uat");
  const { openAuthModal, setOpenAuthModal, themeOption } = useContext(ThemeOptionContext);
  const router = useRouter();

  const handleClick = () => {
    setState(state == "login" ? "register" : "login");
    setLogOrNew(!logOrNew);
  };

  const protectedRoutes = [`/account/dashboard`, `/account/notifications`, `/account/wallet`, `/account/bank-details`, `/account/point`, `/account/refund`, `/account/order`, `/account/addresses`, `/wishlist`, `/compare`];

  // useEffect(() => {
  //   if (protectedRoutes.includes(path) && !isAuthenticated) {
  //     router.push('/')
  //     ToastNotification("error", "Unauthenticated");
  //     setOpenAuthModal(true);
  //   }
  // }, [path]);

  useEffect(() => {
    if (state == "forgot") {
      setTitle("ForgotPassword");
    } else if (state == "otp") {
      setTitle("Otp");
    } else if (state == "register") {
      setTitle("CreateAccount");
    } else if (state == "number") {
      setTitle("LoginWithNumber");
    } else {
      setTitle("SignIn");
    }
  }, [state]);

  return (
    <Modal toggle={() => setOpenAuthModal(false)} className="auth-modal modal-dialog-centered d-block modal-xl fade show" isOpen={openAuthModal}>
      <div className="modal-dialog ">
        <div className="modal-content">
          <ModalBody>
            <div className="modal-content open">
              <div className="d-flex">
                <div className="right-content w-lg-50 w-100">
                  <div>
                    <div className="auth-title">
                      <h3>{t(title)}</h3>
                      <p>{state == "otp" ? t("OtpDescription") : state == "number" ? t("NumberLoginDescription") : t("AuthModalDescription")}</p>
                    </div>
                    {state == "register" && <RegisterForm />}
                    {state == "login" && <LoginForm setState={setState} />}
                    {state == "forgot" && <ForgotPasswordForm setState={setState} />}
                    {state == "otp" && <OTPVerificationForm setState={setState} />}
                    {state == "number" && <NumberLoginForm setState={setState} />}
                    {state !== "forgot" && state !== "otp" && (
                      <>
                        <div className="divider">
                          <span>{t("OR")}</span>
                        </div>
                        <p className="create">
                          {state == "login" ? t("Don'thaveanaccount") : t("Alreadyhaveanaccount")} ?{" "}
                          <a href={Href} onClick={handleClick}>
                            {logOrNew ? t("Login") : t("Register")} {t("Here")}
                          </a>
                        </p>
                        {state == "login" && (
                          <Btn color="transparent" className="number-btn" onClick={() => setState("number")}>
                            <RiSmartphoneLine />
                            {t("LoginWithNumber")}
                          </Btn>
                        )}
                      </>
                    )}
                  </div>
                </div>
                <div className="left-img w-lg-50 d-lg-block d-none">{/* <Ima  ge height={1920} width={1920} src={themeOption?.popup?.auth?.image_url ? storageURL + themeOption?.popup?.auth?.image_url : ` ${ImagePath}/placeholder/auth.png`} alt="login" /> */}</div>
              </div>
            </div>
          </ModalBody>
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;
