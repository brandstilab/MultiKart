import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const VegetableFourSubmit = (values, mutate) => {
  values["content"]["products_ids"] = Array.from(new Set(concatDynamicProductKeys(values)));

  values["content"]["services"]["banners"].forEach((elem, i) => {
    if (values[`serviceBannerImage${i}`]) {
      values["content"]["services"]["banners"][i]["image_url"] = values[`serviceBannerImage${i}`].original_url;
    } else {
      values["content"]["services"]["banners"][i]["image_url"] = "";
    }
  });

  values["content"]["offer_banner_1"]["banners"].forEach((elem, i) => {
    if (!values["content"]["offer_banner_1"]["banners"][i]["redirect_link"]) {
      values["content"]["offer_banner_1"]["banners"][i]["redirect_link"] = {}; // Initialize redirect_link if undefined
    }
    if (values[`offerBanner1Image${i}`]) {
      values["content"]["offer_banner_1"]["banners"][i]["image_url"] = values[`offerBanner1Image${i}`].original_url;
    } else {
      values["content"]["offer_banner_1"]["banners"][i]["image_url"] = "";
    }
    if (values[`offerBanner1RedirectLinkType${i}`] || values[`offerBanner1RedirectLink${i}`]) {
      values["content"]["offer_banner_1"]["banners"][i]["redirect_link"]["link_type"] = values[`offerBanner1RedirectLinkType${i}`];
      values["content"]["offer_banner_1"]["banners"][i]["redirect_link"]["link"] = values[`offerBanner1RedirectLink${i}`];
      if (values[`offerBanner1RedirectLinkType${i}`] == "product") {
        values["content"]["offer_banner_1"]["banners"][i]["redirect_link"]["product_ids"] = values[`offerBanner1RedirectLink${i}`];
      } else {
        values["content"]["offer_banner_1"]["banners"][i]["redirect_link"]["product_ids"] = "";
      }
    } else {
      values["content"]["offer_banner_1"]["banners"][i]["redirect_link"]["link_type"] = "";
      values["content"]["offer_banner_1"]["banners"][i]["redirect_link"]["link"] = "";
    }
  });

  values["content"]["offer_banner_2"]["banners"].forEach((elem, i) => {
    if (values[`offerBanner2Image${i}`]) {
      values["content"]["offer_banner_2"]["banners"][i]["image_url"] = values[`offerBanner2Image${i}`].original_url;
    } else {
      values["content"]["offer_banner_2"]["banners"][i]["image_url"] = "";
    }
    if (values[`offerBanner2RedirectLinkType${i}`] || values[`offerBanner2RedirectLink${i}`]) {
      values["content"]["offer_banner_2"]["banners"][i]["redirect_link"]["link_type"] = values[`offerBanner2RedirectLinkType${i}`];
      values["content"]["offer_banner_2"]["banners"][i]["redirect_link"]["link"] = values[`offerBanner2RedirectLink${i}`];
      if (values[`offerBanner2RedirectLinkType${i}`] == "product") {
        values["content"]["offer_banner_2"]["banners"][i]["redirect_link"]["product_ids"] = values[`offerBanner2RedirectLink${i}`];
      } else {
        values["content"]["offer_banner_2"]["banners"][i]["redirect_link"]["product_ids"] = "";
      }
    } else {
      values["content"]["offer_banner_2"]["banners"][i]["redirect_link"]["link_type"] = "";
      values["content"]["offer_banner_2"]["banners"][i]["redirect_link"]["link"] = "";
    }
  });

  // ============================================================================================

  // Images
  if (values["homeBannerImage"]) {
    values["content"]["home_banner"]["image_url"] = values["homeBannerImage"].original_url;
  } else values["content"]["home_banner"]["image_url"] = "";

  // ============================================================================================

  //  Redirect Link
  if (values["homeBannerLinkType"]) {
    values["content"]["home_banner"]["redirect_link"]["link_type"] = values["homeBannerLinkType"];
  } else {
    values["content"]["home_banner"]["redirect_link"]["link_type"] = "";
    values["content"]["home_banner"]["redirect_link"]["link"] = "";
  }
  if (values["homeBannerLink"]) {
    values["content"]["home_banner"]["redirect_link"]["link"] = values["homeBannerLink"];
    if (values["homeBannerLinkType"] == "product") {
      values["content"]["home_banner"]["redirect_link"]["link"] = values["homeBannerLink"];
    } else {
      values["content"]["home_banner"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["home_banner"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================

  //MultiSelect
  if (values["featuredBlogList"]) {
    values["content"]["featured_blogs"]["blog_ids"] = values["featuredBlogList"];
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

  if (values["productList3Product"]) {
    values["content"]["products_list_3"]["product_ids"] = values["productList3Product"];
  }

  if (values["productList4Product"]) {
    values["content"]["products_list_4"]["product_ids"] = values["productList4Product"];
  }

  if (values["categories"]) {
    values["content"]["categories"]["category_ids"] = values["categories"];
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
export default VegetableFourSubmit;
