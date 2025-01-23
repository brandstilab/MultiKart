const JwelleryThreeInitialValue = (data) => {
  let obj = {};
  data?.content?.home_banner?.banners?.length > 0 &&
    data?.content?.home_banner?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`homeBannerImage${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`homeRedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`homeRedirectLink${index}`] = elem?.redirect_link?.link) : "";
      return obj;
    });

  data?.content?.services?.banners?.length > 0 &&
    data?.content?.services?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`serviceBannerImage${index}`] = { original_url: elem.image_url }) : "";
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

    // Redirect Link
    productBannerCenterContent1LinkType: data?.content?.product_banner?.center_panel?.redirect_link?.link_type || "",
    productBannerCenterContent1Link: data?.content?.product_banner?.center_panel?.redirect_link?.link || "",

    offerBanner1LinkType1: data?.content?.offer_banner?.banner_1?.redirect_link?.link_type || "",
    offerBanner1Link1: data?.content?.offer_banner?.banner_1?.redirect_link?.link || "",

    offerBanner1LinkType2: data?.content?.offer_banner?.banner_2?.redirect_link?.link_type || "",
    offerBanner1Link2: data?.content?.offer_banner?.banner_2?.redirect_link?.link || "",

    offerBanner1LinkType3: data?.content?.offer_banner?.banner_3?.redirect_link?.link_type || "",
    offerBanner1Link3: data?.content?.offer_banner?.banner_3?.redirect_link?.link || "",

    // Image
    productBannerCenterContentImage1: data?.content?.product_banner?.center_panel?.image_url ? { original_url: data?.content?.product_banner?.center_panel?.image_url } : "",
    offerBanner1Image1: data?.content?.offer_banner?.banner_1?.image_url ? { original_url: data?.content?.offer_banner?.banner_1?.image_url } : "",
    offerBanner1Image2: data?.content?.offer_banner?.banner_2?.image_url ? { original_url: data?.content?.offer_banner?.banner_2?.image_url } : "",
    offerBanner1Image3: data?.content?.offer_banner?.banner_3?.image_url ? { original_url: data?.content?.offer_banner?.banner_3?.image_url } : "",
    mainBannerImage: data?.content?.main_banner?.image_url ? { original_url: data?.content?.main_banner?.image_url } : "",

    //MultiSelect
    productBannerLeftPanelProduct: data?.content?.product_banner?.left_panel?.product_ids || [],
    productBannerRightPanelProduct: data?.content?.product_banner?.right_panel?.product_ids || [],
    productListProduct: data?.content?.products_list?.product_ids || [],
    featuredBlogList: data?.content?.featured_blogs?.blog_ids || [],

    categories: data?.content?.categories?.category_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],
  };
};

export default JwelleryThreeInitialValue;
