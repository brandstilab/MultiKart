import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { horizontalProductSlider } from "@/Data/SliderSetting";
import Loader from "@/Layout/Loader";
import { ImagePath } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import HomeBlog from "../../Widgets/HomeBlog";
import HomeBrand from "../../Widgets/HomeBrand";
import HomeCategorySidebar from "../../Widgets/HomeCategorySidebar";
import HomeProduct from "../../Widgets/HomeProduct";
import HomeProductTab from "../../Widgets/HomeProductTab";
import HomeSlider from "../../Widgets/HomeSlider";

const MarketplaceThree = () => {
  const { data, refetch, isLoading } = useCustomDataQuery({ params: "marketplace_three" });
  const [offerBanners, setOfferBanners] = useState([]);
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { setGetBrandIds, isLoading: brandLoading } = useContext(BrandIdsContext);
  const { isLoading: blogLoading } = useContext(BlogIdsContext);

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
    if (data?.products_ids?.length > 0) {
      setGetProductIds({ ids: Array.from(new Set(data?.products_ids))?.join(",") });
    }
    if (data?.brands?.brand_ids?.length > 0) {
      setGetBrandIds({ ids: Array.from(new Set(data?.brands?.brand_ids))?.join(",") });
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
      {/* Home Banner */}
      <Container>
        <WrapperComponent classes={{ sectionClass: "small-section pb-0 pt-res-0", fluidClass: "home-slider" }}>
          <HomeSlider bannerData={data?.home_banner} height={531} width={1376} />
        </WrapperComponent>
      </Container>

      {/* Offer Banner */}
      {offerBanners?.length && (
        <WrapperComponent classes={{ sectionClass: "banner-padding banner-section ratio2_1", fluidClass: "container", row: "g-md-4 g-2" }} customCol={true}>
          {offerBanners?.map(
            (banner, index) =>
              banner?.status && (
                <div key={index} className={offerBanners.length === 3 ? "col-md-4 col-6" : offerBanners.length === 2 ? "col-6" : "col-12"}>
                  <div className="position-relative">
                    <ImageLink imgUrl={banner} bgImg={true} />
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
                </div>
              )
          )}
        </WrapperComponent>
      )}

      {/* Category Products */}
      {data?.categories_products?.status && (
        <WrapperComponent classes={{ sectionClass: "small-section pb-0", fluidClass: "collection-wrapper container" }} customCol={true}>
          <Col xl="3" className=" collection-filter">
            <div className="sticky-top-section">
              {data?.categories_products?.left_panel?.categories?.status && (
                <div className="sidenav marketplace-sidebar svg-icon-menu wo-bg">
                  <nav>
                    <HomeCategorySidebar categoryIds={data?.categories_products?.left_panel?.categories?.category_ids || []} style="vertical" />
                  </nav>
                </div>
              )}
              <div className="d-xl-block d-none">
                {data?.categories_products?.left_panel?.products_list?.status && (
                  <div className="theme-card demo-card">
                    <h5 className="title-border">{data?.categories_products?.left_panel?.products_list?.title}</h5>
                    <div className="offer-slider ">
                      <HomeProduct productIds={data?.categories_products?.left_panel?.products_list?.product_ids || []} style="horizontal" />
                    </div>
                  </div>
                )}
                {data?.categories_products?.left_panel?.banner?.status && (
                  <div className="collection-sidebar-banner">
                    <ImageLink imgUrl={data?.categories_products?.left_panel?.banner} height={489} width={326} />
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col xl="9" className="collection-content p-0-xl">
            <div className="page-main-content">
              {data?.categories_products?.right_panel?.products_list?.status && (
                <div className="ratio_115">
                  <Container>
                    <Row>
                      <Col xs="12">
                        <TitleBox title={data?.categories_products?.right_panel?.products_list} type="icon" textWhite={true} />
                        <div className="">
                          <HomeProduct productIds={data?.categories_products?.right_panel?.products_list?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider}></HomeProduct>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              )}

              <div className="pb-0 ratio2_1 small-section">
                <Container>
                  <Row className="g-sm-4 g-3">
                    {data?.categories_products?.right_panel?.offer_banner?.banner_1?.status && (
                      <div className={data?.categories_products?.right_panel?.offer_banner?.banner_1?.status ? "col-6" : "col-12"}>
                        <ImageLink imgUrl={data?.categories_products?.right_panel?.offer_banner?.banner_1} placeholder={`${ImagePath}/two_column_banner.png`} bgImg={true} />
                      </div>
                    )}
                    {data?.categories_products?.right_panel?.offer_banner?.banner_2?.status && (
                      <div className={data?.categories_products?.right_panel?.offer_banner?.banner_2?.status ? "col-6" : "col-12"}>
                        <ImageLink imgUrl={data?.categories_products?.right_panel?.offer_banner?.banner_2} placeholder={`${ImagePath}/two_column_banner.png`} bgImg={true} />
                      </div>
                    )}
                  </Row>
                </Container>
              </div>

              {data?.categories_products?.right_panel?.category_product?.status && (
                <div className="ratio_115 bg-title small-section pb-0 wo-bg">
                  <div className="container">
                    <HomeProductTab categoryIds={data?.categories_products?.right_panel?.category_product?.category_ids} style="vertical" tabStyle="simple" title={data?.categories_products?.right_panel?.category_product} />
                  </div>
                </div>
              )}
            </div>
          </Col>
        </WrapperComponent>
      )}

      {/* Featured Blogs */}
      {data?.featured_blogs?.status && (
        <WrapperComponent classes={{ sectionClass: "blog ratio2_3 left-blog section-b-space overflow-hidden", fluidClass: "container" }} colProps={{ md: "12" }}>
          <HomeBlog blogIds={data?.featured_blogs?.blog_ids || []} />
        </WrapperComponent>
      )}

      {/* Brand */}
      {data?.brand?.status && (
        <section className="section-b-space bg-light">
          <HomeBrand brandIds={data?.brand?.brand_ids || []} />
        </section>
      )}
    </>
  );
};

export default MarketplaceThree;
