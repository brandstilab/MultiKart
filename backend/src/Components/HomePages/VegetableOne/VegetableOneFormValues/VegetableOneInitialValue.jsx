const VegetableOneInitialValue = (data) => {
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

    // Redirect Link
    fullBannerRedirectLinkType: data?.content?.full_banner?.redirect_link?.link_type || "",
    fullBannerRedirectLink: data?.content?.full_banner?.redirect_link?.link || "",

    //Images
    fullBannerImage: data?.content?.full_banner?.image_url ? { original_url: data?.content?.full_banner?.image_url } : "",

    ...obj,

    //MultiSelect
    featuredBlogList: data?.content?.featured_blogs?.blog_ids || [],

    productList1Product: data?.content?.products_list_1?.product_ids || [],
    productList2Product: data?.content?.products_list_2?.product_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],
  };
};

export default VegetableOneInitialValue;
