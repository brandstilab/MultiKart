"use client";
import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { instagramSlider5 } from "@/Data/SliderSetting";
import Loader from "@/Layout/Loader";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import HomeBlog from "../Widgets/HomeBlog";
import HomeBrand from "../Widgets/HomeBrand";
import HomeProduct from "../Widgets/HomeProduct";
import HomeProductTab from "../Widgets/HomeProductTab";
import HomeServices from "../Widgets/HomeService";
import HomeSlider from "../Widgets/HomeSlider";
import HomeSocialMedia from "../Widgets/HomeSocialMedia";
import HomeParallaxBanner from "../Widgets/HomeParallaxBanner";
import { storageURL } from "@/Utils/Constants";

const VideoSlider = ({ slug }) => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "video_slider" });
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { setGetBrandIds, isLoading: brandLoading } = useContext(BrandIdsContext);
  const { isLoading: blogLoading } = useContext(BlogIdsContext);
  const [collectionBanners, setBanners] = useState([]);

  useEffect(() => {
    if (data?.products_ids?.length > 0) {
      setGetProductIds({ ids: Array.from(new Set(data?.products_ids))?.join(",") });
    }
    if (data?.brands?.brand_ids?.length > 0) {
      setGetBrandIds({ ids: Array.from(new Set(data?.brands?.brand_ids))?.join(",") });
    }

    let banners = [];
    if (data?.collection_banner?.banner_1?.status) {
      banners = [...banners, data?.collection_banner?.banner_1];
    }
    if (data?.collection_banner?.banner_2?.status) {
      banners = [...banners, data?.collection_banner?.banner_2];
    }
    if (data?.collection_banner?.banner_3?.status) {
      banners = [...banners, data?.collection_banner?.banner_3];
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
      <WrapperComponent classes={{ sectionClass: "p-0 height-85", fluidClass: "home-slider" }} noRowCol={true}>
        <HomeSlider bannerData={data?.home_banner} height={535} width={1850} />
      </WrapperComponent>

      {/* Collection Banners */}
      <WrapperComponent classes={{ sectionClass: "banner-padding absolute_banner ratio3_2", fluidClass: "container", row: "g-sm-4 g-3" }} customCol={true}>
        {collectionBanners?.map((banner, i) => (
          <div key={i} className={collectionBanners.length === 3 ? "col-md-4 col-6" : collectionBanners.length === 2 ? "col-6" : "col-12"}>
            <div className='position-relative'>
              <ImageLink imgUrl={banner} bgImg={true} />
              <div className='banner-skeleton'>
                <div className='skeleton-content'>
                  <p className='card-text placeholder-glow row g-lg-3 g-0'>
                    <span className='col-lg-7 col-9'>
                      <span className='placeholder'></span>
                    </span>
                    <span className='col-lg-9 col-12'>
                      <span className='placeholder'></span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </WrapperComponent>

      {/* Product Categories */}
      {data?.category_product?.status && (
        <WrapperComponent classes={{ sectionClass: "absolute-product section-t-space", fluidClass: "container" }} noRowCol={true}>
          <TitleBox title={data?.category_product} type='premium' />
          <HomeProductTab categoryIds={data?.category_product?.category_ids} style='vertical' />
        </WrapperComponent>
      )}

      {/* Parallax Or Full Banner */}
      {data?.parallax_banner?.status && (
        <section className='p-0 advertise-section'>
          <div className='full-banner parallax text-center p-center bg-size' style={{ backgroundImage: `url(${storageURL + data?.parallax_banner?.image_url})` }}>
            <Container>
              <Row>
                <Col>
                  <div class='banner-contain'>
                    <h2>{data?.parallax_banner?.main_title}</h2>
                    <h3>{data?.parallax_banner?.title}</h3>
                    <h4>{data?.parallax_banner?.sub_title}</h4>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      )}

      {/* Products List  */}
      {data?.products_list?.status && (
        <WrapperComponent classes={{ sectionClass: "section-b-space box-product", fluidClass: "full-box container" }} noRowCol={true}>
          <TitleBox title={data?.products_list} type='premium' space={false} />
          <HomeProduct style='horizontal' productIds={data?.products_list?.product_ids || []} product_box_style='horizontal' />
        </WrapperComponent>
      )}

      {/* Services */}
      <Container className='wo-box'>
        <section className='service section-b-space  border-section'>
          <HomeServices services={data?.services?.banners} type='simple' />
        </section>
      </Container>

      {/* Featured Blogs */}
      {data?.featured_blogs?.status && (
        <>
          <Container className='section-t-space'>
            <Row>
              <Col>
                <TitleBox title={data?.featured_blogs} type='premium' />
              </Col>
            </Row>
          </Container>
          <WrapperComponent classes={{ sectionClass: "blog pt-0 ratio2_3", fluidClass: "container" }} colProps={{ md: "12" }}>
            <HomeBlog blogIds={data?.featured_blogs?.blog_ids || []} />
          </WrapperComponent>
        </>
      )}

      {/* Social Media  */}
      {data?.social_media?.banners?.length && data?.social_media?.status && (
        <section className='instagram ratio_square'>
          <HomeSocialMedia sliderOptions={instagramSlider5} media={data?.social_media || []} type='borderless' classes='container' />
        </section>
      )}

      {/* Brand */}
      {data?.brand?.status && (
        <section className='section-b-space'>
          <HomeBrand brandIds={data?.brand?.brand_ids || []} />
        </section>
      )}
    </>
  );
};

export default VideoSlider;
