import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { horizontalProductSlider, jewelleryCategorySlider } from "@/Data/SliderSetting";
import Loader from "@/Layout/Loader";
import { ImagePath, storageURL } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import HomeBrand from "../../Widgets/HomeBrand";
import HomeCategorySidebar from "../../Widgets/HomeCategorySidebar";
import HomeProduct from "../../Widgets/HomeProduct";
import HomeProductTab from "../../Widgets/HomeProductTab";
import HomeServices from "../../Widgets/HomeService";
import HomeSlider from "../../Widgets/HomeSlider";
import HomeSocialMedia from "../../Widgets/HomeSocialMedia";

const JewelleryTwo = () => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "jewellery_two" });
  const [offerBanner1, setOfferBanner1] = useState([]);
  const [offerBanner2, setOfferBanner2] = useState([]);
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
    if (data?.offer_banner_1?.banners?.length > 0) {
      let banners = data?.offer_banner_1?.banners?.filter((item) => item?.status);
      setOfferBanner1(banners);
    }
    if (data?.offer_banner_2?.banners?.length > 0) {
      let banners = data?.offer_banner_2?.banners?.filter((item) => {
        return item?.status;
      });
      setOfferBanner2(banners);
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
      <WrapperComponent classes={{ sectionClass: "p-0 overflow-hidden", fluidClass: "home-slider" }} colProps={{ xl: "12" }}>
        <HomeSlider bannerData={data?.home_banner} height={966} width={1835} />
      </WrapperComponent>

      {/* Offer Banner 1 */}
      <WrapperComponent classes={{ sectionClass: `banner-padding banner-section ratio2_1`, fluidClass: "container-fluid", row: "g-sm-4 g-3" }} customCol={true}>
        {offerBanner1.map((banner, i) => (
          <div key={i} className={offerBanner1.length >= 2 ? (offerBanner1.length === 5 && (i === 3 || i === 4) ? "col-6" : offerBanner1.length === 4 || offerBanner1.length === 2 ? "col-6" : "col-md-4 col-6") : "col-12"}>
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
        ))}
      </WrapperComponent>

      {/* Categories */}
      {data?.categories?.status && (
        <Container>
          <section className="section-b-space border-section border-top-0 category-rounded">
            <HomeCategorySidebar categoryIds={data?.categories?.category_ids} style="standard" slider={true} sliderOptions={jewelleryCategorySlider} />
          </section>
        </Container>
      )}

      {/* Product List 1  */}
      {data?.products_list_1?.status && (
        <>
          <WrapperComponent classes={{ fluidClass: "container" }} noRowCol={true}>
            <TitleBox title={data?.products_list_1} type="simple" classes={"pt-0"} space={false} />
            <HomeProduct productIds={data?.products_list_1?.product_ids || []} style="vertical" />
          </WrapperComponent>
        </>
      )}

      {/* Full Banner */}
      {data?.banner?.status && (
        <section>
          <img src={storageURL + data?.banner?.image_url} alt={data?.banner?.image_url} className="img-fluid w-100" />
        </section>
      )}

      {/* Services */}
      {data?.services && (
        <Container className={!data?.products_list?.status ? "section-t-space tools-service service-w-bg" : ""}>
          <section className="pt-0 service">
            <HomeServices services={data?.services?.banners} />
          </section>
        </Container>
      )}

      {/* Full Banner */}
      {data?.full_banner?.status && (
        <section className="p-0">
          <ImageLink imgUrl={data?.full_banner} placeholder={`${ImagePath}/full_column_banner.png`} height={562} width={1835} />
        </section>
      )}

      {/* Category Products */}
      {data?.category_product?.status && (
        <>
          <TitleBox type="jewellery" title={data?.category_product} space={false} />
          <WrapperComponent classes={{ sectionClass: "pt-0", fluidClass: "container" }} noRowCol={false}>
            <HomeProductTab categoryIds={data?.category_product?.category_ids} product_box_style="vertical" style="vertical" />
          </WrapperComponent>
        </>
      )}

      {/* Center Panel And Products */}
      <WrapperComponent classes={{ sectionClass: "section-b-space", fluidClass: "container", row: "row g-sm-4 g-3" }} customCol={true}>
        {data?.product_banner?.left_panel?.status && (
          <Col lg="4">
            <div className="theme-card card-border">
              <h5 className="title-border">{data?.product_banner?.left_panel?.title}</h5>
              <div className="offer-slider ">
                <HomeProduct productIds={data?.product_banner?.left_panel?.product_ids || []} style="horizontal" />
              </div>
            </div>
          </Col>
        )}

        <Col lg="4" className="center-slider border-0 ratio2_3">
          <Row className="g-sm-4 g-3">
            {data?.product_banner?.center_panel?.banner_1?.status && (
              <Col md="12">
                <ImageLink imgUrl={data?.product_banner?.center_panel?.banner_1} classes="collection-banner" bgImg={true} />
              </Col>
            )}
            {data?.product_banner?.center_panel?.banner_2?.status && (
              <Col md="12">
                <ImageLink imgUrl={data?.product_banner?.center_panel?.banner_2} classes="collection-banner" bgImg={true} />
              </Col>
            )}
          </Row>
        </Col>

        {data?.product_banner?.right_panel?.status && (
          <Col lg="4">
            <div className="theme-card card-border">
              <h5 className="title-border">{data?.product_banner?.right_panel?.title}</h5>
              <div className="offer-slider ">
                <HomeProduct productIds={data?.product_banner?.right_panel?.product_ids || []} style="horizontal" />
              </div>
            </div>
          </Col>
        )}
      </WrapperComponent>

      {/* Offer Banner 2 */}
      {data?.offer_banner_2?.status && (
        <WrapperComponent classes={{ fluidClass: "container" }} noRowCol={true}>
          <div className="mx-0">
            <Image height={126} width={1330} src={storageURL + data?.offer_banner_2?.image_url} className="img-fluid" alt="offer" />
          </div>
        </WrapperComponent>
      )}

      {/* Product List 2  */}
      {data?.products_list_2?.status && (
        <WrapperComponent classes={{ fluidClass: "container" }}>
          <HomeProduct productIds={data?.products_list_2?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider} />
        </WrapperComponent>
      )}

      {/* Social Media */}
      {data?.social_media?.status && (
        <section className="instagram ratio_square">
          <HomeSocialMedia media={data?.social_media || []} type="borderless" />
        </section>
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

export default JewelleryTwo;
