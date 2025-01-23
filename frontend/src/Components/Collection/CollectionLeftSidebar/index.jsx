import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useContext, useEffect } from "react";
import CollectionSidebar from "../CollectionSidebar";
import MainCollection from "../MainCollection";

const CollectionLeftSidebar = ({ filter, setFilter, hideCategory, categorySlug }) => {
  const { setCollectionMobile } = useContext(ThemeOptionContext);

  useEffect(() => {
    setCollectionMobile(false);
  }, []);
  return (
    <WrapperComponent classes={{ sectionClass: "section-b-space collection-wrapper", fluidClass: "container" }} customCol={true}>
      <CollectionSidebar filter={filter} setFilter={setFilter} hideCategory={hideCategory} categorySlug={categorySlug}/>
      {!categorySlug && <MainCollection isBanner={true} filter={filter} setFilter={setFilter} />}
      {categorySlug && <MainCollection filter={filter} setFilter={setFilter} categorySlug={categorySlug} />}
    </WrapperComponent>
  );
};

export default CollectionLeftSidebar;
