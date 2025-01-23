import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const MarketplaceThreeSubmit = (values, mutate) => {
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

  // Images
  if (values["offerBanner1Image"]) {
    values["content"]["offer_banner"]["banner_1"]["image_url"] = values["offerBanner1Image"].original_url;
  } else values["content"]["offer_banner"]["banner_1"]["image_url"] = "";

  if (values["offerBanner2Image"]) {
    values["content"]["offer_banner"]["banner_2"]["image_url"] = values["offerBanner2Image"].original_url;
  } else values["content"]["offer_banner"]["banner_2"]["image_url"] = "";

  if (values["offerBanner3Image"]) {
    values["content"]["offer_banner"]["banner_3"]["image_url"] = values["offerBanner3Image"].original_url;
  } else values["content"]["offer_banner"]["banner_3"]["image_url"] = "";

  if (values["categoryLeftContentBannerImage"]) {
    values["content"]["categories_products"]["left_panel"]["banner"]["image_url"] = values["categoryLeftContentBannerImage"].original_url;
  } else values["content"]["categories_products"]["left_panel"]["banner"]["image_url"] = "";

  if (values["categoryProductOfferBanner1Image"]) {
    values["content"]["categories_products"]["right_panel"]["offer_banner"]["banner_1"]["image_url"] = values["categoryProductOfferBanner1Image"].original_url;
  } else values["content"]["categories_products"]["right_panel"]["offer_banner"]["banner_1"]["image_url"] = "";

  if (values["categoryProductOfferBanner2Image"]) {
    values["content"]["categories_products"]["right_panel"]["offer_banner"]["banner_2"]["image_url"] = values["categoryProductOfferBanner2Image"].original_url;
  } else values["content"]["categories_products"]["right_panel"]["offer_banner"]["banner_2"]["image_url"] = "";

  // ============================================================================================
  // Redirect Link
  if (values["offerBanner1LinkType"]) {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link_type"] = values["offerBanner1LinkType"];
  } else {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner1Link"]) {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = values["offerBanner1Link"];
    if (values["offerBanner1LinkType"] == "product") {
      values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = values["offerBanner1Link"];
    } else {
      values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================
  if (values["offerBanner2LinkType"]) {
    values["content"]["offer_banner"]["banner_2"]["redirect_link"]["link_type"] = values["offerBanner2LinkType"];
  } else {
    values["content"]["offer_banner"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner2Link"]) {
    values["content"]["offer_banner"]["banner_2"]["redirect_link"]["link"] = values["offerBanner2Link"];
    if (values["offerBanner2LinkType"] == "product") {
      values["content"]["offer_banner"]["banner_2"]["redirect_link"]["link"] = values["offerBanner2Link"];
    } else {
      values["content"]["offer_banner"]["banner_2"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner"]["banner_2"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================
  if (values["offerBanner3LinkType"]) {
    values["content"]["offer_banner"]["banner_3"]["redirect_link"]["link_type"] = values["offerBanner3LinkType"];
  } else {
    values["content"]["offer_banner"]["banner_3"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["banner_3"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner3Link"]) {
    values["content"]["offer_banner"]["banner_3"]["redirect_link"]["link"] = values["offerBanner3Link"];
    if (values["offerBanner3LinkType"] == "product") {
      values["content"]["offer_banner"]["banner_3"]["redirect_link"]["link"] = values["offerBanner3Link"];
    } else {
      values["content"]["offer_banner"]["banner_3"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner"]["banner_3"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================

  if (values["categoryLeftContentBannerLinkType"]) {
    values["content"]["categories_products"]["left_panel"]["banner"]["redirect_link"]["link_type"] = values["categoryLeftContentBannerLinkType"];
  } else {
    values["content"]["categories_products"]["left_panel"]["banner"]["redirect_link"]["link_type"] = "";
    values["content"]["categories_products"]["left_panel"]["banner"]["redirect_link"]["link"] = "";
  }
  if (values["categoryLeftContentBannerLink"]) {
    values["content"]["categories_products"]["left_panel"]["banner"]["redirect_link"]["link"] = values["categoryLeftContentBannerLink"];
    if (values["categoryLeftContentBannerLinkType"] == "product") {
      values["content"]["categories_products"]["left_panel"]["banner"]["redirect_link"]["product_ids"] = values["categoryLeftContentBannerLink"];
    } else {
      values["content"]["categories_products"]["left_panel"]["banner"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["categories_products"]["left_panel"]["banner"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================

  if (values["categoryProductOfferBanner1LinkType"]) {
    values["content"]["categories_products"]["right_panel"]["offer_banner"]["banner_1"]["redirect_link"]["link_type"] = values["categoryProductOfferBanner1LinkType"];
  } else {
    values["content"]["categories_products"]["right_panel"]["offer_banner"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["categories_products"]["right_panel"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["categoryProductOfferBanner1Link"]) {
    values["content"]["categories_products"]["right_panel"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = values["categoryProductOfferBanner1Link"];
    if (values["categoryProductOfferBanner1LinkType"] == "product") {
      values["content"]["categories_products"]["right_panel"]["offer_banner"]["banner_1"]["redirect_link"]["product_ids"] = values["categoryProductOfferBanner1Link"];
    } else {
      values["content"]["categories_products"]["right_panel"]["offer_banner"]["banner_1"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["categories_products"]["right_panel"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }

  if (values["categoryProductOfferBanner2LinkType"]) {
    values["content"]["categories_products"]["right_panel"]["offer_banner"]["banner_2"]["redirect_link"]["link_type"] = values["categoryProductOfferBanner2LinkType"];
  } else {
    values["content"]["categories_products"]["right_panel"]["offer_banner"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["categories_products"]["right_panel"]["offer_banner"]["banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["categoryProductOfferBanner2Link"]) {
    values["content"]["categories_products"]["right_panel"]["offer_banner"]["banner_2"]["redirect_link"]["link"] = values["categoryProductOfferBanner2Link"];
    if (values["categoryProductOfferBanner2LinkType"] == "product") {
      values["content"]["categories_products"]["right_panel"]["offer_banner"]["banner_2"]["redirect_link"]["product_ids"] = values["categoryProductOfferBanner2Link"];
    } else {
      values["content"]["categories_products"]["right_panel"]["offer_banner"]["banner_2"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["categories_products"]["right_panel"]["offer_banner"]["banner_2"]["redirect_link"]["link"] = "";
  }

  // ============================================================================================
  //MultiSelect
  if (values["featuredBlogList"]) {
    values["content"]["featured_blogs"]["blog_ids"] = values["featuredBlogList"];
  }
  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
  }

  if (values["categoryLeftContentCategories"]) {
    values["content"]["categories_products"]["left_panel"]["categories"]["category_ids"] = values["categoryLeftContentCategories"];
  }

  if (values["categoryLeftContentProducts"]) {
    values["content"]["categories_products"]["left_panel"]["products_list"]["product_ids"] = values["categoryLeftContentProducts"];
  }

  if (values["categoryRightContentProduts"]) {
    values["content"]["categories_products"]["right_panel"]["products_list"]["product_ids"] = values["categoryRightContentProduts"];
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
export default MarketplaceThreeSubmit;
