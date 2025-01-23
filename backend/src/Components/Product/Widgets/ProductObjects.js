import { descriptionSchema, discountSchema, dropDownScheme, ifTypeSimpleSchema, nameSchema, variationSchema, externalUrlSchema, watermarkImageSchema, ifSeparatorSchema,ifLicenseKeySchema, testSchema } from "../../../Utils/Validation/ValidationSchemas";

export const ProductValidationSchema = {
  name: nameSchema,
  short_description: nameSchema,
  description: descriptionSchema,
  stock_status: nameSchema,
  external_url: externalUrlSchema,
  sku: ifTypeSimpleSchema,
  quantity: ifTypeSimpleSchema,
  price: ifTypeSimpleSchema, // if (type == simple)
  discount: discountSchema, // if (type == simple)
  categories: dropDownScheme,
  tax_id: nameSchema,
  variations: variationSchema,
  watermark_image_id:watermarkImageSchema,
  // separator:ifSeparatorSchema,
  // license_key:ifLicenseKeySchema,
  wholesale_prices: testSchema
};

export function ProductInitValues(oldData, updateId) {
  let separator = ",";
  if(oldData?.separator == 'comma') {
    separator = ",";
  } else if(oldData?.separator == 'semicolon') {
    separator = ";";
  } else if(oldData?.separator == 'pipe') {
    separator = "|";
  }
  const attr_combination = () => {
    let attributes = oldData?.attributes?.map((value) => value?.id);
    let variants = attributes?.map((attr, i) => {
      let matchingVariations = oldData?.variations.filter((variation) => {
        return variation.attribute_values.some((attrVal) => attrVal?.attribute_id == attr);
      });

      let attributeValues = matchingVariations?.reduce((acc, variation) => {
        let values = variation.attribute_values.filter((attrVal) => attrVal?.attribute_id == attr).map((attrVal) => attrVal?.id);
        return values ? [...new Set([...acc, ...values])] : acc;
      }, []);
      return oldData?.attributes[i] && attributeValues.length > 0 ? { name: oldData?.attributes[i], values: attributeValues } : false;
    });
    return variants?.filter((elem) => elem !== false);
  };
  return {
    // General
    product_type:updateId ? oldData?.product_type || "" : "physical",
    store_id: updateId ? Number(oldData?.store_id) || "" : "",
    name: updateId ? oldData?.name || "" : "",
    short_description: updateId ? oldData?.short_description || "" : "",
    description: updateId ? oldData?.description || "" : "",
    tax_id :updateId ? Number(oldData?.tax_id) || "" : "",
   // is_random_related_products: updateId ? oldData?.is_random_related_products || false : false,

    // Product Images
    product_thumbnail: updateId ? oldData?.product_thumbnail || "" : "",
    product_thumbnail_id: updateId ? oldData?.product_thumbnail?.id || "" : "",
    size_chart_image: updateId ? oldData?.size_chart_image || "" : "",
    size_chart_image_id: updateId ? oldData?.size_chart_image?.id || "" : "",
    product_galleries: updateId ? oldData?.product_galleries?.map((img) => img) || "" : "",
    product_galleries_id: updateId ? oldData?.product_galleries?.map((elem) => elem.id) || "" : "",
    watermark: updateId ?  oldData?.watermark ? false : false : false,
    watermark_position: updateId ? "center" : "center",
    watermark_image: updateId ? "" : "",
    watermark_image_id: updateId ?  "" : "",
    // Inverntory  =>Type: Simple
    type: updateId ? oldData?.type || "" : "simple",
    stock_status: updateId ? oldData?.stock_status || "" : "in_stock",
    sku: updateId ? oldData?.sku || "" : "",
    quantity: updateId ? oldData?.quantity || "" : "",
    price: updateId ? oldData?.price || "" : "",
    discount: updateId ? oldData?.discount || "" : "",
    sale_price: updateId ? oldData?.sale_price || "" : "0.00",
    wholesale_price_type : updateId ? oldData?.wholesale_price_type || "" : "",
    // wholesale_prices:  updateId ? oldData?.wholesales || [] : [{ id:"",min_qty: "", max_qty: "", value: "" }],
    wholesale_prices:  updateId ? oldData?.wholesales || [] : [],
    external_url:updateId ? oldData?.external_url || "" : "",
    external_button_text :updateId ? oldData?.external_button_text || "" : "",
   
    // Variation
    variations: updateId ? oldData?.variations : [],
    combination: updateId ? attr_combination() : [{}],
    // attributesName: updateId ? oldData?.attributes : [],
    attributes_ids: updateId ? oldData?.attributes?.map((elem) => elem.id) : [],
    // is_external: updateId ?  oldData?.is_external ? true : false :false,
    external_button_text: updateId ? oldData?.external_button_text : '',
    external_url: updateId ? oldData?.external_url ?oldData?.external_url :"" : "",
    variation_image_id: "",
    is_digital: updateId ? oldData?.is_digital ? true : false : false,
    digital_file_ids :updateId ? oldData?.digital_file_ids|| "" : "",
    // Digigtal Product
    is_licensable: updateId ? oldData?.is_licensable ? true : false : false,
    is_licensekey_auto: updateId ? oldData?.is_licensekey_auto ? true : false : false,
    separator: updateId ? oldData?.separator || "" : "",
    // license_key: updateId ? oldData?.license_key || "" : "",
    license_key: updateId ? oldData?.license_keys?.map((value) => value?.license_key).join(separator) : "",
    // digital_file_id: updateId ? oldData?.digital_file_id || "" : "",
    preview_audio_file_id: updateId ? oldData?.preview_audio_file_id || "" : "",
    preview_type:updateId ? oldData?.preview_type || "" : "url",
    preview_video_file_id: updateId ? oldData?.preview_video_file_id || "" : "",
    preview_url : updateId ? oldData?.preview_url || "" : "",
    // Setup
    is_sale_enable: updateId ? oldData?.is_sale_enable ? true : false : false,
    sale_starts_at: updateId ? oldData?.sale_starts_at || null : null,
    sale_expired_at: updateId ? oldData?.sale_expired_at || null : null,
    unit: updateId ? oldData?.unit || "" : "",
    tags: updateId ? oldData?.tags?.map((item) => item.id) || [] : [],
    categories: updateId ? oldData?.categories?.map((item) => item.id) || [] : [],
    brand_id : updateId ? oldData?.brand_id : '',
    is_random_related_products: updateId ? Boolean(Number(oldData?.is_random_related_products)) : true,
    related_products: updateId ? oldData?.related_products?.map((elem) => elem) || [] : [],
    cross_sell_products: updateId ? oldData?.cross_sell_products?.map((elem) => elem) || [] : [],
   
    // SEO
    meta_title: updateId ? oldData?.meta_title || "" : "",
    meta_description: updateId ? oldData?.meta_description || "" : "",
    product_meta_image_id: updateId ? oldData?.product_meta_image_id?.id || "" : "",
    product_meta_image: updateId ? oldData?.product_meta_image || "" : "",
    // Shipping Tax
    is_free_shipping: updateId ? Boolean(Number(oldData?.is_free_shipping)) : "",
    weight: updateId ? oldData?.weight || "" : "",
    estimated_delivery_text: updateId ? oldData?.estimated_delivery_text : "",
    is_return: updateId ? Boolean(oldData?.is_return) : true,
    return_policy_text: updateId ? oldData?.return_policy_text : "",

    // Status
    is_featured: updateId ? Boolean(oldData?.is_featured) : false,
    safe_checkout: updateId ? Boolean(oldData?.safe_checkout) : true,
    secure_checkout: updateId ? Boolean(oldData?.secure_checkout) : true,
    social_share: updateId ? Boolean(oldData?.social_share) : true,
    encourage_order: updateId ? Boolean(oldData?.encourage_order) : true,
    encourage_view: updateId ? Boolean(oldData?.encourage_view) : true,
    is_trending: updateId ? Boolean(oldData?.is_trending) : false,
    status: updateId ? Boolean(oldData?.status) : true
  };
}
