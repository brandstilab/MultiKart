import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const FashionSixSubmit = (values, mutate) => {
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

  // Images
  if (values["banner1Image"]) {
    values["content"]["offer_banner"]["banner_1"]["image_url"] = values["banner1Image"].original_url;
  } else values["content"]["offer_banner"]["banner_1"]["image_url"] = "";

  if (values["banner2Image"]) {
    values["content"]["offer_banner"]["banner_2"]["image_url"] = values["banner2Image"].original_url;
  } else values["content"]["offer_banner"]["banner_2"]["image_url"] = "";

  if (values["banner3Image"]) {
    values["content"]["offer_banner"]["banner_3"]["image_url"] = values["banner3Image"].original_url;
  } else values["content"]["offer_banner"]["banner_3"]["image_url"] = "";

  if (values["banner4Image"]) {
    values["content"]["offer_banner"]["banner_4"]["image_url"] = values["banner4Image"].original_url;
  } else values["content"]["offer_banner"]["banner_4"]["image_url"] = "";

  if (values["banner5Image"]) {
    values["content"]["offer_banner"]["banner_5"]["image_url"] = values["banner5Image"].original_url;
  } else values["content"]["offer_banner"]["banner_5"]["image_url"] = "";

  if (values["banner6Image"]) {
    values["content"]["offer_banner"]["banner_6"]["image_url"] = values["banner6Image"].original_url;
  } else values["content"]["offer_banner"]["banner_6"]["image_url"] = "";

  if (values["rightPanelImage"]) {
    values["content"]["products_list_2"]["right_panel"]["image_url"] = values["rightPanelImage"].original_url;
  } else values["content"]["products_list_2"]["right_panel"]["image_url"] = "";

  if (values["sliderProductImage"]) {
    values["content"]["product_banner"]["image_url"] = values["sliderProductImage"].original_url;
  } else values["content"]["product_banner"]["image_url"] = "";

  // For Passing Redirect Link
  if (values["banner1LinkType"]) {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link_type"] = values["banner1LinkType"];
  } else {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = "";
    values["banner1LinkType"] = "";
  }
  if (values["banner1Link"]) {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = values["banner1Link"];
    if (values["banner1LinkType"] == "product") {
      values["content"]["offer_banner"]["banner_1"]["redirect_link"]["product_ids"] = values["banner1Link"];
    } else {
      values["content"]["offer_banner"]["banner_1"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }

  if (values["banner2LinkType"]) {
    values["content"]["offer_banner"]["banner_2"]["redirect_link"]["link_type"] = values["banner2LinkType"];
  } else {
    values["content"]["offer_banner"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["banner_2"]["redirect_link"]["link"] = "";
    values["banner1LinkType"] = "";
  }
  if (values["banner2Link"]) {
    values["content"]["offer_banner"]["banner_2"]["redirect_link"]["link"] = values["banner2Link"];
    if (values["banner1LinkType"] == "product") {
      values["content"]["offer_banner"]["banner_2"]["redirect_link"]["product_ids"] = values["banner2Link"];
    } else {
      values["content"]["offer_banner"]["banner_2"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["offer_banner"]["banner_2"]["redirect_link"]["link"] = "";
  }

  if (values["banner3LinkType"]) {
    values["content"]["offer_banner"]["banner_3"]["redirect_link"]["link_type"] = values["banner3LinkType"];
  } else {
    values["content"]["offer_banner"]["banner_3"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["banner_3"]["redirect_link"]["link"] = "";
    values["banner3LinkType"] = "";
  }
  if (values["banner3Link"]) {
    values["content"]["offer_banner"]["banner_3"]["redirect_link"]["link"] = values["banner3Link"];
    if (values["banner3LinkType"] == "product") {
      values["content"]["offer_banner"]["banner_3"]["redirect_link"]["product_ids"] = values["banner3Link"];
    } else {
      values["content"]["offer_banner"]["banner_3"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["offer_banner"]["banner_3"]["redirect_link"]["link"] = "";
  }

  if (values["banner4LinkType"]) {
    values["content"]["offer_banner"]["banner_4"]["redirect_link"]["link_type"] = values["banner4LinkType"];
  } else {
    values["content"]["offer_banner"]["banner_4"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["banner_4"]["redirect_link"]["link"] = "";
    values["banner4LinkType"] = "";
  }
  if (values["banner4Link"]) {
    values["content"]["offer_banner"]["banner_4"]["redirect_link"]["link"] = values["banner4Link"];
    if (values["banner4LinkType"] == "product") {
      values["content"]["offer_banner"]["banner_4"]["redirect_link"]["product_ids"] = values["banner4Link"];
    } else {
      values["content"]["offer_banner"]["banner_4"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["offer_banner"]["banner_4"]["redirect_link"]["link"] = "";
  }

  if (values["banner5LinkType"]) {
    values["content"]["offer_banner"]["banner_5"]["redirect_link"]["link_type"] = values["banner5LinkType"];
  } else {
    values["content"]["offer_banner"]["banner_5"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["banner_5"]["redirect_link"]["link"] = "";
    values["banner5LinkType"] = "";
  }
  if (values["banner5Link"]) {
    values["content"]["offer_banner"]["banner_5"]["redirect_link"]["link"] = values["banner5Link"];
    if (values["banner5LinkType"] == "product") {
      values["content"]["offer_banner"]["banner_5"]["redirect_link"]["product_ids"] = values["banner5Link"];
    } else {
      values["content"]["offer_banner"]["banner_5"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["offer_banner"]["banner_5"]["redirect_link"]["link"] = "";
  }

  if (values["banner6LinkType"]) {
    values["content"]["offer_banner"]["banner_6"]["redirect_link"]["link_type"] = values["banner6LinkType"];
  } else {
    values["content"]["offer_banner"]["banner_6"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["banner_6"]["redirect_link"]["link"] = "";
    values["banner6LinkType"] = "";
  }
  if (values["banner6Link"]) {
    values["content"]["offer_banner"]["banner_6"]["redirect_link"]["link"] = values["banner6Link"];
    if (values["banner6LinkType"] == "product") {
      values["content"]["offer_banner"]["banner_6"]["redirect_link"]["product_ids"] = values["banner6Link"];
    } else {
      values["content"]["offer_banner"]["banner_6"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["offer_banner"]["banner_6"]["redirect_link"]["link"] = "";
  }
  //MultiSelect
  if (values["productList1Product"]) {
    values["content"]["products_list_1"]["product_ids"] = values["productList1Product"];
  }
  if (values["featuredBlogList"]) {
    values["content"]["featured_blogs"]["blog_ids"] = values["featuredBlogList"];
  }
  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
  }
  if (values["productList2Product"]) {
    values["content"]["products_list_2"]["products"]["product_ids"] = values["productList2Product"];
  }
  if (values["sliderProduct1"]) {
    values["content"]["product_banner"]["product_slider_1"]["product_ids"] = values["sliderProduct1"];
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
export default FashionSixSubmit;
