import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const DigitalDownloadSubmit = (values, mutate) => {
  values["content"]["products_ids"] = Array.from(new Set(concatDynamicProductKeys(values)));

  // Images

  if (values["homeBannerBackgroundImage"]) {
    values["content"]["home_banner"]["background_image"] = values["homeBannerBackgroundImage"].original_url;
  } else values["content"]["home_banner"]["background_image"] = "";
  if (values["homeBannerSubImage1"]) {
    values["content"]["home_banner"]["sub_image_1"] = values["homeBannerSubImage1"].original_url;
  } else values["content"]["home_banner"]["sub_image_1"] = "";
  if (values["homeBannerSubImage2"]) {
    values["content"]["home_banner"]["sub_image_2"] = values["homeBannerSubImage2"].original_url;
  } else values["content"]["home_banner"]["sub_image_2"] = "";

  if (values["productListMainImage"]) {
    values["content"]["products_list_2"]["image_url"] = values["productListMainImage"].original_url;
  } else values["content"]["products_list_2"]["image_url"] = "";

  // =============================================================================================================

  // For Passing Redirect Link
  if (values["productListLeftContentLinkType"]) {
    values["content"]["products_list_2"]["left_panel"]["redirect_link"]["link_type"] = values["productListLeftContentLinkType"];
  } else {
    values["content"]["products_list_2"]["left_panel"]["redirect_link"]["link_type"] = "";
    values["content"]["products_list_2"]["left_panel"]["redirect_link"]["link"] = "";
    values["productListLeftContentLinkType"] = "";
  }
  if (values["productListLeftContentLink"]) {
    values["content"]["products_list_2"]["left_panel"]["redirect_link"]["link"] = values["productListLeftContentLink"];
    if (values["productListLeftContentLinkType"] == "product") {
      values["content"]["products_list_2"]["left_panel"]["redirect_link"]["product_ids"] = values["productListLeftContentLink"];
    } else {
      values["content"]["products_list_2"]["left_panel"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["products_list_2"]["left_panel"]["redirect_link"]["link"] = "";
  }

  // ==========================================================================

  //MultiSelect
  if (values["productList1Product"]) {
    values["content"]["products_list"]["product_ids"] = values["productList1Product"];
  }

  if (values["productCategories"]) {
    values["content"]["category_product"]["category_ids"] = values["productCategories"];
  }

  if (values["featuredBlogList"]) {
    values["content"]["featured_blogs"]["blog_ids"] = values["featuredBlogList"];
  }

  const updatedValues = {
    ...values,
    content: {
      ...values.content,
      products_ids: Array.from(new Set(concatDynamicProductKeys(values))),
    },
  };

  // Put Add Or Update Logic Here;
};
export default DigitalDownloadSubmit;
