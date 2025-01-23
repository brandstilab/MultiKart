import ImageLink from "@/Components/Widgets/ImageLink";
import TitleBox from "@/Components/Widgets/Title";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import BlogIdsContext from "@/Context/BlogIdsContext";
import BrandIdsContext from "@/Context/BrandIdsContext";
import ProductIdsContext from "@/Context/ProductIdsContext";
import { horizontalProductSlider5 } from "@/Data/SliderSetting";
import Loader from "@/Layout/Loader";
import useCustomDataQuery from "@/Utils/Hooks/useCustomDataQuery";
import { useSkeletonLoader2 } from "@/Utils/Hooks/useSkeleton2";
import React, { useContext, useEffect, useState } from "react";
import { Col } from "reactstrap";
import HomeBlog from "../../Widgets/HomeBlog";
import HomeBrand from "../../Widgets/HomeBrand";
import HomeProduct from "../../Widgets/HomeProduct";
import HomeProductTab from "../../Widgets/HomeProductTab";
import HomeServices from "../../Widgets/HomeService";
import HomeSlider from "../../Widgets/HomeSlider";
import HomeTitle from "../../Widgets/HomeTitle";

const VegetablesTwo = () => {
  const { data, isLoading, refetch } = useCustomDataQuery({ params: "vegetables_two" });
  const [banners, setBanners] = useState([]);
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
    if (data?.banner?.banners?.length > 0) {
      let banners = data?.banner?.banners?.filter((item) => {
        return item?.status;
      });
      setBanners(banners);
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
      <WrapperComponent classes={{ sectionClass: "small-section pt-res-0", fluidClass: "container" }} colProps={{ xl: "12" }}>
        <WrapperComponent classes={{ sectionClass: "pt-0", fluidClass: "home-slider" }} noRowCol={true}>
          <HomeSlider bannerData={data?.home_banner} height={777} width={1376} />
        </WrapperComponent>
      </WrapperComponent>

      {/* Services */}
      {data?.services && (
        <WrapperComponent classes={{ sectionClass: "service-w-bg tools-service  pt-0", fluidClass: "container" }} noRowCol={true}>
          <HomeServices services={data?.services?.banners} />
        </WrapperComponent>
      )}

      {/* Product List 1 */}
      {data?.products_list_1?.status && (
        <WrapperComponent classes={{ fluidClass: "container" }} colProps={{ xs: "12" }}>
          <TitleBox title={data?.products_list_1} type="icon" />
          <HomeProduct productIds={data?.products_list_1?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider5} />
        </WrapperComponent>
      )}

      {/* Banners */}
      {banners?.length && (
        <WrapperComponent classes={{ sectionClass: `pb-0 banner-section ratio2_1 ${!data?.products_list_1?.status ? "pt-3" : ""}`, fluidClass: "container", row: "g-sm-4 g-3" }} customCol={true}>
          {banners?.map((banner, index) => (
            <>
              {banners?.length >= 2 ? (
                <div className={index == 0 || index == 1 ? "col-md-6" : index > 1 && banners.length % 2 == 0 ? "col-md-6" : index > 1 && banners.length == 5 ? "col-md-4" : "col-12"}>
                  <ImageLink imgUrl={banner} bgImg={true} />
                </div>
              ) : (
                <Col xs="12" className="col-12">
                  <ImageLink imgUrl={banner} bgImg={true} />
                </Col>
              )}
            </>
          ))}
        </WrapperComponent>
      )}

      {/* Category Product */}
      {data?.category_product?.status && (
        <WrapperComponent classes={{ sectionClass: "ratio_square bg-title wo-bg", fluidClass: "container" }}>
          <HomeProductTab classes="row row-cols-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5" paginate={5} categoryIds={data?.category_product?.category_ids} style="vertical" tabStyle="classic" title={data?.category_product} />
        </WrapperComponent>
      )}

      {/* Offer Banner */}
      {data?.offer_banner?.status && (
        <section className={`container ${!data?.category_product?.status ? "pt-3" : ""}`}>
          <ImageLink imgUrl={data?.offer_banner} height={211} width={1376} />
        </section>
      )}

      {/* Product List 2 */}
      {data?.products_list_2?.status && (
        <WrapperComponent classes={{ fluidClass: "container" }} customCol={false}>
          <TitleBox title={data?.products_list_2} type="icon" />
          <HomeProduct productIds={data?.products_list_2?.product_ids || []} style="vertical" slider={true} sliderOptions={horizontalProductSlider5} />
          {/* <Col xs="12">
          </Col>
          <Col xs="12">
          </Col> */}
        </WrapperComponent>
      )}

      {/* Featured Blogs */}
      {data?.featured_blogs?.status && (
        <WrapperComponent classes={{ sectionClass: "blog section-b-space left-blog ratio3_2", fluidClass: "container" }} customCol={true}>
          <Col md="12">
            <HomeTitle title={data?.featured_blogs} type="icon" space={false} />
          </Col>
          <Col md="12">
            <HomeBlog blogIds={data?.featured_blogs?.blog_ids || []} />
          </Col>
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

export default VegetablesTwo;
