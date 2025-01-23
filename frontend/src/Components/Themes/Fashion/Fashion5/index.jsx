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
import HomeBrand from "../../Widgets/HomeBrand";
import HomeCategorySidebar from "../../Widgets/HomeCategorySidebar";
import HomeProductTab from "../../Widgets/HomeProductTab";
import HomeSocialMedia from "../../Widgets/HomeSocialMedia";
import HomeTitle from "../../Widgets/HomeTitle";

const Fashion5 = ({ slug }) => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "fashion_five" });
  const [banners, setBanners] = useState([]);
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
    if (data?.knockout_deals) {
      let banners = [];
      if (data?.knockout_deals?.grid_banner_1?.status) {
        banners = [...banners, data?.knockout_deals?.grid_banner_1];
      }
      if (data?.knockout_deals?.grid_banner_2?.status) {
        banners = [...banners, data?.knockout_deals?.grid_banner_2];
      }
      if (data?.knockout_deals?.grid_banner_3?.status) {
        banners = [...banners, data?.knockout_deals?.grid_banner_3];
      }
      setBanners(banners);
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

  useSkeletonLoader2([productLoad, blogLoading, brandLoading]);
  if (isLoading && document.body) return <Loader />;

  return (
    <>
      {/* Home Banner  */}
      {data?.home_banner?.status && (
        <div className="home-slider-container">
          <WrapperComponent classes={{ sectionClass: "p-0" }} noRowCol={true}>
            <div className="home-slider">
              <div className="position-relative">
                <ImageLink imgUrl={data?.home_banner} height={500} width={1905} />
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
              </div>
            </div>
          </WrapperComponent>
        </div>
      )}

      {/* Product Categories */}
      {data?.categories?.status && (
        <WrapperComponent classes={{ sectionClass: "", fluidClass: "container" }} noRowCol={true}>
          <HomeTitle title={data?.categories} type="classic" />
          <HomeCategorySidebar style={"basic"} categoryIds={data?.categories?.category_ids || []} />
        </WrapperComponent>
      )}

      {/* Main Banner Or Knockout Deals */}
      {data?.deals_banner?.status && (
        <WrapperComponent classes={{ sectionClass: !data?.categories?.status ? "pt-5" : "p-0", fluidClass: "container" }}>
          <HomeTitle title={data?.deals_banner} type="classic" />
          <ImageLink imgUrl={data?.deals_banner} width={1376} height={443} />
        </WrapperComponent>
      )}

      {banners?.length ? (
        <WrapperComponent classes={{ sectionClass: "ratio_square banner-section ", fluidClass: "container", rowClass: "g-4" }} customCol={true}>
          {banners.map(
            (banner, i) =>
              banner?.status && (
                <div key={i} className={banners?.length === 3 ? "col-md-4" : banners?.length === 2 ? "col-md-6" : "col-12"}>
                  <ImageLink imgUrl={banner} bgImg={true} height={440} width={440} />
                </div>
              )
          )}
        </WrapperComponent>
      ) : null}

      {/* Products List */}
      {data?.category_product?.status && (
        <WrapperComponent classes={{ sectionClass: "section-b-space", fluidClass: "container" }} noRowCol={true}>
          <TitleBox title={data?.category_product} type="basic" space={false} />
          <HomeProductTab categoryIds={data?.category_product?.category_ids} style="vertical" />
        </WrapperComponent>
      )}

      {/* Offer Banner */}
      {data?.offer_banner?.status && (
        <WrapperComponent classes={{ sectionClass: "pt-0", fluidClass: "container" }} noRowCol={true}>
          <ImageLink imgUrl={data?.offer_banner} classes="'full-banner custom-space p-right text-end'" width={1376} height={409} />
        </WrapperComponent>
      )}

      {/* Social Media */}
      {data?.social_media?.banners?.length && data?.social_media?.status && (
        <section className="instagram insta-style ratio_square section-b-space">
          <HomeSocialMedia sliderOptions={instagramSlider5} media={data?.social_media || []} classes="container" type="classic" />
        </section>
      )}

      {/* Brands */}
      {data?.brand?.status && (
        <section className="section-b-space">
          <HomeBrand brandIds={data?.brand?.brand_ids || []} />
        </section>
      )}
    </>
  );
};
export default Fashion5;
