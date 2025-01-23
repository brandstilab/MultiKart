const FashionThreeInitialValue = (data) => {
  
  let obj = {};
  data?.content?.home_banner?.banners?.length > 0 &&
    data?.content?.home_banner?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`homeBannerImage${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`homeRedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`homeRedirectLink${index}`] = elem?.redirect_link?.link) : "";
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

    // Images
    fullBannerImage: data?.content?.full_banner?.image_url ? { original_url: data?.content?.full_banner?.image_url } : "",

    //MultiSelect
    productList1Product: data?.content?.products_list?.product_ids || [],
    productList2Product: data?.content?.category_product?.category_ids || [],
    brandItems: data?.content?.brand?.brand_ids || [],

    // brandItems: data?.content?.brand?.brand_ids || [],
  };
};

export default FashionThreeInitialValue;
