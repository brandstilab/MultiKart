const JwelleryTwoInitialValue = (data) => {
  let obj = {};
  data?.content?.home_banner?.banners?.length > 0 &&
    data?.content?.home_banner?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`homeBannerImage${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`homeRedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`homeRedirectLink${index}`] = elem?.redirect_link?.link) : "";
      return obj;
    });

  data?.content?.offer_banner_1?.banners?.length > 0 &&
    data?.content?.offer_banner_1?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`offerBanner1Image${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`offerBanner1RedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`offerBanner1RedirectLink${index}`] = elem?.redirect_link?.link) : "";
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
    banner1LinkType: data?.content?.banner?.redirect_link?.link_type || "",
    banner1Link: data?.content?.banner?.redirect_link?.link || "",

    offerBanner2LinkType: data?.content?.offer_banner_2?.redirect_link?.link_type || "",
    offerBanner2Link: data?.content?.offer_banner_2?.redirect_link?.link || "",

    productBannerCenterContent1LinkType: data?.content?.product_banner?.center_panel?.banner_1?.redirect_link?.link_type || "",
    productBannerCenterContent1Link: data?.content?.product_banner?.center_panel?.banner_1?.redirect_link?.link || "",

    productBannerCenterContent2LinkType: data?.content?.product_banner?.center_panel?.banner_2?.redirect_link?.link_type || "",
    productBannerCenterContent2Link: data?.content?.product_banner?.center_panel?.banner_2?.redirect_link?.link || "",

    // Image
    banner1Image: data?.content?.banner?.image_url ? { original_url: data?.content?.banner?.image_url } : "",
    offerBanner2Image: data?.content?.offer_banner_2?.image_url ? { original_url: data?.content?.offer_banner_2?.image_url } : "",
    productBannerCenterContentImage1: data?.content?.product_banner?.center_panel?.banner_1?.image_url ? { original_url: data?.content?.product_banner?.center_panel?.banner_1?.image_url } : "",
    productBannerCenterContentImage2: data?.content?.product_banner?.center_panel?.banner_2?.image_url ? { original_url: data?.content?.product_banner?.center_panel?.banner_2?.image_url } : "",

    //MultiSelect
    productBannerLeftPanelProduct: data?.content?.product_banner?.left_panel?.product_ids || [],
    productBannerRightPanelProduct: data?.content?.product_banner?.right_panel?.product_ids || [],
    productList1Product: data?.content?.products_list_1?.product_ids || [],
    productList2Product: data?.content?.products_list_2?.product_ids || [],

    categories: data?.content?.categories?.category_ids || [],
    categories2: data?.content?.categories_2?.category_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],
  };
};

export default JwelleryTwoInitialValue;
