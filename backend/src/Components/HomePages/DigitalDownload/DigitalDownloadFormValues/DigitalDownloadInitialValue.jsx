const DigitalDownloadInitialValue = (data) => {
  let obj = {};

  data?.content?.services?.banners?.length > 0 &&
    data?.content?.services?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`serviceBannerImage${index}`] = { original_url: elem.image_url }) : "";
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

    homeBannerBackgroundImage: data?.content?.home_banner?.background_image ? { original_url: data?.content?.home_banner?.background_image } : "",
    homeBannerSubImage1: data?.content?.home_banner?.sub_image_1 ? { original_url: data?.content?.home_banner?.sub_image_1 } : "",
    homeBannerSubImage2: data?.content?.home_banner?.sub_image_1 ? { original_url: data?.content?.home_banner?.sub_image_1 } : "",

    productListMainImage: data?.content?.products_list_2?.image_url ? { original_url: data?.content?.products_list_2?.image_url } : "",
    ...obj,

    // Redirect Link
    productListLeftContentLinkType: data?.content?.products_list_2?.left_panel?.redirect_link?.link_type || "",
    productListLeftContentLink: data?.content?.products_list_2?.left_panel?.redirect_link?.link || "",

    //MultiSelect
    categoryIconListCategories: data?.content?.categories_icon_list?.category_ids || [],
    productList1Product: data?.content?.products_list?.product_ids || [],
    productList2Product: data?.content?.products_list_2?.products?.product_ids || [],
    productCategories: data?.content?.category_product?.category_ids || [],

    featuredBlogList: data?.content?.featured_blogs?.blog_ids || [],
  };
};

export default DigitalDownloadInitialValue;
