const ElectronicsThreeSubmitInitialValue = (data) => {
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
  return {
    content: data?.content,
    sequence: data?.sequence,
    slug: data?.slug,

    //Images

    banner1Image: data?.content?.banner?.main_banner?.image_url ? { original_url: data?.content?.banner?.main_banner?.image_url } : "",
    banner2Image: data?.content?.banner?.grid_banner_1?.image_url ? { original_url: data?.content?.banner?.grid_banner_1?.image_url } : "",
    banner3Image: data?.content?.banner?.grid_banner_2?.image_url ? { original_url: data?.content?.banner?.grid_banner_2?.image_url } : "",
    banner4Image: data?.content?.banner?.grid_banner_3?.image_url ? { original_url: data?.content?.banner?.grid_banner_3?.image_url } : "",

    offerBanner2Image1: data?.content?.offer_banner_2?.banner_1?.image_url ? { original_url: data?.content?.offer_banner_2?.banner_1?.image_url } : "",
    offerBanner2Image2: data?.content?.offer_banner_2?.banner_2?.image_url ? { original_url: data?.content?.offer_banner_2?.banner_2?.image_url } : "",

    offerBannerImage: data?.content?.offer_banner_1?.image_url ? { original_url: data?.content?.offer_banner_1?.image_url } : "",
    ...obj,

    // For Redirect Link
    banner1LinkType: data?.content?.banner?.main_banner?.redirect_link?.link_type || "",
    banner1Link: data?.content?.banner?.main_banner?.redirect_link?.link || "",

    banner2LinkType: data?.content?.banner?.grid_banner_1?.redirect_link?.link_type || "",
    banner2Link: data?.content?.banner?.grid_banner_1?.redirect_link?.link || "",

    banner3LinkType: data?.content?.banner?.grid_banner_2?.redirect_link?.link_type || "",
    banner3Link: data?.content?.banner?.grid_banner_2?.redirect_link?.link || "",

    banner4LinkType: data?.content?.banner?.grid_banner_3?.redirect_link?.link_type || "",
    banner4Link: data?.content?.banner?.grid_banner_3?.redirect_link?.link || "",

    offerBannerLinkType: data?.content?.offer_banner_1?.redirect_link?.link_type || "",
    offerBannerLink: data?.content?.offer_banner_1?.redirect_link?.link || "",

    offerBanner2LinkType1: data?.content?.offer_banner_2?.banner_1?.redirect_link?.link_type || "",
    offerBanner2Link1: data?.content?.offer_banner_2?.banner_1?.redirect_link?.link || "",

    offerBanner2LinkType2: data?.content?.offer_banner_2?.banner_2?.redirect_link?.link_type || "",
    offerBanner2Link2: data?.content?.offer_banner_2?.banner_2?.redirect_link?.link || "",

    //MultiSelect
    brandItems: data?.content?.brand?.brand_ids || [],
    productList1Product: data?.content?.products_list_1?.product_ids || [],

    categoryProduct1Product: data?.content?.category_product_1?.products?.product_ids || [],
    categoryProduct1Categories: data?.content?.category_product_1?.categories?.category_ids || [],

    categoryProduct2Categories: data?.content?.category_product_2?.category_ids || [],
  };
};

export default ElectronicsThreeSubmitInitialValue;
