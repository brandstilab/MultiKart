const MedicalHomePageInitialValue = (data) => {
  let obj = {};
  data?.content?.home_banner?.banners?.length > 0 &&
    data?.content?.home_banner?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`homeBannerImage${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`homeRedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`homeRedirectLink${index}`] = elem?.redirect_link?.link) : "";
      return obj;
    });

  data?.content?.offer_banner?.banners?.length > 0 &&
    data?.content?.offer_banner?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`offerBannerImage${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`offerRedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`offerRedirectLink${index}`] = elem?.redirect_link?.link) : "";
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

    ...obj,

    // Redirect Link
    offerBanner1LinkType: data?.content?.column_banner_product?.offer_banner_1?.redirect_link?.link_type || "",
    offerBanner1Link: data?.content?.column_banner_product?.offer_banner_1?.redirect_link?.link || "",

    offerBanner2LinkType: data?.content?.column_banner_product?.offer_banner_1?.redirect_link?.link_type || "",
    offerBanner2Link: data?.content?.column_banner_product?.offer_banner_1?.redirect_link?.link || "",

    // Image
    offerBanner1Image: data?.content?.column_banner_product?.offer_banner_1?.image_url ? { original_url: data?.content?.column_product_banner?.offer_banner_1?.image_url } : "",
    offerBanner2Image: data?.content?.column_banner_product?.offer_banner_2?.image_url ? { original_url: data?.content?.column_product_banner?.offer_banner_2?.image_url } : "",

    //MultiSelect
    productList1Product: data?.content?.column_banner_product?.product_list_1?.product_ids || [],
    productList2Product: data?.content?.column_banner_product?.product_list_2?.product_ids || [],
    featuredBlogList: data?.content?.featured_blogs?.blog_ids || [],
    productCategory: data?.content?.category_product?.category_ids || [],

    categories: data?.content?.categories?.category_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],
  };
};

export default MedicalHomePageInitialValue;
