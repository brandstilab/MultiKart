const ElectronicsTwoInitialValue = (data) => {
  
  let obj = {};
  return {
    content: data?.content,
    sequence: data?.sequence,
    slug: data?.slug,

    //Images
    offerBanner1Image: data?.content?.offer_banner?.banner_1?.image_url ? { original_url: data?.content?.offer_banner?.banner_1?.image_url } : "",
    offerBanner2Image: data?.content?.offer_banner?.banner_2?.image_url ? { original_url: data?.content?.offer_banner?.banner_2?.image_url } : "",
    offerBanner3Image: data?.content?.offer_banner?.banner_3?.image_url ? { original_url: data?.content?.offer_banner?.banner_3?.image_url } : "",
 
    homeBanner1Image: data?.content?.home_banner?.banner_1?.image_url ? { original_url: data?.content?.home_banner?.banner_1?.image_url } : "",
    homeBanner2Image: data?.content?.home_banner?.banner_2?.image_url ? { original_url: data?.content?.home_banner?.banner_2?.image_url } : "",
    homeBanner3Image: data?.content?.home_banner?.banner_3?.image_url ? { original_url: data?.content?.home_banner?.banner_3?.image_url } : "",
    ...obj,

    // For Redirect Link 
    homeBanner1LinkType: data?.content?.home_banner?.banner_1?.redirect_link?.link_type || "",
    homeBanner1Link: data?.content?.home_banner?.banner_1?.redirect_link?.link || "",

    homeBanner2LinkType: data?.content?.home_banner?.banner_2?.redirect_link?.link_type || "",
    homeBanner2Link: data?.content?.home_banner?.banner_2?.redirect_link?.link || "",

    homeBanner3LinkType: data?.content?.home_banner?.banner_3?.redirect_link?.link_type || "",
    homeBanner3Link: data?.content?.home_banner?.banner_3?.redirect_link?.link || "",

    offerBanner1LinkType: data?.content?.offer_banner?.banner_1?.redirect_link?.link_type || "",
    offerBanner1Link: data?.content?.offer_banner?.banner_1?.redirect_link?.link || "",

    offerBanner2LinkType: data?.content?.offer_banner?.banner_2?.redirect_link?.link_type || "",
    offerBanner2Link: data?.content?.offer_banner?.banner_2?.redirect_link?.link || "",

    offerBanner3LinkType: data?.content?.offer_banner?.banner_3?.redirect_link?.link_type || "",
    offerBanner3Link: data?.content?.offer_banner?.banner_3?.redirect_link?.link || "",

    //MultiSelect
    categoryProductList: data?.content?.category_product?.category_ids || [],
    brandItems: data?.content?.brand?.brand_ids || [],
  };
};

export default ElectronicsTwoInitialValue;
