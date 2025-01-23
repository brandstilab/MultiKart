import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import Loader from "@/Layout/Loader";
import { storageURL } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import React, { useContext, useEffect } from "react";
import HomeBlog from "../Widgets/HomeBlog";
import HomeBrand from "../Widgets/HomeBrand";
import HomeProduct from "../Widgets/HomeProduct";
import HomeSlider from "../Widgets/HomeSlider";
import HomeSocialMedia from "../Widgets/HomeSocialMedia";
import { instagramSlider6 } from "@/Data/SliderSetting";

const GymHomePage = () => {
  const { data, refetch, isLoading } = useCustomDataQuery({ params: "gym" });
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { setGetBrandIds, isLoading: brandLoading } = useContext(BrandIdsContext);
  const { isLoading: blogLoading } = useContext(BlogIdsContext);

  useEffect(() => {
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
        <HomeSlider bannerData={data?.home_banner} height={821} width={1835} />
      </WrapperComponent>

      {/* Offer Banners */}
      <WrapperComponent classes={{ sectionClass: "banner-padding gym-banner", fluidClass: "container-fluid", row: "g-4" }} customCol={true}>
        {data?.offer_banner?.banner_1?.status && (
          <div className={data?.offer_banner?.banner_2?.status ? "col-md-4" : "col-12"}>
            <div className="position-relative">
              <ImageLink imgUrl={data?.offer_banner?.banner_1} height={472} width={587} />
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
        {data?.offer_banner?.banner_2?.status && (
          <div className={data?.offer_banner?.banner_1?.status ? "col-md-8" : "col-12"}>
            <div className="position-relative">
              <ImageLink imgUrl={data?.offer_banner?.banner_2} height={470} width={1200} />
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

      {/* Product List */}
      {data?.products_list?.status && (
        <>
          <TitleBox type="basic" title={data?.products_list} />
          <WrapperComponent classes={{ sectionClass: "pt-0 section-b-space", fluidClass: "container", row: "partition-cls" }} customCol={false}>
            <HomeProduct productIds={data?.products_list?.product_ids || []} style="vertical" />
          </WrapperComponent>
        </>
      )}

      {/* Parallax Products */}
      {data?.parallax_product?.status && (
        <div className="full-banner gym-parallax parallax p-0 bg-size" style={{ backgroundImage: `url(${storageURL + data?.parallax_product?.image_url})` }}>
          <WrapperComponent classes={{ sectionClass: "section-b-space", fluidClass: "container" }} noRowCol={true}>
            <TitleBox space={false} title={data?.parallax_product} type="basic" />
            <HomeProduct productIds={data?.parallax_product?.product_ids || []} style="vertical" />
          </WrapperComponent>
        </div>
      )}

      {/* Featured Blogs */}
      {data?.featured_blogs?.status && (
        <>
          <TitleBox title={data?.featured_blogs} type="basic" />
          <WrapperComponent classes={{ sectionClass: "blog pt-0 ratio2_3", fluidClass: "container" }}>
            <HomeBlog blogEffect="basic-effect" blogIds={data?.featured_blogs?.blog_ids || []} />
          </WrapperComponent>
        </>
      )}

      {/* Social Media */}
      {data?.social_media?.status && (
        <WrapperComponent classes={{ sectionClass: "instagram ratio_square", fluidClass: "container" }}>
          <HomeSocialMedia sliderOptions={instagramSlider6} media={data?.social_media || []} type="borderless" />
        </WrapperComponent>
      )}

      {/* Brand */}
      {data?.brand?.status && (
        <section className="section-b-space blog-wo-bg">
          <HomeBrand brandIds={data?.brand?.brand_ids || []} />
        </section>
      )}
    </>
  );
};

export default GymHomePage;
