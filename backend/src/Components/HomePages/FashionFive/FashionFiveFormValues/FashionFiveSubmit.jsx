import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const FashionFiveSubmit = (values, mutate) => {
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
    if (values[`socialMediaLinkType${i}`] || values[`socialMediaLink${i}`]) {
      values["content"]["social_media"]["banners"][i]["redirect_link"]["link_type"] = values[`socialMediaLinkType${i}`];
      values["content"]["social_media"]["banners"][i]["redirect_link"]["link"] = values[`socialMediaLink${i}`];
      if (values[`socialMediaLinkType${i}`] == "product") {
        values["content"]["social_media"]["banners"][i]["redirect_link"]["product_ids"] = values[`socialMediaLink${i}`];
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

  if (values["offerBannerImage"]) {
    values["content"]["offer_banner"]["image_url"] = values["offerBannerImage"].original_url;
  } else values["content"]["offer_banner"]["image_url"] = "";

  if (values["mainBannerImage"]) {
    values["content"]["knockout_deals"]["main_banner"]["image_url"] = values["mainBannerImage"].original_url;
  } else values["content"]["knockout_deals"]["main_banner"]["image_url"] = "";

  if (values["gridBanner1Image"]) {
    values["content"]["knockout_deals"]["grid_banner_1"]["image_url"] = values["gridBanner1Image"].original_url;
  } else values["content"]["knockout_deals"]["grid_banner_1"]["image_url"] = "";

  if (values["gridBanner2Image"]) {
    values["content"]["knockout_deals"]["grid_banner_2"]["image_url"] = values["gridBanner2Image"].original_url;
  } else values["content"]["knockout_deals"]["grid_banner_2"]["image_url"] = "";

  if (values["gridBanner3Image"]) {
    values["content"]["knockout_deals"]["grid_banner_3"]["image_url"] = values["gridBanner3Image"].original_url;
  } else values["content"]["knockout_deals"]["grid_banner_3"]["image_url"] = "";
  // ==============================================================================================

  //Redirect Link
  if (values["homeBannerLinkType"]) {
    values["content"]["home_banner"]["redirect_link"]["link_type"] = values["homeBannerLinkType"];
  } else {
    values["content"]["home_banner"]["redirect_link"]["link_type"] = "";
    values["content"]["home_banner"]["redirect_link"]["link"] = "";
    values["homeBannerLinkType"] = "";
  }
  if (values["homeBannerLink"]) {
    values["content"]["home_banner"]["redirect_link"]["link"] = values["homeBannerLink"];
    if (values["homeBannerLinkType"] == "product") {
      values["content"]["home_banner"]["redirect_link"]["product_ids"] = values["homeBannerLink"];
    } else {
      values["content"]["home_banner"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["home_banner"]["redirect_link"]["link"] = "";
  }
  // ===============
  if (values["offerBannerLinkType"]) {
    values["content"]["offer_banner"]["redirect_link"]["link_type"] = values["offerBannerLinkType"];
  } else {
    values["content"]["offer_banner"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["redirect_link"]["link"] = "";
  }
  if (values["offerBannerLink"]) {
    values["content"]["offer_banner"]["redirect_link"]["link"] = values["offerBannerLink"];
    if (values["bannerLinkType"] == "product") {
      values["content"]["offer_banner"]["redirect_link"]["link"] = values["offerBannerLink"];
    } else {
      values["content"]["offer_banner"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner"]["redirect_link"]["link"] = "";
  }

  if (values["mainBannerLinkType"]) {
    values["content"]["knockout_deals"]["main_banner"]["redirect_link"]["link_type"] = values["mainBannerLinkType"];
  } else {
    values["content"]["knockout_deals"]["main_banner"]["redirect_link"]["link_type"] = "";
    values["content"]["knockout_deals"]["main_banner"]["redirect_link"]["link"] = "";
  }
  if (values["mainBannerLink"]) {
    values["content"]["knockout_deals"]["main_banner"]["redirect_link"]["link"] = values["mainBannerLink"];
    if (values["mainBannerLinkType"] == "product") {
      values["content"]["knockout_deals"]["main_banner"]["redirect_link"]["link"] = values["mainBannerLink"];
    } else {
      values["content"]["knockout_deals"]["main_banner"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["knockout_deals"]["main_banner"]["redirect_link"]["link"] = "";
  }

  if (values["gridBanner1LinkType"]) {
    values["content"]["knockout_deals"]["grid_banner_1"]["redirect_link"]["link_type"] = values["gridBanner1LinkType"];
  } else {
    values["content"]["knockout_deals"]["grid_banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["knockout_deals"]["grid_banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["gridBanner1Link"]) {
    values["content"]["knockout_deals"]["grid_banner_1"]["redirect_link"]["link"] = values["gridBanner1Link"];
    if (values["gridBanner1LinkType"] == "product") {
      values["content"]["knockout_deals"]["grid_banner_1"]["redirect_link"]["link"] = values["gridBanner1Link"];
    } else {
      values["content"]["knockout_deals"]["grid_banner_1"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["knockout_deals"]["grid_banner_1"]["redirect_link"]["link"] = "";
  }

  if (values["gridBanner2LinkType"]) {
    values["content"]["knockout_deals"]["grid_banner_2"]["redirect_link"]["link_type"] = values["gridBanner2LinkType"];
  } else {
    values["content"]["knockout_deals"]["grid_banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["knockout_deals"]["grid_banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["gridBanner2Link"]) {
    values["content"]["knockout_deals"]["grid_banner_2"]["redirect_link"]["link"] = values["gridBanner2Link"];
    if (values["gridBanner2LinkType"] == "product") {
      values["content"]["knockout_deals"]["grid_banner_2"]["redirect_link"]["link"] = values["gridBanner2Link"];
    } else {
      values["content"]["knockout_deals"]["grid_banner_2"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["knockout_deals"]["grid_banner_2"]["redirect_link"]["link"] = "";
  }

  if (values["gridBanner3LinkType"]) {
    values["content"]["knockout_deals"]["grid_banner_3"]["redirect_link"]["link_type"] = values["gridBanner3LinkType"];
  } else {
    values["content"]["knockout_deals"]["grid_banner_3"]["redirect_link"]["link_type"] = "";
    values["content"]["knockout_deals"]["grid_banner_3"]["redirect_link"]["link"] = "";
  }
  if (values["gridBanner3Link"]) {
    values["content"]["knockout_deals"]["grid_banner_3"]["redirect_link"]["link"] = values["gridBanner3Link"];
    if (values["gridBanner3LinkType"] == "product") {
      values["content"]["knockout_deals"]["grid_banner_3"]["redirect_link"]["link"] = values["gridBanner3Link"];
    } else {
      values["content"]["knockout_deals"]["grid_banner_3"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["knockout_deals"]["grid_banner_3"]["redirect_link"]["link"] = "";
  }

  //MultiSelect
  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
  }
  if (values["content"] && values["content"]["products_list"]) {
    values["content"]["products_list"]["product_ids"] = values["productLists"];
  }
  if (values["content"] && values["content"]["categories"]) {
    values["content"]["categories"]["category_ids"] = values["categories"];
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
export default FashionFiveSubmit;
