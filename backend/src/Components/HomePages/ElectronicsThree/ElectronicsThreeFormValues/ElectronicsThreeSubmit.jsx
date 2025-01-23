import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const ElectronicsThreeSubmit = (values, mutate) => {
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
  // Images

  if (values["banner1Image"]) {
    values["content"]["banner"]["main_banner"]["image_url"] = values["banner1Image"].original_url;
  } else values["content"]["banner"]["main_banner"]["image_url"] = "";

  if (values["banner2Image"]) {
    values["content"]["banner"]["grid_banner_1"]["image_url"] = values["banner2Image"].original_url;
  } else values["content"]["banner"]["grid_banner_1"]["image_url"] = "";

  if (values["banner3Image"]) {
    values["content"]["banner"]["grid_banner_2"]["image_url"] = values["banner3Image"].original_url;
  } else values["content"]["banner"]["grid_banner_2"]["image_url"] = "";

  if (values["banner4Image"]) {
    values["content"]["banner"]["grid_banner_3"]["image_url"] = values["banner4Image"].original_url;
  } else values["content"]["banner"]["grid_banner_3"]["image_url"] = "";

  if (values["offerBanner2Image1"]) {
    values["content"]["offer_banner_2"]["banner_1"]["image_url"] = values["offerBanner2Image1"].original_url;
  } else values["content"]["offer_banner_2"]["banner_1"]["image_url"] = "";

  if (values["offerBanner2Image2"]) {
    values["content"]["offer_banner_2"]["banner_2"]["image_url"] = values["offerBanner2Image2"].original_url;
  } else values["content"]["offer_banner_2"]["banner_2"]["image_url"] = "";

  if (values["offerBannerImage"]) {
    values["content"]["offer_banner_1"]["image_url"] = values["offerBannerImage"].original_url;
  } else values["content"]["offer_banner_1"]["image_url"] = "";

  // ================================================================================
  // For redirect link

  if (values["banner1LinkType"]) {
    values["content"]["banner"]["main_banner"]["redirect_link"]["link_type"] = values["banner1LinkType"];
  } else {
    values["content"]["banner"]["main_banner"]["redirect_link"]["link_type"] = "";
    values["content"]["banner"]["main_banner"]["redirect_link"]["link"] = "";
  }
  if (values["banner1Link"]) {
    values["content"]["banner"]["main_banner"]["redirect_link"]["link"] = values["banner1Link"];
    if (values["banner1LinkType"] == "product") {
      values["content"]["banner"]["main_banner"]["redirect_link"]["product_ids"] = values["banner1Link"];
    } else {
      values["content"]["banner"]["main_banner"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["banner"]["main_banner"]["redirect_link"]["link"] = "";
  }

  if (values["banner2LinkType"]) {
    values["content"]["banner"]["grid_banner_1"]["redirect_link"]["link_type"] = values["banner2LinkType"];
  } else {
    values["content"]["banner"]["grid_banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["banner"]["grid_banner_1"]["redirect_link"]["link"] = "";
    values["banner1LinkType"] = "";
  }
  if (values["banner2Link"]) {
    values["content"]["banner"]["grid_banner_1"]["redirect_link"]["link"] = values["banner2Link"];
    if (values["banner2LinkType"] == "product") {
      values["content"]["banner"]["grid_banner_1"]["redirect_link"]["product_ids"] = values["banner2Link"];
    } else {
      values["content"]["banner"]["grid_banner_1"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["banner"]["grid_banner_1"]["redirect_link"]["link"] = "";
  }

  if (values["banner3LinkType"]) {
    values["content"]["banner"]["grid_banner_2"]["redirect_link"]["link_type"] = values["banner3LinkType"];
  } else {
    values["content"]["banner"]["grid_banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["banner"]["grid_banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["banner3Link"]) {
    values["content"]["banner"]["grid_banner_2"]["redirect_link"]["link"] = values["banner3Link"];
    if (values["banner3LinkType"] == "product") {
      values["content"]["banner"]["grid_banner_2"]["redirect_link"]["product_ids"] = values["banner3Link"];
    } else {
      values["content"]["banner"]["grid_banner_2"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["banner"]["grid_banner_2"]["redirect_link"]["link"] = "";
  }

  if (values["banner4LinkType"]) {
    values["content"]["banner"]["grid_banner_3"]["redirect_link"]["link_type"] = values["banner4LinkType"];
  } else {
    values["content"]["banner"]["grid_banner_3"]["redirect_link"]["link_type"] = "";
    values["content"]["banner"]["grid_banner_3"]["redirect_link"]["link"] = "";
  }
  if (values["banner4Link"]) {
    values["content"]["banner"]["grid_banner_3"]["redirect_link"]["link"] = values["banner4Link"];
    if (values["banner4LinkType"] == "product") {
      values["content"]["banner"]["grid_banner_3"]["redirect_link"]["product_ids"] = values["banner4Link"];
    } else {
      values["content"]["banner"]["grid_banner_3"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["banner"]["grid_banner_3"]["redirect_link"]["link"] = "";
  }

  if (values["offerBannerLinkType"]) {
    values["content"]["offer_banner_1"]["redirect_link"]["link_type"] = values["offerBannerLinkType"];
  } else {
    values["content"]["offer_banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["offerBannerLink"]) {
    values["content"]["offer_banner_1"]["redirect_link"]["link"] = values["offerBannerLink"];
    if (values["offerBannerLinkType"] == "product") {
      values["content"]["offer_banner_1"]["redirect_link"]["product_ids"] = values["offerBannerLink"];
    } else {
      values["content"]["offer_banner_1"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["offer_banner_1"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================
  if (values["offerBanner2LinkType1"]) {
    values["content"]["offer_banner_2"]["banner_1"]["redirect_link"]["link_type"] = values["offerBanner2LinkType1"];
  } else {
    values["content"]["offer_banner_2"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner_2"]["banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner2Link1"]) {
    values["content"]["offer_banner_2"]["banner_1"]["redirect_link"]["link"] = values["offerBanner2Link1"];
    if (values["offerBanner2LinkType1"] == "product") {
      values["content"]["offer_banner_2"]["banner_1"]["redirect_link"]["link"] = values["offerBanner2Link1"];
    } else {
      values["content"]["offer_banner_2"]["banner_1"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner_2"]["banner_1"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================
  if (values["offerBanner2LinkType2"]) {
    values["content"]["offer_banner_2"]["banner_2"]["redirect_link"]["link_type"] = values["offerBanner2LinkType2"];
  } else {
    values["content"]["offer_banner_2"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner_2"]["banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner2Link2"]) {
    values["content"]["offer_banner_2"]["banner_2"]["redirect_link"]["link"] = values["offerBanner2Link2"];
    if (values["offerBanner2LinkType2"] == "product") {
      values["content"]["offer_banner_2"]["banner_2"]["redirect_link"]["link"] = values["offerBanner2Link2"];
    } else {
      values["content"]["offer_banner_2"]["banner_2"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner_2"]["banner_2"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================

  //MultiSelect

  if (values["categoryProduct2Categories"]) {
    values["content"]["category_product_2"]["category_ids"] = values["categoryProduct2Categories"];
  }

  if (values["productList1Product"]) {
    values["content"]["products_list_1"]["product_ids"] = values["productList1Product"];
  }

  if (values["categoryProduct1Product"]) {
    values["content"]["category_product_1"]["products"]["product_ids"] = values["categoryProduct1Product"];
  }

  if (values["categoryProduct1Categories"]) {
    values["content"]["category_product_1"]["categories"]["category_ids"] = values["categoryProduct1Categories"];
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
export default ElectronicsThreeSubmit;
