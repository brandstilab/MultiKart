import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiCloseFill, RiSoundModuleLine } from "react-icons/ri";
import { Accordion } from "reactstrap";
import AdminPanel from "./AdminPanel";
import DarkLight from "./DarkLight";
import Demos from "./Demos";
import DirectionLayout from "./DirectionLayout";
import ProductBoxes from "./ProductBoxes";

const ThemeCustomizer = () => {
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const { t } = useTranslation("common");
  const [open, setOpen] = useState("1");
  const params = useSearchParams();
  const theme = params.get("theme");

  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  useEffect(() => {
    setIsCustomizerOpen(false);
  }, [theme]);

  return (
    <>
      <div className="theme-settings" onClick={() => setIsCustomizerOpen(true)}>
        <RiSoundModuleLine />
        {t("Customize")}
      </div>
      <div className="scroll-setting-box">
        <div id="demo-box" className={`setting-box ${isCustomizerOpen ? "open-setting" : ""}`}>
          <div className="overlay" onClick={() => setIsCustomizerOpen(false)} />
          <div className="setting_box_body">
            <div className="setting-title">
              <h4>{t("ThemeSetting")}</h4>
              <div className="close-icon" onClick={() => setIsCustomizerOpen(false)}>
                <RiCloseFill />
              </div>
            </div>
            <div className="setting-body">
              <Accordion open={open} toggle={toggle}>
                <Demos />
                <ProductBoxes />
                <DirectionLayout />
                <DarkLight />
                <AdminPanel />
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeCustomizer;
