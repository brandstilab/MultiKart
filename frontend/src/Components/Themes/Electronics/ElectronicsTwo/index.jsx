import ImageLink from "@/Components/Widgets/ImageLink";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import Loader from "@/Layout/Loader";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import HomeBrand from "../../Widgets/HomeBrand";
import HomeProductTab from "../../Widgets/HomeProductTab";
import BrandIdsContext from "@/Context/BrandIdsContext";
import BlogIdsContext from "@/Context/BlogIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";

const ElectronicsTwo = () => {
  const { data, refetch, isLoading } = useCustomDataQuery({ params: "electronics_two" });
  const [offerBanners, setOfferBanners] = useState([]);
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { setGetBrandIds, isLoading: brandLoading } = useContext(BrandIdsContext);
  const { setGetBlogIds, isLoading: blogLoading } = useContext(BlogIdsContext);

  useEffect(() => {
    if (data?.products_ids?.length > 0) {
      setGetProductIds({ ids: Array.from(new Set(data?.products_ids))?.join(",") });
    }
    if (data?.brands?.brand_ids?.length > 0) {
      setGetBrandIds({ ids: Array.from(new Set(data?.brands?.brand_ids))?.join(",") });
    }
    // if (data?.featured_blogs?.blog_ids?.length > 0) {
    //   setGetBlogIds({ ids: Array.from(new Set(data?.featured_blogs?.blog_ids))?.join(",") });
    // }
  }, [data]);

  useEffect(() => {
    if (data?.offer_banner) {
      let banners = [];
      if (data?.offer_banner?.banner_1?.status) {
        banners = [...banners, data?.offer_banner?.banner_1];
      }
      if (data?.offer_banner?.banner_2?.status) {
        banners = [...banners, data?.offer_banner?.banner_2];
      }
      if (data?.offer_banner?.banner_3?.status) {
        banners = [...banners, data?.offer_banner?.banner_3];
      }
      setOfferBanners(banners);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [isLoading]);

  useEffect(() => {
    document.body.classList.add("home");
    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  useSkeletonLoader2([productLoad, blogLoading, brandLoading]);
  if (isLoading && document.body) return <Loader />;

  return (
    <>
      {/* Home Banners */}
      <Container className=" banner-slider">
        <Row className="g-sm-4 g-3">
          {data?.home_banner?.banner_1?.status && (
            <Col md="7">
              <div className="position-relative">
                <ImageLink homeBanner={true} imgUrl={data?.home_banner?.banner_1} height={792} width={792} />
                <div className="banner-skeleton">
                  <div className="skeleton-content">
                    <p className="card-text placeholder-glow row g-lg-3 g-0">
                      <span className="col-lg-7 col-9">
                        <span className="placeholder"></span>
                      </span>
                      <span className="col-lg-9 col-12">
                        <span className="placeholder"></span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          )}
          <Col md="5">
            <Row className=" home-banner g-sm-4 g-3">
              {data &&
                Object?.keys(data?.home_banner)
                  .map((item) => data?.home_banner[item])
                  .slice(1)
                  ?.map(
                    (banner, index) =>
                      banner?.status && (
                        <Col xs="12" key={index}>
                          <div className="position-relative">
                            <ImageLink imgUrl={banner} height={384} width={560} />
                            <div className="banner-skeleton">
                              <div className="skeleton-content">
                                <p className="card-text placeholder-glow row g-lg-3 g-0">
                                  <span className="col-lg-7 col-9">
                                    <span className="placeholder"></span>
                                  </span>
                                  <span className="col-lg-9 col-12">
                                    <span className="placeholder"></span>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </Col>
                      )
                  )}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Offer Banners */}
      <WrapperComponent classes={{ sectionClass: "banner-padding banner-section ratio2_1 ", fluidClass: "container", row: "g-sm-4 g-3" }} customCol={true}>
        {offerBanners?.map(
          (banner, index) =>
            banner?.status && (
              <div className={offerBanners?.length === 3 ? "col-md-4 col-sm-6" : offerBanners?.length === 2 ? "col-6" : "col-12"} key={index}>
                <div className="position-relative">
                  <ImageLink imgUrl={banner} bgImg={true} />
                </div>
              </div>
            )
        )}
      </WrapperComponent>

      {/* Category Products */}
      {data?.category_product?.status && (
        <WrapperComponent classes={{ sectionClass: "category-tab-section", fluidClass: "container" }}>
          <HomeProductTab categoryIds={data?.category_product?.category_ids} tab_title_class="tab-title2" style="vertical" />
        </WrapperComponent>
      )}

      {/* Brands */}
      {data?.brand?.status && (
        <section className="section-b-space blog-wo-bg">
          <HomeBrand brandIds={data?.brand?.brand_ids} />
        </section>
      )}
    </>
  );
};

export default ElectronicsTwo;
