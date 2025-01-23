import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { horizontalProductSlider, horizontalProductSlider5, smallProductSlider4 } from "@/Data/SliderSetting";
import { ImagePath, storageURL } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader } from "@/Utils/Hooks/useSkeletonLoader";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import HomeBrand from "../../Widgets/HomeBrand";
import HomeProduct from "../../Widgets/HomeProduct";
import HomeServices from "../../Widgets/HomeService";
import HomeSlider from "../../Widgets/HomeSlider";
import HomeSocialMedia from "../../Widgets/HomeSocialMedia";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import Loader from "@/Layout/Loader";
import BlogIdsContext from "@/Context/BlogIdsContext";

const MarketplaceFour = () => {
  const { data, refetch, isLoading } = useCustomDataQuery({ params: "marketplace_four" });
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { setGetBrandIds, isLoading: brandLoading } = useContext(BrandIdsContext);
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
    document.body.classList.add("home", "header-theme-color");
    return () => {
      document.body.classList.remove("home", "header-theme-color");
    };
  }, []);

  useSkeletonLoader2([productLoad, blogLoading, brandLoading]);
  if (isLoading && document.body) return <Loader />;

  return (
    <>
      {/* Home Banner */}
      <WrapperComponent classes={{ sectionClass: "p-0 layout-7", fluidClass: "home-slider" }} noRowCol={true}>
        <HomeSlider bannerData={data?.home_banner} height={627} width={1835} />
      </WrapperComponent>

      {/* Services */}
      {data?.services && (
        <WrapperComponent classes={{ sectionClass: "banner-padding absolute-banner pb-0 tools-service", fluidClass: "container" }} noRowCol={true}>
          <div className="absolute-bg">
            <HomeServices services={data?.services?.banners} />
          </div>
        </WrapperComponent>
      )}

      {/* Product List 1 */}
      {data?.products_list_1?.status && (
        <WrapperComponent classes={{ sectionClass: "section-b-space", fluidClass: "container" }}>
          <Col xs="12">
            <TitleBox type="icon" title={data?.products_list_1} />
          </Col>
          <Col xs="12">
            <HomeProduct productIds={data?.products_list_1?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider5} />
          </Col>
        </WrapperComponent>
      )}

      {/* Product Banner 1 */}
      <WrapperComponent classes={{ sectionClass: "pt-0 section-b-space", fluidClass: "container" }} customCol={true}>
        {data?.product_banner_1?.left_panel?.status && (
          <Col lg="3" md="4" sm="6">
            <ImageLink imgUrl={data?.product_banner_1?.left_panel} bgImg={true} classes="h-100" />
          </Col>
        )}

        {data?.product_banner_1?.right_panel?.status && (
          <div className={`col-md-8 ${data?.product_banner_1?.left_panel?.status ? "col-lg-9 col-sm-6 col-6" : "col-12"}`}>
            <HomeProduct productIds={data?.product_banner_1?.right_panel?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider} />
          </div>
        )}
      </WrapperComponent>

      {/* Parallax Banner  */}
      <section className="section-b-space bg-size" style={{ backgroundImage: `url(${storageURL + data?.slider_products?.image_url})` }}>
        <img src={storageURL + data?.slider_products?.image_url} alt="" className="bg-img" />
        <div className="ratio_square">
          <Container>
            <Row>
              <Col lg="4" md="6">
                <div className="theme-card card-border bg-white">
                  <h5 className="title-border">{data?.slider_products?.product_slider_1?.title}</h5>
                  <div className="offer-slider">
                    <HomeProduct productIds={data?.slider_products?.product_slider_1?.product_ids || []} style="horizontal" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Product List 2 */}
      {data?.products_list_2?.status && (
        <WrapperComponent classes={{ sectionClass: "", fluidClass: "container" }}>
          <Col xs="12">
            <TitleBox type="icon" title={data?.products_list_2} />
          </Col>
          <Col xs="12">
            <HomeProduct productIds={data?.products_list_2?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider5} />
          </Col>
        </WrapperComponent>
      )}

      {/* Product Banner 2 */}
      <WrapperComponent classes={{ sectionClass: "section-b-space", fluidClass: "container" }} noRowCol={true}>
        <Row className="row g-sm-4 g-3">
          {data?.product_banner_2?.left_panel?.status && (
            <Col lg="4" className="">
              <div className="theme-card card-border">
                <h5 className="title-border">{data?.product_banner_2?.left_panel?.title}</h5>
                <div className="offer-slider ">
                  <HomeProduct productIds={data?.product_banner_2?.left_panel?.product_ids || []} style="horizontal" />
                </div>
              </div>
            </Col>
          )}

          <Col lg="4" className="center-slider border-0 ratio2_3">
            <Row className="g-sm-4 g-3">
              {data?.product_banner_2?.center_panel?.banner_1?.status && (
                <Col md="12">
                  <ImageLink imgUrl={data?.product_banner_2?.center_panel?.banner_1} placeholder={`${ImagePath}/two_column_banner.png`} bgImg={true} />
                </Col>
              )}
              {data?.product_banner_2?.center_panel?.banner_2?.status && (
                <Col md="12">
                  <ImageLink imgUrl={data?.product_banner_2?.center_panel?.banner_2} placeholder={`${ImagePath}/two_column_banner.png`} bgImg={true} />
                </Col>
              )}
            </Row>
          </Col>

          {data?.product_banner_2?.right_panel?.status && (
            <Col lg="4" className="">
              <div className="theme-card card-border">
                <h5 className="title-border">{data?.product_banner_2?.right_panel?.title}</h5>
                <div className="offer-slider ">
                  <HomeProduct productIds={data?.product_banner_2?.right_panel?.product_ids || []} style="horizontal" />
                </div>
              </div>
            </Col>
          )}
        </Row>
      </WrapperComponent>

      {/* Product Banner 3 */}
      <WrapperComponent classes={{ sectionClass: "pt-0", fluidClass: "container" }} noRowCol={true}>
        <Row className="section-b-space">
          {data?.product_banner_3?.left_panel?.status && (
            <Col lg="3" md="4" sm="5" xs="6">
              <ImageLink imgUrl={data?.product_banner_3?.left_panel} bgImg={true} classes="h-100" />
            </Col>
          )}

          {data?.product_banner_3?.right_panel?.status && (
            <div className={`col-md-8 ${data?.product_banner_3?.left_panel?.status ? "col-lg-9 col-sm-6 col-6" : "col-12"}`}>
              <HomeProduct productIds={data?.product_banner_3?.right_panel?.product_ids || []} style="vertical" slider={true} sliderOptions={smallProductSlider4} />
            </div>
          )}
        </Row>

        <Row>
          {data?.products_list_3?.status && (
            <>
              <Col xs="12">
                <TitleBox title={data?.products_list_3} type="icon" />
              </Col>
              <Col>
                <HomeProduct productIds={data?.products_list_3?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider5} />
              </Col>
            </>
          )}
        </Row>
      </WrapperComponent>

      {/* Brand */}
      {data?.brand?.status && (
        <section className="tools-brand">
          <HomeBrand brandIds={data?.brand?.brand_ids || []} bgLight={true} />
        </section>
      )}

      {/* Social Media */}
      {data?.social_media?.status && (
        <section className="instagram ratio_square">
          <HomeSocialMedia media={data?.social_media || []} type="borderless" />
        </section>
      )}
    </>
  );
};

export default MarketplaceFour;
