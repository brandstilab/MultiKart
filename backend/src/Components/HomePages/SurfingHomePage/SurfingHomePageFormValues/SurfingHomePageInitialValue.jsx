const SurfingHomePageInitialValue = (data) => {
  let obj = {};

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
    homeBannerImage: data?.content?.home_banner?.image_url ? { original_url: data?.content?.home_banner?.image_url } : "",

    offerBanner1Image: data?.content?.offer_banner?.banner_1?.image_url ? { original_url: data?.content?.offer_banner?.banner_1?.image_url } : "",
    offerBanner2Image: data?.content?.offer_banner?.banner_2?.image_url ? { original_url: data?.content?.offer_banner?.banner_2?.image_url } : "",

    columnOfferBanner1Image: data?.content?.column_banner_product?.offer_banner_1?.image_url ? { original_url: data?.content?.column_product_banner?.offer_banner_1?.image_url } : "",
    columnOfferBanner2Image: data?.content?.column_banner_product?.offer_banner_2?.image_url ? { original_url: data?.content?.column_product_banner?.offer_banner_2?.image_url } : "",

    // Redirect Link
    offerBanner1LinkType: data?.content?.offer_banner?.banner_1?.redirect_link?.link_type || "",
    offerBanner1Link: data?.content?.offer_banner?.banner_1?.redirect_link?.link || "",

    offerBanner2LinkType: data?.content?.offer_banner?.banner_2?.redirect_link?.link_type || "",
    offerBanner2Link: data?.content?.offer_banner?.banner_2?.redirect_link?.link || "",

    columnOfferBanner1LinkType: data?.content?.column_banner_product?.offer_banner_1?.redirect_link?.link_type || "",
    columnOfferBanner1Link: data?.content?.column_banner_product?.offer_banner_1?.redirect_link?.link || "",

    columnOfferBanner2LinkType: data?.content?.column_banner_product?.offer_banner_1?.redirect_link?.link_type || "",
    columnOfferBanner2Link: data?.content?.column_banner_product?.offer_banner_1?.redirect_link?.link || "",

    //MultiSelect
    columnProductList1Product: data?.content?.column_banner_product?.product_list_1?.product_ids || [],
    columnProductList2Product: data?.content?.column_banner_product?.product_list_2?.product_ids || [],

    productList1Product: data?.content?.products_list?.product_ids || [],

    categories: data?.content?.categories?.category_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],

    featuredBlogList: data?.content?.featured_blogs?.blog_ids || [],
  };
};

export default SurfingHomePageInitialValue;
