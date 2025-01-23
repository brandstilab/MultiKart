"use client";
import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { horizontalProductSlider, surfboardCategorySlider } from "@/Data/SliderSetting";
import Loader from "@/Layout/Loader";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import React, { useContext, useEffect, useState } from "react";
import HomeBrand from "../Widgets/HomeBrand";
import HomeCategorySidebar from "../Widgets/HomeCategorySidebar";
import HomeProduct from "../Widgets/HomeProduct";
import HomeProductTab from "../Widgets/HomeProductTab";
import HomeSlider from "../Widgets/HomeSlider";
import HomeSocialMedia from "../Widgets/HomeSocialMedia";

const Surfboard = ({ slug }) => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "surfboard" });
  const { setGetBrandIds, isLoading: brandLoading } = useContext(BrandIdsContext);
  const { isLoading: blogLoading } = useContext(BlogIdsContext);
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    isLoading && refetch();
  }, [isLoading]);

  useEffect(() => {
    if (data?.products_ids?.length > 0) {
      setGetProductIds({ ids: Array.from(new Set(data?.products_ids))?.join(",") });
    }
    if (data?.brands?.brand_ids?.length > 0) {
      setGetBrandIds({ ids: Array.from(new Set(data?.brands?.brand_ids))?.join(",") });
    }
    if (data?.offer_banner?.banners?.length > 0) {
      const banners = data?.offer_banner?.banners?.filter((banner) => banner?.status);
      setBanners(banners);
    }
  }, [data]);

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
      <WrapperComponent classes={{ sectionClass: "p-0", fluidClass: "home-slider" }} noRowCol={true}>
        <HomeSlider bannerData={data?.home_banner} height={729} width={1850} />
      </WrapperComponent>

      {/* Categories */}
      {data?.categories?.status && (
        <WrapperComponent classes={{ sectionClass: "section-b-space pt-0 no-arrow", fluidClass: "container" }} noRowCol={true}>
          <TitleBox title={data?.categories} type="basic" />
          <HomeCategorySidebar style="basic" categoryIds={data?.categories?.category_ids || []} sliderOptions={surfboardCategorySlider} slider={true} />
        </WrapperComponent>
      )}

      {/* Products List */}
      {data?.products_list?.status && (
        <>
          <WrapperComponent classes={{ sectionClass: "p-0", fluidClass: "tab-bg tab-grey-bg w-100 overflow-hidden" }}>
            <div className="container">
              <TitleBox title={data?.products_list} type="basic" space={false} />
              <HomeProduct productIds={data?.products_list?.product_ids} style="vertical" slider={true} sliderOptions={horizontalProductSlider} />
            </div>
          </WrapperComponent>
        </>
      )}

      {banners.length && (
        <WrapperComponent classes={{ sectionClass: "banner-6 ratio2_1 section-t-space section-b-space", fluidClass: "container", row: "g-sm-4 g-3" }} customCol={true}>
          {banners?.map((banner, i) => (
            <div className="col-6">
              <ImageLink imgUrl={banner} bgImg="true" />
            </div>
          ))}
        </WrapperComponent>
      )}

      {/* Category Products  */}
      {data?.category_product?.status && (
        <WrapperComponent classes={{ sectionClass: "p-0", fluidClass: "tab-bg tab-grey-bg w-100 overflow-hidden" }}>
          <div className="container">
            <TitleBox title={data?.category_product} type="basic" space={false} />
            <HomeProductTab style="vertical" title={data?.category_product} categoryIds={data?.category_product?.category_ids} />
          </div>
        </WrapperComponent>
      )}

      {/*Social Media  */}
      {data?.social_media?.banners?.length && data?.social_media?.status && (
        <section className="instagram ratio_square section-b-space">
          <HomeSocialMedia media={data?.social_media || []} type="borderless" classes="container" />
        </section>
      )}

      {/* Brand */}
      {data?.brand?.status && (
        <section className="section-b-space">
          <HomeBrand bgLight={true} brandIds={data?.brand?.brand_ids || []} />
        </section>
      )}
    </>
  );
};

export default Surfboard;
