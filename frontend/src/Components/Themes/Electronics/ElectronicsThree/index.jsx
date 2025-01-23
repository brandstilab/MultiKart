import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { horizontalProductSlider5 } from "@/Data/SliderSetting";
import Loader from "@/Layout/Loader";
import { Href, storageURL } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import HomeBrand from "../../Widgets/HomeBrand";
import HomeCategorySidebar from "../../Widgets/HomeCategorySidebar";
import HomeProduct from "../../Widgets/HomeProduct";
import HomeProductTab from "../../Widgets/HomeProductTab";
import HomeServices from "../../Widgets/HomeService";
import HomeSlider from "../../Widgets/HomeSlider";

const ElectronicsThree = () => {
  const { data, refetch, isLoading } = useCustomDataQuery({ params: "electronics_three" });
  const { setGetProductIds, isRefetching: productLoad } = useContext(ProductIdsContext);
  const { isLoading: brandLoading } = useContext(BrandIdsContext);
  const { isLoading: blogLoading } = useContext(BlogIdsContext);

  useEffect(() => {
    if (data?.products_ids) {
      setGetProductIds({ ids: Array.from(new Set(data?.products_ids))?.join(",") });
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
      {/* Home Banners */}
      <WrapperComponent classes={{ sectionClass: "small-section pt-res-0", fluidClass: "container" }} noRowCol={true}>
        <div className="home-slider">
          <HomeSlider bannerData={data?.home_banner} height={539} width={1376} />
        </div>
      </WrapperComponent>

      {/* Services */}
      {data?.services && (
        <WrapperComponent classes={{ sectionClass: "service-w-bg pt-0 tools-service", fluidClass: "container" }} noRowCol={true}>
          <HomeServices services={data?.services?.banners} />
        </WrapperComponent>
      )}
      {/* Product List 1 */}
      {data?.products_list_1?.status && (
        <WrapperComponent classes={{ sectionClass: "ratio_square no-arrow", fluidClass: "container" }} colProps={{ xs: "12" }}>
          <TitleBox type="icon" title={data?.products_list_1} />
          <HomeProduct productIds={data?.products_list_1?.product_ids} slider={true} sliderOptions={horizontalProductSlider5} style="vertical" />
        </WrapperComponent>
      )}

      {/*Banners  */}
      <section className="banner-style-1">
        <div className="full-box">
          <Container>
            <Row className=" ratio2_1">
              {data?.banner?.main_banner?.status && (
                <Col lg="5" md="7" className="card-margin">
                  <div className="banner-padding pt-0">
                    <Link href={Href}>
                      <div className="collection-banner tl-content">
                        <ImageLink imgUrl={data?.banner.main_banner} bgImg={true} classes="img-part custom-height" />
                      </div>
                    </Link>
                  </div>
                </Col>
              )}
              <Col lg="4" md="5">
                <div className="banner-padding pt-0 ratio2_1">
                  <Container className=" p-0">
                    <Row>
                      {data?.banner?.grid_banner_1?.status && (
                        <Col xs="12" className=" mb-4">
                          <Link href={Href}>
                            <div className="collection-banner">
                              <ImageLink imgUrl={data?.banner.grid_banner_1} bgImg={true} classes="img-part" />
                            </div>
                          </Link>
                        </Col>
                      )}
                      {data?.banner?.grid_banner_2?.status && (
                        <Col xs="12" className="col-12">
                          <Link href={Href}>
                            <div className="collection-banner">
                              <ImageLink imgUrl={data?.banner.grid_banner_2} bgImg={true} classes="img-part" />
                            </div>
                          </Link>
                        </Col>
                      )}
                    </Row>
                  </Container>
                </div>
              </Col>
              {data?.banner?.grid_banner_3?.status && (
                <Col lg="3" xs="12" className="d-lg-block d-none">
                  <div className="banner-padding pt-0">
                    <Link href={Href}>
                      <div className="collection-banner tl-content">
                        <ImageLink imgUrl={data?.banner.grid_banner_3} bgImg={true} classes="img-part custom-height" />
                      </div>
                    </Link>
                  </div>
                </Col>
              )}
            </Row>
          </Container>
        </div>
      </section>

      {/* Category Product 1 */}
      {data?.category_product_1?.status && (
        <WrapperComponent classes={{ sectionClass: "container" }} customCol={true}>
          {data?.category_product_1?.categories?.status && (
            <Col xl="2" className=" d-xl-inline-block d-none ">
              <div className="left-header left-header-relative">
                <div className="metro">
                  <div className="main-menu">
                    <div className="menu-left">
                      <HomeCategorySidebar categoryIds={data?.category_product_1?.categories?.category_ids} style="vertical" />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          )}
          {data?.category_product_1?.products?.status && (
            <div className={data?.category_product_1?.categories?.status ? "col-xl-10" : "col-xl-12"}>
              <HomeProduct productIds={data?.category_product_1?.products?.product_ids || []} style="vertical" />
            </div>
          )}
        </WrapperComponent>
      )}

      {/* Offer Banner 2 */}
      {data?.offer_banner_1?.status && (
        <section className="container">
          <Image className="img-fluid" src={storageURL + data?.offer_banner_1?.image_url} height={211} width={1776} alt="offer-banner-2" />
        </section>
      )}

      <WrapperComponent classes={{ sectionClass: "ratio2_1 banner-padding", fluidClass: "container", row: "g-sm-4 g-3" }} customCol={true}>
        {data?.offer_banner_2?.banner_1?.status && (
          <div className={data?.offer_banner_2?.banner_2?.status ? "col-md-6" : "col-12"}>
            <ImageLink imgUrl={data?.offer_banner_2?.banner_1} bgImg={true} />
          </div>
        )}
        {data?.offer_banner_2?.banner_2?.status && (
          <div className={data?.offer_banner_2?.banner_1?.status ? "col-md-6" : "col-12"}>
            <ImageLink imgUrl={data?.offer_banner_2?.banner_2} bgImg={true} />
          </div>
        )}
      </WrapperComponent>

      {/* Category Products 2 */}
      {data?.category_product_2?.status && (
        <WrapperComponent classes={{ sectionClass: "ratio_square bg-title wo-bg category-tab-section", fluidClass: "container" }} noRowCol={true}>
          <Row>
            <Col>
              <HomeProductTab style="vertical" tabStyle="simple" title={data?.category_product_2} classes="row row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3" paginate={5} categoryIds={data?.category_product_2?.category_ids} />
            </Col>
          </Row>
        </WrapperComponent>
      )}

      {/* Brands */}
      {data?.brand?.status && (
        <section className="section-b-space blog-wo-bg">
          <HomeBrand brandIds={data?.brand?.brand_ids} />
        </section>
      )}
    </>
  );
};

export default ElectronicsThree;
