import ListProductBox from "@/Components/Collection/MainCollection/ListProductBox";
import NoDataFound from "@/Components/Widgets/NoDataFound";
import Pagination from "@/Components/Widgets/Pagination";
import ProductBox from "@/Components/Widgets/ProductBox";
import ProductSkeleton from "@/Components/Widgets/SkeletonLoader/ProductSkeleton";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import request from "@/Utils/AxiosUtils";
import { ProductAPI } from "@/Utils/AxiosUtils/API";
import { ImagePath } from "@/Utils/Constants";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { Col, Row } from "reactstrap";

const CollectionProducts = ({ filter, grid }) => {
  const { themeOption } = useContext(ThemeOptionContext);
  const { slug } = useParams();
  const [page, setPage] = useState(1);
  const router = useRouter();
  const [adjustGrid, setAdjustGrid] = useState("col-6 col-xl-3");
  

  useEffect(() => {
    if (grid == 2) {
      setAdjustGrid("col-6");
    } else if (grid == 3) {
      setAdjustGrid("col-6 col-lg-4");
    } else if (grid == 4) {
      setAdjustGrid("col-6 col-xl-3");
    } else if (grid == "list") {
      setAdjustGrid("col-6 col-sm-12");
    }
  }, [grid]);

  const { data, fetchStatus } = useQuery(
    ["collectionProducts",filter],
    () =>
      request(
        {
          url: ProductAPI,
          params: {
            ...filter,
            page,
            status: 1,
            brand: slug ? slug : null,
          },
        },
      ),
    {
      enabled: true,
      refetchOnWindowFocus: false,
      select: (data) => data.data,
    }
  );

  useEffect(() => {
    window.scroll(0, 0);
  },[page])

  return (
    <>
      {fetchStatus == "fetching" ? (
        <Row className={`g-sm-4 g-3 product-list-section ${grid == "list" ? "list-style" : grid == 4 ? "row-cols-xl-4" : grid == 5 ? "row-cols-xl-4 row-cols-xxl-5" : ""}`} xs={2} md={3}>
          {new Array(40).fill(null).map((_, i) => (
            <Col className={adjustGrid} key={i}>
              <ProductSkeleton />
            </Col>
          ))}
          <ProductSkeleton />
        </Row>
      ) : data?.data?.length > 0 ? (
        <div className={` ${themeOption?.product?.full_border ? "full_border" : ""} ${grid == "list" ? "product-wrapper-grid list-view" : ""} ${themeOption?.product?.image_bg ? "product_img_bg" : ""} ${themeOption?.product?.product_box_bg ? "full_bg" : ""} ${themeOption?.product?.product_box_border ? "product_border" : ""} `}>
          <Row className={`g-sm-4 g-3 product-list-section`}>
            {data?.data?.map((product, i) => (
              <Col key={i} className={adjustGrid}>
                <ListProductBox product={product} className="boxClass" style="vertical" />
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <NoDataFound imageUrl={`/assets/svg/empty-items.svg`} customClass="no-data-added collection-no-data" title="Sorry! Couldn't find the products you were looking For!" description="Please check if you have misspelt something or try searching with other way." height={345} width={345} />
      )}

      {data?.data?.length > 0 && (
        <div className="product-pagination">
          <div className="theme-pagination-block">
            <nav className="custome-pagination">
              <Pagination current_page={data?.current_page} total={data?.total} per_page={data?.per_page} setPage={setPage} />
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default CollectionProducts;
