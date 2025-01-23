import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { horizontalProductSlider, horizontalProductSlider5 } from "@/Data/SliderSetting";
import Loader from "@/Layout/Loader";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import HomeBrand from "../../Widgets/HomeBrand";
import HomeFourColumnProduct from "../../Widgets/HomeFourColumnProduct";
import HomeProduct from "../../Widgets/HomeProduct";
import HomeServices from "../../Widgets/HomeService";
import HomeSlider from "../../Widgets/HomeSlider";

const MarketplaceTwo = () => {
  const { data, refetch, isLoading } = useCustomDataQuery({ params: "marketplace_two" });
  const [offerBanners1, setOfferBanners1] = useState([]);
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { setGetBrandIds, isLoading: brandLoading } = useContext(BrandIdsContext);
  const { isLoading: blogLoading } = useContext(BlogIdsContext);
  const horizontalProductSliders = horizontalProductSlider();
  const sliderSettingsMain = (length) => {
    return { ...horizontalProductSliders, slidesToShow: length > 3 ? 3 : length };
  };

  useEffect(() => {
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
      if (data?.offer_banner_1?.banner_4?.status) {
        banners = [...banners, data?.offer_banner_1?.banner_4];
      }
      setOfferBanners1(banners);
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
      <WrapperComponent classes={{ sectionClass: "pt-0 height-65", fluidClass: "home-slider" }} noRowCol={true}>
        <HomeSlider bannerData={data?.home_banner} height={627} width={1835} />
      </WrapperComponent>

      {/* Offer Banner 1 */}
      {data?.offer_banner_1?.status && (
        <WrapperComponent classes={{ sectionClass: "pt-0 ratio3_2 ", fluidClass: "container-fluid p-0", row: "mx-0" }} customCol={true}>
          {offerBanners1?.map((banner, index) => (
            <div key={index} className={`col-sm-6 p-0 ${offerBanners1?.length === 4 ? "col-lg-3 col-6" : offerBanners1?.length === 3 ? "col-lg-4 col-6" : offerBanners1?.length === 2 ? "col-6" : "col-12"}`}>
              <div className="position-relative">
                <ImageLink bgImg={true} imgUrl={banner} />
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
          ))}
        </WrapperComponent>
      )}

      {/* Product List 1 */}
      {data?.products_list_1?.status && (
        <>
          <TitleBox type="fraunces" title={data?.products_list_1} />
          <WrapperComponent classes={{ sectionClass: " pt-0 section-b-space ratio_square", fluidClass: "container" }} customCol={false}>
            <HomeProduct productIds={data?.products_list_1?.product_ids || []} style="vertical" rowClass="row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3" />
          </WrapperComponent>
        </>
      )}

      {/* Product List 2 */}
      {data?.products_list_2?.status && (
        <section className="p-0 product-vertical overflow-hidden">
          <div className="full-banner parallax text-center p-left bg-theme">
            <Container>
              <TitleBox title={data?.products_list_2} type="fraunces" textWhite={true} space={false} />
              <Row>
                <Col lg="6" className="m-auto"></Col>
              </Row>
              <div className="slide-3 full-box no-arrow">
                <HomeProduct style={"horizontal"} productIds={data?.products_list_2?.product_ids || []} product_box_style="horizontal" slider={true} sliderOptions={sliderSettingsMain} />
              </div>
            </Container>
          </div>
        </section>
      )}

      {/* Product List 3 & 4 */}
      <WrapperComponent classes={{ sectionClass: " ratio_square", fluidClass: "container" }} customCol={false}>
        {data?.products_list_3?.status && (
          <>
            <Col xs="12">
              <TitleBox title={data?.products_list_3} type="icon" />
            </Col>
            <Col xs="12">
              <HomeProduct productIds={data?.products_list_3?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider5} />
            </Col>
          </>
        )}

        {data?.products_list_4?.status && (
          <>
            <Col xs="12" className="section-t-space">
              <TitleBox title={data?.products_list_4} type="icon" space={false} />
            </Col>
            <Col xs="12">
              <HomeProduct productIds={data?.products_list_4?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider5} />
            </Col>
          </>
        )}
      </WrapperComponent>

      {/* Offer Banner 2 */}
      {data?.offer_banner_2?.status && (
        <WrapperComponent classes={{ sectionClass: `pb-0 ratio2_1 banner-section ${!data?.offer_banner_2?.banner_1?.status && !data?.offer_banner_2?.banner_2?.status ? "pt-0" : ""}`, fluidClass: "container", row: "row g-sm-4 g-3" }} customCol={true}>
          {data?.offer_banner_2?.banner_1?.status && (
            <div className={data?.offer_banner_2?.banner_2?.status ? "col-md-6" : "col-12"}>
              <ImageLink imgUrl={data?.offer_banner_2?.banner_1} bgImg={true} />
            </div>
          )}
          {data?.offer_banner_2?.banner_2?.status && (
            <div className={data?.offer_banner_2?.banner_1?.status ? "col-md-6" : "col-12"}>
              <ImageLink imgUrl={data?.offer_banner_2?.banner_2} bgImg={true} />
            </div>
          )}
        </WrapperComponent>
      )}

      {/* Four Column Products */}
      {data?.slider_products?.status && (
        <WrapperComponent classes={{ sectionClass: "section-b-space", fluidClass: "container" }} noRowCol={true}>
          <HomeFourColumnProduct data={data?.slider_products} style="horizontal" />
        </WrapperComponent>
      )}

      {/* Services */}
      {data?.services && (
        <WrapperComponent classes={{ sectionClass: "service section-b-space bg-light", fluidClass: "container" }} noRowCol={true}>
          <HomeServices services={data?.services?.banners} type="simple" />
        </WrapperComponent>
      )}

      {/* Product List 5 & 6 */}
      <WrapperComponent classes={{ sectionClass: `section-b-space ratio_square ${!data?.products_list_5?.status || !data?.products_list_6?.status ? "pt-0" : ""}`, fluidClass: "container" }} customCol={false}>
        {data?.products_list_5?.status && (
          <>
            <TitleBox title={data?.products_list_5} type="icon" />
            <HomeProduct productIds={data?.products_list_5?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider5} />
          </>
        )}

        {data?.products_list_6?.status && (
          <>
            <div className="col-12 section-t-space">
              <TitleBox title={data?.products_list_6} type="icon" space={false} />
            </div>
            <Col xs="12">
              <HomeProduct productIds={data?.products_list_6?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider5} />
            </Col>
          </>
        )}
      </WrapperComponent>

      {/* Offer Banner 3 */}
      {data?.offer_banner_3?.status && (
        <WrapperComponent classes={{ sectionClass: "pt-0 ", fluidClass: "container" }} noRowCol={true}>
          <ImageLink imgUrl={data?.offer_banner_3} classes="img-fluid w-100" height={409} width={1376} />
        </WrapperComponent>
      )}

      {/* Brand */}
      {data?.brand?.status && (
        <section className="section-b-space">
          <HomeBrand brandIds={data?.brand?.brand_ids || []} />
        </section>
      )}
    </>
  );
};

export default MarketplaceTwo;
