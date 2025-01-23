import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import CollectionSidebar from "../CollectionSidebar";
import MainCollection from "../MainCollection";

const CollectionInfiniteScroll = ({ filter, setFilter }) => {
  return (
    <WrapperComponent classes={{ sectionClass: "section-b-space collection-wrapper", fluidClass: "container" }} customCol={true}>
      <CollectionSidebar filter={filter} setFilter={setFilter} />
      <MainCollection infiniteScroll={true} isBanner={true} filter={filter} setFilter={setFilter} />
    </WrapperComponent>
  );
};

export default CollectionInfiniteScroll;
