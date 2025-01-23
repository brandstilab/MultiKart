const GameHomePageInitialValue = (data) => {
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
    offerBanner1Image1: data?.content?.offer_banner_1?.banner_1?.image_url ? { original_url: data?.content?.offer_banner_1?.banner_1?.image_url } : "",
    offerBanner1Image2: data?.content?.offer_banner_1?.banner_2?.image_url ? { original_url: data?.content?.offer_banner_1?.banner_2?.image_url } : "",

    offerBanner2Image: data?.content?.offer_banner_2?.image_url ? { original_url: data?.content?.offer_banner_2?.image_url } : "",

    fullBannerImage: data?.content?.parallax_banner?.image_url ? { original_url: data?.content?.parallax_banner?.image_url } : "",

    ...obj,

    // For Redirect Link

    offerBanner1LinkType1: data?.content?.offer_banner_1?.banner_1?.redirect_link?.link_type || "",
    offerBanner1Link1: data?.content?.offer_banner_1?.banner_1?.redirect_link?.link || "",

    offerBanner1LinkType2: data?.content?.offer_banner_1?.banner_2?.redirect_link?.link_type || "",
    offerBanner1Link2: data?.content?.offer_banner_1?.banner_2?.redirect_link?.link || "",

    offerBanner2LinkType: data?.content?.offer_banner_2?.redirect_link?.link_type || "",
    offerBanner2Link: data?.content?.offer_banner_2?.redirect_link?.link || "",

    //MultiSelect
    brandItems: data?.content?.brand?.brand_ids || [],

    productList1Product: data?.content?.products_list?.product_ids || [],

    productCategories: data?.content?.category_product?.category_ids || [],

    sliderProduct1: data?.content?.slider_products?.product_slider_1?.product_ids || [],
    sliderProduct2: data?.content?.slider_products?.product_slider_2?.product_ids || [],
    sliderProduct3: data?.content?.slider_products?.product_slider_3?.product_ids || [],
    sliderProduct4: data?.content?.slider_products?.product_slider_4?.product_ids || [],
  };
};

export default GameHomePageInitialValue;
