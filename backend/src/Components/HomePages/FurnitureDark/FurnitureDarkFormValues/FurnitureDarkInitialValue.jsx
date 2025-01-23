const FurnitureDarkInitialValue = (data) => {
  
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
    // Images
    offerBanner1Image: data?.content?.offer_banner?.banner_1?.image_url ? { original_url: data?.content?.offer_banner?.banner_1?.image_url } : "",
    offerBanner2Image: data?.content?.offer_banner?.banner_2?.image_url ? { original_url: data?.content?.offer_banner?.banner_2?.image_url } : "",
    offerBanner3Image: data?.content?.offer_banner?.banner_3?.image_url ? { original_url: data?.content?.offer_banner?.banner_3?.image_url } : "",

    banner1Image: data?.content?.banner?.banner_1?.image_url ? { original_url: data?.content?.banner?.banner_1?.image_url } : "",
    banner2Image: data?.content?.banner?.banner_2?.image_url ? { original_url: data?.content?.banner?.banner_2?.image_url } : "",
    banner3Image: data?.content?.banner?.banner_3?.image_url ? { original_url: data?.content?.banner?.banner_3?.image_url } : "",

    leftPanelImage: data?.content?.product_list_2?.left_panel?.image_url ? { original_url: data?.content?.banner?.banner_3?.image_url } : "",

    ...obj,

    // Redirect Link
    offerBanner1LinkType: data?.content?.offer_banner?.banner_1?.redirect_link?.link_type || "",
    offerBanner1Link: data?.content?.offer_banner?.banner_1?.redirect_link?.link || "",

    offerBanner2LinkType: data?.content?.offer_banner?.banner_2?.redirect_link?.link_type || "",
    offerBanner2Link: data?.content?.offer_banner?.banner_2?.redirect_link?.link || "",

    offerBanner3LinkType: data?.content?.offer_banner?.banner_3?.redirect_link?.link_type || "",
    offerBanner3Link: data?.content?.offer_banner?.banner_3?.redirect_link?.link || "",

    banner1LinkType: data?.content?.banner?.banner_1?.redirect_link?.link_type || "",
    banner1Link: data?.content?.banner?.banner_1?.redirect_link?.link || "",

    banner2LinkType: data?.content?.banner?.banner_2?.redirect_link?.link_type || "",
    banner2Link: data?.content?.banner?.banner_2?.redirect_link?.link || "",

    banner3LinkType: data?.content?.banner?.banner_3?.redirect_link?.link_type || "",
    banner3Link: data?.content?.banner?.banner_3?.redirect_link?.link || "",

    leftPanelLinkType: data?.content?.product_list_2?.left_panel?.redirect_link?.link_type || "",
    leftPanelLink: data?.content?.product_list_2?.left_panel?.redirect_link?.link || "",

    //MultiSelect
    productList1Product: data?.content?.products_list_1?.product_ids || [],
    productList2Product: data?.content?.product_list_2?.products?.product_ids || [],
    categoryIconList: data?.content?.categories_icon_list?.category_ids || [],

    featuredBlogList: data?.content?.featured_blogs?.blog_ids || [],
    brandItems: data?.content?.brand?.brand_ids || [],
  };
};

export default FurnitureDarkInitialValue;
