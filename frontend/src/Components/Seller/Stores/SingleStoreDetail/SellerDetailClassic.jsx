import CollectionSidebar from "@/Components/Collection/CollectionSidebar";
import MainCollection from "@/Components/Collection/MainCollection";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import SellerClassicCard from "./SellerClassicCard";

const SellerDetailClassic = ({ filter, setFilter, StoreData }) => {
  return (
    <>
      {StoreData?.store_cover ? (
        <div className="vendor-cover">
          <div className="bg-size" style={{ backgroundImage: `url(${StoreData?.store_cover?.original_url})` }}></div>
        </div>
      ) : null}
      <SellerClassicCard StoreData={StoreData} />
      <WrapperComponent classes={{ sectionClass: "section-b-space", fluidClass: "container" }} customCol={true}>
        <CollectionSidebar filter={filter} setFilter={setFilter} isAttributes={false} />
        <MainCollection filter={filter} setFilter={setFilter} noPagination noSort/>
      </WrapperComponent>
    </>
  );
};

export default SellerDetailClassic;
