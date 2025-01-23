const MarketplaceOneInitialValue = (data) => {
  
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
    offerBanner1Image1: data?.content?.offer_banner_1?.banner_1?.image_url ? { original_url: data?.content?.offer_banner_1?.banner_1?.image_url } : "",
    offerBanner1Image2: data?.content?.offer_banner_1?.banner_2?.image_url ? { original_url: data?.content?.offer_banner_1?.banner_2?.image_url } : "",
    offerBanner1Image3: data?.content?.offer_banner_1?.banner_3?.image_url ? { original_url: data?.content?.offer_banner_1?.banner_3?.image_url } : "",
    offerBanner1Image4: data?.content?.offer_banner_1?.banner_4?.image_url ? { original_url: data?.content?.offer_banner_1?.banner_4?.image_url } : "",

    offerBanner2Image: data?.content?.offer_banner_2?.image_url ? { original_url: data?.content?.offer_banner_2?.image_url } : "",

    featuredBannerImage: data?.content?.featured_banners?.image_url ? { original_url: data?.content?.featured_banners?.image_url } : "",

    productList2Image: data?.content?.category_product?.right_panel?.product_banner?.image_url ? { original_url: data?.content?.category_product?.right_panel?.product_banner?.image_url } : "",

    ...obj,

    // For Redirect Link

    offerBanner1LinkType1: data?.content?.offer_banner_1?.banner_1?.redirect_link?.link_type || "",
    offerBanner1Link1: data?.content?.offer_banner_1?.banner_1?.redirect_link?.link || "",

    offerBanner1LinkType2: data?.content?.offer_banner_1?.banner_2?.redirect_link?.link_type || "",
    offerBanner1Link2: data?.content?.offer_banner_1?.banner_2?.redirect_link?.link || "",

    offerBanner1LinkType3: data?.content?.offer_banner_1?.banner_3?.redirect_link?.link_type || "",
    offerBanner1Link3: data?.content?.offer_banner_1?.banner_3?.redirect_link?.link || "",

    offerBanner1LinkType4: data?.content?.offer_banner_1?.banner_4?.redirect_link?.link_type || "",
    offerBanner1Link4: data?.content?.offer_banner_1?.banner_4?.redirect_link?.link || "",

    offerBanner2LinkType: data?.content?.offer_banner_2?.redirect_link?.link_type || "",
    offerBanner2Link: data?.content?.offer_banner_2?.redirect_link?.link || "",

    rightPanelLinkType: data?.content?.category_product?.right_panel?.product_banner?.redirect_link?.link_type || "",
    rightPanelLink: data?.content?.category_product?.right_panel?.product_banner?.redirect_link?.link || "",

    //MultiSelect
    brandItems: data?.content?.brand?.brand_ids || [],
    productList1Product: data?.content?.product_list_1?.product_ids || [],
    leftPanelProduct: data?.content?.category_product?.left_panel?.product_ids || [],
    rightPanelProduct: data?.content?.category_product?.right_panel?.product_category?.category_ids || [],
  };
};

export default MarketplaceOneInitialValue;
