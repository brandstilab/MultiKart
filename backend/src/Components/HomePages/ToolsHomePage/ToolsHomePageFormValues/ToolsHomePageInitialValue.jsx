const ToolsHomePageInitialValue = (data) => {
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

    //Images

    productList2Image: data?.content?.products_list_2?.image_url ? { original_url: data?.content?.product_list_2?.image_url } : "",
    categoryRightContentImage: data?.content?.category_product?.right_panel?.product_banner?.image_url ? { original_url: data?.content?.category_product?.right_panel?.product_banner?.image_url } : "",
    ...obj,

    // For Redirect Link

    categoryRightContentBannerLinkType: data?.content?.category_product?.right_panel?.product_banner?.redirect_link?.link_type || "",
    categoryRightContentBannerLink: data?.content?.category_product?.right_panel?.product_banner?.redirect_link?.link || "",

    //MultiSelect
    categories: data?.content?.categories?.category_ids || [],

    productList1Product: data?.content?.products_list_1?.product_ids || [],

    productList2Product: data?.content?.products_list_2?.product_ids || [],

    categoryLeftContentProduct: data?.content?.category_product?.left_panel?.product_ids || [],
    categoryRightContentCategories: data?.content?.category_product?.right_panel?.product_category?.category_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],
  };
};

export default ToolsHomePageInitialValue;
