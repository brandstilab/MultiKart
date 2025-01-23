import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { horizontalProductSlider5, vegetableSliderSetting } from "@/Data/SliderSetting";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader } from "@/Utils/Hooks/useSkeletonLoader";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import HomeBlog from "../../Widgets/HomeBlog";
import HomeBrand from "../../Widgets/HomeBrand";
import HomeCategorySidebar from "../../Widgets/HomeCategorySidebar";
import HomeProduct from "../../Widgets/HomeProduct";
import HomeServices from "../../Widgets/HomeService";
import HomeSlider from "../../Widgets/HomeSlider";
import HomeTitle from "../../Widgets/HomeTitle";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import Loader from "@/Layout/Loader";

const VegetablesFour = () => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "vegetables_four" });
  const [offerBanner1, setOfferBanner1] = useState([]);
  const [offerBanner2, setOfferBanner2] = useState([]);
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
    if (data?.offer_banner_1?.banners?.length > 0) {
      let banners = data?.offer_banner_1?.banners?.filter((item) => {
        return item?.status;
      });
      setOfferBanner1(banners);
    }
    if (data?.offer_banner_2?.banners?.length > 0) {
      let banners = data?.offer_banner_2?.banners?.filter((item) => {
        return item?.status;
      });
      setOfferBanner2(banners);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [isLoading]);

  useEffect(() => {
    document.body.classList.add("home", "mulish-font");
    return () => {
      document.body.classList.remove("home", "mulish-font");
    };
  }, []);

  useSkeletonLoader2([productLoad, blogLoading, brandLoading]);
  if (isLoading && document.body) return <Loader />;

  return (
    <>
      {/* Home Banner */}
      <WrapperComponent classes={{ sectionClass: "p-0 overflow-hidden", fluidClass: "home-slider" }} colProps={{ xl: "12" }}>
        <HomeSlider bannerData={data?.home_banner} height={526} width={1835} />
      </WrapperComponent>

      {/* Categories */}
      {data?.categories?.status && (
        <WrapperComponent classes={{ sectionClass: "vegetables-category", fluidClass: "container" }} noRowCol={true}>
          <div className="vector-slide-8 ratio_square">
            <HomeCategorySidebar categoryIds={data?.categories?.category_ids} style="vegetable"  sliderOptions={vegetableSliderSetting}/>
          </div>
        </WrapperComponent>
      )}

      {/* Offer Banner 1 */}
      {offerBanner1 && offerBanner1?.length && (
        <WrapperComponent classes={{ sectionClass: "banner-section ratio2_1", fluidClass: "container", row: "g-sm-4 g-2" }} customCol={true}>
          {offerBanner1?.map((banner, index) => (
            <div key={index} className={offerBanner1.length === 3 ? "col-lg-4 col-sm-6" : offerBanner1.length === 2 ? "col-6" : "col-12"}>
              <div className="position-relative">
                <ImageLink imgUrl={banner} bgImg={true} />
              </div>
            </div>
          ))}
        </WrapperComponent>
      )}

      {/* Product List 1  */}
      {data?.products_list_1?.status && (
        <WrapperComponent classes={{ sectionClass: "six-items", fluidClass: "container" }} customCol={false}>
          <Col xs="12">
            <TitleBox title={data?.products_list_1} type="vegetable" space={false} />
          </Col>
          <Col xs="12">
            <HomeProduct productIds={data?.products_list_1?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider5} />
          </Col>
        </WrapperComponent>
      )}

      {/* Product List 2  */}
      {data?.products_list_2?.status && (
        <WrapperComponent classes={{ sectionClass: "six-items", fluidClass: "container" }} customCol={false}>
          <Col xs="12">
            <TitleBox title={data?.products_list_2} type="vegetable" space={false} />
          </Col>
          <Col xs="12">
            <HomeProduct productIds={data?.products_list_2?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider5} />
          </Col>
        </WrapperComponent>
      )}

      {/* Offer Banner 2  */}
      {offerBanner2 && offerBanner2?.length && (
        <WrapperComponent classes={{ sectionClass: "gift-card-section ratio2_1 banner-section", fluidClass: "container" }} noRowCol={true}>
          <div className="card-box">
            <Row className="g-4">
              {offerBanner2?.map((banner, index) => (
                <div key={index} className={offerBanner2.length === 3 ? "col-md-4" : offerBanner2.length === 2 ? "col-md-6" : "col-12"}>
                  <ImageLink imgUrl={banner} bgImg={true} classes="collection-banner" />
                </div>
              ))}
            </Row>
          </div>
        </WrapperComponent>
      )}

      {/* Product List 3  */}
      {data?.products_list_3?.status && (
        <WrapperComponent classes={{ sectionClass: "six-items deal-product-space section-b-space", fluidClass: "container" }} customCol={false}>
          <Col xs="12">
            <TitleBox title={data?.products_list_3} type="vegetable" space={false} />
          </Col>
          <Col xs="12">
            <HomeProduct productIds={data?.products_list_3?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider5} />
          </Col>
        </WrapperComponent>
      )}

      {/* Services */}
      {data?.services && (
        <WrapperComponent classes={{ sectionClass: "service-w-bg banner-padding theme-bg-service pt-0", fluidClass: "container" }} noRowCol={true}>
          <HomeServices services={data?.services?.banners} />
        </WrapperComponent>
      )}

      {/* Product List 4  */}
      {data?.products_list_4?.status && (
        <WrapperComponent classes={{ sectionClass: "six-items", fluidClass: "container" }} customCol={false}>
          <Col xs="12">
            <TitleBox title={data?.products_list_4} type="vegetable" space={false} />
          </Col>
          <Col xs="12">
            <HomeProduct productIds={data?.products_list_4?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider5} />
          </Col>
        </WrapperComponent>
      )}

      {/* Featured Blogs */}
      {data?.featured_blogs?.status && (
        <WrapperComponent classes={{ sectionClass: "blog left-blog ratio3_2 section-b-space", fluidClass: "container" }} customCol={false}>
          <HomeTitle title={data?.featured_blogs} type="vegetable" space={false} />
          <HomeBlog blogIds={data?.featured_blogs?.blog_ids || []} />
          {/* <Col xs="12">
          </Col>
          <Col md="12">
          </Col> */}
        </WrapperComponent>
      )}

      {/* Brand */}
      {data?.brand?.status && (
        <section className="section-b-space">
          <HomeBrand brandIds={data?.brand?.brand_ids || []} />
        </section>
      )}
    </>
  );
};

export default VegetablesFour;
