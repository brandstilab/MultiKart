const VegetableThreeInitialValue = (data) => {
  let obj = {};

  data?.content?.home_banner?.banners?.length > 0 &&
    data?.content?.home_banner?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`homeBannerImage${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`homeRedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`homeRedirectLink${index}`] = elem?.redirect_link?.link) : "";
      return obj;
    });

  data?.content?.banner?.banners?.length > 0 &&
    data?.content?.banner?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`bannerImage${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`bannerRedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`bannerRedirectLink${index}`] = elem?.redirect_link?.link) : "";
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

    //MultiSelect
    featuredBlogList: data?.content?.featured_blogs?.blog_ids || [],

    productCategory: data?.content?.category_product?.category_ids || [],

    productListProduct: data?.content?.products_list?.product_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],
  };
};

export default VegetableThreeInitialValue;
