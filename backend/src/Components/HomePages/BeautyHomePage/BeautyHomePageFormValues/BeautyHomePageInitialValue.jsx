const BeautyHomePageInitialValue = (data) => {
  let obj = {};
  data?.content?.home_banner?.banners?.length > 0 &&
    data?.content?.home_banner?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`homeBannerImage${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`homeRedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`homeRedirectLink${index}`] = elem?.redirect_link?.link) : "";
      return obj;
    });

  data?.content?.about_us?.services?.banners?.length > 0 &&
    data?.content?.about_us?.services?.banners?.forEach((elem, index) => {
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
    // Images

    aboutUsImage: data?.content?.about_us?.image_url ? { original_url: data?.content?.about_us?.image_url } : "",

    productImage: data?.content?.product_video?.image_url ? { original_url: data?.content?.product_video?.image_url } : "",
    productVideo: data?.content?.product_video?.video_url ? { original_url: data?.content?.product_video?.video_url } : "",
    ...obj,

    //MultiSelect
    productList1Product: data?.content?.products_list_1?.product_ids || [],

    productList2Product: data?.content?.products_list_2?.product_ids || [],

    featuredBlogList: data?.content?.featured_blogs?.blog_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],
  };
};

export default BeautyHomePageInitialValue;
