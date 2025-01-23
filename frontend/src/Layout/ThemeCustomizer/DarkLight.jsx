import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const DarkLight = () => {
  const [isDark, setIsDark] = useState(false);
  const { t } = useTranslation("common");
  const { themeOption } = useContext(ThemeOptionContext);

  useEffect(() => {
    setIsDark(themeOption?.general?.mode === "dark");
  }, [themeOption]);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    return () => {
      document.body.classList.remove("dark");
    };
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="setting-section">
      <div className="setting-inner-title">
        <h5>{t("DarkMode")}</h5>
        <p>{t("SwitchBetweenLightAndDarkMode")}</p>
      </div>
      <div className="form-check form-switch">
        <input type="checkbox" checked={isDark ? true : false} role="switch" id="darkmode" className="form-check-input " onChange={toggleDarkMode} />
      </div>
    </div>
  );
};

export default DarkLight;
