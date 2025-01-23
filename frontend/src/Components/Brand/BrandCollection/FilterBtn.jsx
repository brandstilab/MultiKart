import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Btn from "@/Elements/Buttons/Btn";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { RiFilter2Fill } from "react-icons/ri";
import { Button } from "reactstrap";

const FilterBtn = ({ isOffcanvas }) => {
  const { t } = useTranslation("common");
  const { openOffCanvas, setOpenOffCanvas } = useContext(ThemeOptionContext);
  return (
    <>
      {isOffcanvas && (
        <Btn className="filter-main-btn" onClick={() => setOpenOffCanvas(!openOffCanvas)}>
          <RiFilter2Fill /> {t("FilterMenu")}
        </Btn>
      )}
    </>
  );
};

export default FilterBtn;
