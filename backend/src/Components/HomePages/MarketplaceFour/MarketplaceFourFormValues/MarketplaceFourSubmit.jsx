import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const MarketplaceFourSubmit = (values, mutate) => {
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
  //  ============================================================================================

  // Images
  if (values["productBanner1LeftContentImage"]) {
    values["content"]["product_banner_1"]["left_panel"]["image_url"] = values["productBanner1LeftContentImage"].original_url;
  } else values["content"]["product_banner_1"]["left_panel"]["image_url"] = "";

  if (values["productBanner3LeftContentImage"]) {
    values["content"]["product_banner_3"]["left_panel"]["image_url"] = values["productBanner3LeftContentImage"].original_url;
  } else values["content"]["product_banner_3"]["left_panel"]["image_url"] = "";

  if (values["productBanner2Image1"]) {
    values["content"]["product_banner_2"]["center_panel"]["banner_1"]["image_url"] = values["productBanner2Image1"].original_url;
  } else values["content"]["product_banner_2"]["center_panel"]["banner_1"]["image_url"] = "";

  if (values["productBanner2Image2"]) {
    values["content"]["product_banner_2"]["center_panel"]["banner_2"]["image_url"] = values["productBanner2Image2"].original_url;
  } else values["content"]["product_banner_2"]["center_panel"]["banner_2"]["image_url"] = "";

  if (values["productSliderImage"]) {
    values["content"]["slider_products"]["image_url"] = values["productSliderImage"].original_url;
  } else values["content"]["slider_products"]["image_url"] = "";

  //  ============================================================================================
  // Redirect Link
  if (values["productBanner1LeftContentLinkType"]) {
    values["content"]["product_banner_1"]["left_panel"]["redirect_link"]["link_type"] = values["productBanner1LeftContentLinkType"];
  } else {
    values["content"]["product_banner_1"]["left_panel"]["redirect_link"]["link_type"] = "";
    values["content"]["product_banner_1"]["left_panel"]["redirect_link"]["link"] = "";
  }
  if (values["productBanner1LeftContentLink"]) {
    values["content"]["product_banner_1"]["left_panel"]["redirect_link"]["link"] = values["productBanner1LeftContentLink"];
    if (values["productBanner1LeftContentLinkType"] == "product") {
      values["content"]["product_banner_1"]["left_panel"]["redirect_link"]["product_ids"] = values["productBanner1LeftContentLink"];
    } else {
      values["content"]["product_banner_1"]["left_panel"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["product_banner_1"]["left_panel"]["redirect_link"]["link"] = "";
  }

  if (values["productBanner3LeftContentLinkType"]) {
    values["content"]["product_banner_3"]["left_panel"]["redirect_link"]["link_type"] = values["productBanner3LeftContentLinkType"];
  } else {
    values["content"]["product_banner_3"]["left_panel"]["redirect_link"]["link_type"] = "";
    values["content"]["product_banner_3"]["left_panel"]["redirect_link"]["link"] = "";
  }
  if (values["productBanner3LeftContentLink"]) {
    values["content"]["product_banner_3"]["left_panel"]["redirect_link"]["link"] = values["productBanner3LeftContentLink"];
    if (values["productBanner3LeftContentLinkType"] == "product") {
      values["content"]["product_banner_3"]["left_panel"]["redirect_link"]["product_ids"] = values["productBanner3LeftContentLink"];
    } else {
      values["content"]["product_banner_3"]["left_panel"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["product_banner_3"]["left_panel"]["redirect_link"]["link"] = "";
  }

  if (values["productBanner2LinkType1"]) {
    values["content"]["product_banner_2"]["center_panel"]["banner_1"]["redirect_link"]["link_type"] = values["productBanner2LinkType1"];
  } else {
    values["content"]["product_banner_2"]["center_panel"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["product_banner_2"]["center_panel"]["banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["productBanner2Link1"]) {
    values["content"]["product_banner_2"]["center_panel"]["banner_1"]["redirect_link"]["link"] = values["productBanner2Link1"];
    if (values["productBanner2LinkType1"] == "product") {
      values["content"]["product_banner_2"]["center_panel"]["banner_1"]["redirect_link"]["product_ids"] = values["productBanner2Link1"];
    } else {
      values["content"]["product_banner_2"]["center_panel"]["banner_1"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["product_banner_2"]["center_panel"]["banner_1"]["redirect_link"]["link"] = "";
  }

  if (values["productBanner2LinkType2"]) {
    values["content"]["product_banner_2"]["center_panel"]["banner_2"]["redirect_link"]["link_type"] = values["productBanner2LinkType2"];
  } else {
    values["content"]["product_banner_2"]["center_panel"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["product_banner_2"]["center_panel"]["banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["productBanner2Link2"]) {
    values["content"]["product_banner_2"]["center_panel"]["banner_2"]["redirect_link"]["link"] = values["productBanner2Link2"];
    if (values["productBanner2LinkType2"] == "product") {
      values["content"]["product_banner_2"]["center_panel"]["banner_2"]["redirect_link"]["product_ids"] = values["productBanner2Link2"];
    } else {
      values["content"]["product_banner_2"]["center_panel"]["banner_2"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["product_banner_2"]["center_panel"]["banner_2"]["redirect_link"]["link"] = "";
  }
  //MultiSelect

  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
  }

  if (values["sliderProduct1"]) {
    values["content"]["slider_products"]["product_slider_1"]["product_ids"] = values["sliderProduct1"];
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

  if (values["productBanner1rightPanelProduct"]) {
    values["content"]["product_banner_1"]["right_panel"]["product_ids"] = values["productBanner1rightPanelProduct"];
  }

  if (values["productBanner3rightPanelProduct"]) {
    values["content"]["product_banner_3"]["right_panel"]["product_ids"] = values["productBanner3rightPanelProduct"];
  }

  if (values["productBanner2LeftPanelProduct"]) {
    values["content"]["product_banner_2"]["left_panel"]["product_ids"] = values["productBanner2LeftPanelProduct"];
  }

  if (values["productBanner2RightPanelProduct"]) {
    values["content"]["product_banner_2"]["right_panel"]["product_ids"] = values["productBanner2RightPanelProduct"];
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
export default MarketplaceFourSubmit;
