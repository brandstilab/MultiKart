"use client";
import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
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
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import HomeBlog from "../Widgets/HomeBlog";
import HomeBrand from "../Widgets/HomeBrand";
import HomeProduct from "../Widgets/HomeProduct";
import HomeProductTab from "../Widgets/HomeProductTab";
import HomeServices from "../Widgets/HomeService";
import HomeSlider from "../Widgets/HomeSlider";

const MarijuanaHomePage = ({ slug }) => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "marijuana" });
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

    if (data?.details_section?.banners?.length > 0) {
      let banners = data?.details_section?.banners?.filter((item) => item?.status);
      setBanners(banners);
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
      <section className="p-0 service_slide">
        <div className="home-slider text-white">
          <HomeSlider bannerData={data?.home_banner} height={730} width={1850} />
        </div>
        {data?.services && (
          <div className="service-home">
            <Container>
              <section className="service small-section pb-0"></section>
              <HomeServices services={data?.services?.banners} type="simple" />
            </Container>
          </div>
        )}
      </section>

      {/* About US And Offer Banners */}
      {data?.offer_banner?.status && (
        <>
          <WrapperComponent classes={{ sectionClass: "", fluidClass: "container", col: "offset-lg-2" }} colProps={{ lg: "8" }}>
            <TitleBox title={data?.offer_banner} type="luxury" />
          </WrapperComponent>

          <WrapperComponent classes={{ sectionClass: "pt-0 section-b-space banner-section ratio_45", fluidClass: "container", row: "g-sm-4 g-3" }} customCol={true}>
            {data?.offer_banner?.banner?.banner_1?.status && (
              <div className={data?.offer_banner?.banner?.banner_2?.status ? "col-md-6" : "col-12"}>
                <ImageLink imgUrl={data?.offer_banner?.banner?.banner_1} bgImg={true} />
              </div>
            )}
            {data?.offer_banner?.banner?.banner_2?.status && (
              <div className={data?.offer_banner?.banner?.banner_1?.status ? "col-md-6" : "col-12"}>
                <ImageLink imgUrl={data?.offer_banner?.banner?.banner_2} bgImg={true} homeBanner={false} />
              </div>
            )}
          </WrapperComponent>
        </>
      )}

      {/* Detail Banners */}
      {banners.length && (
        <WrapperComponent classes={{ sectionClass: "section-b-space detail-cannabis bg-grey", fluidClass: "container" }} customCol={true}>
          {banners?.map(
            (details, index) =>
              details?.status && (
                <div key={index} className={banners.length == 3 ? "col-md-4" : banners.length == 2 ? "col-md-6" : "col-12"}>
                  <div className="detail_section">
                    <div>
                      <Image src={storageURL + details.image_url} height={50} width={50} alt={details?.title} />
                      <h4>{details.title}</h4>
                      <p>{details.description}</p>
                    </div>
                  </div>
                </div>
              )
          )}
        </WrapperComponent>
      )}

      {/* Products List 1 */}
      {data?.products_list?.status && (
        <WrapperComponent classes={{ sectionClass: "section-b-space metro-section portfolio-section", fluidClass: "container" }} noRowCol={true}>
          <TitleBox title={data?.products_list} type="luxury" />
          <HomeProduct style="vertical" productIds={data?.products_list?.product_ids || []} sliderOptions={horizontalProductSlider} slider={true} />
        </WrapperComponent>
      )}

      {/* Product Categories */}
      {data?.category_product?.status && (
        <section className="parallax large-section tab-left border-box" style={{ backgroundImage: `url(${storageURL + data?.category_product?.image_url})` }}>
          <Container>
            <HomeProductTab classes="row-cols-2 row-cols-md-3 g-3 g-sm-4" categoryIds={data?.category_product?.category_ids || []} style="vertical" tabStyle="premium" paginate={3} title={data?.category_product} />
          </Container>
        </section>
      )}

      {/* Featured Blogs */}
      {data?.featured_blogs?.status && (
        <>
          <Container className={data?.category_product?.status ? "section-t-space" : ""}>
            <Row>
              <Col>
                <TitleBox title={data?.featured_blogs} type="luxury" />
              </Col>
            </Row>
          </Container>
          <WrapperComponent classes={{ sectionClass: "blog pt-0 section-b-space ratio3_2", fluidClass: "container" }} colProps={{ md: "12" }}>
            <HomeBlog blogIds={data?.featured_blogs?.blog_ids || []} blogEffect="basic-effect" />
          </WrapperComponent>
        </>
      )}

      {/* Brands */}
      {data?.brand?.status && (
        <section className="bg-grey section-b-space small-section">
          <HomeBrand brandIds={data?.brand?.brand_ids || []} bgLight={true} />
        </section>
      )}
    </>
  );
};

export default MarijuanaHomePage;
