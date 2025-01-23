const FashionTwoInitialValue = (data) => {
  
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
      return obj;
    });

  return {
    content: data?.content,
    sequence: data?.sequence,
    slug: data?.slug,
    // Images
    offerBanner1Image: data?.content?.offer_banner?.banner_1?.image_url ? { original_url: data?.content?.offer_banner?.banner_1?.image_url } : "",
    offerBanner2Image: data?.content?.offer_banner?.banner_2?.image_url ? { original_url: data?.content?.offer_banner?.banner_2?.image_url } : "",
    offerBanner3Image: data?.content?.offer_banner?.banner_2?.image_url ? { original_url: data?.content?.offer_banner?.banner_3?.image_url } : "",
    offerBanner4Image: data?.content?.offer_banner?.banner_2?.image_url ? { original_url: data?.content?.offer_banner?.banner_4?.image_url } : "",
    fullBannerImage: data?.content?.full_banner?.image_url ? { original_url: data?.content?.full_banner?.image_url } : "",
    // categoriesIconImage: data?.content?.parallax_banner?.image_url ? { original_url: data?.content?.parallax_banner?.image_url } || "" : "",
    ...obj,

    // Redirect Link
    offerBanner1LinkType: data?.content?.offer_banner?.banner_1?.redirect_link?.link_type || "",
    offerBanner1Link: data?.content?.offer_banner?.banner_1?.redirect_link?.link || "",

    offerBanner2LinkType: data?.content?.offer_banner?.banner_2?.redirect_link?.link_type || "",
    offerBanner2Link: data?.content?.offer_banner?.banner_2?.redirect_link?.link || "",

    offerBanner3LinkType: data?.content?.offer_banner?.banner_3?.redirect_link?.link_type || "",
    offerBanner3Link: data?.content?.offer_banner?.banner_3?.redirect_link?.link || "",

    offerBanner4LinkType: data?.content?.offer_banner?.banner_4?.redirect_link?.link_type || "",
    offerBanner4Link: data?.content?.offer_banner?.banner_4?.redirect_link?.link || "",

    fullBannerLinkType: data?.content?.full_banner?.redirect_link?.link_type || "",
    fullBannerLink: data?.content?.full_banner?.redirect_link?.link || "",

    //MultiSelect
    categoryProductList: data?.content?.category_product?.category_ids || [],

    sliderProduct1: data?.content?.slider_products?.product_slider_1?.product_ids || [],
    sliderProduct2: data?.content?.slider_products?.product_slider_2?.product_ids || [],
    sliderProduct3: data?.content?.slider_products?.product_slider_3?.product_ids || [],
    sliderProduct4: data?.content?.slider_products?.product_slider_4?.product_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],

    // brandItems: data?.content?.brand?.brand_ids || [],
  };
};

export default FashionTwoInitialValue;
