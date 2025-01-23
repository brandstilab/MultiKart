import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const FurnitureDarkSubmit = (values, mutate) => {
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

  values["content"]["services"]?.["banners"]?.forEach((elem, i) => {
    if (values[`serviceBannerImage${i}`]) {
      values["content"]["services"]["banners"][i]["image_url"] = values[`serviceBannerImage${i}`]?.original_url;
    } else {
      values["content"]["services"]["banners"][i]["image_url"] = "";
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

  if (values["banner1Image"]) {
    values["content"]["banner"]["banner_1"]["image_url"] = values["banner1Image"].original_url;
  } else values["content"]["banner"]["banner_1"]["image_url"] = "";

  if (values["banner2Image"]) {
    values["content"]["banner"]["banner_2"]["image_url"] = values["banner2Image"].original_url;
  } else values["content"]["banner"]["banner_2"]["image_url"] = "";

  if (values["banner3Image"]) {
    values["content"]["banner"]["banner_3"]["image_url"] = values["banner3Image"].original_url;
  } else values["content"]["banner"]["banner_3"]["image_url"] = "";

  if (values["leftPanelImage"]) {
    values["content"]["product_list_2"]["left_panel"]["image_url"] = values["leftPanelImage"].original_url;
  } else values["content"]["product_list_2"]["left_panel"]["image_url"] = "";

  // For Passing Redirect Link
  if (values["offerBanner1LinkType"]) {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link_type"] = values["offerBanner1LinkType"];
  } else {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner1Link"]) {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = values["offerBanner1Link"];
    if (values["offerBanner1LinkType"] == "product") {
      values["content"]["offer_banner"]["banner_1"]["redirect_link"]["product_ids"] = values["offerBanner1Link"];
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

  if (values["banner1LinkType"]) {
    values["content"]["banner"]["banner_1"]["redirect_link"]["link_type"] = values["banner1LinkType"];
  } else {
    values["content"]["banner"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["banner"]["banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["banner1Link"]) {
    values["content"]["banner"]["banner_1"]["redirect_link"]["link"] = values["banner1Link"];
    if (values["banner1LinkType"] == "product") {
      values["content"]["banner"]["banner_1"]["redirect_link"]["product_ids"] = values["banner1Link"];
    } else {
      values["content"]["banner"]["banner_1"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["banner"]["banner_1"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================
  if (values["banner2LinkType"]) {
    values["content"]["banner"]["banner_2"]["redirect_link"]["link_type"] = values["banner2LinkType"];
  } else {
    values["content"]["banner"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["banner"]["banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["banner2Link"]) {
    values["content"]["banner"]["banner_2"]["redirect_link"]["link"] = values["banner2Link"];
    if (values["banner2LinkType"] == "product") {
      values["content"]["banner"]["banner_2"]["redirect_link"]["product_ids"] = values["banner2Link"];
    } else {
      values["content"]["banner"]["banner_2"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["banner"]["banner_2"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================
  if (values["banner3LinkType"]) {
    values["content"]["banner"]["banner_3"]["redirect_link"]["link_type"] = values["banner3LinkType"];
  } else {
    values["content"]["banner"]["banner_3"]["redirect_link"]["link_type"] = "";
    values["content"]["banner"]["banner_3"]["redirect_link"]["link"] = "";
    values["banner3LinkType"] = "";
  }
  if (values["banner3Link"]) {
    values["content"]["banner"]["banner_3"]["redirect_link"]["link"] = values["banner3Link"];
    if (values["banner3LinkType"] == "product") {
      values["content"]["banner"]["banner_3"]["redirect_link"]["product_ids"] = values["banner3Link"];
    } else {
      values["content"]["banner"]["banner_3"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["banner"]["banner_3"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================
  if (values["leftPanelLinkType"]) {
    values["content"]["product_list_2"]["left_panel"]["redirect_link"]["link_type"] = values["leftPanelLinkType"];
  } else {
    values["content"]["product_list_2"]["left_panel"]["redirect_link"]["link_type"] = "";
    values["content"]["product_list_2"]["left_panel"]["redirect_link"]["link"] = "";
  }
  if (values["leftPanelLink"]) {
    values["content"]["product_list_2"]["left_panel"]["redirect_link"]["link"] = values["leftPanelLink"];
    if (values["leftPanelLinkType"] == "product") {
      values["content"]["product_list_2"]["left_panel"]["redirect_link"]["product_ids"] = values["leftPanelLink"];
    } else {
      values["content"]["product_list_2"]["left_panel"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["product_list_2"]["left_panel"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================
  //MultiSelect
  if (values["productList1Product"]) {
    values["content"]["products_list_1"]["product_ids"] = values["productList1Product"];
  }
  if (values["productList2Product"]) {
    values["content"]["product_list_2"]["products"]["product_ids"] = values["productList2Product"];
  }
  if (values["featuredBlogList"]) {
    values["content"]["featured_blogs"]["blog_ids"] = values["featuredBlogList"];
  }
  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
  }
  if (values["categoryIconList"]) {
    values["content"]["categories_icon_list"]["category_ids"] = values["categoryIconList"];
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
export default FurnitureDarkSubmit;
