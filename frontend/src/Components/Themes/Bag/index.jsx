"use client";
import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { bagsProduct, horizontalProductSlider } from "@/Data/SliderSetting";
import Btn from "@/Elements/Buttons/Btn";
import Loader from "@/Layout/Loader";
import { Href, storageURL } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import HomeBlog from "../Widgets/HomeBlog";
import HomeBrand from "../Widgets/HomeBrand";
import HomeCategorySidebar from "../Widgets/HomeCategorySidebar";
import HomeProduct from "../Widgets/HomeProduct";
import HomeProductTab from "../Widgets/HomeProductTab";
import HomeServices from "../Widgets/HomeService";
import HomeSlider from "../Widgets/HomeSlider";
import HomeSocialMedia from "../Widgets/HomeSocialMedia";
import HomeTitle from "../Widgets/HomeTitle";
import Link from "next/link";

const Bag = () => {
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { setGetBrandIds, isLoading: brandLoading } = useContext(BrandIdsContext);
  const { setGetBlogIds, isLoading: blogLoading } = useContext(BlogIdsContext);
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "bag" });
  
  useEffect(() => {
    isLoading && refetch();
  }, [isLoading]);

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
    document.body.classList.add("home");
    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  useSkeletonLoader2([productLoad, blogLoading, brandLoading]);
  if (isLoading && document.body) return <Loader />;

  return (
    <>
      {/* Home Section*/}
      <WrapperComponent classes={{ sectionClass: "p-0 overflow-hidden", fluidClass: "slide-1 home-slider" }}>
        <HomeSlider bannerData={data?.home_banner} height={650} width={1920} />
      </WrapperComponent>

      {/* Product slider*/}
      {data?.category_product?.status && (
        <>
          <WrapperComponent classes={{ sectionClass: "section-b-space", fluidClass: "container" }}>
            <HomeTitle title={data?.category_product} type="standard" />
            <HomeProductTab categoryIds={data?.category_product?.category_ids} style="vertical" slider={true} sliderOptions={horizontalProductSlider} />
          </WrapperComponent>
        </>
      )}

      {/* Categories  */}
      {data?.category?.status && (
        <Container className="category-button">
          <WrapperComponent classes={{ sectionClass: `section-b-space border-bottom-0 ${data?.category_product?.status ? "border-section" : ""}` }}>
            <HomeCategorySidebar categoryIds={data?.category?.category_ids || []} style="bag" />
          </WrapperComponent>
        </Container>
      )}

      {/* Full Banner  */}
      {data?.full_banner?.status && (
        <section className="p-0">
          <ImageLink imgUrl={data?.full_banner} classes="banner-layout-3" height={1032} width={1835} />
        </section>
      )}

      {/*  Product Slider  */}
      {data?.product_banner?.status && (
        <WrapperComponent classes={{ fluidClass: "container season-sale-section", row: "row g-sm-4 g-3" }} customCol={true}>
          {data?.product_banner?.left_content?.status && (
            <div className={data?.product_banner?.center_content?.status ? "col-lg-4" : "col-lg-6"}>
              <div className="theme-card card-border">
                <h5 className="title-border">{data?.product_banner?.left_content?.title}</h5>
                <div className="offer-slider slide-1">
                  <HomeProduct productIds={data?.product_banner?.left_content?.product_ids || []} style="horizontal" />
                </div>
              </div>
            </div>
          )}
          {data?.product_banner?.center_content?.status && (
            <Col lg="4" className="center-slider border-0">
              <div>
                <HomeTitle title={data?.product_banner?.center_content} type="standard" />
                <HomeProduct classForVertical={"product-m"} productIds={data?.product_banner?.center_content?.product_ids || []} style="vertical" slider={true} sliderOptions={bagsProduct} />
              </div>
            </Col>  
          )}
          {data?.product_banner?.right_content?.status && (
            <div className={data?.product_banner?.center_content?.status ? "col-lg-4" : "col-lg-6"}>
              <div className="theme-card card-border">
                <h5 className="title-border">{data?.product_banner?.right_content?.title}</h5>
                <div className="offer-slider slide-1">
                  <HomeProduct productIds={data?.product_banner?.right_content?.product_ids || []} style="horizontal" />
                </div>
              </div>
            </div>
          )}
        </WrapperComponent>
      )}

      {/* Services  */}
      {data?.services && (
        <Container>
          <section className="service wo-box section-b-space">
            <HomeServices services={data?.services?.banners || []} type="simple" />
          </section>
        </Container>
      )}

      {/* Bag Categories And Banners  */}
      <div className="category-bg ratio_square">
        <Container fluid className="p-0">
          <Row className="order-section">
            {data?.grid_banner?.banners.map((banner, index) => (
              <Col sm="4" key={index} className="p-0">
                {banner?.image_url ? (
                  <a href={Href} className="image-block bg-size" style={{ backgroundImage: `url(${storageURL + banner?.image_url})` }}>
                    <img src={storageURL + banner?.image_url} alt="banner" />
                  </a>
                ) : (
                  <div className="contain-block even">
                    <div>
                      <h6>{banner?.tag}</h6>
                      <a href={Href}>
                        <h2>{banner?.title}</h2>
                      </a>
                      {banner?.offer && (
                        <Btn href={Href} className="btn-solid category-btn">
                          {banner?.offer}
                        </Btn>
                      )}
                      <Link href={`/${banner?.redirect_link?.link_type}/${banner?.redirect_link?.link}`}>
                        <h6>
                          <span>{banner?.button_text}</span>
                        </h6>
                      </Link>
                    </div>
                  </div>
                )}
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Product Slider Section */}
      {data?.products_list?.status && (
        <Container>
          <WrapperComponent classes={{ sectionClass: "section-b-space border-section border-top-0" }}>
            <HomeTitle title={data?.products_list} type="standard" />
            <HomeProduct productIds={data?.products_list?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider} />
          </WrapperComponent>
        </Container>
      )}

      {/* Blog Section  */}
      {data?.featured_blogs?.status && (
        <WrapperComponent classes={{ sectionClass: "blog ratio3_2", fluidClass: "container" }} colProps={{ md: "12" }}>
          <TitleBox title={data?.featured_blogs} type="standard" />
          <HomeBlog blogIds={data?.featured_blogs?.blog_ids || []} />
        </WrapperComponent>
      )}

      {/* Social Media Section  */}
      {data?.social_media?.banners?.length && data?.social_media?.status && (
        <section className="instagram ratio_square">
          <HomeSocialMedia media={data?.social_media || []} type="borderless" />
        </section>
      )}

      {/* Brand Section  */}
      {data?.brand?.status && (
        <section className="section-b-space">
          <HomeBrand brandIds={data?.brand?.brand_ids || []} />
        </section>
      )}
    </>
  );
};

export default Bag;
