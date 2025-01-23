"use client";
import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { horizontalProductSlider } from "@/Data/SliderSetting";
import Loader from "@/Layout/Loader";
import { Href, storageURL } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Col } from "reactstrap";
import HomeBrand from "../Widgets/HomeBrand";
import HomeProduct from "../Widgets/HomeProduct";
import HomeProductTab from "../Widgets/HomeProductTab";
import HomeSlider from "../Widgets/HomeSlider";
import Link from "next/link";

const Perfume = ({ slug }) => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "perfume" });
  const [banners, setBanners] = useState([]);
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
    if (data?.offer_banner_1?.banner_4?.status) {
      banners = [...banners, data?.offer_banner_1?.banner_4];
    }
    setBanners(banners);
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
      {/* Home Slider  */}
      <WrapperComponent classes={{ sectionClass: "p-0 position-relative overflow-hidden", fluidClass: "home-slider" }}>
        <HomeSlider bannerData={data?.home_banner} height={650} width={1920} />
      </WrapperComponent>

      {/* Offer Banners */}
      <WrapperComponent classes={{ sectionClass: "banner-padding banner-section ratio2_3", fluidClass: "container-fluid", row: "g-sm-4 g-3" }} customCol={true}>
        {banners.map((banner, i) =>
          banner?.status ? (
            <div key={i} className={`col-6 ${banners.length == 4 ? "col-lg-3" : banners.length == 3 ? "col-lg-4 col-sm-6 col-12" : banners.length == 2 ? "col-6" : "col-12"}`}>
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
          ) : null
        )}
      </WrapperComponent>

      {/* Category Products */}
      {data?.category_product?.status && (
        <>
          <WrapperComponent classes={{ sectionClass: "pt-0 section-b-space", fluidClass: "container" }} noRowCol={true}>
            <TitleBox title={data?.category_product} type="digital" />
            <HomeProductTab categoryIds={data?.category_product?.category_ids} style="vertical" />
          </WrapperComponent>
        </>
      )}

      {/* Collection Banner  */}
      {data?.collection_banner?.status && (
        <section className="p-0">
          <Image src={storageURL + data?.collection_banner?.image_url} alt={data?.collection_banner?.image_url} className="img-fluid w-auto h-auto" width={1835} height={590} />
        </section>
      )}

      {/* Product List And Offer Button */}
      {data?.product_list?.status && (
        <WrapperComponent classes={{ fluidClass: "container" }} customCol={true}>
          {data?.product_list?.left_panel?.status && (
            <>
              <Col xl="3" lg="4" className="order-lg-1">
                <div className="product-left-title right-content">
                  <div>
                    <h3>{data?.product_list?.left_panel?.title}</h3>
                    <p>{data?.product_list?.left_panel?.description}</p>
                    {data?.product_list?.left_panel?.more_button && (
                      <Link href={`/${data?.product_list?.left_panel?.redirect_link?.link_type=='collection'?'category':data?.product_list?.left_panel?.redirect_link?.link_type}/${data?.product_list?.left_panel?.redirect_link?.link}`} className="btn btn-outline btn-sm">
                        {data?.product_list?.left_panel?.button_text}
                      </Link>

                    )}
                  </div>
                </div>
              </Col>
              <div className={data?.product_list?.left_panel?.status ? "col-xl-9 col-lg-8" : "col-xl-12 col-lg-8"}>
                <HomeProduct slider={true} style="vertical" productIds={data?.product_list?.products?.product_ids || []} sliderOptions={horizontalProductSlider} />
              </div>
            </>
          )}
        </WrapperComponent>
      )}

      {/* Offer Banner 2 */}
      {data?.offer_banner_2?.status && (
        <WrapperComponent classes={{ fluidClass: "container" }} noRowCol={true}>
          <Image src={storageURL + data?.offer_banner_2?.image_url} alt="offer" className="img-fluid" width={1376} height={243} />
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

export default Perfume;
