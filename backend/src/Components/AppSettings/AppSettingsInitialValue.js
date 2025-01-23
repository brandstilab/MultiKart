const AppSettingsInitialValue = (data) => {
    let obj = {}
    data?.values?.home_banner?.banners.length > 0 &&
    data?.values?.home_banner?.banners.forEach((elem, index) => {
            elem.image_url ? obj[`home_bannerImage${index}`] = { original_url: elem.image_url } : '';
            elem?.redirect_link ? obj[`home_bannerRedirectLinkType${index}`] = elem?.redirect_link?.link_type : ""
            elem?.redirect_link ? obj[`home_bannerRedirectLink${index}`] = elem?.redirect_link?.link : ""
            return obj
        })
    return {
        values: data?.values,
        id: data?.id,
        ...obj,
        recent_productImage:data?.values?.recent_product?.product_ids || [],
        categoryIconList: data?.values?.categories_list?.category_ids || [],
        offer_productsImage: data?.values?.offer_products?.product_ids || [],
        couponIds: data?.values?.coupons?.coupon_ids || [],

        productListImage1:data?.values?.section_1_products?.product_ids || [],
        productListImage2:data?.values?.section_2_products?.product_ids || [],
        productListImage3:data?.values?.section_3_products?.product_ids || [],

    }
}
export default AppSettingsInitialValue
















