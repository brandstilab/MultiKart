const FashionSevenInitialValue = (data) => {
  
  let obj = {};

  return {
    content: data?.content,
    sequence: data?.sequence,
    slug: data?.slug,
    // Images
    homeBannerImage: data?.content?.home_banner?.image_url ? { original_url: data?.content?.home_banner?.image_url } : "",

    banner1Image: data?.content?.featured_banners?.banner_1?.image_url ? { original_url: data?.content?.featured_banners?.banner_1?.image_url } : "",
    banner2Image: data?.content?.featured_banners?.banner_2?.image_url ? { original_url: data?.content?.featured_banners?.banner_2?.image_url } : "",
    banner3Image: data?.content?.featured_banners?.banner_3?.image_url ? { original_url: data?.content?.featured_banners?.banner_3?.image_url } : "",

    productBannerImage: data?.content?.product_banner?.image_url ? { original_url: data?.content?.product_banner?.image_url } : "",
    ...obj,

    // Redirect Link
    banner1LinkType: data?.content?.featured_banners?.banner_1?.redirect_link?.link_type || "",
    banner1Link: data?.content?.featured_banners?.banner_1?.redirect_link?.link || "",

    banner2LinkType: data?.content?.featured_banners?.banner_2?.redirect_link?.link_type || "",
    banner2Link: data?.content?.featured_banners?.banner_2?.redirect_link?.link || "",

    banner3LinkType: data?.content?.featured_banners?.banner_3?.redirect_link?.link_type || "",
    banner3Link: data?.content?.featured_banners?.banner_3?.redirect_link?.link || "",

    homeBannerLinkType: data?.content?.home_banner?.redirect_link?.link_type || "",
    homeBannerLink: data?.content?.home_banner?.redirect_link?.link || "",

    leftPanelLinkType: data?.content?.products_list_2?.left_panel?.redirect_link?.link_type || "",
    leftPanelLink: data?.content?.products_list_2?.left_panel?.redirect_link?.link || "",

    //MultiSelect
    productList1Product: data?.content?.product_ids || [],
    productList2Product: data?.content?.products_list_2?.products?.product_ids || [],
    productList1Categories: data?.content?.products_list_1?.category_id || [],

    brandItems: data?.content?.brand?.brand_ids || [],

    productBannerProducts: data?.content?.product_banner?.product_ids || [],
  };
};

export default FashionSevenInitialValue;
