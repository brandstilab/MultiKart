import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { horizontalProductSlider,instagramSlider5 } from "@/Data/SliderSetting";
import Loader from "@/Layout/Loader";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import React, { useContext, useEffect } from "react";
import HomeBlog from "../Widgets/HomeBlog";
import HomeBrand from "../Widgets/HomeBrand";
import HomeProduct from "../Widgets/HomeProduct";
import HomeProductTab from "../Widgets/HomeProductTab";
import HomeServices from "../Widgets/HomeService";
import HomeSlider from "../Widgets/HomeSlider";
import HomeSocialMedia from "../Widgets/HomeSocialMedia";

const FlowerHomePage = () => {
  const { data, refetch, isLoading } = useCustomDataQuery({ params: "flower" });
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
        <HomeSlider bannerData={data?.home_banner} height={724} width={1835} />
      </WrapperComponent>

      {/* Collection Banners */}
      <WrapperComponent classes={{ sectionClass: "banner-padding pb-0", fluidClass: "container", row: "g-4" }} customCol={true}>
        {data?.offer_banner?.banner_1?.status && (
          <div className={data?.offer_banner?.banner_2?.status ? "col-md-4" : "col-12"}>
            <div className="position-relative">
              <ImageLink imgUrl={data?.offer_banner?.banner_1} height={505} width={440} />
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
              <ImageLink imgUrl={data?.offer_banner?.banner_2} height={490} width={909} />
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

      {/* Product List 1 */}
      {data?.category_product?.status && (
        <>
          <WrapperComponent classes={{ sectionClass: "section-b-space", fluidClass: "full-box container" }} noRowCol={true}>
            <TitleBox type="premium" title={data?.products_list_1} />
            <HomeProduct productIds={data?.products_list_1?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider} />
          </WrapperComponent>
        </>
      )}

      {/* Parallax Products */}
      {data?.category_product?.status && (
        <div className="bg-block">
          <WrapperComponent classes={{ sectionClass: "p-0", fluidClass: "container-fluid p-0" }}>
            <TitleBox space={false} title={data?.category_product} type="basic" />
            <HomeProductTab product_box_style="horizontal" categoryIds={data?.category_product?.category_ids || []} style="horizontal" />
          </WrapperComponent>
        </div>
      )}

      {/* Product List 2 */}
      {data?.products_list_2?.status && (
        <>
          <WrapperComponent classes={{ sectionClass: "section-b-space", fluidClass: "container" }}>
            <TitleBox type="premium" title={data?.products_list_2} />
            <HomeProduct productIds={data?.products_list_2?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider} />
          </WrapperComponent>
        </>
      )}

      {/* Featured Blogs */}
      {data?.featured_blogs?.status && (
        <>
          <WrapperComponent classes={{ sectionClass: "blog flower-bg section-b-space ratio3_2", fluidClass: "container" }} colProps={{ md: "12" }}>
            <TitleBox title={data?.featured_blogs} type="premium" />
            <HomeBlog blogEffect="basic-effect" blogIds={data?.featured_blogs?.blog_ids || []} />
          </WrapperComponent>
        </>
      )}
      {/* Services   */}
      {data?.services && (
        <div className="container">
          <WrapperComponent classes={{ sectionClass: "service wo-box border-section section-b-space border-top-0" }}>
            <HomeServices services={data?.services?.banners || []} type="simple" />
          </WrapperComponent>
        </div>
      )}

      {/* Social Media */}
      {data?.social_media?.banners?.length && data?.social_media?.status && (
        <WrapperComponent classes={{ sectionClass: "instagram ratio_square section-b-space", fluidClass: "container" }} noRowCol={true}>
          <HomeSocialMedia sliderOptions={instagramSlider5} media={data?.social_media || []} type="borderless" classes="container-fluid" />
        </WrapperComponent>
      )}

      {/* Brand */}
      {data?.brand?.status && (
        <section className="section-b-space pt-0">
          <HomeBrand brandIds={data?.brand?.brand_ids || []} />
        </section>
      )}
    </>
  );
};

export default FlowerHomePage;
