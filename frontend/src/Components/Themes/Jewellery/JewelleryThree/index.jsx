"use client";
import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { brandSlider3, horizontalProductSlider, instagramSlider5 } from "@/Data/SliderSetting";
import Loader from "@/Layout/Loader";
import { ImagePath } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import HomeBlog from "../../Widgets/HomeBlog";
import HomeBrand from "../../Widgets/HomeBrand";
import HomeProduct from "../../Widgets/HomeProduct";
import HomeProductTab from "../../Widgets/HomeProductTab";
import HomeServices from "../../Widgets/HomeService";
import HomeSlider from "../../Widgets/HomeSlider";
import HomeSocialMedia from "../../Widgets/HomeSocialMedia";

const JewelleryThree = ({ slug }) => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "jewellery_three" });
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { isLoading: blogLoading } = useContext(BlogIdsContext);
  const { isLoading: brandLoading, setGetBrandIds } = useContext(BrandIdsContext);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    if (data?.products_ids?.length > 0) {
      setGetProductIds({ ids: Array.from(new Set(data?.products_ids))?.join(",") });
    }
    if (data?.brands?.brand_ids?.length > 0) {
      setGetBrandIds({ ids: Array.from(new Set(data?.brands?.brand_ids))?.join(",") });
    }

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
    setBanners(banners);
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
      <WrapperComponent classes={{ sectionClass: "p-0 position-relative overflow-hidden", fluidClass: "home-slider" }} noRowCol={true}>
        <HomeSlider bannerData={data?.home_banner} height={724} width={1835} />
      </WrapperComponent>

      {/* Services */}
      {data?.services && (
        <WrapperComponent classes={{ sectionClass: `tools-service  service-style-border`, fluidClass: "container border-section border-top-0 section-b-space" }} noRowCol={true}>
          <HomeServices services={data?.services?.banners} />
        </WrapperComponent>
      )}

      {/* Offer Banners */}
      <WrapperComponent classes={{ sectionClass: "ratio2_1 banner-section", fluidClass: "container", row: "g-3 g-sm-4" }} customCol={true}>
        {banners?.map(
          (banner, index) =>
            banner?.status && (
              <div className={banners?.length === 3 ? "col-md-4 col-6" : banners?.length === 2 ? "col-6" : "col-12"} key={index}>
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

      {/* Products List 1 */}
      {data?.products_list?.status && (
        <>
          <TitleBox title={data?.products_list} type="simple" />
          <WrapperComponent classes={{ sectionClass: "pt-0 section-b-space", fluidClass: "container" }} noRowCol={true}>
            <HomeProduct style="vertical" productIds={data?.products_list?.product_ids || []} sliderOptions={horizontalProductSlider} slider={true} />
          </WrapperComponent>
        </>
      )}

      {/* Full Banner */}
      {data?.full_banner?.status && (
        <section className="p-0 banner-sale">
          <ImageLink imgUrl={data?.full_banner} placeholder={`${ImagePath}/full_column_banner.png`} height={850} width={1835} />
        </section>
      )}

      {/* Category Products */}
      {data?.category_product?.status && (
        <WrapperComponent classes={{ sectionClass: `pt-0`, fluidClass: "container" }}>
          <TitleBox title={data?.category_product} type="simple" />
          <HomeProductTab dynamic={true} categoryIds={data?.category_product?.category_ids} style="vertical" slider={true} sliderOptions={horizontalProductSlider} />
        </WrapperComponent>
      )}

      {/* Center Banner And Products */}
      {data?.product_banner?.status && (
        <WrapperComponent classes={{ sectionClass: "section-b-space", fluidClass: "container", row: "row g-sm-4 g-3" }} customCol={true}>
          {data?.product_banner?.left_panel?.status && (
            <div className={`${data?.product_banner?.center_panel?.status ? "col-lg-4" : "col-lg-6"}`}>
              <div className="theme-card card-border">
                <h5 className="title-border">{data?.product_banner?.left_panel?.title}</h5>
                <div className="offer-slider ">
                  <HomeProduct productIds={data?.product_banner?.left_panel?.product_ids || []} style="horizontal"></HomeProduct>
                </div>
              </div>
            </div>
          )}

          {data?.product_banner?.center_panel?.status && (
            <Col lg="4" className="center-slider border-0 ratio_125">
              <Row>
                <Col md="12">
                  <ImageLink imgUrl={data?.product_banner?.center_panel} height={533} width={442} />
                </Col>
              </Row>
            </Col>
          )}

          {data?.product_banner?.right_panel?.status && (
            <div className={`${data?.product_banner?.center_panel?.status ? "col-lg-4" : "col-lg-6"}`}>
              <div className="theme-card card-border">
                <h5 className="title-border">{data?.product_banner?.right_panel?.title}</h5>
                <div className="offer-slider ">
                  <HomeProduct productIds={data?.product_banner?.right_panel?.product_ids || []} style="horizontal" />
                </div>
              </div>
            </div>
          )}
        </WrapperComponent>
      )}

      {/* Featured Blogs */}
      {data?.featured_blogs?.status && (
        <>
          <WrapperComponent classes={{ sectionClass: "blog ratio2_3 left-blog pt-0 section-b-space bg-light", fluidClass: "container" }} colProps={{ md: "12" }}>
            <TitleBox title={data?.featured_blogs} type="simple" />
            <HomeBlog blogIds={data?.featured_blogs?.blog_ids || []} />
          </WrapperComponent>
        </>
      )}

      {/* Social Media */}
      {data?.social_media?.banners?.length && data?.social_media?.status && (
        <WrapperComponent classes={{ sectionClass: "instagram ratio_square" }} noRowCol={true}>
          <HomeSocialMedia sliderOptions={instagramSlider5} media={data?.social_media || []} classes="container" type="borderless" />
        </WrapperComponent>
      )}

      {/* Brands */}
      {data?.brand?.status && (
        <section className="section-b-space blog-wo-bg">
          <HomeBrand sliderOptions={brandSlider3} brandIds={data?.brand?.brand_ids || []} />
        </section>
      )}
    </>
  );
};

export default JewelleryThree;
