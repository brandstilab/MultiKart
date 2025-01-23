import { concatDynamicProductKeys } from "@/Utils/CustomFunctions/concatDynamicProductKeys"

const AppSettingsSubmit = (values, mutate) => {
    values['values']['products_ids'] = Array.from(new Set(concatDynamicProductKeys(values)))


    values['values']['home_banner']['banners'].forEach((elem, i) => {
        if (values[`home_bannerImage${i}`]) {
            values['values']['home_banner']['banners'][i]['image_url'] = values[`home_bannerImage${i}`].original_url
        } else {
            values['values']['home_banner']['banners'][i]['image_url'] = ''
        }
        if (values[`home_bannerRedirectLinkType${i}`] || values[`home_bannerRedirectLink${i}`]) {
            values['values']['home_banner']['banners'][i]['redirect_link']['link_type'] = values[`home_bannerRedirectLinkType${i}`]
            values['values']['home_banner']['banners'][i]['redirect_link']['link'] = values[`home_bannerRedirectLink${i}`]

            if (values[`home_bannerRedirectLinkType${i}`] == "product") {
                values['values']['home_banner']['banners'][i]['redirect_link']['product_ids'] = values[`home_bannerRedirectLink${i}`]
            } else {
                values['values']['home_banner']['banners'][i]['redirect_link']['product_ids'] = ''
            }
        } else {
            values['values']['home_banner']['banners'][i]['redirect_link']['link_type'] = ''
            values['values']['home_banner']['banners'][i]['redirect_link']['link'] = ''
        }
    })
    if (values['categoryIconList']) {
        values['values']['categories_list']['category_ids'] = values['categoryIconList']
    }



    if (values['recent_productImage']) {
        values['values']['recent_product']['product_ids'] = values['recent_productImage']
    }   
    if (values['productListImage1']) {
        values['values']['section_1_products']['product_ids'] = values['productListImage1']
    }   
    if (values['productListImage2']) {
        values['values']['section_2_products']['product_ids'] = values['productListImage2']
    }
    if (values['productListImage3']) {
        values['values']['section_3_products']['product_ids'] = values['productListImage3']
    }   
     if (values['offer_productsImage']) {
        values['values']['offer_products']['product_ids'] = values['offer_productsImage']
    }     
    if (values['couponIds']) {
        values['values']['coupons']['coupon_ids'] = values['couponIds']
    }

    // ---------------------------------------------------------------------

    mutate(values);
}

export default AppSettingsSubmit