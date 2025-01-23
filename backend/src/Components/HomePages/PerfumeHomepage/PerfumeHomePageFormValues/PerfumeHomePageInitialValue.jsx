const PerfumeHomePageInitialValue = (data) => {
  let obj = {};

  return {
    content: data?.content,
    sequence: data?.sequence,
    slug: data?.slug,

    ...obj,

    // Redirect Link
    offerBanner1LinkType1: data?.content?.offer_banner_1?.banner_1?.redirect_link?.link_type || "",
    offerBanner1Link1: data?.content?.offer_banner_1?.banner_1?.redirect_link?.link || "",

    offerBanner1LinkType2: data?.content?.offer_banner_1?.banner_2?.redirect_link?.link_type || "",
    offerBanner1Link2: data?.content?.offer_banner_1?.banner_2?.redirect_link?.link || "",

    offerBanner1LinkType3: data?.content?.offer_banner_1?.banner_3?.redirect_link?.link_type || "",
    offerBanner1Link3: data?.content?.offer_banner_1?.banner_3?.redirect_link?.link || "",

    offerBanner1LinkType4: data?.content?.offer_banner_1?.banner_4?.redirect_link?.link_type || "",
    offerBanner1Link4: data?.content?.offer_banner_1?.banner_4?.redirect_link?.link || "",

    homeBannerLinkType: data?.content?.home_banner?.redirect_link?.link_type || "",
    homeBannerLink: data?.content?.home_banner?.redirect_link?.link || "",

    collectionBannerLinkType: data?.content?.collection_banner?.redirect_link?.link_type || "",
    collectionBannerLink: data?.content?.collection_banner?.redirect_link?.link || "",

    offerBanner2LinkType: data?.content?.offer_banner_2?.redirect_link?.link_type || "",
    offerBanner2Link: data?.content?.offer_banner_2?.redirect_link?.link || "",

    productListLeftPanelLinkType: data?.content?.product_list?.left_panel?.redirect_link?.link_type || "",
    productListLeftPanelLink: data?.content?.product_list?.left_panel?.redirect_link?.link || "",

    // Image
    offerBanner2Image: data?.content?.offer_banner_2?.image_url ? { original_url: data?.content?.offer_banner_2?.image_url } : "",
    homeBannerImage: data?.content?.home_banner?.image_url ? { original_url: data?.content?.home_banner?.image_url } : "",
    collectionBannerImage: data?.content?.collection_banner?.image_url ? { original_url: data?.content?.collection_banner?.image_url } : "",

    offerBanner1Image1: data?.content?.offer_banner_1?.banner_1?.image_url ? { original_url: data?.content?.offer_banner_1?.banner_1?.image_url } : "",
    offerBanner1Image2: data?.content?.offer_banner_1?.banner_2?.image_url ? { original_url: data?.content?.offer_banner_1?.banner_2?.image_url } : "",
    offerBanner1Image3: data?.content?.offer_banner_1?.banner_3?.image_url ? { original_url: data?.content?.offer_banner_1?.banner_3?.image_url } : "",
    offerBanner1Image4: data?.content?.offer_banner_1?.banner_4?.image_url ? { original_url: data?.content?.offer_banner_1?.banner_4?.image_url } : "",
    //MultiSelect
    productListProducts: data?.content?.product_list?.products?.product_ids || [],
    productCategory: data?.content?.category_product?.category_ids || [],

    categories: data?.content?.categories?.category_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],
  };
};

export default PerfumeHomePageInitialValue;
