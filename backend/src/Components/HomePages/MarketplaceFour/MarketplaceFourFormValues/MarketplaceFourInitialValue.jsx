const MarketplaceFourInitialValue = (data) => {
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

    //Images
    productBanner1LeftContentImage: data?.content?.product_banner_1?.left_panel?.image_url ? { original_url: data?.content?.product_banner_1?.left_panel?.image_url } : "",
    productBanner3LeftContentImage: data?.content?.product_banner_3?.left_panel?.image_url ? { original_url: data?.content?.product_banner_3?.left_panel?.image_url } : "",

    productSliderImage: data?.content?.slider_products?.image_url ? { original_url: data?.content?.slider_products?.image_url } : "",

    productBanner2Image2: data?.content?.product_banner_2?.center_panel?.banner_1?.image_url ? { original_url: data?.content?.product_banner_2?.center_panel?.banner_1?.image_url } : "",
    productBanner2Image1: data?.content?.product_banner_2?.center_panel?.banner_2?.image_url ? { original_url: data?.content?.product_banner_2?.center_panel?.banner_2?.image_url } : "",

    ...obj,

    // For Redirect Link

    productBanner1LeftContentLinkType: data?.content?.product_banner_1?.left_panel?.redirect_link?.link_type || "",
    productBanner1LeftContentLink: data?.content?.product_banner_1?.left_panel?.redirect_link?.link || "",

    productBanner3LeftContentLinkType: data?.content?.product_banner_3?.left_panel?.redirect_link?.link_type || "",
    productBanner3LeftContentLink: data?.content?.product_banner_3?.left_panel?.redirect_link?.link || "",

    productBanner2LinkType1: data?.content?.product_banner_2?.center_panel?.banner_1?.redirect_link?.link_type || "",
    productBanner2Link1: data?.content?.product_banner_2?.center_panel?.banner_1?.redirect_link?.link || "",

    productBanner2LinkType2: data?.content?.product_banner_2?.center_panel?.banner_1?.redirect_link?.link_type || "",
    productBanner2Link2: data?.content?.product_banner_2?.center_panel?.banner_2?.redirect_link?.link || "",

    //MultiSelect
    productList1Product: data?.content?.products_list_1?.product_ids || [],
    productList2Product: data?.content?.products_list_2?.product_ids || [],
    productList3Product: data?.content?.products_list_3?.product_ids || [],
    sliderProduct1: data?.content?.slider_products?.product_slider_1?.product_ids || [],

    productBanner1rightPanelProduct: data?.content?.product_banner_1?.right_panel?.product_ids || [],
    productBanner3rightPanelProduct: data?.content?.product_banner_3?.right_panel?.product_ids || [],

    productBanner2LeftPanelProduct: data?.content?.product_banner_2?.left_panel?.product_ids || [],
    productBanner2RightPanelProduct: data?.content?.product_banner_2?.right_panel?.product_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],
  };
};

export default MarketplaceFourInitialValue;
