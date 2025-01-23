import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import Loader from "@/Layout/Loader";
import { ImagePath, storageURL } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { Container } from "reactstrap";
import HomeBrand from "../Widgets/HomeBrand";
import HomeProduct from "../Widgets/HomeProduct";
import HomeProductTab from "../Widgets/HomeProductTab";
import HomeSlider from "../Widgets/HomeSlider";
import HomeSocialMedia from "../Widgets/HomeSocialMedia";
import { instagramSlider5 } from "@/Data/SliderSetting";

const BicycleHomePage = () => {
  const { data, refetch, isLoading } = useCustomDataQuery({ params: "bicycle" });
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
      <WrapperComponent classes={{ sectionClass: "p-0 position-relative height-85", fluidClass: "home-slider" }} noRowCol={true}>
        <HomeSlider bannerData={data?.home_banner} height={821} width={1835} />
      </WrapperComponent>

      {/* Product List */}
      {data?.products_list?.status && (
        <section className="section-b-space pt-0 position-relative overflow-hidden">
          <div className="animated-wheel d-md-block d-none">
            <img src={`${ImagePath}/bicycle/wheel.png`} className="img-fluid" alt="wheel" />
          </div>
          <TitleBox type="basic" title={data?.products_list} />
          <Container>
            <HomeProduct productIds={data?.products_list?.product_ids || []} style="vertical" />
          </Container>
        </section>
      )}

      {/* Banner */}
      {data?.banner?.status && (
        <section className="p-0 overflow-cls">
          <Image height={640} width={1835} src={storageURL + data?.banner?.image_url} alt="banner" className="img-fluid w-100" />
        </section>
      )}

      {/* Category Products */}
      {data?.category_product?.status && (
        <WrapperComponent classes={{ sectionClass: `ratio2_3 pt-1${!data?.banner?.status ? "pt-1" : ""}`, fluidClass: "container" }} noRowCol={true}>
          <TitleBox title={data?.category_product} type="basic" />
          <HomeProductTab categoryIds={data?.category_product?.category_ids} style="vertical" />
        </WrapperComponent>
      )}

      {/* Offer Banners */}
      {(data?.offer_banner?.banner_1?.status || data?.offer_banner?.banner_2?.status) && (
        <WrapperComponent classes={{ sectionClass: "pb-0 ratio2_1 banner-section", fluidClass: "container-fluid", row: "g-sm-4 g-3" }} customCol={true}>
          {data?.offer_banner?.banner_1?.status && (
            <div className={data?.offer_banner?.banner_2?.status ? "col-md-6" : "col-12"}>
              <div className="position-relative">
                <ImageLink imgUrl={data?.offer_banner?.banner_1} height={446} width={893} />
              </div>
            </div>
          )}
          {data?.offer_banner?.banner_2?.status && (
            <div className={data?.offer_banner?.banner_1?.status ? "col-md-6" : "col-12"}>
              <div className="position-relative">
                <ImageLink imgUrl={data?.offer_banner?.banner_2} height={446} width={893} />
              </div>
            </div>
          )}
        </WrapperComponent>
      )}

      {/* Social Media */}
      {data?.social_media?.status && (
        <section className="instagram ratio_square">
          <HomeSocialMedia sliderOptions={instagramSlider5} media={data?.social_media || []} type="borderless" classes="container" />
        </section>
      )}

      {/* Brand */}
      {data?.brand?.status && (
        <section className="section-b-space blog-wo-bg">
          <HomeBrand brandIds={data?.brand?.brand_ids || []} bgLight={false} />
        </section>
      )}
    </>
  );
};

export default BicycleHomePage;
