const BicycleHomePageInitialValue = (data) => {
  let obj = {};

  data?.content?.home_banner?.banners?.length > 0 &&
    data?.content?.home_banner?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`homeBannerImage${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`homeRedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`homeRedirectLink${index}`] = elem?.redirect_link?.link) : "";
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

    offerBanner1Image1: data?.content?.offer_banner?.banner_1?.image_url ? { original_url: data?.content?.offer_banner?.banner_1?.image_url } : "",
    offerBanner1Image2: data?.content?.offer_banner?.banner_2?.image_url ? { original_url: data?.content?.offer_banner?.banner_2?.image_url } : "",
    bannerImage: data?.content?.banner?.image_url ? { original_url: data?.content?.banner?.image_url } : "",

    ...obj,

    // For Redirect Link

    offerBanner1LinkType1: data?.content?.offer_banner?.banner_1?.redirect_link?.link_type || "",
    offerBanner1Link1: data?.content?.offer_banner?.banner_1?.redirect_link?.link || "",

    offerBanner1LinkType2: data?.content?.offer_banner?.banner_2?.redirect_link?.link_type || "",
    offerBanner1Link2: data?.content?.offer_banner?.banner_2?.redirect_link?.link || "",

    bannerLinkType: data?.content?.banner?.redirect_link?.link_type || "",
    bannerLink: data?.content?.banner?.redirect_link?.link || "",

    //MultiSelect
    categoryProduct1Categories: data?.content?.category_product?.category_ids || [],

    productList1Product: data?.content?.products_list?.product_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],
  };
};

export default BicycleHomePageInitialValue;
