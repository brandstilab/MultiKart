"use client";
import ImageLink from "@/Components/Widgets/ImageLink";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { brandSlider4 } from "@/Data/SliderSetting";
import Loader from "@/Layout/Loader";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import HomeBrand from "../../Widgets/HomeBrand";
import HomeCategorySidebar from "../../Widgets/HomeCategorySidebar";
import HomeProduct from "../../Widgets/HomeProduct";
import HomeSlider from "../../Widgets/HomeSlider";
import HomeTitle from "../../Widgets/HomeTitle";
import NoDataFound from "@/Components/Widgets/NoDataFound";

const Fashion4 = ({ slug }) => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "fashion_four" });
  const [banners, setBanners] = useState([]);
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { isLoading: blogLoading } = useContext(BlogIdsContext);
  const { isLoading: brandLoading } = useContext(BrandIdsContext);

  useEffect(() => {
    if (data?.products_ids?.length > 0) {
      setGetProductIds({ ids: Array.from(new Set(data?.products_ids))?.join(",") });
    }
    if (data?.brands?.brand_ids?.length > 0) {
      setGetBrandIds({ ids: Array.from(new Set(data?.brands?.brand_ids))?.join(",") });
    }
    if (data?.offer_banner_1) {
      let banners = [];
      if (data?.offer_banner_1?.banner_1?.status) {
        banners = [...banners, data?.offer_banner_1?.banner_1];
      }
      if (data?.offer_banner_1?.banner_2?.status) {
        banners = [...banners, data?.offer_banner_1?.banner_2];
      }
      if (data?.offer_banner_1?.banner_3?.status) {
        banners = [...banners, data?.offer_banner_1?.banner_3];
      }
      setBanners(banners);
    }
  }, [data]);

  useEffect(() => {
    isLoading && refetch();
  }, [isLoading]);

  useEffect(() => {
    document.body.classList.add("home", "large-container", "demo-4");
    return () => {
      document.body.classList.remove("home", "large-container", "demo-4");
    };
  }, []);

  useSkeletonLoader2([productLoad, blogLoading, brandLoading]);
  if (isLoading && document.body) return <Loader />;
  // useSkeletonLoader(isLoading);

  return (
    <>
      {/* Home Banner */}
      <WrapperComponent classes={{ sectionClass: "small-slider pt-0 home-fashion mt-0", fluidClass: "container container-lg" }}>
        <div className="slider-animate home-slider">
          <HomeSlider bannerData={data?.home_banner} height={539} width={1539} />
        </div>
      </WrapperComponent>

      {/* Offer Banners */}
      <WrapperComponent classes={{ sectionClass: "banner-goggles banner-padding ratio2_1 banner-section", fluidClass: "container container-lg" }}>
        <Row className="g-sm-4 g-3">
          {banners.map(
            (banner, i) =>
              banner.status && (
                <div key={i} className={`${banners.length === 3 ? "col-md-4" : banners.length === 2 ? "col-md-6" : "col-12"}`}>
                  <div className="position-relative">
                    <ImageLink bgImg={true} imgUrl={banner} height={256} width={512} />
                    <div className="home-skeleton">
                      <div className="skeleton-content">
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-7 col-sm-8 col-11">
                              <p className="card-text placeholder-glow row g-lg-4 g-sm-3 g-2">
                                <span className="col-7">
                                  <span className="placeholder"></span>
                                </span>
                                <span className="col-9">
                                  <span className="placeholder"></span>
                                </span>
                                <span className="col-6">
                                  <span className="placeholder"></span>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </Row>
      </WrapperComponent>

      {/* Products Slider */}
      {data?.products_list?.status && (
        <WrapperComponent classes={{ sectionClass: "container section-b-space fashion-product-section" }} customCol={true}>
          <Col xs="12">
            <HomeTitle title={data?.products_list?.products} type="simple" />
          </Col>
          {data?.products_list?.categories?.status && (
            <Col xl="2" className="d-xl-inline-block d-none">
              <header className="left-header left-header-relative">
                <div className="metro">
                  <div className="main-menu">
                    <div className="menu-left">
                      <HomeCategorySidebar categoryIds={data?.products_list?.categories?.category_ids} style="vertical" />
                    </div>
                  </div>
                </div>
              </header>
            </Col>
          )}
          {data?.products_list?.products?.status && (
            <div className={data?.products_list?.categories?.status ? "col-xl-10" : "col-xl-12"}>
              <Container className=" p-0">
              {data?.products_list?.products?.product_ids?.length  ?    <HomeProduct productIds={data?.products_list?.products?.product_ids || []} slider={false} style="vertical" />  :<NoDataFound customClass={'no-data-added'} title={"NoProductFound"}/>}
              </Container>
            </div>
          )}
        </WrapperComponent>
      )}

      {/* Offer banner 2 */}
      <Container className="box-layout bg-image">
        {data?.offer_banner_2?.status && (
          <section className="pt-0">
            <ImageLink imgUrl={data?.offer_banner_2} height={1580} width={1580} />
          </section>
        )}

        {/* Brands */}
        {data?.brand?.status && (
          <section className="section-b-space">
            <HomeBrand brandIds={data?.brand?.brand_ids || []} sliderOptions={brandSlider4} />
          </section>
        )}
      </Container>
    </>
  );
};

export default Fashion4;
