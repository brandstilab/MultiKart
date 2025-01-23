"use client";
import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { horizontalProductSlider } from "@/Data/SliderSetting";
import Loader from "@/Layout/Loader";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import React, { useContext, useEffect, useState } from "react";
import HomeBlog from "../Widgets/HomeBlog";
import HomeBrand from "../Widgets/HomeBrand";
import HomeProduct from "../Widgets/HomeProduct";
import HomeSocialMedia from "../Widgets/HomeSocialMedia";

const YogaHomePage = ({ slug }) => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "yoga" });
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { isLoading: blogLoading } = useContext(BlogIdsContext);
  const { setGetBrandIds, isLoading: brandLoading } = useContext(BrandIdsContext);
  const [offerBanners1, setBanners1] = useState([]);
  const [offerBanners2, setBanners2] = useState([]);

  useEffect(() => {
    if (data?.products_ids?.length > 0) {
      setGetProductIds({ ids: Array.from(new Set(data?.products_ids))?.join(",") });
    }
    if (data?.brands?.brand_ids?.length > 0) {
      setGetBrandIds({ ids: Array.from(new Set(data?.brands?.brand_ids))?.join(",") });
    }

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
    setBanners1(banners);

    let banners2 = [];
    if (data?.offer_banner_2?.banner_1?.status) {
      banners2 = [...banners2, data?.offer_banner_2?.banner_1];
    }
    if (data?.offer_banner_2?.banner_2?.status) {
      banners2 = [...banners2, data?.offer_banner_2?.banner_2];
    }
    if (data?.offer_banner_2?.banner_3?.status) {
      banners2 = [...banners2, data?.offer_banner_2?.banner_3];
    }
    setBanners2(banners2);
  }, [data]);

  useEffect(() => {
    document.body.classList.add("home");
    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  useEffect(() => {
    isLoading && refetch();
  }, [isLoading]);

  useSkeletonLoader2([productLoad, blogLoading, brandLoading]);
  if (isLoading && document.body) return <Loader />;

  return (
    <>
      {/* Home Banner */}
      <WrapperComponent classes={{ sectionClass: "pt-0", fluidClass: "home-slider" }} noRowCol={true}>
        <ImageLink imgUrl={data?.home_banner} height={821} width={1835} />
        <div className="home-skeleton">
          <div className="skeleton-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-sm-8 col-11">
                  <p className="card-text placeholder-glow row g-lg-4 g-sm-3 g-2">
                    <span className="col-7">
                      <span className="placeholder"></span>
                    </span>
                    <span className="col-9">
                      <span className="placeholder"></span>
                    </span>
                    <span className="col-6">
                      <span className="placeholder"></span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrapperComponent>

      {/* Brands */}
      {data?.brand?.status && (
        <WrapperComponent>
          <HomeBrand brandIds={data?.brand?.brand_ids || []} />
        </WrapperComponent>
      )}

      {/* Offer Banner 1 */}
      <WrapperComponent classes={{ sectionClass: "banner-padding ratio_square", fluidClass: "container-fluid", row: "g-sm-4 g-3" }} customCol={true}>
        {offerBanners1?.map(
          (banner, i) =>
            banner?.status && (
              <div key={i} className={offerBanners1.length === 3 ? "col-md-4 col-sm-6" : offerBanners1.length === 2 ? "col-6" : "col-12"}>
                <div className="position-relative">
                  <ImageLink imgUrl={banner} height={587} width={587} />
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

      {/* Product List 1  */}
      {data?.products_list_1?.status && (
        <>
          <WrapperComponent classes={{ fluidClass: "container", col: "offset-lg-2" }} colProps={{ lg: "8" }}>
            <TitleBox title={data?.products_list_1} type="luxury" />
          </WrapperComponent>
          <WrapperComponent classes={{ sectionClass: "category-img-wrapper pt-0", fluidClass: "container" }} noRowCol={true}>
            <HomeProduct slider={true} style="vertical" productIds={data?.products_list_1?.product_ids || []} sliderOptions={horizontalProductSlider} />
          </WrapperComponent>
        </>
      )}

      {/* Offer Banner 2 */}
      <WrapperComponent classes={{ sectionClass: "ratio2_1 banner-section", fluidClass: "container", row: "row g-sm-4 g-3" }} customCol={true}>
        {offerBanners2?.map(
          (banner, i) =>
            banner?.status && (
              <div key={i} className={offerBanners2.length === 3 ? "col-md-4 col-sm-6" : offerBanners2.length === 2 ? "col-sm-6" : "col-12"}>
                <div className="position-relative">
                  <ImageLink imgUrl={banner} height={338} width={676} />
                </div>
              </div>
            )
        )}
      </WrapperComponent>

      {/* Products List 3 */}
      {data?.products_list_2?.status && (
        <WrapperComponent classes={{ fluidClass: "container" }}>
          <TitleBox title={data?.products_list_2} type="luxury" />
          <HomeProduct style="vertical" productIds={data?.products_list_2?.product_ids || []} />
        </WrapperComponent>
      )}

      {/* Featured Blogs */}
      {data?.featured_blogs?.status && (
        <>
          <WrapperComponent classes={{ sectionClass: "blog ratio2_1 left-blog pt-0", fluidClass: "container", row: "section-t-space" }} colProps={{ md: "12" }}>
            <TitleBox title={data?.featured_blogs} type="luxury" />
            <HomeBlog blogIds={data?.featured_blogs?.blog_ids || []} />
          </WrapperComponent>
        </>
      )}

      {/* Social Media */}
      {data?.social_media?.banners?.length && data?.social_media?.status && (
        <section className="instagram section-b-space ratio_square">
          <HomeSocialMedia media={data?.social_media || []} classes="container" type="borderless" />
        </section>
      )}
    </>
  );
};

export default YogaHomePage;
