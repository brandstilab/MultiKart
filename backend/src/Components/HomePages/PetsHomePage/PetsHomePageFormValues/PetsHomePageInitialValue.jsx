const PetsHomePageInitialValue = (data) => {
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

  return {
    content: data?.content,
    sequence: data?.sequence,
    slug: data?.slug,

    ...obj,

    //MultiSelect
    productList1Product: data?.content?.products_list_1?.product_ids || [],
    productList2Product: data?.content?.products_list_2?.product_ids || [],
    featuredBlogList: data?.content?.featured_blogs?.blog_ids || [],
    brandItems: data?.content?.brand?.brand_ids || [],
  };
};

export default PetsHomePageInitialValue;
