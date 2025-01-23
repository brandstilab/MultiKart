import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

const FilterBtn = () => {
  const { t } = useTranslation("common");
  const { openOffCanvas, setOpenOffCanvas } = useContext(ThemeOptionContext);
  return (
    <div className="search-count">
      <h5 className="filter-bottom-title" onClick={() => setOpenOffCanvas(!openOffCanvas)}>
        {t("FilterPanel")}
      </h5>
      
    </div>
  );
};

export default FilterBtn;
