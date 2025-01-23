import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import CollectionSidebar from "../CollectionSidebar";

const PopUpSidebar = ({ filter, setFilter }) => {
  const { t } = useTranslation("common");
  const { setCollectionMobile, collectionMobile } = useContext(ThemeOptionContext);
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    if (window.innerWidth < 992) {
      setCollectionMobile(!collectionMobile); // Toggle directly
    } else {
      setToggle(!toggle);
    }
  };

  return (
    <div className="sidebar-popup">
      <h5 className="filter-panel-title" onClick={handleClick}>
        {t("FilterPanel")}
      </h5>
      <div className={`open-popup ${toggle || collectionMobile ? "open" : ""}`}>
        <CollectionSidebar filter={filter} setFilter={setFilter} />
      </div>
    </div>
  );
};

export default PopUpSidebar;
