import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const DirectionLayout = () => {
  const { t } = useTranslation("common");
  const [isRTL, setIsRTL] = useState(false);
  const { themeOption } = useContext(ThemeOptionContext);

  useEffect(() => {
    setIsRTL(themeOption?.general?.language_direction === "rtl");
  }, [themeOption]);

  useEffect(() => {
    if (isRTL) {
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
    }
    return () => {
      document.body.classList.remove("rtl");
    };
  }, [isRTL]);

  const toggleRTL = () => {
    setIsRTL(!isRTL);
  };

  return (
    <div className="setting-section">
      <div className="setting-inner-title">
        <h5>{t("RTLMode")} </h5>
        <p>{t("ChangeLanguageDirection")}</p>
      </div>
      <div className="form-check form-switch">
        <input checked={isRTL ? true : false} type="checkbox" role="switch" id="rtlmode" className="form-check-input" onChange={toggleRTL} />
      </div>
    </div>
  );
};

export default DirectionLayout;
