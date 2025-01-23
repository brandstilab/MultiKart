const ElectronicsOneInitialValue = (data) => {
  let obj = {};
  data?.content?.home_banner?.banners?.length > 0 &&
    data?.content?.home_banner?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`homeBannerImage${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`homeRedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`homeRedirectLink${index}`] = elem?.redirect_link?.link) : "";
      return obj;
    });

  return {
    content: data?.content,
    sequence: data?.sequence,
    slug: data?.slug,

    //Images
    offerBanner1Image: data?.content?.offer_banner?.banner_1?.image_url ? { original_url: data?.content?.offer_banner?.banner_1?.image_url } : "",
    offerBanner2Image: data?.content?.offer_banner?.banner_2?.image_url ? { original_url: data?.content?.offer_banner?.banner_2?.image_url } : "",
    offerBanner3Image: data?.content?.offer_banner?.banner_3?.image_url ? { original_url: data?.content?.offer_banner?.banner_3?.image_url } : "",
    ...obj,

    // For Redirect Link
    offerBanner1LinkType: data?.content?.offer_banner?.banner_1?.redirect_link?.link_type || "",
    offerBanner1Link: data?.content?.offer_banner?.banner_1?.redirect_link?.link || "",

    offerBanner2LinkType: data?.content?.offer_banner?.banner_2?.redirect_link?.link_type || "",
    offerBanner2Link: data?.content?.offer_banner?.banner_2?.redirect_link?.link || "",

    offerBanner3LinkType: data?.content?.offer_banner?.banner_3?.redirect_link?.link_type || "",
    offerBanner3Link: data?.content?.offer_banner?.banner_3?.redirect_link?.link || "",

    //MultiSelect
    categoryProductList: data?.content?.category_product?.category_ids || [],
    brandItems: data?.content?.brand?.brand_ids || [],

    // brandItems: data?.content?.brand?.brand_ids || [],
  };
};

export default ElectronicsOneInitialValue;
