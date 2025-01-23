const MarketplaceThreeInitialValue = (data) => {
  
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

    categoryLeftContentBannerImage: data?.content?.categories_products?.left_panel?.banner?.image_url ? { original_url: data?.content?.categories_products?.left_panel?.banner?.image_url } : "",

    categoryProductOfferBanner1Image: data?.content?.categories_products?.right_panel?.offer_banner?.banner_1?.image_url ? { original_url: data?.content?.categories_products?.right_panel?.offer_banner?.banner_1?.image_url } : "",
    categoryProductOfferBanner2Image: data?.content?.categories_products?.right_panel?.offer_banner?.banner_2?.image_url ? { original_url: data?.content?.categories_products?.right_panel?.offer_banner?.banner_2?.image_url } : "",

    ...obj,

    // For Redirect Link

    offerBanner1LinkType: data?.content?.offer_banner?.banner_2?.redirect_link?.link_type || "",
    offerBanner1Link: data?.content?.offer_banner?.banner_1?.redirect_link?.link || "",

    offerBanner2LinkType: data?.content?.offer_banner?.banner_2?.redirect_link?.link_type || "",
    offerBanner2Link: data?.content?.offer_banner?.banner_2?.redirect_link?.link || "",

    offerBanner3LinkType: data?.content?.offer_banner?.banner_3?.redirect_link?.link_type || "",
    offerBanner3Link: data?.content?.offer_banner?.banner_3?.redirect_link?.link || "",

    categoryLeftContentBannerLinkType: data?.content?.categories_products?.left_panel?.banner?.redirect_link?.link_type || "",
    categoryLeftContentBannerLink: data?.content?.categories_products?.left_panel?.banner?.redirect_link?.link || "",

    categoryProductOfferBanner1LinkType: data?.content?.categories_products?.right_panel?.offer_banner?.banner_1?.redirect_link?.link_type || "",
    categoryProductOfferBanner1Link: data?.content?.categories_products?.right_panel?.offer_banner?.banner_1?.redirect_link?.link || "",

    categoryProductOfferBanner2LinkType: data?.content?.categories_products?.right_panel?.offer_banner?.banner_2?.redirect_link?.link_type || "",
    categoryProductOfferBanner2Link: data?.content?.categories_products?.right_panel?.offer_banner?.banner_2?.redirect_link?.link || "",

    //MultiSelect
    brandItems: data?.content?.brand?.brand_ids || [],
    featuredBlogList: data?.content?.featured_blogs?.blog_ids || [],

    categoryLeftContentCategories: data?.content?.categories_products?.left_panel?.categories?.category_ids || [],
    categoryLeftContentProduts: data?.content?.categories_products?.left_panel?.products_list?.product_ids || [],
    categoryRightContentProduts: data?.content?.categories_products?.right_panel?.products_list?.product_ids || [],
    categoryRightContentCategories: data?.content?.categories_products?.right_panel?.category_product?.category_ids || [],
  };
};

export default MarketplaceThreeInitialValue;
