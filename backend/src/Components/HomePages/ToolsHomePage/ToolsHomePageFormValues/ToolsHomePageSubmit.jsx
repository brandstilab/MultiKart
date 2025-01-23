import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const ToolsHomePageSubmit = (values, mutate) => {
  values["content"]["products_ids"] = Array.from(new Set(concatDynamicProductKeys(values)));

  values["content"]["home_banner"]["banners"].forEach((elem, i) => {
 if (!values["content"]["home_banner"]["banners"][i]["redirect_link"]) {
      values["content"]["home_banner"]["banners"][i]["redirect_link"] = {}; // Initialize redirect_link if undefined
    }

    if (values[`homeBannerImage${i}`]) {
      values["content"]["home_banner"]["banners"][i]["image_url"] = values[`homeBannerImage${i}`].original_url;
    } else {
      values["content"]["home_banner"]["banners"][i]["image_url"] = "";
    }

    if (values[`homeRedirectLinkType${i}`] || values[`homeRedirectLink${i}`]) {
      values["content"]["home_banner"]["banners"][i]["redirect_link"]["link_type"] = values[`homeRedirectLinkType${i}`];
      values["content"]["home_banner"]["banners"][i]["redirect_link"]["link"] = values[`homeRedirectLink${i}`];
      if (values[`homeRedirectLinkType${i}`] == "product") {
        values["content"]["home_banner"]["banners"][i]["redirect_link"]["product_ids"] = values[`homeRedirectLink${i}`];
      } else {
        values["content"]["home_banner"]["banners"][i]["redirect_link"]["product_ids"] = "";
      }
    } else {
      values["content"]["home_banner"]["banners"][i]["redirect_link"]["link_type"] = "";
      values["content"]["home_banner"]["banners"][i]["redirect_link"]["link"] = "";
    }
  });

  values["content"]["services"]["banners"].forEach((elem, i) => {
    if (values[`serviceBannerImage${i}`]) {
      values["content"]["services"]["banners"][i]["image_url"] = values[`serviceBannerImage${i}`].original_url;
    } else {
      values["content"]["services"]["banners"][i]["image_url"] = "";
    }
  });
  // ============================================================================================

  // Images

  if (values["categoryRightContentImage"]) {
    values["content"]["category_product"]["right_panel"]["product_banner"]["image_url"] = values["categoryRightContentImage"].original_url;
  } else values["content"]["category_product"]["right_panel"]["product_banner"]["image_url"] = "";

  if (values["productList2Image"]) {
    values["content"]["products_list_2"]["image_url"] = values["productList2Image"].original_url;
  }

  // ============================================================================================
  // Redirect Link

  if (values["categoryRightContentBannerLinkType"]) {
    values["content"]["category_product"]["right_panel"]["product_banner"]["redirect_link"]["link_type"] = values["categoryRightContentBannerLinkType"];
  } else {
    values["content"]["category_product"]["right_panel"]["product_banner"]["redirect_link"]["link_type"] = "";
    values["content"]["category_product"]["right_panel"]["product_banner"]["redirect_link"]["link"] = "";
  }
  if (values["categoryRightContentBannerLink"]) {
    values["content"]["category_product"]["right_panel"]["product_banner"]["redirect_link"]["link"] = values["categoryRightContentBannerLink"];
    if (values["categoryRightContentBannerLinkType"] == "product") {
      values["content"]["category_product"]["right_panel"]["product_banner"]["redirect_link"]["link"] = values["categoryRightContentBannerLink"];
    } else {
      values["content"]["category_product"]["right_panel"]["product_banner"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["category_product"]["right_panel"]["product_banner"]["redirect_link"]["link"] = "";
  }

  // ============================================================================================
  //MultiSelect
  if (values["categories"]) {
    values["content"]["categories"]["category_ids"] = values["categories"];
  }

  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
  }

  if (values["productList1Product"]) {
    values["content"]["products_list_1"]["product_ids"] = values["productList1Product"];
  }

  if (values["productList2Product"]) {
    values["content"]["products_list_2"]["product_ids"] = values["productList2Product"];
  }

  if (values["categoryLeftContentProduct"]) {
    values["content"]["category_product"]["left_panel"]["product_ids"] = values["categoryLeftContentProduct"];
  }

  if (values["categoryRightContentCategories"]) {
    values["content"]["category_product"]["right_panel"]["product_category"]["category_ids"] = values["categoryRightContentCategories"];
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
export default ToolsHomePageSubmit;
