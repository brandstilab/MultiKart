import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const ElectronicsTwoSubmit = (values, mutate) => {
  values["content"]["products_ids"] = Array.from(new Set(concatDynamicProductKeys(values)));

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

  if (values["homeBanner1Image"]) {
    values["content"]["home_banner"]["banner_1"]["image_url"] = values["homeBanner1Image"].original_url;
  } else values["content"]["home_banner"]["banner_1"]["image_url"] = "";

  if (values["homeBanner2Image"]) {
    values["content"]["home_banner"]["banner_2"]["image_url"] = values["homeBanner2Image"].original_url;
  } else values["content"]["home_banner"]["banner_2"]["image_url"] = "";

  if (values["homeBanner3Image"]) {
    values["content"]["home_banner"]["banner_3"]["image_url"] = values["homeBanner3Image"].original_url;
  } else values["content"]["home_banner"]["banner_3"]["image_url"] = "";

  // ================================================================================
  // For redirect link

  if (values["offerBanner1LinkType"]) {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link_type"] = values["offerBanner1LinkType"];
  } else {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner1link"]) {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = values["offerBanner1link"];
    if (values["offerBanner1LinkType"] == "product") {
      values["content"]["offer_banner"]["banner_1"]["redirect_link"]["product_ids"] = values["offerBanner1link"];
    } else {
      values["content"]["offer_banner"]["banner_1"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }
  // ---------------------------------------------------------------------
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
  if (values["homeBanner1LinkType"]) {
    values["content"]["home_banner"]["banner_1"]["redirect_link"]["link_type"] = values["homeBanner1LinkType"];
  } else {
    values["content"]["home_banner"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["home_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["homeBanner1Link"]) {
    values["content"]["home_banner"]["banner_1"]["redirect_link"]["link"] = values["homeBanner1Link"];
    if (values["homeBanner1LinkType"] == "product") {
      values["content"]["home_banner"]["banner_1"]["redirect_link"]["link"] = values["homeBanner1Link"];
    } else {
      values["content"]["home_banner"]["banner_1"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["home_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================
  if (values["homeBanner2LinkType"]) {
    values["content"]["home_banner"]["banner_2"]["redirect_link"]["link_type"] = values["homeBanner2LinkType"];
  } else {
    values["content"]["home_banner"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["home_banner"]["banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["homeBanner2Link"]) {
    values["content"]["home_banner"]["banner_2"]["redirect_link"]["link"] = values["homeBanner2Link"];
    if (values["homeBanner2LinkType"] == "product") {
      values["content"]["home_banner"]["banner_2"]["redirect_link"]["link"] = values["homeBanner2Link"];
    } else {
      values["content"]["home_banner"]["banner_2"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["home_banner"]["banner_2"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================

  if (values["homeBanner3LinkType"]) {
    values["content"]["home_banner"]["banner_3"]["redirect_link"]["link_type"] = values["homeBanner3LinkType"];
  } else {
    values["content"]["home_banner"]["banner_3"]["redirect_link"]["link_type"] = "";
    values["content"]["home_banner"]["banner_3"]["redirect_link"]["link"] = "";
  }
  if (values["homeBanner3Link"]) {
    values["content"]["home_banner"]["banner_3"]["redirect_link"]["link"] = values["homeBanner3Link"];
    if (values["homeBanner3LinkType"] == "product") {
      values["content"]["home_banner"]["banner_3"]["redirect_link"]["link"] = values["homeBanner3Link"];
    } else {
      values["content"]["home_banner"]["banner_3"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["home_banner"]["banner_3"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================

  //MultiSelect

  if (values["categoryProductList"]) {
    values["content"]["category_product"]["category_ids"] = values["categoryProductList"];
  }
  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
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
export default ElectronicsTwoSubmit;
