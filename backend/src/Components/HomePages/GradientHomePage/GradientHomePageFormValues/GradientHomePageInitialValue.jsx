const GradientHomePageInitialValue = (data) => {
  let obj = {};
  data?.content?.home_banner?.banners?.length > 0 &&
    data?.content?.home_banner?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`homeBannerImage${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`homeRedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`homeRedirectLink${index}`] = elem?.redirect_link?.link) : "";
      return obj;
    });

  data?.content?.offer_banner?.banners?.length > 0 &&
    data?.content?.offer_banner?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`offerBannerImage${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`offerBannerRedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`offerBannerRedirectLink${index}`] = elem?.redirect_link?.link) : "";
      return obj;
    });


  data?.content?.social_media?.banners?.length > 0 &&
    data?.content?.social_media?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`socialMediaBannerImage${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`socialMediaRedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`socialMediaRedirectLink${index}`] = elem?.redirect_link?.link) : "";
      return obj;
    });

  return {
    content: data?.content,
    sequence: data?.sequence,
    slug: data?.slug,

    ...obj,

    // Image

    parallaxBanner1Image: data?.content?.parallax_banner?.banner_1?.image_url ? { original_url: data?.content?.parallax_banner?.banner_1?.image_url } : "",
    parallaxBanner2Image: data?.content?.parallax_banner?.banner_2?.image_url ? { original_url: data?.content?.parallax_banner?.banner_2?.image_url } : "",

    //MultiSelect

    productList1Product: data?.content?.products_list?.product_ids || [],

    couponsList: data?.content?.coupons?.coupon_ids || [],

    categories: data?.content?.categories_1?.category_ids || [],

    productCategory: data?.content?.category_product?.category_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],

    featuredBlogList: data?.content?.featured_blogs?.blog_ids || [],
  };
};

export default GradientHomePageInitialValue;
