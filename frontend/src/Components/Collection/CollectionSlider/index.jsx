import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import { useContext, useEffect } from "react";
import CollectionSidebar from "../CollectionSidebar";
import MainCollection from "../MainCollection";
import CollectionSlider from "./CollectionSlider";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { Container } from "reactstrap";

const MainCollectionSlider = ({ filter, setFilter }) => {
  const { setCollectionMobile } = useContext(ThemeOptionContext);
  useEffect(() => {
    setCollectionMobile(false);
  }, []);

  return (
    <>
      <Container>
        <CollectionSlider filter={filter} setFilter={setFilter} />
      </Container>
      <WrapperComponent classes={{ sectionClass: "section-b-space", fluidClass: "container" }} customCol={true}>
        <CollectionSidebar filter={filter} setFilter={setFilter} />
        <MainCollection filter={filter} setFilter={setFilter} />
      </WrapperComponent>
    </>
  );
};

export default MainCollectionSlider;
