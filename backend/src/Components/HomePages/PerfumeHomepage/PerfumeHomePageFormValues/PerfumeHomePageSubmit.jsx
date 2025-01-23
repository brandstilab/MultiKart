import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const PerfumeHomePageSubmit = (values, mutate) => {
  values["content"]["products_ids"] = Array.from(new Set(concatDynamicProductKeys(values)));

  // Redirect Link
  if (values["offerBanner2LinkType"]) {
    values["content"]["offer_banner_2"]["redirect_link"]["link_type"] = values["offerBanner2LinkType"];
  } else {
    values["content"]["offer_banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner2Link"]) {
    values["content"]["offer_banner_2"]["redirect_link"]["link"] = values["offerBanner2Link"];
    if (values["offerBanner2LinkType"] == "product") {
      values["content"]["offer_banner_2"]["redirect_link"]["link"] = values["offerBanner2Link"];
    } else {
      values["content"]["offer_banner_2"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner_2"]["redirect_link"]["link"] = "";
  }

  if (values["offerBanner1LinkType1"]) {
    values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["link_type"] = values["offerBanner1LinkType1"];
  } else {
    values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner1Link1"]) {
    values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["link"] = values["offerBanner1Link1"];
    if (values["offerBanner1LinkType1"] == "product") {
      values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["link"] = values["offerBanner1Link1"];
    } else {
      values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["link"] = "";
  }

  if (values["offerBanner1LinkType2"]) {
    values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["link_type"] = values["offerBanner1LinkType2"];
  } else {
    values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner1Link2"]) {
    values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["link"] = values["offerBanner1Link2"];
    if (values["offerBanner1LinkType2"] == "product") {
      values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["link"] = values["offerBanner1Link2"];
    } else {
      values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["link"] = "";
  }

  if (values["offerBanner1LinkType3"]) {
    values["content"]["offer_banner_1"]["banner_3"]["redirect_link"]["link_type"] = values["offerBanner1LinkType3"];
  } else {
    values["content"]["offer_banner_1"]["banner_3"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner_1"]["banner_3"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner1Link3"]) {
    values["content"]["offer_banner_1"]["banner_3"]["redirect_link"]["link"] = values["offerBanner1Link3"];
    if (values["offerBanner1LinkType3"] == "product") {
      values["content"]["offer_banner_1"]["banner_3"]["redirect_link"]["link"] = values["offerBanner1Link3"];
    } else {
      values["content"]["offer_banner_1"]["banner_3"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner_1"]["banner_3"]["redirect_link"]["link"] = "";
  }

  if (values["offerBanner1LinkType4"]) {
    values["content"]["offer_banner_1"]["banner_4"]["redirect_link"]["link_type"] = values["offerBanner1LinkType4"];
  } else {
    values["content"]["offer_banner_1"]["banner_4"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner_1"]["banner_4"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner1Link4"]) {
    values["content"]["offer_banner_1"]["banner_4"]["redirect_link"]["link"] = values["offerBanner1Link4"];
    if (values["offerBanner1LinkType4"] == "product") {
      values["content"]["offer_banner_1"]["banner_4"]["redirect_link"]["link"] = values["offerBanner1Link4"];
    } else {
      values["content"]["offer_banner_1"]["banner_4"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner_1"]["banner_4"]["redirect_link"]["link"] = "";
  }

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

  if (values["collectionBannerLinkType"]) {
    values["content"]["collection_banner"]["redirect_link"]["link_type"] = values["collectionBannerLinkType"];
  } else {
    values["content"]["collection_banner"]["redirect_link"]["link_type"] = "";
    values["content"]["collection_banner"]["redirect_link"]["link"] = "";
  }
  if (values["collectionBannerLink"]) {
    values["content"]["collection_banner"]["redirect_link"]["link"] = values["collectionBannerLink"];
    if (values["collectionBannerLinkType"] == "product") {
      values["content"]["collection_banner"]["redirect_link"]["link"] = values["collectionBannerLink"];
    } else {
      values["content"]["collection_banner"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["collection_banner"]["redirect_link"]["link"] = "";
  }

  if (values["productListLeftPanelLinkType"]) {
    values["content"]["product_list"]["left_panel"]["redirect_link"]["link_type"] = values["productListLeftPanelLinkType"];
  } else {
    values["content"]["product_list"]["left_panel"]["redirect_link"]["link_type"] = "";
    values["content"]["product_list"]["left_panel"]["redirect_link"]["link"] = "";
  }
  if (values["productListLeftPanelLink"]) {
    values["content"]["product_list"]["left_panel"]["redirect_link"]["link"] = values["productListLeftPanelLink"];
    if (values["productListLeftPanelLinkType"] == "product") {
      values["content"]["product_list"]["left_panel"]["redirect_link"]["link"] = values["productListLeftPanelLink"];
    } else {
      values["content"]["product_list"]["left_panel"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["product_list"]["left_panel"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================

  // Images
  if (values["homeBannerImage"]) {
    values["content"]["home_banner"]["image_url"] = values["homeBannerImage"].original_url;
  } else values["content"]["home_banner"]["image_url"] = "";

  if (values["collectionBannerImage"]) {
    values["content"]["collection_banner"]["image_url"] = values["collectionBannerImage"].original_url;
  } else values["content"]["collection_banner"]["image_url"] = "";

  if (values["offerBanner1Image1"]) {
    values["content"]["offer_banner_1"]["banner_1"]["image_url"] = values["offerBanner1Image1"].original_url;
  } else values["content"]["offer_banner_1"]["banner_1"]["image_url"] = "";

  if (values["offerBanner1Image2"]) {
    values["content"]["offer_banner_1"]["banner_2"]["image_url"] = values["offerBanner1Image2"].original_url;
  } else values["content"]["offer_banner_1"]["banner_2"]["image_url"] = "";

  if (values["offerBanner1Image3"]) {
    values["content"]["offer_banner_1"]["banner_3"]["image_url"] = values["offerBanner1Image3"].original_url;
  } else values["content"]["offer_banner_1"]["banner_3"]["image_url"] = "";

  if (values["offerBanner1Image4"]) {
    values["content"]["offer_banner_1"]["banner_4"]["image_url"] = values["offerBanner1Image4"].original_url;
  } else values["content"]["offer_banner_1"]["banner_4"]["image_url"] = "";

  if (values["offerBanner2Image"]) {
    values["content"]["offer_banner_2"]["image_url"] = values["offerBanner2Image"].original_url;
  } else values["content"]["offer_banner_2"]["image_url"] = "";

  // ============================================================================================
  //MultiSelect
  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
  }
  if (values["productListProducts"]) {
    values["content"]["product_list"]["products"]["product_ids"] = values["productListProducts"];
  }
  if (values["productCategory"]) {
    values["content"]["category_product"]["category_ids"] = values["productCategory"];
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
export default PerfumeHomePageSubmit;
