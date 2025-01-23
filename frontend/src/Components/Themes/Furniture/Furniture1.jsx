"use client";
import ImageLink from "@/Components/Widgets/ImageLink";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import React, { useContext, useEffect, useState } from "react";
import HomeBlog from "../Widgets/HomeBlog";
import HomeBrand from "../Widgets/HomeBrand";
import HomeProductTab from "../Widgets/HomeProductTab";
import HomeSlider from "../Widgets/HomeSlider";
import HomeTitle from "../Widgets/HomeTitle";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import BrandIdsContext from "@/Context/BrandIdsContext";
import Loader from "@/Layout/Loader";

const Furniture1 = ({ slug }) => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "furniture_one" });
  const [banners, setBanners] = useState([]);
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { setGetBlogIds, isLoading: blogLoading } = useContext(BlogIdsContext);
  const { setGetBrandIds, isLoading: brandLoading } = useContext(BrandIdsContext);

  useEffect(() => {
    const bannersArray = [];
    if (data?.offer_banner?.banner_1?.status) {
      bannersArray.push(data?.offer_banner?.banner_1);
    }
    if (data?.offer_banner?.banner_2?.status) {
      bannersArray.push(data?.offer_banner?.banner_2);
    }
    if (data?.offer_banner?.banner_3?.status) {
      bannersArray.push(data?.offer_banner?.banner_3);
    }
    setBanners(bannersArray);
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
    document.body.classList.add("home");
    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  useSkeletonLoader2([blogLoading, brandLoading]);
  if (isLoading && document.body) return <Loader />;

  return (
    <>
      {/* Home Banner  */}
      <WrapperComponent classes={{ sectionClass: "p-0 overflow-hidden", fluidClass: "slide-1 home-slider" }} noRowCol={true}>
        <HomeSlider bannerData={data?.home_banner} height={650} width={1920} />
      </WrapperComponent>

      {/* Offer Banner */}
      {banners && banners?.length && (
        <WrapperComponent classes={{ sectionClass: "ratio_45 banner-padding", fluidClass: "container-fluid" }} customCol={true}>
          {banners?.map(
            (banner, index) =>
              banner?.status && (
                <div key={index} className={banners.length === 3 ? "col-md-4 col-sm-6" : banners.length === 2 ? "col-6" : "col-12"}>
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
              )
          )}
        </WrapperComponent>
      )}

      {/* Product List */}
      {data?.category_product?.status && (
        <>
          <HomeTitle title={data?.category_product} type="basic" />
          <WrapperComponent classes={{ sectionClass: "section-b-space category-tab-section pt-0 ", fluidClass: "container" }} noRowCol={true}>
            <HomeProductTab categoryIds={data?.category_product?.category_ids} style="vertical" isFilterCategoryDataNested={true} customSelect={true}/>
          </WrapperComponent>
        </>
      )}

      {/* Full Or parallax Banner */}
      {data?.full_banner?.status && (
        <WrapperComponent classes={{ sectionClass: data?.category_product?.status ? "p-0" : "section-t-space" }} noRowCol={true}>
          <ImageLink imgUrl={data?.full_banner} height={562} width={1835} />
        </WrapperComponent>
      )}

      {/* Featured Blogs */}
      {data?.featured_blogs?.status && (
        <WrapperComponent classes={{ sectionClass: "blog blog-2 section-b-space ratio3_2", fluidClass: "container" }} colProps={{ md: "12" }}>
          <HomeTitle title={data?.featured_blogs} type="basic" space={false} />
          <HomeBlog blogIds={data?.featured_blogs?.blog_ids || []} />
        </WrapperComponent>
      )}

      {/* Brand */}
      {data?.brand?.status && (
        <WrapperComponent classes={{ sectionClass: "section-b-space pt-0" }} noRowCol={true}>
          <HomeBrand brandIds={data?.brand?.brand_ids || []} />
        </WrapperComponent>
      )}
    </>
  );
};

export default Furniture1;
