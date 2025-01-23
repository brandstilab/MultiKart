const WatchHomePageInitialValue = (data) => {
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

    ...obj,

    // Redirect Link
    offerBanner1LinkType: data?.content?.offer_banner_1?.redirect_link?.link_type || "",
    offerBanner1Link: data?.content?.offer_banner_1?.redirect_link?.link || "",

    offerBanner2LinkType1: data?.content?.offer_banner_2?.banner_1?.redirect_link?.link_type || "",
    offerBanner2Link1: data?.content?.offer_banner_2?.banner_1?.redirect_link?.link || "",

    offerBanner2LinkType2: data?.content?.offer_banner_2?.banner_2?.redirect_link?.link_type || "",
    offerBanner2Link2: data?.content?.offer_banner_2?.banner_2?.redirect_link?.link || "",

    offerBanner2LinkType3: data?.content?.offer_banner_2?.banner_3?.redirect_link?.link_type || "",
    offerBanner2Link3: data?.content?.offer_banner_2?.banner_3?.redirect_link?.link || "",


    // Image
    offerBanner1Image: data?.content?.offer_banner_1?.image_url ? { original_url: data?.content?.offer_banner_1?.image_url } : "",
    offerBanner2Image1: data?.content?.offer_banner_2?.banner_1?.image_url ? { original_url: data?.content?.offer_banner_2?.banner_1?.image_url } : "",
    offerBanner2Image2: data?.content?.offer_banner_2?.banner_2?.image_url ? { original_url: data?.content?.offer_banner_2?.banner_2?.image_url } : "",
    offerBanner2Image3: data?.content?.offer_banner_2?.banner_3?.image_url ? { original_url: data?.content?.offer_banner_2?.banner_3?.image_url } : "",
    //MultiSelect
    productList1Product: data?.content?.products_list_1?.product_ids || [],

    productList2Product: data?.content?.products_list_2?.product_ids || [],

    productCategory: data?.content?.category_product?.category_ids || [],

    categories: data?.content?.categories?.category_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],

    featuredBlogList: data?.content?.featured_blogs?.blog_ids || [],
  };
};

export default WatchHomePageInitialValue;
