import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const ShoesHomePageSubmit = (values, mutate) => {
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

  values["content"]["services"]?.["banners"]?.forEach((elem, i) => {
    if (values[`serviceBannerImage${i}`]) {
      values["content"]["services"]["banners"][i]["image_url"] = values[`serviceBannerImage${i}`]?.original_url;
    } else {
      values["content"]["services"]["banners"][i]["image_url"] = "";
    }
  });

  // =============================================================================================================

  // Images
  if (values["aboutBanner1Image"]) {
    values["content"]["about_banner"]["collection_banner"]["banner_1"]["image_url"] = values["aboutBanner1Image"].original_url;
  } else values["content"]["about_banner"]["collection_banner"]["banner_1"]["image_url"] = "";

  if (values["aboutBanner2Image"]) {
    values["content"]["about_banner"]["collection_banner"]["banner_2"]["image_url"] = values["aboutBanner2Image"].original_url;
  } else values["content"]["about_banner"]["collection_banner"]["banner_2"]["image_url"] = "";

  // =============================================================================================================

  // For Passing Redirect Link
  if (values["aboutBanner1LinkType"]) {
    values["content"]["about_banner"]["collection_banner"]["banner_1"]["redirect_link"]["link_type"] = values["aboutBanner1LinkType"];
  } else {
    values["content"]["about_banner"]["collection_banner"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["about_banner"]["collection_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["aboutBanner1Link"]) {
    values["content"]["about_banner"]["collection_banner"]["banner_1"]["redirect_link"]["link"] = values["aboutBanner1Link"];
    if (values["aboutBanner1LinkType"] == "product") {
      values["content"]["about_banner"]["collection_banner"]["banner_1"]["redirect_link"]["product_ids"] = values["aboutBanner1Link"];
    } else {
      values["content"]["about_banner"]["collection_banner"]["banner_1"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["about_banner"]["collection_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }
  // ---------------------------------------------------------------------
  if (values["aboutBanner2LinkType"]) {
    values["content"]["about_banner"]["collection_banner"]["banner_2"]["redirect_link"]["link_type"] = values["aboutBanner2LinkType"];
  } else {
    values["content"]["about_banner"]["collection_banner"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["about_banner"]["collection_banner"]["banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["aboutBanner2Link"]) {
    values["content"]["about_banner"]["collection_banner"]["banner_2"]["redirect_link"]["link"] = values["aboutBanner2Link"];
    if (values["aboutBanner2LinkType"] == "product") {
      values["content"]["about_banner"]["collection_banner"]["banner_2"]["redirect_link"]["link"] = values["aboutBanner2Link"];
    } else {
      values["content"]["about_banner"]["collection_banner"]["banner_2"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["about_banner"]["collection_banner"]["banner_2"]["redirect_link"]["link"] = "";
  }

  // ==========================================================================

  //MultiSelect
  if (values["productList1Product"]) {
    values["content"]["products_list"]["product_ids"] = values["productList1Product"];
  }

  if (values["featuredBlogList"]) {
    values["content"]["featured_blogs"]["blog_ids"] = values["featuredBlogList"];
  }

  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
  }

  if (values["productCategories"]) {
    values["content"]["category_product"]["category_ids"] = values["productCategories"];
  }

  if (values["categories1"]) {
    values["content"]["categories_1"]["category_ids"] = values["categories1"];
  }

  if (values["categories2"]) {
    values["content"]["categories_2"]["category_ids"] = values["categories2"];
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
export default ShoesHomePageSubmit;
