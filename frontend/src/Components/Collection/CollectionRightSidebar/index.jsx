import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import React, { useContext, useEffect } from "react";
import CollectionSidebar from "../CollectionSidebar";
import MainCollection from "../MainCollection";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";

const CollectionRightSidebar = ({ filter, setFilter }) => {
  const { setCollectionMobile } = useContext(ThemeOptionContext);
  useEffect(() => {
    setCollectionMobile(false);
  }, []);

  return (
    <WrapperComponent classes={{ sectionClass: "section-b-space shop-section", fluidClass: "container" }} customCol={true}>
      <MainCollection isBanner={true} filter={filter} setFilter={setFilter} />
      <CollectionSidebar filter={filter} setFilter={setFilter} rightSideClass="right-box" />
    </WrapperComponent>
  );
};

export default CollectionRightSidebar;
