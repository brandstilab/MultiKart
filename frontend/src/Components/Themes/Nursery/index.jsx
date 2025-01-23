import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { horizontalProductSlider5 } from "@/Data/SliderSetting";
import Loader from "@/Layout/Loader";
import { storageURL } from "@/Utils/Constants";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import HomeBlog from "../Widgets/HomeBlog";
import HomeBrand from "../Widgets/HomeBrand";
import HomeProduct from "../Widgets/HomeProduct";
import HomeProductTab from "../Widgets/HomeProductTab";
import HomeSlider from "../Widgets/HomeSlider";
import HomeSocialMedia from "../Widgets/HomeSocialMedia";

const NurseryHomePage = () => {
  const { data, refetch, isLoading } = useCustomDataQuery({ params: "nursery" });
  
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
    document.body.classList.add("home", "layout-20");
    document.body.style.backgroundImage = `url(${storageURL + data?.home_banner?.background_image})`;
    document.body.style.setProperty("--theme-color", "#81ba00");
    return () => {
      document.body.classList.remove("home", "layout-20");
      document.body.style = "";
    };
  }, [data]);

  useSkeletonLoader2([productLoad, blogLoading, brandLoading]);
  if (isLoading && document.body) return <Loader />;

  return (
    <div className='bg-white'>
      {/* Home Banner */}
      <WrapperComponent classes={{ sectionClass: "p-0", fluidClass: "home-slider overflow-hidden" }} noRowCol={true}>
        <HomeSlider bannerData={data?.home_banner} height={724} width={1735} />
      </WrapperComponent>

      {/* Product List */}
      {data?.products_list?.status && (
        <WrapperComponent classes={{ sectionClass: `section-b-space`, fluidClass: "container" }}>
          <TitleBox type='premium' title={data?.products_list} space={false} />
          <HomeProduct productIds={data?.products_list?.product_ids || []} style='vertical' slider={true} sliderOptions={horizontalProductSlider5} />
        </WrapperComponent>
      )}

      {/* Category Products */}
      {data?.category_product?.status && (
        <section className='p-0'>
          <div className='tab-bg tab-grey-bg w-100'>
            <Container fluid>
              <Row>
                <Col>
                  <TitleBox type='premium' title={data?.category_product} space={false} />
                  <HomeProductTab categoryIds={data?.category_product?.category_ids} product_box_style='horizontal' style='horizontal' />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      )}

      {/* Featured Blogs */}
      {data?.featured_blogs?.status && (
        <WrapperComponent classes={{ sectionClass: "blog ratio2_3", fluidClass: "container" }} colProps={{ md: "12" }}>
          <TitleBox title={data?.featured_blogs} type='premium' space={false} />
          <HomeBlog blogIds={data?.featured_blogs?.blog_ids || []} />
        </WrapperComponent>
      )}

      {/* Brand */}
      {data?.brand?.status && (
        <section className='section-b-space'>
          <HomeBrand brandIds={data?.brand?.brand_ids || []} />
        </section>
      )}

      {/* Social Media */}
      {data?.social_media?.banners?.length && data?.social_media?.status && (
        <section className='instagram ratio_square'>
          <HomeSocialMedia media={data?.social_media || []} classes='container-fluid p-0' type='borderless' />
        </section>
      )}
    </div>
  );
};

export default NurseryHomePage;
