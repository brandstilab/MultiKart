"use client";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { horizontalProductSlider, nftProductSlider, nftProductSlider3 } from "@/Data/SliderSetting";
import Btn from "@/Elements/Buttons/Btn";
import Loader from "@/Layout/Loader";
import { Href, storageURL } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import HomeBlog from "../Widgets/HomeBlog";
import HomeCategorySidebar from "../Widgets/HomeCategorySidebar";
import HomeProduct from "../Widgets/HomeProduct";
import HomeProductTab from "../Widgets/HomeProductTab";
import HomeTitle from "../Widgets/HomeTitle";
import { digitalCategorySlider } from "@/Data/SliderSetting";

const DigitalDownload = () => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "digital_download" });
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { setGetBrandIds, isLoading: brandLoading } = useContext(BrandIdsContext);
  const { setGetBlogIds, isLoading: blogLoading } = useContext(BlogIdsContext);
  const { t } = useTranslation("common");
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
    document.body.classList.add("home", "digital-download");
    return () => {
      document.body.classList.remove("home", "digital-download");
    };
  }, []);

  useSkeletonLoader2([productLoad, blogLoading, brandLoading]);
  if (isLoading && document.body) return <Loader />;

  return (
    <>
      {/* Home Banner */}
      <WrapperComponent classes={{ sectionClass: "p-0 height-85 nft-home overflow-hidden" }} customCol={true} style={{ backgroundImage: `url(${storageURL + data?.home_banner?.background_image})` }}>
        <div className="home-slider">
          <Container>
            <Row>
              <Col>
                <div className="slider-contain">
                  <div>
                    <h1>{data?.home_banner?.title}</h1>
                    <p className="d-lg-block d-none">{data?.home_banner?.description}</p>
                    <Btn href={Href} className="btn-solid">
                      {t("ShopNow")}
                    </Btn>
                  </div>
                </div>
              </Col>
              <Col lg="7" xs="6" className=" d-md-inline-block d-none position-relative">
                <div className="slider-img">
                  <img src={storageURL + data?.home_banner?.sub_image_1} className="img-fluid sm-img" alt="" />
                  <img src={storageURL + data?.home_banner?.sub_image_2} className="img-fluid" alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </WrapperComponent>

      {/* Category Section */}
      {data?.categories_icon_list?.status && (
        <Container>
          <section className="section-b-space border-section border-top-0 category-width no-arrow">
            <HomeCategorySidebar sliderOptions={digitalCategorySlider} style="digital_download" categoryIds={data?.categories_icon_list?.category_ids || []} />
          </section>
        </Container>
      )}

      {/* Products Slider */}
      {data?.products_list?.status && (
        <>
          <HomeTitle title={data?.products_list} type="basic" />
          <WrapperComponent classes={{ sectionClass: "section-b-space pt-0 ratio_digital", fluidClass: "container" }} noRowCol={true}>
            <HomeProduct slider={true} style="vertical" productIds={data?.products_list?.product_ids || []} sliderOptions={nftProductSlider3} />
          </WrapperComponent>
        </>
      )}

      {/* Category Icon List */}
      {data?.products_list_2?.status && (
        <WrapperComponent classes={{ sectionClass: "ratio_digital nft-collection-section", fluidClass: "container" }} customCol={true} style={{ backgroundImage: `url(${storageURL + data?.products_list_2?.image_url})` }}>
          {data?.products_list_2?.left_panel?.status && (
            <Col lg="4" className=" left-panel">
              <div className="product-left-title">
                <div>
                  <h3>{data?.products_list_2?.left_panel?.title}</h3>
                  <p>{data?.products_list_2?.left_panel?.description}</p>
                  <div className="d-flex gap-2">
                    <Btn className="btn-solid">{t("ViewAll")}</Btn>
                    {data?.products_list_2?.left_panel?.more_button && <Btn className="btn-outline">{data?.products_list_2?.left_panel?.button_text}</Btn>}
                  </div>
                </div>
              </div>
            </Col>
          )}
          <div className={data?.products_list_2?.left_panel?.status ? "col-lg-8" : "col-xl-12 col-lg-8"}>
            <HomeProduct productIds={data?.products_list_2?.products?.product_ids || []} style="vertical" slider={true} sliderOptions={nftProductSlider} />
          </div>
        </WrapperComponent>
      )}

      {/* Category Products */}
      {data?.category_product?.status && (
        <>
          <WrapperComponent classes={{ sectionClass: "ratio_digital pt-0", fluidClass: "container" }} noRowCol={true}>
            <HomeTitle title={data?.category_product} type="basic" />
            <HomeProductTab isFilterCategoryDataNested={true} categoryIds={data?.category_product?.category_ids} style="vertical" slider={true} sliderOptions={nftProductSlider3} />
          </WrapperComponent>
        </>
      )}

      {/* Featured Blogs */}
      {data?.featured_blogs?.status && (
        <>
          <Container>
            <Row>
              <Col>
                <HomeTitle title={data?.featured_blogs} type="basic" />
              </Col>
            </Row>
          </Container>
          <WrapperComponent classes={{ sectionClass: "blog pt-0 section-b-space ratio2_3", fluidClass: "container" }} colProps={{ md: "12" }}>
            <HomeBlog blogIds={data?.featured_blogs?.blog_ids || []} />
          </WrapperComponent>
        </>
      )}
    </>
  );
};

export default DigitalDownload;
