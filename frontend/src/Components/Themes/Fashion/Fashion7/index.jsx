"use client";
import ImageLink from "@/Components/Widgets/ImageLink";
import ProductBox from "@/Components/Widgets/ProductBox";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { productSlider3 } from "@/Data/SliderSetting";
import Btn from "@/Elements/Buttons/Btn";
import Loader from "@/Layout/Loader";
import request from "@/Utils/AxiosUtils";
import { ProductAPI } from "@/Utils/AxiosUtils/API";
import { ImagePath, storageURL } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import HomeBrand from "../../Widgets/HomeBrand";
import HomeProduct from "../../Widgets/HomeProduct";
import HomeTitle from "../../Widgets/HomeTitle";

const Fashion7 = ({ slug }) => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "fashion_seven" });
  const [page, setPage] = useState(1);
  const [infiniteScrollData, setInfiniteScrollData] = useState([]);
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

  const fetchData = async (key, page) => {
    return request({
      url: ProductAPI,
      params: {
        category_id: data?.products_list_1?.category_id?.join(",") || 28,
        page: page,
        status: 1,
        paginate: 4,
      },
    });
  };

  const {
    data: productdata,
    fetchNextPage,
    fetchStatus,
  } = useInfiniteQuery({
    queryKey: ["infiniteScroll"],
    retryOnMount: false,
    enabled: false,
    queryFn: ({ pageParam }) => fetchData("infiniteScroll", pageParam), // Pass pageParam to fetchData function
    getNextPageParam: (lastPage, pages) => pages.length + 1, // Determine next page number
  });

  useEffect(() => {
    fetchNextPage();
  }, [page]);

  useEffect(() => {
    if (productdata?.pages?.length > 0) {
      productdata?.pages[productdata?.pages?.length - 1]?.data?.data.length && setInfiniteScrollData([...infiniteScrollData, productdata?.pages[productdata?.pages?.length - 1]?.data?.data]);
    }
  }, [productdata]);

  useEffect(() => {
    isLoading && refetch();
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
      <WrapperComponent classes={{ sectionClass: "p-0 height-100 xs-responsive bg-white overflow-hidden", fluidClass: "home-slider" }} noRowCol={true}>
        <div className="position-relative">
          <ImageLink imgUrl={data?.home_banner} placeholder={`${ImagePath}/two_column_banner.png`} classes="'home'" bgImage={true} width={1847} height={980} />
          <div className="home-skeleton">
            <div className="skeleton-content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-sm-8 col-11">
                    <p className="card-text placeholder-glow row g-lg-4 g-sm-3 g-2">
                      <span className="col-7">
                        <span className="placeholder"></span>
                      </span>
                      <span className="col-9">
                        <span className="placeholder"></span>
                      </span>
                      <span className="col-6">
                        <span className="placeholder"></span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrapperComponent>

      <WrapperComponent classes={{ sectionClass: "banner-goggles banner-padding bg-white", fluidClass: "container-fluid", row: "row g-sm-4 g-3" }} customCol={true}>
        {data?.featured_banners?.banner_1?.status && (
          <Col md="6" className=" ratio_40">
            <div className="position-relative">
              <ImageLink imgUrl={data?.featured_banners?.banner_1} classes="'img-part'" bgImage={true} width={899} height={359} />
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
          </Col>
        )}
        {data?.featured_banners?.banner_2?.status && (
          <Col md="3" xs="6" className="ratio3_2 h-auto">
            <div className="position-relative">
              <ImageLink imgUrl={data?.featured_banners?.banner_2} classes="'img-part h-100'" bgImage={true} width={437} height={359} />
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
          </Col>
        )}
        {data?.featured_banners?.banner_3?.status && (
          <Col md="3" xs="6" className="ratio3_2 h-auto">
            <div className="position-relative">
              <ImageLink imgUrl={data?.featured_banners?.banner_3} classes="'img-part h-100'" bgImage={true} width={437} height={359} />
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
          </Col>
        )}
      </WrapperComponent>

      {data?.products_list_1?.status && (
        <WrapperComponent classes={{ sectionClass: "section-b-space pt-0 bg-white overflow-hidden" }}>
          <HomeTitle title={data?.products_list_1} type="basic" />
          <Container>
            <Row>
              <Col>
                <Row className="row-cols-lg-4 row-cols-md-3 row-cols-2 m-product infinite-product g-md-4 g-3">
                  {!isLoading &&
                    infiniteScrollData?.map((product, index) =>
                      product?.map((item) => (
                        <div className="d-block">
                          <ProductBox product={item} style={"vertical"} />
                        </div>
                      ))
                    )}
                </Row>
              </Col>
              {data?.products_list_1?.more_button && (
                <div className="col-12">
                  <div className="load-more-button text-center mt-4">
                    <Btn color="transparent" disabled={productdata?.pages?.[0]?.data?.last_page == infiniteScrollData.length} className={`${fetchStatus == "fetching" ? "loading" : ""} load-product btn-outline`} onClick={() => setPage(page + 1)}>
                      {productdata?.pages?.[0]?.data?.last_page == infiniteScrollData.length ? "No More Products" : "Load More"}
                    </Btn>
                  </div>
                </div>
              )}
            </Row>
          </Container>
        </WrapperComponent>
      )}

      {/* Product Banners */}
      {data?.product_banner?.status && (
        <WrapperComponent classes={{ sectionClass: "p-0 product-parallax " }} noRowCol={true}>
          <div className="section-b-space section-t-space bg-size" style={{ backgroundImage: `url(${storageURL + data?.product_banner?.image_url})` }}>
            <Image src={storageURL + data?.product_banner?.image_url} alt="banner" className="bg-img" width={1920} height={500} />
            <div className="ratio_square">
              <Container>
                <Row>
                  <Col lg="4" md="6" className="ms-auto">
                    <div className="theme-card card-border">
                      <div className="offer-slider">
                        <HomeProduct productIds={data?.product_banner?.product_ids} style="horizontal" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </WrapperComponent>
      )}

      {/* Products List */}
      {data?.products_list_2?.status && (
        <WrapperComponent classes={{ sectionClass: "", fluidClass: "container" }} noRowCol={true}>
          <Row>
            {data?.products_list_2?.left_panel?.status && (
              <Col xl="3" lg="4" className=" left-panel">
                <div className="product-left-title">
                  <div>
                    <h3>{data?.products_list_2?.left_panel?.title}</h3>
                    <p>{data?.products_list_2?.left_panel?.description}</p>
                    {data?.products_list_2?.left_panel?.more_button && (
                      <a href={`/category/${data?.products_list_2?.left_panel?.redirect_link?.link}`} className="btn btn-outline btn-sm">
                        {data?.products_list_2?.left_panel?.button_text}
                      </a>
                    )}
                  </div>
                </div>
              </Col>
            )}
            <div className={data?.products_list_2?.left_panel?.status ? "col-xl-9 col-lg-8" : "col-xl-12 col-lg-8"}>
              <HomeProduct productIds={data?.products_list_2?.products?.product_ids} style="vertical" slider="true" sliderOptions={productSlider3} />
            </div>
          </Row>
        </WrapperComponent>
      )}

      {/* Offer Banners */}
      <WrapperComponent classes={{ sectionClass: "pb-0 ratio2_1", fluidClass: "container" }} customCol={true}>
        {data?.offer_banner?.banner_1?.status && (
          <div className={data?.offer_banner?.banner_1?.status ? "col-6" : ""}>
            <ImageLink imgUrl={data?.offer_banner?.banner_1} classes="'img-part h-100'" bgImg={true} height={338} width={676} />
          </div>
        )}
        {data?.offer_banner?.banner_2?.status && (
          <div className={data?.offer_banner?.banner_2?.status ? "col-6" : ""}>
            <ImageLink imgUrl={data?.offer_banner?.banner_2} classes="'img-part h-100'" bgImg={true} height={338} width={676} />
          </div>
        )}
      </WrapperComponent>

      {/* Brand */}
      {data?.brand?.status && (
        <WrapperComponent classes={{ sectionClass: "section-b-space" }} noRowCol={true}>
          <HomeBrand brandIds={data?.brand?.brand_ids || []} />
        </WrapperComponent>
      )}
    </>
  );
};

export default Fashion7;
