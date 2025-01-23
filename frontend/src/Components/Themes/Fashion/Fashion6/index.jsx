"use client";
import ImageLink from "@/Components/Widgets/ImageLink";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { horizontalProductSlider } from "@/Data/SliderSetting";
import Loader from "@/Layout/Loader";
import { storageURL } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import HomeBlog from "../../Widgets/HomeBlog";
import HomeBrand from "../../Widgets/HomeBrand";
import HomeProduct from "../../Widgets/HomeProduct";
import HomeSlider from "../../Widgets/HomeSlider";
import HomeSocialMedia from "../../Widgets/HomeSocialMedia";
import HomeTitle from "../../Widgets/HomeTitle";
import NoDataFound from "@/Components/Widgets/NoDataFound";

const Fashion6 = ({ slug }) => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "fashion_six" });
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
    isLoading && refetch();
  }, [isLoading]);

  useEffect(() => {
    document.body.classList.add("home");
    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  const sliderSettings = (length) => {
    return {
      ...horizontalProductSlider,
      slidesToShow: length > 3 ? 3 : length,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1429,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
  };

  useSkeletonLoader2([productLoad, blogLoading, brandLoading]);
  if (isLoading && document.body) return <Loader />;

  return (
    <>
      {/* Home Banner */}
      <WrapperComponent classes={{ sectionClass: "p-0 overflow-hidden" }}>
        <div className="center-home-slider sm-size home-slider layout-7">
          <HomeSlider bannerData={data?.home_banner} height={650} width={1920} />
        </div>
      </WrapperComponent>

      {/* Offer Banners */}
      <WrapperComponent classes={{ sectionClass: "banner-padding ratio2_1", fluidClass: "container" }}>
        <Row className="margin-default">
          <Col lg="3" className="d-lg-block d-none">
            <div className="position-relative h-100">
              <ImageLink imgUrl={data?.offer_banner?.banner_1} classes="h-100" bgImg={true} />
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
          <Col lg="9">
            <Row className=" g-md-4 g-3">
              <Col md="4" xs="6">
                <div className="position-relative">
                  <ImageLink imgUrl={data?.offer_banner?.banner_2} classes="img-part" bgImg={true} />
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
              <Col md="4" xs="6">
                <div className="position-relative">
                  <ImageLink imgUrl={data?.offer_banner?.banner_3} classes="img-part" bgImg={true} />
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
              <Col md="4" xs="6">
                <div className="position-relative">
                  <ImageLink imgUrl={data?.offer_banner?.banner_4} classes="img-part" bgImg={true} />
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
              <Col xs="6">
                <div className="position-relative">
                  <ImageLink imgUrl={data?.offer_banner?.banner_5} classes="img-part" bgImg={true} />
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
              <Col md="6">
                <div className="position-relative">
                  <ImageLink imgUrl={data?.offer_banner?.banner_6} classes="img-part" bgImg={true} />
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
            </Row>
          </Col>
        </Row>
      </WrapperComponent>

      {/* Products List */}
      {data?.products_list_1?.status && (
        <>
          <HomeTitle title={data?.products_list_1} type="basic" />
          <WrapperComponent classes={{ sectionClass: "section-b-space pt-0 ratio_square", fluidClass: "container" }}>{data?.products_list_1?.product_ids?.length ? <HomeProduct productIds={data?.products_list_1?.product_ids} style="vertical" /> : <NoDataFound customClass={"no-data-added"} title={"NoProductFound"} />}</WrapperComponent>
        </>
      )}

      {/* Product Banners */}
      {data?.product_banner?.status && (
        <section className="section-b-space bg-size" style={{ backgroundImage: `url(${storageURL + data?.product_banner?.image_url}` }}>
          <Image src={storageURL + data?.product_banner?.image_url} alt="" className="bg-img" width={1920} height={520} />
          <div className="ratio_square">
            <Container>
              <Row>
                <Col lg="4" md="6">
                  <div className="theme-card card-border bg-white">
                    <h5 className="title-border">{data?.product_banner?.product_slider_1?.title}</h5>
                    <div className="offer-slider">
                      <HomeProduct productIds={data?.product_banner?.product_slider_1?.product_ids} style="horizontal" />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      )}

      {/* Products List 2 */}
      {data?.products_list_2?.status && (
        <>
          <HomeTitle title={data?.products_list_1 || []} type="basic" />
          <WrapperComponent classes={{ sectionClass: "pt-0 ratio_square", fluidClass: "container" }} customCol={true}>
            <div className={data?.products_list_2?.right_panel?.status ? "col-lg-9 col-md-8 col-sm-7 col-6" : "col-lg-12 col-md-8 col-sm-7 col-6"}>
              <HomeProduct productIds={data?.products_list_2?.products?.product_ids} style="vertical" slider="true" sliderOptions={sliderSettings} />
            </div>
            {data?.products_list_2?.right_panel?.status && (
              <Col lg="3" md="4" sm="5" xs="6" className="images">
                <ImageLink imgUrl={data?.products_list_2?.right_panel} classes="h-100" bgImage={true} width={437} height={359} />
              </Col>
            )}
          </WrapperComponent>
        </>
      )}

      {/* Blogs */}
      {data?.featured_blogs?.status && (
        <>
          <WrapperComponent classes={{ fluidClass: "container" }} colProps={{ md: "12" }}>
            <HomeTitle space={false} title={data?.featured_blogs || []} type="basic" />
          </WrapperComponent>

          <WrapperComponent classes={{ sectionClass: "blog pt-0 ratio2_3", fluidClass: "container" }} colProps={{ md: "12" }}>
            <HomeBlog blogIds={data?.featured_blogs?.blog_ids || []} />
          </WrapperComponent>
        </>
      )}

      {/* Social Media */}
      {data?.social_media?.banners?.length && data?.social_media?.status && (
        <section className="instagram ratio_square">
          <HomeSocialMedia media={data?.social_media || []} type="borderless" />
        </section>
      )}

      {/* Brands */}
      {data?.brand?.status && (
        <section className="section-b-space">
          <HomeBrand brandIds={data?.brand?.brand_ids || []} />
        </section>
      )}
    </>
  );
};

export default Fashion6;
