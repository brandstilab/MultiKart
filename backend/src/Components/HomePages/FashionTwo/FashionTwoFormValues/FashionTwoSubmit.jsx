import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const FashionTwoSubmit = (values, mutate) => {
  values["content"]["productTwods"] = Array.from(new Set(concatDynamicProductKeys(values)));

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

  values["content"]["social_media"]["banners"].forEach((elem, i) => {
  if (!values["content"]["social_media"]["banners"][i]["redirect_link"]) {
      values["content"]["social_media"]["banners"][i]["redirect_link"] = {}; // Initialize redirect_link if undefined
    }
    if (values[`socialMediaBannerImage${i}`]) {
      values["content"]["social_media"]["banners"][i]["image_url"] = values[`socialMediaBannerImage${i}`].original_url;
    } else {
      values["content"]["social_media"]["banners"][i]["image_url"] = "";
    }
  });

  values["content"]["services"]?.["banners"]?.forEach((elem, i) => {
    if (values[`serviceBannerImage${i}`]) {
      values["content"]["services"]["banners"][i]["image_url"] = values[`servicesBannerImage${i}`]?.original_url;
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

  if (values["offerBanner4Image"]) {
    values["content"]["offer_banner"]["banner_4"]["image_url"] = values["offerBanner4Image"].original_url;
  } else values["content"]["offer_banner"]["banner_4"]["image_url"] = "";

  if (values["fullBannerImage"]) {
    values["content"]["full_banner"]["image_url"] = values["fullBannerImage"].original_url;
  } else values["content"]["full_banner"]["image_url"] = "";

  // // For Passing Redirect Link
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
  // ============================================================================
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
  // ============================================================================
  if (values["offerBanner4LinkType"]) {
    values["content"]["offer_banner"]["banner_4"]["redirect_link"]["link_type"] = values["offerBanner4LinkType"];
  } else {
    values["content"]["offer_banner"]["banner_4"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["banner_4"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner4Link"]) {
    values["content"]["offer_banner"]["banner_4"]["redirect_link"]["link"] = values["offerBanner4Link"];
    if (values["offerBanner4LinkType"] == "product") {
      values["content"]["offer_banner"]["banner_4"]["redirect_link"]["link"] = values["offerBanner4Link"];
    } else {
      values["content"]["offer_banner"]["banner_4"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner"]["banner_4"]["redirect_link"]["link"] = "";
  }
  // ============================================================================

  if (values["fullBannerLinkType"]) {
    values["content"]["full_banner"]["redirect_link"]["link_type"] = values["fullBannerLinkType"];
  } else {
    values["content"]["full_banner"]["redirect_link"]["link_type"] = "";
    values["content"]["full_banner"]["redirect_link"]["link"] = "";
  }
  if (values["fullBannerLink"]) {
    values["content"]["full_banner"]["redirect_link"]["link"] = values["fullBannerLink"];
    if (values["fullBannerLinkType"] == "product") {
      values["content"]["full_banner"]["redirect_link"]["product_ids"] = values["fullBannerLink"];
    } else {
      values["content"]["full_banner"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["full_banner"]["redirect_link"]["link"] = "";
  }

  //MultiSelect
  if (values["categoryProductList"]) {
    values["content"]["category_product"]["category_ids"] = values["categoryProductList"];
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
export default FashionTwoSubmit;
