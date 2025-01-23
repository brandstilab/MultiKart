import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const MarketplaceOneSubmit = (values, mutate) => {
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

  values["content"]["social_media"]["banners"].forEach((elem, i) => {
  if (!values["content"]["social_media"]["banners"][i]["redirect_link"]) {
      values["content"]["social_media"]["banners"][i]["redirect_link"] = {}; // Initialize redirect_link if undefined
    }
    if (values[`socialMediaBannerImage${i}`]) {
      values["content"]["social_media"]["banners"][i]["image_url"] = values[`socialMediaBannerImage${i}`].original_url;
    } else {
      values["content"]["social_media"]["banners"][i]["image_url"] = "";
    }
    if (values[`socialMediaRedirectLinkType${i}`] || values[`socialMediaRedirectLink${i}`]) {
      values["content"]["social_media"]["banners"][i]["redirect_link"]["link_type"] = values[`socialMediaRedirectLinkType${i}`];
      values["content"]["social_media"]["banners"][i]["redirect_link"]["link"] = values[`socialMediaRedirectLink${i}`];
      if (values[`socialMediaRedirectLinkType${i}`] == "product") {
        values["content"]["social_media"]["banners"][i]["redirect_link"]["product_ids"] = values[`socialMediaRedirectLink${i}`];
      } else {
        values["content"]["social_media"]["banners"][i]["redirect_link"]["product_ids"] = "";
      }
    } else {
      values["content"]["social_media"]["banners"][i]["redirect_link"]["link_type"] = "";
      values["content"]["social_media"]["banners"][i]["redirect_link"]["link"] = "";
    }
  });

  // Images
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

  if (values["productList2Image"]) {
    values["content"]["category_product"]["right_panel"]["product_banner"]["image_url"] = values["productList2Image"].original_url;
  } else values["content"]["category_product"]["right_panel"]["product_banner"]["image_url"] = "";

  // ============================================================================================
  // Redirect Link
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
  // ============================================================================================
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
  // ============================================================================================
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
  // ============================================================================================
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

  if (values["rightPanelLinkType"]) {
    values["content"]["category_product"]["right_panel"]["product_banner"]["redirect_link"]["link_type"] = values["rightPanelLinkType"];
  } else {
    values["content"]["category_product"]["right_panel"]["product_banner"]["redirect_link"]["link_type"] = "";
    values["content"]["category_product"]["right_panel"]["product_banner"]["redirect_link"]["link"] = "";
  }
  if (values["rightPanelLink"]) {
    values["content"]["category_product"]["right_panel"]["product_banner"]["redirect_link"]["link"] = values["rightPanelLink"];
    if (values["rightPanelLinkType"] == "product") {
      values["content"]["category_product"]["right_panel"]["product_banner"]["redirect_link"]["product_ids"] = values["rightPanelLink"];
    } else {
      values["content"]["category_product"]["right_panel"]["product_banner"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["category_product"]["right_panel"]["product_banner"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================
  //MultiSelect
  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
  }

  if (values["productList1Product"]) {
    values["content"]["product_list_1"]["product_ids"] = values["productList1Product"];
  }

  if (values["leftPanelProduct"]) {
    values["content"]["category_product"]["left_panel"]["product_ids"] = values["leftPanelProduct"];
  }

  if (values["rightPanelProduct"]) {
    values["content"]["category_product"]["right_panel"]["product_category"]["category_ids"] = values["rightPanelProduct"];
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
export default MarketplaceOneSubmit;
