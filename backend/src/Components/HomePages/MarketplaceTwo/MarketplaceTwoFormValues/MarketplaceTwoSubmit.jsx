import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const MarketplaceTwoSubmit = (values, mutate) => {
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

  if (values["offerBanner2Image1"]) {
    values["content"]["offer_banner_2"]["banner_1"]["image_url"] = values["offerBanner2Image1"].original_url;
  } else values["content"]["offer_banner_2"]["banner_1"]["image_url"] = "";

  if (values["offerBanner2Image2"]) {
    values["content"]["offer_banner_2"]["banner_2"]["image_url"] = values["offerBanner2Image2"].original_url;
  } else values["content"]["offer_banner_2"]["banner_2"]["image_url"] = "";
  if (values["offerBanner3Image"]) {
    values["content"]["offer_banner_3"]["image_url"] = values["offerBanner3Image"].original_url;
  } else values["content"]["offer_banner_3"]["image_url"] = "";

  // ============================================================================================
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

  //=============================================================================================
  if (values["offerBanner3LinkType"]) {
    values["content"]["offer_banner_3"]["redirect_link"]["link_type"] = values["offerBanner3LinkType"];
  } else {
    values["content"]["offer_banner_3"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner_3"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner3Link"]) {
    values["content"]["offer_banner_3"]["redirect_link"]["link"] = values["offerBanner3Link"];
    if (values["offerBanner3LinkType"] == "product") {
      values["content"]["offer_banner_3"]["redirect_link"]["link"] = values["offerBanner3Link"];
    } else {
      values["content"]["offer_banner_3"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner_3"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================
  //MultiSelect
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

  if (values["productList5Product"]) {
    values["content"]["products_list_5"]["product_ids"] = values["productList5Product"];
  }

  if (values["productList6Product"]) {
    values["content"]["products_list_6"]["product_ids"] = values["productList6Product"];
  }

  if (values["sliderProduct1"]) {
    values["content"]["slider_products"]["product_slider_1"]["product_ids"] = values["sliderProduct1"];
  }
  if (values["sliderProduct2"]) {
    values["content"]["slider_products"]["product_slider_2"]["product_ids"] = values["sliderProduct2"];
  }
  if (values["sliderProduct3"]) {
    values["content"]["slider_products"]["product_slider_3"]["product_ids"] = values["sliderProduct3"];
  }
  if (values["sliderProduct4"]) {
    values["content"]["slider_products"]["product_slider_4"]["product_ids"] = values["sliderProduct4"];
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
export default MarketplaceTwoSubmit;
