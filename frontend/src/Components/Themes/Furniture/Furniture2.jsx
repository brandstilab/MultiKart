"use client";
import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { brandSlider4, categorySlider5, horizontalProductSlider, horizontalProductSlider5 } from "@/Data/SliderSetting";
import Btn from "@/Elements/Buttons/Btn";
import Loader from "@/Layout/Loader";
import { Href, storageURL } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import HomeBrand from "../Widgets/HomeBrand";
import HomeCategorySidebar from "../Widgets/HomeCategorySidebar";
import HomeProduct from "../Widgets/HomeProduct";
import HomeSlider from "../Widgets/HomeSlider";
import HomeSocialMedia from "../Widgets/HomeSocialMedia";

const Furniture2 = ({ slug }) => {
  const [banners, setBanners] = useState([]);
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { setGetBlogIds, isLoading: blogLoading } = useContext(BlogIdsContext);
  const { setGetBrandIds, isLoading: brandLoading } = useContext(BrandIdsContext);
  const videoType = ["mp4", "webm", "ogg"];
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "furniture_two" });

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
    const bannersArray = [];
    if (data?.offer_banner?.banner_1?.status) {
      bannersArray.push(data?.offer_banner?.banner_1);
    }
    if (data?.offer_banner?.banner_2?.status) {
      bannersArray.push(data?.offer_banner?.banner_2);
    }
    if (data?.offer_banner?.banner_3?.status) {
      bannersArray.push(data?.offer_banner?.banner_3);
    }
    setBanners(bannersArray);

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
    isLoading && refetch();
  }, [isLoading]);

  useEffect(() => {
    document.body.classList.add("home", "header-style-light");
    return () => {
      document.body.classList.remove("home", "header-style-light");
    };
  }, []);

  useSkeletonLoader2([productLoad, blogLoading, brandLoading]);
  if (isLoading && document.body) return <Loader />;

  return (
    <>
      {/* Home Banners */}
      <WrapperComponent classes={{ sectionClass: "p-0 overflow-hidden" }}>
        <div className="slide-1 home-slider">
          <HomeSlider bannerData={data?.home_banner} height={650} width={1920} />
        </div>
      </WrapperComponent>

      {/* Offer Banners  */}
      <WrapperComponent classes={{ sectionClass: "banner-padding banner-section absolute-banner pb-0 ratio2_1", fluidClass: "container overflow-hidden absolute-bg" }} customCol={true}>
        {banners.map(
          (banner, i) =>
            banner?.status && (
              <div key={i} className={`${banners.length === 3 ? "col-md-4 col-sm-6" : banners.length === 2 ? "col-md-6" : "col-12"}`}>
                <div className="position-relative">
                  <ImageLink imgUrl={banner} bgImage={true} height={261} width={581} />
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

      {/* Categories */}
      <Container className="no-arrow">
        <section className="category-style-1">
          <HomeCategorySidebar style="simple" sliderOptions={categorySlider5} slider={true} categoryIds={data?.categories_icon_list?.category_ids || []} />
        </section>
      </Container>

      {/* Products List 1 */}
      {data?.products_list_1?.status && data?.products_list_1?.product_ids && (
        <>
          <TitleBox title={data?.products_list_1} type="basic" />
          <WrapperComponent classes={{ sectionClass: "section-b-space pt-0", fluidClass: "container" }}>
            <HomeProduct productIds={data?.products_list_1?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider5} />
          </WrapperComponent>
        </>
      )}

      {/* Grid Banners */}
      {data?.grid_banner?.status && (
        <div className="category-bg ratio3_2">
          <Container fluid className="p-0">
            <Row className="order-section">
              {data?.grid_banner?.banners.map((banner, index) => {
                if (banner?.image_url) {
                  if (videoType.includes(banner?.image_url.substring(banner?.image_url.lastIndexOf(".") + 1))) {
                    return (
                      <Col sm="8" className=" p-0">
                        <a href={Href} className="image-block">
                          <div id="block" className="video-sec">
                            <div>
                              <video autoPlay loop>
                                <source src={storageURL + banner?.image_url} type="video/mp4" />
                              </video>
                            </div>
                          </div>
                        </a>
                      </Col>
                    );
                  } else {
                    return (
                      <Col sm="4" className=" p-0">
                        <ImageLink imgUrl={banner} height={200} width={200} />
                      </Col>
                    );
                  }
                } else {
                  return (
                    <Col sm="4" className=" p-0">
                      <div className="contain-block even">
                        <div>
                          <h6>{banner?.tag}</h6>
                          <a href={Href}>
                            <h2>{banner?.title}</h2>
                          </a>
                          <Btn href={Href} className=" btn-solid category-btn">
                            {banner?.button_text}
                          </Btn>
                          <a href={Href}>
                            <h6>
                              <span>shop now</span>
                            </h6>
                          </a>
                        </div>
                      </div>
                    </Col>
                  );
                }
              })}
            </Row>
          </Container>
        </div>
      )}

      {/* Products List 2 */}
      {data?.product_list_2?.status && (
        <WrapperComponent classes={{ fluidClass: "container", row: "g-4" }} customCol={true}>
          <div className={data?.product_list_2?.right_panel?.status ? "col-xl-9 col-lg-8" : "col-xl-12 col-lg-8"}>
            <div className="theme-tab">
              <div className="tab-content-cls">
                <HomeProduct productIds={data?.product_list_2?.products?.product_item?.product_ids || []} slider={true} sliderOptions={horizontalProductSlider} style="vertical" />
              </div>
              {(data?.product_list_2?.products?.product_banner?.banner_1?.status || data?.product_list_2?.products?.product_banner?.banner_2?.status) && (
                <div className="banner-tools border-0 product_banner banner-section">
                  <div className="ratio2_1">
                    <Container className=" p-0">
                      <Row className="g-4">
                        {data?.product_list_2?.products?.product_banner?.banner_1?.status && (
                          <div className={data?.product_list_2?.products?.product_banner?.banner_2?.status ? "col-md-6" : "col-12"}>
                            <ImageLink imgUrl={data?.product_list_2?.products?.product_banner?.banner_1} bgImg={true} />
                          </div>
                        )}
                        {data?.product_list_2?.products?.product_banner?.banner_2?.status && (
                          <div className={data?.product_list_2?.products?.product_banner?.banner_1?.status ? "col-md-6" : "col-12"}>
                            <ImageLink imgUrl={data?.product_list_2?.products?.product_banner?.banner_2} bgImg={true} />
                          </div>
                        )}
                      </Row>
                    </Container>
                  </div>
                </div>
              )}
            </div>
          </div>
          {data?.product_list_2?.right_panel?.status && (
            <Col xl="3" lg="4" md="12" className="mb-0 images">
              <div className="theme-card">
                <h5 className="title-border">{data?.product_list_2?.right_panel?.title}</h5>
                <div className="offer-slider ">
                  <HomeProduct productIds={data?.product_list_2?.right_panel?.product_ids || []} style="horizontal" />
                </div>
              </div>
            </Col>
          )}
        </WrapperComponent>
      )}

      {/* Brands */}
      {data?.brand?.status && (
        <WrapperComponent classes={{ sectionClass: "tools-brand" }}>
          <HomeBrand sliderOptions={brandSlider4} brandIds={data?.brand?.brand_ids || []} bgLight={true} />
        </WrapperComponent>
      )}

      {/* Social Media */}
      {data?.social_media?.banners?.length && data?.social_media?.status && (
        <section className="instagram ratio_square">
          <HomeSocialMedia media={data?.social_media || []} type="borderless" />
        </section>
      )}
    </>
  );
};

export default Furniture2;
