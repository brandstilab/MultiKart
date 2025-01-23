import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const VideoSliderSubmit = (values, mutate) => {
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

  values["content"]["services"]["banners"].forEach((elem, i) => {
    if (values[`serviceBannerImage${i}`]) {
      values["content"]["services"]["banners"][i]["image_url"] = values[`serviceBannerImage${i}`].original_url;
    } else {
      values["content"]["services"]["banners"][i]["image_url"] = "";
    }
  });

  // Redirect Link

  if (values["collectionBanner1LinkType"]) {
    values["content"]["collection_banner"]["banner_1"]["redirect_link"]["link_type"] = values["collectionBanner1LinkType"];
  } else {
    values["content"]["collection_banner"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["collection_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["collectionBanner1Link"]) {
    values["content"]["collection_banner"]["banner_1"]["redirect_link"]["link"] = values["collectionBanner1Link"];
    if (values["collectionBanner1LinkType"] == "product") {
      values["content"]["collection_banner"]["banner_1"]["redirect_link"]["link"] = values["collectionBanner1Link"];
    } else {
      values["content"]["collection_banner"]["banner_1"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["collection_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }

  if (values["collectionBanner2LinkType"]) {
    values["content"]["collection_banner"]["banner_2"]["redirect_link"]["link_type"] = values["collectionBanner2LinkType"];
  } else {
    values["content"]["collection_banner"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["collection_banner"]["banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["collectionBanner2Link"]) {
    values["content"]["collection_banner"]["banner_2"]["redirect_link"]["link"] = values["collectionBanner2Link"];
    if (values["collectionBanner2LinkType"] == "product") {
      values["content"]["collection_banner"]["banner_2"]["redirect_link"]["link"] = values["collectionBanner2Link"];
    } else {
      values["content"]["collection_banner"]["banner_2"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["collection_banner"]["banner_2"]["redirect_link"]["link"] = "";
  }

  if (values["collectionBanner3LinkType"]) {
    values["content"]["collection_banner"]["banner_3"]["redirect_link"]["link_type"] = values["collectionBanner3LinkType"];
  } else {
    values["content"]["collection_banner"]["banner_3"]["redirect_link"]["link_type"] = "";
    values["content"]["collection_banner"]["banner_3"]["redirect_link"]["link"] = "";
  }
  if (values["collectionBanner3Link"]) {
    values["content"]["collection_banner"]["banner_3"]["redirect_link"]["link"] = values["collectionBanner3Link"];
    if (values["collectionBanner3LinkType"] == "product") {
      values["content"]["collection_banner"]["banner_3"]["redirect_link"]["link"] = values["collectionBanner3Link"];
    } else {
      values["content"]["collection_banner"]["banner_3"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["collection_banner"]["banner_3"]["redirect_link"]["link"] = "";
  }

  // Images

  if (values["fullBannerImage"]) {
    values["content"]["parallax_banner"]["image_url"] = values["fullBannerImage"].original_url;
  } else values["content"]["parallax_banner"]["image_url"] = "";

  if (values["collectionBanner1Image"]) {
    values["content"]["collection_banner"]["banner_1"]["image_url"] = values["collectionBanner1Image"].original_url;
  } else values["content"]["collection_banner"]["banner_1"]["image_url"] = "";

  if (values["collectionBanner2Image"]) {
    values["content"]["collection_banner"]["banner_2"]["image_url"] = values["collectionBanner2Image"].original_url;
  } else values["content"]["collection_banner"]["banner_2"]["image_url"] = "";

  if (values["collectionBanner3Image"]) {
    values["content"]["collection_banner"]["banner_3"]["image_url"] = values["collectionBanner3Image"].original_url;
  } else values["content"]["collection_banner"]["banner_3"]["image_url"] = "";

  // ==========================================================================

  //MultiSelect
  if (values["productList1Product"]) {
    values["content"]["products_list"]["product_ids"] = values["productList1Product"];
  }

  if (values["productCategory"]) {
    values["content"]["category_product"]["category_ids"] = values["productCategory"];
  }

  if (values["featuredBlogList"]) {
    values["content"]["featured_blogs"]["blog_ids"] = values["featuredBlogList"];
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
export default VideoSliderSubmit;
