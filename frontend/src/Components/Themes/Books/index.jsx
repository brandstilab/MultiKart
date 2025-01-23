"use client";
import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { bookSlider, categorySlider5, horizontalProductSlider5 } from "@/Data/SliderSetting";
import Loader from "@/Layout/Loader";
import { storageURL } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import HomeBlog from "../Widgets/HomeBlog";
import HomeBrand from "../Widgets/HomeBrand";
import HomeCategorySidebar from "../Widgets/HomeCategorySidebar";
import HomeFourColumnProduct from "../Widgets/HomeFourColumnProduct";
import HomeProduct from "../Widgets/HomeProduct";
import HomeProductTab from "../Widgets/HomeProductTab";
import HomeSlider from "../Widgets/HomeSlider";
import HomeTitle from "../Widgets/HomeTitle";

const BooksHomePage = () => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "books" });
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { setGetBrandIds, isLoading: brandLoading } = useContext(BrandIdsContext);
  const { setGetBlogIds, isLoading: blogLoading } = useContext(BlogIdsContext);
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
    // if (data?.featured_blogs?.blog_ids?.length > 0) {
    //   setGetBlogIds({ ids: Array.from(new Set(data?.featured_blogs?.blog_ids))?.join(",") });
    // }
  }, [data]);

  useEffect(() => {
    document.body.classList.add("home", "header-style-light");
    return () => {
      document.body.classList.remove("home", "header-style-light");
    };
  }, []);

  useSkeletonLoader2([productLoad, blogLoading, brandLoading]);
  if (isLoading && document.body) return <Loader />;

  return (
    <>
      {/* Home Section*/}
      <WrapperComponent classes={{ sectionClass: "p-0 layout-7", fluidClass: "home-slider" }} noRowCol={true}>
        <HomeSlider bannerData={data?.home_banner} height={620} width={1835} />
      </WrapperComponent>

      {/* Categories 1  */}
      {data?.categories_1?.status && (
        <WrapperComponent classes={{ sectionClass: `vector-category`, fluidClass: "container" }} noRowCol={true}>
          <div className="vector-slide-8 category-slide ratio_square">
            <HomeCategorySidebar categoryIds={data?.categories_1?.category_ids || []} style="books" sliderOptions={bookSlider} />
          </div>
        </WrapperComponent>
      )}

      {/* Product slider*/}
      {data?.category_product?.status && (
        <WrapperComponent classes={{ sectionClass: "section-b-space", fluidClass: "container" }}>
          <HomeTitle title={data?.category_product} type="standard" />
          <HomeProductTab paginate={5} categoryIds={data?.category_product?.category_ids} style="vertical" classes="row-cols-xl-5 row-cols-xl-4 row-cols-md-3 row-cols-2" sliderOptions={horizontalProductSlider5} />
        </WrapperComponent>
      )}

      {data?.categories_2?.status && (
        <Container className="category-button">
          <section className="section-b-space border-section border-bottom-0">
            <HomeCategorySidebar categoryIds={data?.categories_2?.category_ids || []} style="books2" sliderOptions={categorySlider5} />
          </section>
        </Container>
      )}

      {/* Four Column Product */}
      {data?.slider_products?.status && (
        <section className="section-b-space card-white-bg bg-size" style={{ backgroundImage: `url(${storageURL + data?.slider_products?.image_url})` }}>
          <Container>
            <Row className="g-sm-4 g-3">
              <Col xs="12">
                <HomeTitle title={data?.slider_products} type="standard" />
              </Col>
            </Row>
            <HomeFourColumnProduct data={data?.slider_products} style="horizontal" />
          </Container>
        </section>
      )}

      {/* Offer Banners */}
      {(data?.offer_banner?.banner_1?.status || data?.offer_banner?.banner_2?.status) && (
        <WrapperComponent classes={{ sectionClass: "pb-0 ratio2_1 banner-section", fluidClass: "container", row: "g-sm-4 g-3" }} customCol={true}>
          {data?.offer_banner?.banner_1?.status && (
            <div className={data?.offer_banner?.banner_2?.status ? "col-md-6" : "col-12"}>
              <div className="position-relative">
                <ImageLink imgUrl={data?.offer_banner?.banner_1} height={338} width={676} />
              </div>
            </div>
          )}
          {data?.offer_banner?.banner_2?.status && (
            <div className={data?.offer_banner?.banner_1?.status ? "col-md-6" : "col-12"}>
              <div className="position-relative">
                <ImageLink imgUrl={data?.offer_banner?.banner_2} height={338} width={676} />
              </div>
            </div>
          )}
        </WrapperComponent>
      )}

      {/* Product Slider Section */}
      {data?.featured_blogs?.status && (
        <Container>
          <WrapperComponent classes={{ sectionClass: "section-b-space border-section border-top-0" }}>
            <HomeTitle title={data?.products_list} type="standard" />
            <HomeProduct productIds={data?.products_list?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider5} />
          </WrapperComponent>
        </Container>
      )}

      {/* Blog Section  */}
      {data?.featured_blogs?.status && (
        <WrapperComponent classes={{ sectionClass: "blog blog-section section-b-space ratio3_2", fluidClass: "container" }} colProps={{ md: "12" }}>
          <TitleBox title={data?.featured_blogs} type="standard" />
          <HomeBlog blogIds={data?.featured_blogs?.blog_ids || []} />
        </WrapperComponent>
      )}

      {/* Brand Section  */}
      {data?.brand?.status && (
        <section className="section-b-space pt-0">
          <HomeBrand brandIds={data?.brand?.brand_ids || []} />
        </section>
      )}
    </>
  );
};

export default BooksHomePage;
