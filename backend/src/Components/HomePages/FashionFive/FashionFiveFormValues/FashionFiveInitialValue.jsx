const FashionFiveInitialValue = (data) => {
  let obj = {};

  data?.content?.social_media?.banners?.length > 0 &&
    data?.content?.social_media?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`socialMediaBannerImage${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`socialMediaLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`socialMediaLink${index}`] = elem?.redirect_link?.link) : "";
      return obj;
    });

  return {
    content: data?.content,
    sequence: data?.sequence,
    slug: data?.slug,

    //Images
    homeBannerImage: data?.content?.home_banner?.image_url ? { original_url: data?.content?.home_banner?.image_url } || "" : "",
    offerBannerImage: data?.content?.offer_banner?.image_url ? { original_url: data?.content?.offer_banner?.image_url } || "" : "",

    mainBannerImage: data?.content?.knockout_deals?.main_banner?.image_url ? { original_url: data?.content?.knockout_deals?.main_banner?.image_url } : "",
    gridBanner1Image: data?.content?.knockout_deals?.grid_banner_1?.image_url ? { original_url: data?.content?.knockout_deals?.grid_banner_1?.image_url } : "",
    gridBanner2Image: data?.content?.knockout_deals?.grid_banner_2?.image_url ? { original_url: data?.content?.knockout_deals?.grid_banner_2?.image_url } : "",
    gridBanner3Image: data?.content?.knockout_deals?.grid_banner_2?.image_url ? { original_url: data?.content?.knockout_deals?.grid_banner_3?.image_url } : "",
    ...obj,

    // Redirect Link
    homeBannerLinkType: data?.content?.home_banner?.redirect_link?.link_type || "",
    homeBannerLink: data?.content?.home_banner?.redirect_link?.link || "",

    offerBannerLinkType: data?.content?.offer_banner?.redirect_link?.link_type || "",
    offerBannerLink: data?.content?.offer_banner?.redirect_link?.link || "",

    mainBannerLinkType: data?.content?.knockout_deals?.main_banner?.redirect_link?.link_type || "",
    mainBannerLink: data?.content?.knockout_deals?.main_banner?.redirect_link?.link || "",

    gridBanner1LinkType: data?.content?.knockout_deals?.grid_banner_1?.redirect_link?.link_type || "",
    gridBanner1Link: data?.content?.knockout_deals?.grid_banner_1?.redirect_link?.link || "",

    gridBanner2LinkType: data?.content?.knockout_deals?.grid_banner_2?.redirect_link?.link_type || "",
    gridBanner2Link: data?.content?.knockout_deals?.grid_banner_2?.redirect_link?.link || "",

    gridBanner3LinkType: data?.content?.knockout_deals?.grid_banner_3?.redirect_link?.link_type || "",
    gridBanner3Link: data?.content?.knockout_deals?.grid_banner_3?.redirect_link?.link || "",

    //MultiSelect
    productLists: data?.content?.products_list?.product_ids || [],
    categories: data?.content?.categories?.category_ids || [],
    brandItems: data?.content?.brand?.brand_ids || [],
  };
};

export default FashionFiveInitialValue;
