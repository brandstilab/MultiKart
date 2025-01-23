const FashionSixInitialValue = (data) => {
  
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
    // Images
    banner1Image: data?.content?.offer_banner?.banner_1?.image_url ? { original_url: data?.content?.offer_banner?.banner_1?.image_url } : "",
    banner2Image: data?.content?.offer_banner?.banner_2?.image_url ? { original_url: data?.content?.offer_banner?.banner_2?.image_url } : "",
    banner3Image: data?.content?.offer_banner?.banner_3?.image_url ? { original_url: data?.content?.offer_banner?.banner_3?.image_url } : "",
    banner4Image: data?.content?.offer_banner?.banner_4?.image_url ? { original_url: data?.content?.offer_banner?.banner_4?.image_url } : "",
    banner5Image: data?.content?.offer_banner?.banner_5?.image_url ? { original_url: data?.content?.offer_banner?.banner_5?.image_url } : "",
    banner6Image: data?.content?.offer_banner?.banner_6?.image_url ? { original_url: data?.content?.offer_banner?.banner_6?.image_url } : "",

    rightPanelImage: data?.content?.products_list_2?.right_panel?.image_url ? { original_url: data?.content?.product_list_2?.right_panel?.image_url } : "",

    sliderProductImage: data?.content?.product_banner?.image_url ? { original_url: data?.content?.product_banner?.image_url } : "",
    ...obj,

    // Redirect Link
    banner1LinkType: data?.content?.offer_banner?.banner_1?.redirect_link?.link_type || "",
    banner1Link: data?.content?.offer_banner?.banner_1?.redirect_link?.link || "",

    banner2LinkType: data?.content?.offer_banner?.banner_2?.redirect_link?.link_type || "",
    banner2Link: data?.content?.offer_banner?.banner_2?.redirect_link?.link || "",

    banner3LinkType: data?.content?.offer_banner?.banner_3?.redirect_link?.link_type || "",
    banner3Link: data?.content?.offer_banner?.banner_3?.redirect_link?.link || "",

    banner4LinkType: data?.content?.offer_banner?.banner_4?.redirect_link?.link_type || "",
    banner4Link: data?.content?.offer_banner?.banner_4?.redirect_link?.link || "",

    banner5LinkType: data?.content?.offer_banner?.banner_5?.redirect_link?.link_type || "",
    banner5Link: data?.content?.offer_banner?.banner_5?.redirect_link?.link || "",

    banner6LinkType: data?.content?.offer_banner?.banner_6?.redirect_link?.link_type || "",
    banner6Link: data?.content?.offer_banner?.banner_6?.redirect_link?.link || "",

    //MultiSelect
    productList1Product: data?.content?.products_list_1?.product_ids || [],
    productList2Product: data?.content?.products_list_2?.products?.product_ids || [],

    featuredBlogList: data?.content?.featured_blogs?.blog_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],

    sliderProduct1: data?.content?.product_banner?.product_slider_1?.product_ids || [],
  };
};

export default FashionSixInitialValue;
