import { useContext, useEffect, useState } from "react";
import CollectionProducts from "./CollectionProducts";
import FilterSort from "./FilterSort";
import GridBox from "./GridBox";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useCustomSearchParams } from "@/Utils/Hooks/useCustomSearchParams";
import { useTranslation } from "react-i18next";
import { RiFilterFill } from "react-icons/ri";
import { Button, Col } from "reactstrap";
import FilterBtn from "./FilterBtn";
import FilterPaginate from "@/Components/Collection/MainCollection/FilterPaginate";
import Btn from "@/Elements/Buttons/Btn";
import CollectionSidebar from "@/Components/Collection/CollectionSidebar";

const BrandCollection = ({ filter, setFilter, isBanner, isOffcanvas, classicStoreCard, sidebarPopUp, initialGrid = 4, noSidebar, sellerClass }) => {
  const [grid, setGrid] = useState(initialGrid);
  const { themeOption, setCollectionMobile } = useContext(ThemeOptionContext);

  const { t } = useTranslation("common");
  const [layout] = useCustomSearchParams(["layout"]);

  useEffect(() => {
    if (layout?.layout == "collection_2_grid") {
      setGrid(2);
    } else if (layout?.layout == "collection_3_grid") {
      setGrid(3);
    } else if (layout?.layout == "collection_4_grid") {
      setGrid(4);
    } else if (layout?.layout == "collection_5_grid") {
      setGrid(5);
    } else if (layout?.layout == "collection_list_view") {
      setGrid("list");
    }
  }, [layout]);
  return (
    <Col className={`${sellerClass ? sellerClass : `col-sm-${isOffcanvas || noSidebar ? "12" : "9"}`}`}>
      <div className="collection-product-wrapper">
        <div className="product-top-filter">
          {/* {!isOffcanvas && !sidebarPopUp && (
            <Btn color="transparent" className="filter-main-btn " onClick={() => setCollectionMobile(true)}>
              <RiFilterFill /> {t("Filter")}
            </Btn>
          )} */}

          <div className={`${sidebarPopUp ? "popup-filter" : "product-filter-content"}`}>
            {isOffcanvas && <FilterBtn />}
            <FilterSort filter={filter} setFilter={setFilter} />
            <FilterPaginate filter={filter} setFilter={setFilter} />
            <GridBox grid={grid} setGrid={setGrid} />
          </div>
        </div>
        {isOffcanvas && <CollectionSidebar sellerClass={"top-filter filter-bottom-content"} filter={filter} setFilter={setFilter} isOffcanvas={true} />}

        <CollectionProducts filter={filter} grid={grid} setFilter={setFilter} />
      </div>
    </Col>
  );
};

export default BrandCollection;
