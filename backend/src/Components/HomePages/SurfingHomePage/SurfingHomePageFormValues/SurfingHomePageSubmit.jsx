import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const SurfingHomePageSubmit = (values, mutate) => {
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
  if (values["offerBanner1LinkType"]) {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link_type"] = values["offerBanner1LinkType"];
  } else {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner1Link"]) {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = values["offerBanner1Link"];
    if (values["offerBanner1LinkType"] == "product") {
      values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = values["offerBanner1Link"];
    } else {
      values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }

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

  // Images
  if (values["homeBannerImage"]) {
    values["content"]["home_banner"]["image_url"] = values["homeBannerImage"].original_url;
  } else values["content"]["home_banner"]["image_url"] = "";

  if (values["offerBanner1Image"]) {
    values["content"]["offer_banner"]["banner_1"]["image_url"] = values["offerBanner1Image"].original_url;
  } else values["content"]["offer_banner"]["banner_1"]["image_url"] = "";

  if (values["offerBanner2Image"]) {
    values["content"]["offer_banner"]["banner_2"]["image_url"] = values["offerBanner2Image"].original_url;
  } else values["content"]["offer_banner"]["banner_2"]["image_url"] = "";

  if (values["columnOfferBanner1Image"]) {
    values["content"]["column_banner_product"]["offer_banner_1"]["image_url"] = values["columnOfferBanner1Image"].original_url;
  } else values["content"]["column_banner_product"]["offer_banner_1"]["image_url"] = "";

  if (values["columnOfferBanner2Image"]) {
    values["content"]["column_banner_product"]["offer_banner_2"]["image_url"] = values["columnOfferBanner2Image"].original_url;
  } else values["content"]["column_banner_product"]["offer_banner_2"]["image_url"] = "";

  // ============================================================================================

  // Redirect Link

  if (values["columnOfferBanner1LinkType"]) {
    values["content"]["column_banner_product"]["offer_banner_1"]["redirect_link"]["link_type"] = values["columnOfferBanner1LinkType"];
  } else {
    values["content"]["column_banner_product"]["offer_banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["column_banner_product"]["offer_banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["columnOfferBanner1Link"]) {
    values["content"]["column_banner_product"]["offer_banner_1"]["redirect_link"]["link"] = values["columnOfferBanner1Link"];
    if (values["columnOfferBanner1LinkType"] == "product") {
      values["content"]["column_banner_product"]["offer_banner_1"]["redirect_link"]["link"] = values["columnOfferBanner1Link"];
    } else {
      values["content"]["column_banner_product"]["offer_banner_1"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["column_banner_product"]["offer_banner_1"]["redirect_link"]["link"] = "";
  }

  if (values["columnOfferBanner2LinkType"]) {
    values["content"]["column_banner_product"]["offer_banner_2"]["redirect_link"]["link_type"] = values["columnOfferBanner2LinkType"];
  } else {
    values["content"]["column_banner_product"]["offer_banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["column_banner_product"]["offer_banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["columnOfferBanner2Link"]) {
    values["content"]["column_banner_product"]["offer_banner_2"]["redirect_link"]["link"] = values["columnOfferBanner2Link"];
    if (values["columnOfferBanner2LinkType"] == "product") {
      values["content"]["column_banner_product"]["offer_banner_2"]["redirect_link"]["link"] = values["columnOfferBanner2Link"];
    } else {
      values["content"]["column_banner_product"]["offer_banner_2"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["column_banner_product"]["offer_banner_2"]["redirect_link"]["link"] = "";
  }

  if (values["offerBanner1LinkType"]) {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link_type"] = values["offerBanner1LinkType"];
  } else {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner1Link"]) {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = values["offerBanner1Link"];
    if (values["offerBanner1LinkType"] == "product") {
      values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = values["offerBanner1Link"];
    } else {
      values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }

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
  //MultiSelect

  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
  }

  if (values["columnProductList1Product"]) {
    values["content"]["column_banner_product"]["product_list_1"]["product_ids"] = values["columnProductList1Product"];
  }

  if (values["columnProductList2Product"]) {
    values["content"]["column_banner_product"]["product_list_2"]["product_ids"] = values["columnProductList2Product"];
  }

  if (values["productList1Product"]) {
    values["content"]["products_list"]["product_ids"] = values["productList1Product"];
  }

  if (values["categories"]) {
    values["content"]["categories"]["category_ids"] = values["categories"];
  }

  if (values["featuredBlogList"]) {
    values["content"]["featured_blogs"]["blog_ids"] = values["featuredBlogList"];
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
export default SurfingHomePageSubmit;
