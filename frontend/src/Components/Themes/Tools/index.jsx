"use client";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { productSlider4, toolsCategorySliderSettings } from "@/Data/SliderSetting";
import Loader from "@/Layout/Loader";
import { storageURL } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import HomeBrand from "../Widgets/HomeBrand";
import HomeCategorySidebar from "../Widgets/HomeCategorySidebar";
import HomeProduct from "../Widgets/HomeProduct";
import HomeProductTab from "../Widgets/HomeProductTab";
import HomeServices from "../Widgets/HomeService";
import HomeSlider from "../Widgets/HomeSlider";

const ToolsHomePage = ({ slug }) => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "tools" });
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { isLoading: brandLoading } = useContext(BrandIdsContext);
  const { isLoading: blogLoading } = useContext(BlogIdsContext);

  useEffect(() => {
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
    document.body.classList.add("home", "tools-bg");
    return () => {
      document.body.classList.remove("home", "tools-bg");
    };
  }, []);

  useSkeletonLoader2([productLoad, blogLoading, brandLoading]);
  if (isLoading && document.body) return <Loader />;

  return (
    <>
      {/* Home Banner */}
      <WrapperComponent classes={{ sectionClass: "p-0 height-85 tools_slider", fluidClass: "home-slider" }} noRowCol={true}>
        <HomeSlider bannerData={data?.home_banner} height={724} width={1835} />
      </WrapperComponent>

      {/* Services */}
      {data?.services && (
        <WrapperComponent classes={{ sectionClass: `absolute-banner tools-service ${!data?.categories?.status && !data?.products_list_1?.status ? "section-b-space" : "pb-0"}`, fluidClass: "container" }} noRowCol={true}>
          <div className="absolute-bg">
            <HomeServices services={data?.services?.banners} />
          </div>
        </WrapperComponent>
      )}

      {/* Product Categories */}
      {data?.categories?.status && (
        <>
          <WrapperComponent classes={{ fluidClass: "container", col: "offset-lg-2" }} colProps={{ lg: "8" }}>
            <TitleBox title={data?.categories} type="luxury" />
          </WrapperComponent>
          <WrapperComponent classes={{ sectionClass: `pt-0 category-tools ratio3_2 overflow-hidden ${!data?.products_list_1?.status ? "section-b-space" : ""}` }}>
            <Container>
              <div className="slide-4 category-m">
                <HomeCategorySidebar categoryIds={data?.categories?.category_ids || []} style="one"  sliderOptions={toolsCategorySliderSettings}/>
              </div>
            </Container>
          </WrapperComponent>
        </>
      )}

      {/* Products List 1 */}
      {data?.products_list_1?.status && (
        <WrapperComponent classes={{ sectionClass: "section-b-space no-arrow", fluidClass: "container" }}>
          <TitleBox title={data?.products_list_1} type="luxury" />
          <HomeProduct style="vertical" productIds={data?.products_list_1?.product_ids || []} sliderOptions={productSlider4} slider={true} />
        </WrapperComponent>
      )}

      {/* Parallax Bg & Products List 2  */}
      {data?.products_list_1?.status && (
        <section className="section-b-space popular-products-section no-arrow" style={{ backgroundImage: `url(${storageURL + data?.products_list_2?.image_url})` }}>
          <Container>
            <Row>
              <Col xs="12">
                <TitleBox title={data?.products_list_1} type="luxury" />
                <HomeProduct style="vertical" productIds={data?.products_list_1?.product_ids || []} sliderOptions={productSlider4} slider={true} />
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {/* Panels And Products */}
      {data?.category_product?.status && (
        <WrapperComponent classes={{ sectionClass: `tools_product ${!data?.products_list_2?.status ? "pt-0" : ""}`, fluidClass: "container", row: "g-4" }} customCol={true}>
          {data?.category_product?.left_panel?.status && (
            <Col xl="3" lg="4" md="12">
              <div className="theme-card">
                <h5 className="title-border">{data?.category_product?.left_panel?.title}</h5>
                <div className="offer-slider ">
                  <HomeProduct productIds={data?.category_product?.left_panel?.product_ids || []} style={"horizontal"} />
                </div>
              </div>
            </Col>
          )}

          {data?.category_product?.right_panel?.product_category?.status && (
            <Col md="12" className={`${data?.category_product?.left_panel?.status ? "col-xl-9 col-lg-8" : "col-12"}`}>
              <HomeProductTab categoryIds={data?.category_product?.right_panel?.product_category?.category_ids} style="vertical" slider="true" sliderOptions={productSlider4} />
              <div className="banner-tools">
                <img src={storageURL + data?.category_product?.right_panel?.product_banner?.image_url} alt="banner" className="img-fluid" />
              </div>
            </Col>
          )}
        </WrapperComponent>
      )}

      {/* Brands */}
      {data?.brand?.status && (
        <section className="section-b-space tools-brand">
          <HomeBrand brandIds={data?.brand?.brand_ids || []} />
        </section>
      )}
    </>
  );
};

export default ToolsHomePage;
