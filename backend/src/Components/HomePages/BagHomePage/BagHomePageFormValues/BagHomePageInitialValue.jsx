const BagHomePageInitialValue = (data) => {
  
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
      elem.image_url ? (obj[`gridBannerImage${index}`] = { original_url: elem.image_url }) : "";
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
      elem?.redirect_link ? (obj[`socialMediaRedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`socialMediaRedirectLink${index}`] = elem?.redirect_link?.link) : "";
      return obj;
    });

  return {
    content: data?.content,
    sequence: data?.sequence,
    slug: data?.slug,

    ...obj,

    // Redirect Link

    fullBannerLinkType: data?.content?.full_banner?.redirect_link?.link_type || "",
    fullBannerLink: data?.content?.full_banner?.redirect_link?.link || "",

    // Image

    fullBannerImage: data?.content?.full_banner?.image_url ? { original_url: data?.content?.full_banner?.image_url } : "",

    //MultiSelect
    productBannerLeftPanelProduct: data?.content?.product_banner?.left_content?.product_ids || [],
    productBannerCenterPanelProduct: data?.content?.product_banner?.center_content?.product_ids || [],
    productBannerRightPanelProduct: data?.content?.product_banner?.right_content?.product_ids || [],
    productListProduct: data?.content?.products_list?.product_ids || [],
    featuredBlogList: data?.content?.featured_blogs?.blog_ids || [],
    productCategory: data?.content?.category_product?.category_ids || [],

    categories: data?.content?.category?.category_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],

    products_ids: data?.content?.products_ids || [],
  };
};

export default BagHomePageInitialValue;
