"use client";
import ImageLink from "@/Components/Widgets/ImageLink";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import Loader from "@/Layout/Loader";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import React, { useContext, useEffect, useState } from "react";
import { Row } from "reactstrap";
import HomeBrand from "../../Widgets/HomeBrand";
import HomeFourColumnProduct from "../../Widgets/HomeFourColumnProduct";
import HomeProductTab from "../../Widgets/HomeProductTab";
import HomeSlider from "../../Widgets/HomeSlider";
import HomeSocialMedia from "../../Widgets/HomeSocialMedia";
import HomeTitle from "../../Widgets/HomeTitle";

const Fashion2 = ({ slug }) => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "fashion_two" });
  const [banners, setBanners] = useState([]);
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { isLoading: blogLoading } = useContext(BlogIdsContext);
  const { isLoading: brandLoading } = useContext(BrandIdsContext);

  useEffect(() => {
    if (data?.offer_banner) {
      let banners = [];
      if (data?.offer_banner?.banner_1?.status) {
        banners = [...banners, data?.offer_banner?.banner_1];
      }
      if (data?.offer_banner?.banner_2?.status) {
        banners = [...banners, data?.offer_banner?.banner_2];
      }
      if (data?.offer_banner?.banner_3?.status) {
        banners = [...banners, data?.offer_banner?.banner_3];
      }
      if (data?.offer_banner?.banner_4?.status) {
        banners = [...banners, data?.offer_banner?.banner_4];
      }
      setBanners(banners);
    }
    if (data?.products_ids?.length > 0) {
      setGetProductIds({ ids: Array.from(new Set(data?.products_ids))?.join(",") });
    }
    if (data?.brands?.brand_ids?.length > 0) {
      setGetBrandIds({ ids: Array.from(new Set(data?.brands?.brand_ids))?.join(",") });
    }
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

  // useSkeletonLoader(isLoading);
  useSkeletonLoader2([productLoad, blogLoading, brandLoading]);
  if (isLoading && document.body) return <Loader />;

  return (
    <>
      {/* Home Banner */}
      <WrapperComponent classes={{ sectionClass: "p-0 overflow-hidden", fluidClass: "slide-1 home-slider" }}>
        <HomeSlider bannerData={data?.home_banner} height={650} width={1920} />
      </WrapperComponent>

      {/* Offer Banner */}
      <WrapperComponent classes={{ sectionClass: "banner-padding banner-section ratio2_1", fluidClass: "container-fluid" }} noRowCol={true}>
        <Row className=" g-sm-4 g-3">
          {banners.map(
            (banner, i) =>
              banner.status && (
                <div key={i} className={`col-${i % 2 === 0 && banners.length === i + 1 ? "12" : "6"}`}>
                  <div className="position-relative">
                    <ImageLink imgUrl={banner} classes={"bg-size "} height={446} width={893} bgImg={true} />
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
        </Row>
      </WrapperComponent>

      {/* Category Products */}
      {data?.category_product?.status && (
        <>
          <HomeTitle title={data?.category_product} type="basic" />
          <WrapperComponent classes={{ sectionClass: "section-b-space category-tab-section pt-0", fluidClass: "container" }}>
            <HomeProductTab categoryIds={data?.category_product?.category_ids} style="vertical" />
          </WrapperComponent>
        </>
      )}

      {/* Full Or Parallax Banner */}
      {data?.full_banner?.status && (
        <WrapperComponent classes={{ sectionClass: "p-0 overflow-hidden banner-sale" }}>
          <ImageLink imgUrl={data?.full_banner} height={565} width={1835} />
        </WrapperComponent>
      )}

      {/* Four Column Product */}
      {data?.slider_products?.status && (
        <WrapperComponent classes={{ fluidClass: "container" }} noRowCol={true}>
          <HomeFourColumnProduct data={data?.slider_products} style="horizontal" />
        </WrapperComponent>
      )}

      {/* Social Media */}
      {data?.social_media?.banners?.length && data?.social_media?.status && (
        <WrapperComponent classes={{ sectionClass: "instagram ratio_square overflow-hidden" }}>
          <HomeSocialMedia media={data?.social_media || []} type="borderless" />
        </WrapperComponent>
      )}

      {/* Brand */}
      {data?.brand?.status && (
        <WrapperComponent classes={{ sectionClass: "section-b-space" }}>
          <HomeBrand brandIds={data?.brand?.brand_ids || []} />
        </WrapperComponent>
      )}
    </>
  );
};

export default Fashion2;
