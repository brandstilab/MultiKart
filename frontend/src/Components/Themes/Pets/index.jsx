"use client";
import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { dogCategorySlider, horizontalProductSlider } from "@/Data/SliderSetting";
import Btn from "@/Elements/Buttons/Btn";
import Loader from "@/Layout/Loader";
import { ImagePath, storageURL } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import HomeBlog from "../Widgets/HomeBlog";
import HomeBrand from "../Widgets/HomeBrand";
import HomeProduct from "../Widgets/HomeProduct";
import HomeSlider from "../Widgets/HomeSlider";

const PetsHomePage = ({ slug }) => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "pets" });
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { isLoading: blogLoading } = useContext(BlogIdsContext);
  const { isLoading: brandLoading } = useContext(BrandIdsContext);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    if (data?.products_ids?.length > 0) {
      setGetProductIds({ ids: Array.from(new Set(data?.products_ids))?.join(",") });
    }
    if (data?.brands?.brand_ids?.length > 0) {
      setGetBrandIds({ ids: Array.from(new Set(data?.brands?.brand_ids))?.join(",") });
    }
    if (data?.offer_banner?.banners?.length > 0) {
      let banners = data?.offer_banner?.banners?.filter((item) => item?.status);
      setBanners(banners);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [isLoading]);

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
      {/* Home Banner */}
      <WrapperComponent classes={{ sectionClass: "p-0 height-85 tools_slider", fluidClass: "home-slider" }} noRowCol={true}>
        <HomeSlider bannerData={data?.home_banner} height={535} width={1850} />
      </WrapperComponent>

      {/* Brands */}
      {data?.brand?.status && (
        <section className="section-t-space blog-wo-bg">
          <HomeBrand brandIds={data?.brand?.brand_ids || []} sliderOptions={dogCategorySlider} />
        </section>
      )}

      {/* Banners */}
      {banners && banners.length && (
        <WrapperComponent classes={{ sectionClass: "section-t-space ratio2_1 banner-section", fluidClass: "container", row: "g-sm-4 g-3" }} customCol={true}>
          {banners?.map((banner, i) => (
            <>
              {banners.length >= 2 ? (
                <div key={i} className={banners.length == 5 && (i == 3 || i == 4) ? "col-6" : banners.length == 4 || banners.length == 2 ? "col-6" : "col-lg-4 col-6"}>
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
              ) : (
                <Col xs="12">
                  <ImageLink imgUrl={banner} bgImg={true} />
                </Col>
              )}
            </>
          ))}
        </WrapperComponent>
      )}

      {/* Products List 1 */}
      {data?.products_list_1?.status && (
        <WrapperComponent classes={{ sectionClass: "pt-0 pets-box", fluidClass: "container" }} noRowCol={true}>
          <TitleBox title={data?.products_list_1} type="jewellery" />
          <HomeProduct style="vertical" productIds={data?.products_list_1?.product_ids || []} sliderOptions={horizontalProductSlider} slider={true} />
        </WrapperComponent>
      )}

      {/* Parallax Banner  */}
      {data?.parallax_banner?.status && (
        <section className="pet-parallax">
          <div className="full-banner parallax text-center bg-size" style={{ backgroundImage: `url( ${storageURL + data?.parallax_banner?.image_url})` }}>
            <img src={storageURL + data?.parallax_banner?.image_url} alt="" className="bg-img" />
            <Container>
              <Row>
                <Col>
                  <div className="banner-contain">
                    <h4>{data?.parallax_banner?.main_title}</h4>
                    <h3>{data?.parallax_banner?.title}</h3>
                    <p>{data?.parallax_banner?.description}</p>
                    {data?.parallax_banner?.button_text && <Btn className=" btn-solid">{data?.parallax_banner?.button_text}</Btn>}
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="pet-decor">
              <Image src={`${ImagePath}/dog.png`} alt="dog" className="img-fluid" height={421} width={315} />
            </div>
          </div>
        </section>
      )}

      {/* Products List 2  */}
      {data?.products_list_2?.status && (
        <WrapperComponent classes={{ sectionClass: "pets-box", fluidClass: "container" }} noRowCol={true}>
          <TitleBox title={data?.products_list_2} type="jewellery" space={false} />
          <HomeProduct style="vertical" productIds={data?.products_list_2?.product_ids || []} sliderOptions={horizontalProductSlider} slider={true} />
        </WrapperComponent>
      )}

      {/* Featured Blogs */}
      {data?.featured_blogs?.status && (
        <>
          <Container>
            <TitleBox title={data?.featured_blogs} type="jewellery" space={true} />
          </Container>
          <WrapperComponent classes={{ sectionClass: "section-b-space blog pt-0 blog_box ratio2_3", fluidClass: "container" }} noRowCol={true}>
            <HomeBlog blogIds={data?.featured_blogs?.blog_ids || []} />
          </WrapperComponent>
        </>
      )}
    </>
  );
};

export default PetsHomePage;
