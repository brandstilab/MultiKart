"use client";
import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { horizontalProductSlider, horizontalProductSlider5 } from "@/Data/SliderSetting";
import Loader from "@/Layout/Loader";
import { ImagePath } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import HomeBlog from "../Widgets/HomeBlog";
import HomeBrand from "../Widgets/HomeBrand";
import HomeProduct from "../Widgets/HomeProduct";
import HomeProductTab from "../Widgets/HomeProductTab";
import HomeSlider from "../Widgets/HomeSlider";
import HomeSocialMedia from "../Widgets/HomeSocialMedia";
import { brandSlider6 } from "@/Data/SliderSetting";

const Christmas = ({ slug }) => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "christmas" });
  const { setGetBrandIds, isLoading: brandLoading } = useContext(BrandIdsContext);
  const { isLoading: blogLoading } = useContext(BlogIdsContext);
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);

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
  }, [data]);

  useEffect(() => {
    document.body.classList.add("christmas", "home");
    return () => {
      document.body.classList.remove("christmas", "home");
    };
  }, []);

  useSkeletonLoader2([productLoad, blogLoading, brandLoading]);
  if (isLoading && document.body) return <Loader />;

  return (
    <>
      {/* Home Banner */}
      <WrapperComponent classes={{ sectionClass: "p-0 snow-slider", fluidClass: "home-slider" }} noRowCol={true}>
        <HomeSlider bannerData={data?.home_banner} height={650} width={1920} />
      </WrapperComponent>

      {/* Offer Banner 1 */}
      <WrapperComponent classes={{ sectionClass: "pb-0 ratio2_1 banner-section", fluidClass: "container", row: "g-sm-4 g-3" }} customCol={true}>
        {data?.offer_banner_1?.banner_1?.status && (
          <div className={data?.offer_banner_1?.banner_1?.status ? "col-6" : "col-12"}>
            <div className="position-relative">
              <ImageLink imgUrl={data?.offer_banner_1?.banner_1} placeholder={`${ImagePath}/two_column_banner.png`} height={350} width={776} />
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
        )}
        {data?.offer_banner_1?.banner_2?.status && (
          <div className={data?.offer_banner_1?.banner_2?.status ? "col-6" : "col-12"}>
            <div className="position-relative">
              <ImageLink imgUrl={data?.offer_banner_1?.banner_2} placeholder={`${ImagePath}/two_column_banner.png`} height={350} width={776} />
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
        )}
      </WrapperComponent>

      {/* Products List */}
      {data?.products_list?.status && (
        <>
          <TitleBox title={data?.products_list || []} type="basic" />
          <WrapperComponent classes={{ sectionClass: "section-b-space pt-0", fluidClass: "container" }} customCol={true}>
            <HomeProduct productIds={data?.products_list?.product_ids} style="vertical" slider="true" sliderOptions={horizontalProductSlider5} />
          </WrapperComponent>
        </>
      )}

      {/* Offer Banner 2 */}
      {data?.offer_banner_2?.status && (
        <section className="p-0 overflow-cls">
          <div className="full-banner py-0 text-center">
            <ImageLink imgUrl={data?.offer_banner_2} alt="offer" classes="img-fluid" width={1835} height={692} />
            <div className="decor">
              <Image src={`${ImagePath}/christmas/parall.png`} className="img-fluid" alt="christmas-parall" height={150} width={125} />
            </div>
          </div>
        </section>
      )}

      {/* Category Products 1 Tab  */}
      {data?.category_product_1?.status && (
        <>
          <TitleBox title={data?.category_product_1} type="basic" />
          <WrapperComponent classes={{ sectionClass: "section-b-space product-christmas pt-0", fluidClass: "container" }} noRowCol={true}>
            <HomeProductTab categoryIds={data?.category_product_1?.category_ids} style="vertical" slider={true} sliderOptions={horizontalProductSlider} />
          </WrapperComponent>
        </>
      )}

      {/* Offer Banner 3 */}
      {data?.offer_banner_3?.status && (
        <section className="p-0 overflow-cls">
          <ImageLink imgUrl={data?.offer_banner_3} height={731} width={1835} />
        </section>
      )}

      {/* Category Products 2 Tab  */}
      {data?.category_product_2?.status && (
        <>
          <TitleBox title={data?.category_product_2} type="basic" />
          <WrapperComponent classes={{ sectionClass: "section-b-space pt-0 product-christmas", fluidClass: "container" }} noRowCol={true}>
            <HomeProductTab categoryIds={data?.category_product_2?.category_ids} style="vertical" slider={true} sliderOptions={horizontalProductSlider} />
          </WrapperComponent>
        </>
      )}

      {/* Featured Blogs */}
      {data?.featured_blogs?.status && (
        <WrapperComponent classes={{ sectionClass: "blog-section grey-bg section-b-space ratio2_3", fluidClass: "container" }} noRowCol={true}>
          <TitleBox title={data?.featured_blogs} type="basic" space={false} />
          <HomeBlog blogIds={data?.featured_blogs?.blog_ids || []} type="simple" />
        </WrapperComponent>
      )}

      {/* Social Media  */}
      {data?.social_media?.banners?.length && data?.social_media?.status && (
        <WrapperComponent classes={{ sectionClass: "instagram ratio_square" }}>
          <div className="insta-decor">
            <Image src={`${ImagePath}/christmas/insta.png`} alt="insta-decor" className="img-fluid" width={193} height={170} />
          </div>
          <HomeSocialMedia media={data?.social_media || []} type="borderless" classes="container" />
        </WrapperComponent>
      )}

      {/* Brand */}
      {data?.brand?.status && (
        <WrapperComponent classes={{ sectionClass: "section-b-space logo-section blog-wo-bg" }}>
          <div className="logo-decor">
            <Image src={`${ImagePath}/christmas/footer-decor.png`} alt="footer-decor" className="img-fluid" width={170} height={193} />
          </div>
          <HomeBrand sliderOptions={brandSlider6} bgLight={false} brandIds={data?.brand?.brand_ids || []} />
        </WrapperComponent>
      )}
    </>
  );
};

export default Christmas;
