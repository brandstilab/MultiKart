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
import { Col, Container, Modal, ModalBody, Row } from "reactstrap";
import HomeBlog from "../Widgets/HomeBlog";
import HomeBrand from "../Widgets/HomeBrand";
import HomeProduct from "../Widgets/HomeProduct";
import HomeServices from "../Widgets/HomeService";
import HomeSlider from "../Widgets/HomeSlider";
import HomeSocialMedia from "../Widgets/HomeSocialMedia";

const BeautyHomePage = () => {
  const { data, refetch, isLoading } = useCustomDataQuery({ params: "beauty" });
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { setGetBrandIds, isLoading: brandLoading } = useContext(BrandIdsContext);
  const { isLoading: blogLoading } = useContext(BlogIdsContext);
  const [openModal, setOpenModal] = useState(false);

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
        <HomeSlider bannerData={data?.home_banner} height={724} width={1835} />
      </WrapperComponent>

      {/* About Us  */}
      <WrapperComponent classes={{ sectionClass: `section-b-space beauty-about ${!data?.products_list_1?.status ? "pb-0" : ""}`, fluidClass: "container" }} customCol={true}>
        <Col xl="5" lg="6" md="12" className="offset-xl-1 text-center position-relative">
          <Image src={storageURL + data?.about_us?.image_url} alt={data?.about_us?.title} className="img-fluid lazyload" height={364} width={460} />
          <div className="skeleton-loader-img"></div>
        </Col>
        <Col xl="5" lg="6" md="12">
          <div className="about-section">
            <div>
              <h2>{data?.about_us?.title}</h2>
              <div className="about-text">
                <p>{data?.about_us?.description}</p>
                <p className="skeleton-text-p">
                  <span></span>
                  <span></span>
                </p>
              </div>
              {data?.about_us?.services && (
                <div className="service small-section pb-0">
                  <HomeServices services={data?.about_us?.services?.banners} type="simple" />
                </div>
              )}
            </div>
          </div>
        </Col>
      </WrapperComponent>

      {/* Products List 1 */}
      {data?.products_list_1?.status && (
        <>
          <TitleBox title={data?.products_list_1} type="basic" space={false} />
          <WrapperComponent classes={{ sectionClass: `pt-0`, fluidClass: "container" }} noRowCol={true}>
            <HomeProduct productIds={data?.products_list_1?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider} />
          </WrapperComponent>
        </>
      )}

      {/* Video Section */}
      {data?.product_video?.status && (
        <>
          <section className="video-section section-b-space pt-0">
            <TitleBox title={data?.product_video} type="basic" />
            <Container>
              <Row>
                <Col md="8" className="offset-md-2">
                  <a href={Href}>
                    <div className="video-img">
                      <img src={storageURL + data?.product_video?.image_url} alt={data?.product_video?.title} className="img-fluid lazyload" />
                      {data?.product_video?.video_url && (
                        <div className="play-btn" onClick={() => setOpenModal(true)}>
                          <span>
                            <i className="ri-play-fill" />
                          </span>
                        </div>
                      )}
                    </div>
                  </a>
                </Col>
              </Row>
            </Container>
          </section>
          <Modal centered size="lg" isOpen={openModal} fade toggle={() => setOpenModal(false)}>
            <div className="modal-content">
              <ModalBody>
                <video autoPlay="true" loop="true" className="w-100 h-100">
                  <source type="video/mp4" src={storageURL + data?.product_video?.video_url} />
                </video>
              </ModalBody>
            </div>
          </Modal>
        </>
      )}

      {/* Products List 2 */}
      {data?.products_list_2?.status && (
        <>
          <TitleBox title={data?.products_list_2} type="basic" space={false} />
          <WrapperComponent classes={{ sectionClass: `pt-0`, fluidClass: "container" }} noRowCol={true}>
            <HomeProduct productIds={data?.products_list_2?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider} />
          </WrapperComponent>
        </>
      )}

      {/* Featured Blogs */}
      {data?.featured_blogs?.status && (
        <>
          <TitleBox title={data?.featured_blogs} type="basic" />
          <WrapperComponent classes={{ sectionClass: `blog pt-0 ratio3_2 ${!data?.social_media?.status ? "section-b-space" : ""}`, fluidClass: "container" }} colProps={{ md: "12" }}>
            <HomeBlog blogIds={data?.featured_blogs?.blog_ids || []} />
          </WrapperComponent>
        </>
      )}

      {/* Social Media */}
      {data?.social_media?.banners?.length && data?.social_media?.status && (
        <section className="instagram section-b-space ratio_square">
          <HomeSocialMedia media={data?.social_media || []} classes="container" type="borderless" />
        </section>
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

export default BeautyHomePage;
