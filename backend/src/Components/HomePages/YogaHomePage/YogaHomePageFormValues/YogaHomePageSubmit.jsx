import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const YogaHomePageSubmit = (values, mutate) => {
  values["content"]["products_ids"] = Array.from(new Set(concatDynamicProductKeys(values)));

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
  if (values["homeBannerImage"]) {
    values["content"]["home_banner"]["image_url"] = values["homeBannerImage"].original_url;
  } else values["content"]["home_banner"]["image_url"] = "";

  if (values["offerBanner1Image1"]) {
    values["content"]["offer_banner_1"]["banner_1"]["image_url"] = values["offerBanner1Image1"].original_url;
  } else values["content"]["offer_banner_1"]["banner_1"]["image_url"] = "";

  if (values["offerBanner1Image2"]) {
    values["content"]["offer_banner_1"]["banner_2"]["image_url"] = values["offerBanner1Image2"].original_url;
  } else values["content"]["offer_banner_1"]["banner_2"]["image_url"] = "";

  if (values["offerBanner1Image3"]) {
    values["content"]["offer_banner_1"]["banner_3"]["image_url"] = values["offerBanner1Image3"].original_url;
  } else values["content"]["offer_banner_1"]["banner_3"]["image_url"] = "";

  if (values["offerBanner2Image1"]) {
    values["content"]["offer_banner_2"]["banner_1"]["image_url"] = values["offerBanner2Image1"].original_url;
  } else values["content"]["offer_banner_2"]["banner_1"]["image_url"] = "";

  if (values["offerBanner2Image2"]) {
    values["content"]["offer_banner_2"]["banner_2"]["image_url"] = values["offerBanner2Image2"].original_url;
  } else values["content"]["offer_banner_2"]["banner_2"]["image_url"] = "";

  if (values["productBanner1Image"]) {
    values["content"]["product_banner"]["post_banner"]["banner_1"]["image_url"] = values["productBanner1Image"].original_url;
  } else values["content"]["product_banner"]["post_banner"]["banner_1"]["image_url"] = "";

  if (values["productBanner2Image"]) {
    values["content"]["product_banner"]["post_banner"]["banner_2"]["image_url"] = values["productBanner2Image"].original_url;
  } else values["content"]["product_banner"]["post_banner"]["banner_2"]["image_url"] = "";

  // ============================================================================================
  // Redirect Link
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

  if (values["offerBanner2LinkType3"]) {
    values["content"]["offer_banner_2"]["banner_3"]["redirect_link"]["link_type"] = values["offerBanner2LinkType3"];
  } else {
    values["content"]["offer_banner_2"]["banner_3"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner_2"]["banner_3"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner2Link3"]) {
    values["content"]["offer_banner_2"]["banner_3"]["redirect_link"]["link"] = values["offerBanner2Link3"];
    if (values["offerBanner2LinkType3"] == "product") {
      values["content"]["offer_banner_2"]["banner_3"]["redirect_link"]["link"] = values["offerBanner2Link3"];
    } else {
      values["content"]["offer_banner_2"]["banner_3"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner_2"]["banner_3"]["redirect_link"]["link"] = "";
  }

  if (values["productBanner1LinkType"]) {
    values["content"]["product_banner"]["post_banner"]["banner_1"]["redirect_link"]["link_type"] = values["productBanner1LinkType"];
  } else {
    values["content"]["product_banner"]["post_banner"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["product_banner"]["post_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["productBanner1Link"]) {
    values["content"]["product_banner"]["post_banner"]["banner_1"]["redirect_link"]["link"] = values["productBanner1Link"];
    if (values["productBanner1LinkType"] == "product") {
      values["content"]["product_banner"]["post_banner"]["banner_1"]["redirect_link"]["link"] = values["productBanner1Link"];
    } else {
      values["content"]["product_banner"]["post_banner"]["banner_1"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["product_banner"]["post_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }

  if (values["productBanner2LinkType"]) {
    values["content"]["product_banner"]["post_banner"]["banner_2"]["redirect_link"]["link_type"] = values["productBanner2LinkType"];
  } else {
    values["content"]["product_banner"]["post_banner"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["product_banner"]["post_banner"]["banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["productBanner2Link"]) {
    values["content"]["product_banner"]["post_banner"]["banner_2"]["redirect_link"]["link"] = values["productBanner2Link"];
    if (values["productBanner2LinkType"] == "product") {
      values["content"]["product_banner"]["post_banner"]["banner_2"]["redirect_link"]["link"] = values["productBanner2Link"];
    } else {
      values["content"]["product_banner"]["post_banner"]["banner_2"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["product_banner"]["post_banner"]["banner_2"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================
  //MultiSelect
  if (values["featuredBlogList"]) {
    values["content"]["featured_blogs"]["blog_ids"] = values["featuredBlogList"];
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

  if (values["productList3Product"]) {
    values["content"]["products_list_3"]["product_ids"] = values["productList3Product"];
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
export default YogaHomePageSubmit;
