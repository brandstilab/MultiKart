import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import MainCollection from "../MainCollection";
import LeftCategory from "./LeftCategory";

const LayoutSidebar = ({ filter, setFilter }) => {
  return (
    <WrapperComponent classes={{ sectionClass: "section-b-space collection-wrapper", fluidClass: "container" }} customCol={true}>
      <LeftCategory filter={filter} setFilter={setFilter} />
      <MainCollection filter={filter} setFilter={setFilter} />
    </WrapperComponent>
  );
};

export default LayoutSidebar;
