import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const WatchHomePageSubmit = (values, mutate) => {
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
  // Redirect Link

  if (values["offerBanner1LinkType"]) {
    values["content"]["offer_banner_1"]["redirect_link"]["link_type"] = values["offerBanner1LinkType"];
  } else {
    values["content"]["offer_banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner1Link"]) {
    values["content"]["offer_banner_1"]["redirect_link"]["link"] = values["offerBanner1Link"];
    if (values["offerBanner1LinkType"] == "product") {
      values["content"]["offer_banner_1"]["redirect_link"]["link"] = values["offerBanner1Link"];
    } else {
      values["content"]["offer_banner_1"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner_1"]["redirect_link"]["link"] = "";
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

  // ============================================================================================

  // Images

  if (values["offerBanner1Image"]) {
    values["content"]["offer_banner_1"]["image_url"] = values["offerBanner1Image"].original_url;
  } else values["content"]["offer_banner_1"]["image_url"] = "";

  if (values["offerBanner2Image1"]) {
    values["content"]["offer_banner_2"]["banner_1"]["image_url"] = values["offerBanner2Image1"].original_url;
  } else values["content"]["offer_banner_2"]["banner_1"]["image_url"] = "";

  if (values["offerBanner2Image2"]) {
    values["content"]["offer_banner_2"]["banner_2"]["image_url"] = values["offerBanner2Image2"].original_url;
  } else values["content"]["offer_banner_2"]["banner_2"]["image_url"] = "";

  if (values["offerBanner2Image3"]) {
    values["content"]["offer_banner_2"]["banner_3"]["image_url"] = values["offerBanner2Image3"].original_url;
  } else values["content"]["offer_banner_2"]["banner_3"]["image_url"] = "";

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
  if (values["productCategory"]) {
    values["content"]["category_product"]["category_ids"] = values["productCategory"];
  }
  if (values["featuredBlogList"]) {
    values["content"]["featured_blogs"]["blog_ids"] = values["featuredBlogList"];
  }
  if (values["categories"]) {
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
export default WatchHomePageSubmit;
