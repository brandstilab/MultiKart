const YogaHomePageInitialValue = (data) => {
  let obj = {};

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

    //Images

    productBanner1Image: data?.content?.product_banner?.post_banner?.banner_1?.image_url ? { original_url: data?.content?.product_banner?.post_banner?.banner_1?.image_url } : "",
    productBanner2Image: data?.content?.product_banner?.post_banner?.banner_2?.image_url ? { original_url: data?.content?.product_banner?.post_banner?.banner_2?.image_url } : "",
    offerBanner1Image1: data?.content?.offer_banner_1?.banner_1?.image_url ? { original_url: data?.content?.offer_banner_1?.banner_1?.image_url } : "",
    offerBanner1Image2: data?.content?.offer_banner_1?.banner_2?.image_url ? { original_url: data?.content?.offer_banner_1?.banner_2?.image_url } : "",
    offerBanner1Image3: data?.content?.offer_banner_1?.banner_3?.image_url ? { original_url: data?.content?.offer_banner_1?.banner_3?.image_url } : "",
    offerBanner2Image1: data?.content?.offer_banner_2?.banner_1?.image_url ? { original_url: data?.content?.offer_banner_2?.banner_1?.image_url } : "",
    offerBanner2Image2: data?.content?.offer_banner_2?.banner_2?.image_url ? { original_url: data?.content?.offer_banner_2?.banner_2?.image_url } : "",
    homeBannerImage: data?.content?.home_banner?.image_url ? { original_url: data?.content?.home_banner?.image_url } : "",

    ...obj,

    // For Redirect Link
    homeBannerLinkType: data?.content?.home_banner?.redirect_link?.link_type || "",
    homeBannerLink: data?.content?.home_banner?.redirect_link?.link || "",

    offerBanner1LinkType1: data?.content?.offer_banner_1?.banner_1?.redirect_link?.link_type || "",
    offerBanner1Link1: data?.content?.offer_banner_1?.banner_1?.redirect_link?.link || "",

    offerBanner1LinkType2: data?.content?.offer_banner_1?.banner_2?.redirect_link?.link_type || "",
    offerBanner1Link2: data?.content?.offer_banner_1?.banner_2?.redirect_link?.link || "",

    offerBanner1LinkType3: data?.content?.offer_banner_1?.banner_3?.redirect_link?.link_type || "",
    offerBanner1Link3: data?.content?.offer_banner_1?.banner_3?.redirect_link?.link || "",

    offerBanner2LinkType1: data?.content?.offer_banner_2?.banner_1?.redirect_link?.link_type || "",
    offerBanner2Link1: data?.content?.offer_banner_2?.banner_1?.redirect_link?.link || "",

    offerBanner2LinkType2: data?.content?.offer_banner_2?.banner_2?.redirect_link?.link_type || "",
    offerBanner2Link2: data?.content?.offer_banner_2?.banner_2?.redirect_link?.link || "",

    offerBanner2LinkType3: data?.content?.offer_banner_2?.banner_3?.redirect_link?.link_type || "",
    offerBanner2Link3: data?.content?.offer_banner_2?.banner_3?.redirect_link?.link || "",

    productBanner1LinkType: data?.content?.product_banner?.post_banner?.banner_1?.redirect_link?.link_type || "",
    productBanner1Link: data?.content?.product_banner?.post_banner?.banner_1?.redirect_link?.link || "",

    productBanner2LinkType: data?.content?.product_banner?.post_banner?.banner_2?.redirect_link?.link_type || "",
    productBanner2Link: data?.content?.product_banner?.post_banner?.banner_2?.redirect_link?.link || "",

    //MultiSelect
    featuredBlogList: data?.content?.featured_blogs?.blog_ids || [],

    productList1Product: data?.content?.products_list_1?.product_ids || [],
    productList2Product: data?.content?.products_list_2?.product_ids || [],
    productList3Product: data?.content?.products_list_3?.product_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],
  };
};

export default YogaHomePageInitialValue;
