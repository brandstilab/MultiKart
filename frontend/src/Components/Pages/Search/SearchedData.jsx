import NoDataFound from "@/Components/Widgets/NoDataFound";
import ProductBox from "@/Components/Widgets/ProductBox";
import ProductSkeleton from "@/Components/Widgets/SkeletonLoader/ProductSkeleton";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { Col, Row } from "reactstrap";

const SearchedData = ({ data,fetchStatus }) => {
  const { themeOption } = useContext(ThemeOptionContext);
  const [mainProducts, setMainProducts] = useState([]);
  const param = useSearchParams();
  const searchParam = param.get("search");
  // const {
  //   data: productData,
  //   refetch,
  //   isLoading,
  // } = useQuery([ProductAPI, "search"], () => request({ url: ProductAPI, params: { search: searchParam } }), {
  //   enabled: false,
  //   refetchOnWindowFocus: false,
  //   select: (data) => data.data.data,
  // });

  useEffect(() => {
    if (searchParam) {
      setMainProducts(data);
    } else {
      setMainProducts(data?.slice(0, 12));
    }
  }, [searchParam,data]);

  return (
    <WrapperComponent classes={{ sectionClass: "section-b-space", fluidClass: "container" }} noRowCol={true}>
      {fetchStatus == "fetching" ? (
        <Row className="search-product">
          {new Array(8).fill(null).map((_, i) => (
            <Col xl="3" md="2" xs="6" key={i}>
              <ProductSkeleton />
            </Col>
          ))}
          <ProductSkeleton />
        </Row>
      ) : data?.length > 0 ? (
        <Row className="search-product">
          {mainProducts?.map((product, i) => (
            <Col xl="3" md="2" xs="6" key={i}>
              <ProductBox product={product} style="vertical" />
            </Col>
          ))}
        </Row>
      ) : (
        <NoDataFound imageUrl={`/assets/svg/empty-items.svg`} customClass="collection-no-data no-data-added" title="productsNoFound" description="productsNoFoundDescription" height="300" width="300" u />
      )}
    </WrapperComponent>
  );
};

export default SearchedData;
