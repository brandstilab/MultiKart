import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import MainCollection from "../MainCollection";

const CollectionSidebarPopUp = ({ filter, setFilter }) => {
  return (
    <WrapperComponent classes={{ sectionClass: "section-b-space collection-wrapper", fluidClass: "container" }} customCol={true}>
      <MainCollection isBanner={true} filter={filter} setFilter={setFilter} sidebarPopUp={true} noSidebar={true} initialGrid={4}/>
    </WrapperComponent>
  );
};

export default CollectionSidebarPopUp;
