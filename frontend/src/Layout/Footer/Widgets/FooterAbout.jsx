import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import React, { useContext } from "react";

const FooterAbout = () => {
  const { themeOption } = useContext(ThemeOptionContext);

  return <p>{themeOption?.footer?.footer_about}</p>;
};

export default FooterAbout;
