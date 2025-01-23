import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const AboutUsText = () => {
  const { t } = useTranslation("common");
  const { themeOption } = useContext(ThemeOptionContext);

  return (
      <div className="mt-4">
        <h3>{themeOption?.about_us?.about?.title}</h3>
        <p>{themeOption?.about_us?.about?.description}</p>
      </div>
  );
};

export default AboutUsText;
