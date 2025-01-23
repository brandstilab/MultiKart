const ShoesHomePageInitialValue = (data) => {
  
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
    aboutBanner1Image: data?.content?.about_banner?.collection_banner?.banner_1?.image_url ? { original_url: data?.content?.about_banner?.collection_banner?.banner_1?.image_url } : "",
    aboutBanner2Image: data?.content?.about_banner?.collection_banner?.banner_2?.image_url ? { original_url: data?.content?.about_banner?.collection_banner?.banner_2?.image_url } : "",
    ...obj,

    // Redirect Link
    aboutBanner1LinkType: data?.content?.about_banner?.collection_banner?.banner_1?.redirect_link?.link_type || "",
    aboutBanner1Link: data?.content?.about_banner?.collection_banner?.banner_1?.redirect_link?.link || "",

    aboutBanner2LinkType: data?.content?.about_banner?.collection_banner?.banner_2?.redirect_link?.link_type || "",
    aboutBanner2Link: data?.content?.about_banner?.collection_banner?.banner_2?.redirect_link?.link || "",

    //MultiSelect
    productList1Product: data?.content?.products_list?.product_ids || [],

    attribute: data?.content?.attribute?.attribute_id || [],

    productCategories: data?.content?.category_product?.category_ids || [],

    categories1: data?.content?.categories_1?.category_ids || [],

    categories2: data?.content?.categories_2?.category_ids || [],

    featuredBlogList: data?.content?.featured_blogs?.blog_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],

    sliderProduct1: data?.content?.slider_products?.product_slider_1?.product_ids || [],
    sliderProduct2: data?.content?.slider_products?.product_slider_2?.product_ids || [],
    sliderProduct3: data?.content?.slider_products?.product_slider_3?.product_ids || [],
    sliderProduct4: data?.content?.slider_products?.product_slider_4?.product_ids || [],
  };
};

export default ShoesHomePageInitialValue;
