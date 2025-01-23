const VegetableFourInitialValue = (data) => {
  let obj = {};

  data?.content?.services?.banners?.length > 0 &&
    data?.content?.services?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`serviceBannerImage${index}`] = { original_url: elem.image_url }) : "";
      return obj;
    });

  data?.content?.offer_banner_1?.banners?.length > 0 &&
    data?.content?.offer_banner_1?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`offerBanner1Image${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`offerBanner1RedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`offerBanner1RedirectLink${index}`] = elem?.redirect_link?.link) : "";
      return obj;
    });

  data?.content?.offer_banner_2?.banners?.length > 0 &&
    data?.content?.offer_banner_2?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`offerBanner2Image${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`offerBanner2RedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`offerBanner2RedirectLink${index}`] = elem?.redirect_link?.link) : "";
      return obj;
    });

  return {
    content: data?.content,
    sequence: data?.sequence,
    slug: data?.slug,

    //Images
    homeBannerImage: data?.content?.home_banner?.image_url ? { original_url: data?.content?.home_banner?.image_url } : "",

    ...obj,

    // For Redirect Link

    homeBannerLinkType: data?.content?.home_banner?.redirect_link?.link_type || "",
    homeBannerLink: data?.content?.home_banner?.redirect_link?.link || "",

    //MultiSelect
    productList1Product: data?.content?.products_list_1?.product_ids || [],
    productList2Product: data?.content?.products_list_2?.product_ids || [],
    productList3Product: data?.content?.products_list_3?.product_ids || [],
    productList4Product: data?.content?.products_list_4?.product_ids || [],

    categories: data?.content?.categories?.category_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],

    featuredBlogList: data?.content?.featured_blogs?.blog_ids || [],
  };
};

export default VegetableFourInitialValue;
