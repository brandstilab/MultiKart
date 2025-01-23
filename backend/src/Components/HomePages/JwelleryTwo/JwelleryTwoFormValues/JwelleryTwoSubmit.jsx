import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const JwelleryTwoSubmit = (values, mutate) => {
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

  // Redirect Link
  if (values["banner1LinkType"]) {
    values["content"]["banner"]["redirect_link"]["link_type"] = values["banner1LinkType"];
  } else {
    values["content"]["banner"]["redirect_link"]["link_type"] = "";
    values["content"]["banner"]["redirect_link"]["link"] = "";
  }
  if (values["banner1Link"]) {
    values["content"]["banner"]["redirect_link"]["link"] = values["banner1Link"];
    if (values["banner1LinkType"] == "product") {
      values["content"]["banner"]["redirect_link"]["product_ids"] = values["banner1Link"];
    } else {
      values["content"]["banner"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["banner"]["redirect_link"]["link"] = "";
  }

  if (values["offerBanner2LinkType"]) {
    values["content"]["offer_banner_2"]["redirect_link"]["link_type"] = values["offerBanner2LinkType"];
  } else {
    values["content"]["offer_banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner2Link"]) {
    values["content"]["offer_banner_2"]["redirect_link"]["link"] = values["offerBanner2Link"];
    if (values["offerBanner2LinkType"] == "product") {
      values["content"]["offer_banner_2"]["redirect_link"]["product_ids"] = values["offerBanner2Link"];
    } else {
      values["content"]["offer_banner_2"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["offer_banner_2"]["redirect_link"]["link"] = "";
  }

  if (values["productBannerCenterContent1LinkType"]) {
    values["content"]["product_banner"]["center_panel"]["banner_1"]["redirect_link"]["link_type"] = values["productBannerCenterContent1LinkType"];
  } else {
    values["content"]["product_banner"]["center_panel"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["product_banner"]["center_panel"]["banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["productBannerCenterContent1Link"]) {
    values["content"]["product_banner"]["center_panel"]["banner_1"]["redirect_link"]["link"] = values["productBannerCenterContent1Link"];
    if (values["productBannerCenterContent1LinkType"] == "product") {
      values["content"]["product_banner"]["center_panel"]["banner_1"]["redirect_link"]["product_ids"] = values["productBannerCenterContent1Link"];
    } else {
      values["content"]["product_banner"]["center_panel"]["banner_1"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["product_banner"]["center_panel"]["banner_1"]["redirect_link"]["link"] = "";
  }

  if (values["productBannerCenterContent2LinkType"]) {
    values["content"]["product_banner"]["center_panel"]["banner_2"]["redirect_link"]["link_type"] = values["productBannerCenterContent2LinkType"];
  } else {
    values["content"]["product_banner"]["center_panel"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["product_banner"]["center_panel"]["banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["productBannerCenterContent2Link"]) {
    values["content"]["product_banner"]["center_panel"]["banner_2"]["redirect_link"]["link"] = values["productBannerCenterContent2Link"];
    if (values["productBannerCenterContent2LinkType"] == "product") {
      values["content"]["product_banner"]["center_panel"]["banner_2"]["redirect_link"]["product_ids"] = values["productBannerCenterContent2Link"];
    } else {
      values["content"]["product_banner"]["center_panel"]["banner_2"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["product_banner"]["center_panel"]["banner_2"]["redirect_link"]["link"] = "";
  }

  // Images
  if (values["banner1Image"]) {
    values["content"]["banner"]["image_url"] = values["banner1Image"].original_url;
  } else values["content"]["banner"]["image_url"] = "";

  if (values["offerBanner2Image"]) {
    values["content"]["offer_banner_2"]["image_url"] = values["offerBanner2Image"].original_url;
  } else values["content"]["offer_banner_2"]["image_url"] = "";

  if (values["productBannerCenterContentImage1"]) {
    values["content"]["product_banner"]["center_panel"]["banner_1"]["image_url"] = values["productBannerCenterContentImage1"].original_url;
  } else values["content"]["product_banner"]["center_panel"]["banner_1"]["image_url"] = "";

  if (values["productBannerCenterContentImage2"]) {
    values["content"]["product_banner"]["center_panel"]["banner_2"]["image_url"] = values["productBannerCenterContentImage2"].original_url;
  } else values["content"]["product_banner"]["center_panel"]["banner_2"]["image_url"] = "";

  // ============================================================================================
  //MultiSelect
  if (values["productBannerLeftPanelProduct"]) {
    values["content"]["product_banner"]["product_ids"] = values["productBannerLeftPanelProduct"];
  }
  if (values["productBannerRightPanelProduct"]) {
    values["content"]["product_banner"]["product_ids"] = values["productBannerRightPanelProduct"];
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

  if (values["categories"]) {
    values["content"]["categories"]["category_ids"] = values["categories"];
  }
  if (values["categories2"]) {
    values["content"]["categories_2"]["category_ids"] = values["categories2"];
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
export default JwelleryTwoSubmit;
