const FurnitureTwoInitialValue = (data) => {
  
  let obj = {};
  data?.content?.home_banner?.banners?.length > 0 &&
    data?.content?.home_banner?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`homeBannerImage${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`homeRedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`homeRedirectLink${index}`] = elem?.redirect_link?.link) : "";
      return obj;
    });

  data?.content?.grid_banner?.banners?.length > 0 &&
    data?.content?.grid_banner?.banners?.forEach((elem, index) => {
      {
        index != 0 ? (elem.image_url ? (obj[`gridBannerImage${index}`] = { original_url: elem.image_url }) : "") : elem.image_url ? (obj[`gridBannerImage${index}`] = { original_url: elem.video_url }) : "";
      }
      elem?.redirect_link ? (obj[`gridBannerRedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`gridBannerRedirectLink${index}`] = elem?.redirect_link?.link) : "";
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
      elem?.redirect_link ? (obj[`socialMediaBannerRedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`socialMediaBannerRedirectLink${index}`] = elem?.redirect_link?.link) : "";
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

    productList2Banner1Image: data?.content?.product_list_2?.products?.product_banner?.banner_1?.image_url ? { original_url: data?.content?.product_list_2?.products?.product_banner?.banner_1?.image_url } : "",
    productList2Banner2Image: data?.content?.product_list_2?.products?.product_banner?.banner_2?.image_url ? { original_url: data?.content?.product_list_2?.products?.product_banner?.banner_2?.image_url } : "",

    ...obj,

    // Redirect Link
    offerBanner1LinkType: data?.content?.offer_banner?.banner_1?.redirect_link?.link_type || "",
    offerBanner1Link: data?.content?.offer_banner?.banner_1?.redirect_link?.link || "",

    offerBanner2LinkType: data?.content?.offer_banner?.banner_2?.redirect_link?.link_type || "",
    offerBanner2Link: data?.content?.offer_banner?.banner_2?.redirect_link?.link || "",

    offerBanner3LinkType: data?.content?.offer_banner?.banner_3?.redirect_link?.link_type || "",
    offerBanner3Link: data?.content?.offer_banner?.banner_3?.redirect_link?.link || "",

    productList2Banner1RedirectLinkType: data?.content?.product_list_2?.products?.product_banner?.banner_1?.redirect_link?.link_type || "",
    productList2Banner1RedirectLink: data?.content?.product_list_2?.products?.product_banner?.banner_1?.redirect_link?.link || "",

    productList2Banner2RedirectLinkType: data?.content?.product_list_2?.products?.product_banner?.banner_2?.redirect_link?.link_type || "",
    productList2Banner2RedirectLink: data?.content?.product_list_2?.products?.product_banner?.banner_2?.redirect_link?.link || "",

    //MultiSelect
    productList1Product: data?.content?.products_list_1?.product_ids || [],
    productList2Product: data?.content?.product_list_2?.products?.product_item?.product_ids || [],
    categoryIconList: data?.content?.categories_icon_list?.category_ids || [],
    rightPanelProduct: data?.content?.product_list_2?.right_panel?.product_ids || [],
    brandItems: data?.content?.brand?.brand_ids || [],
  };
};

export default FurnitureTwoInitialValue;
