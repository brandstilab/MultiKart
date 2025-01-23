import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const FashionOneSubmit = (values, mutate) => {
  values["content"]["products_ids"] = Array.from(new Set(concatDynamicProductKeys(values)));

  // values["content"]["home_banner"]["banners"]?.forEach((elem, i) => {
  //   if (values[`homeBannerImage${i}`]) {
  //     values["content"]["home_banner"]["banners"][i]["image_url"] = values[`homeBannerImage${i}`].original_url;
  //   } else {
  //     values["content"]["home_banner"]["banners"][i]["image_url"] = "";
  //   }

  //   if (values[`homeRedirectLinkType${i}`] || values[`homeRedirectLink${i}`]) {
  //     values["content"]["home_banner"]["banners"][i]["redirect_link"]["link_type"] = values[`homeRedirectLinkType${i}`];
  //     values["content"]["home_banner"]["banners"][i]["redirect_link"]["link"] = values[`homeRedirectLink${i}`];
  //     if (values[`homeRedirectLinkType${i}`] == "product") {
  //       values["content"]["home_banner"]["banners"][i]["redirect_link"]["product_ids"] = values[`homeRedirectLink${i}`];
  //     } else {
  //       values["content"]["home_banner"]["banners"][i]["redirect_link"]["product_ids"] = "";
  //     }
  //   } else {
  //     values["content"]["home_banner"]["banners"][i]["redirect_link"]["link_type"] = "";
  //     values["content"]["home_banner"]["banners"][i]["redirect_link"]["link"] = "";
  //   }
  // });

  values["content"]["home_banner"]["banners"]?.forEach((elem, i) => {
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
  if (values["offerBanner1Image"]) {
    values["content"]["offer_banner"]["banner_1"]["image_url"] = values["offerBanner1Image"].original_url;
  } else values["content"]["offer_banner"]["banner_1"]["image_url"] = "";

  if (values["banner1Image"]) {
    values["content"]["banner"]["image_url"] = values["banner1Image"].original_url;
  } else values["content"]["banner"]["image_url"] = "";

  if (values["offerBanner2Image"]) {
    values["content"]["offer_banner"]["banner_2"]["image_url"] = values["offerBanner2Image"].original_url;
  } else values["content"]["offer_banner"]["banner_2"]["image_url"] = "";

  // =============================================================================================================

  // For Passing Redirect Link
  if (values["offerBanner1LinkType"]) {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link_type"] = values["offerBanner1LinkType"];
  } else {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = "";
    values["offerBanner1LinkType"] = "";
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
    values["offerBanner2LinkType"] = "";
  }
  if (values["offerBanner2Link"]) {
    values["content"]["offer_banner"]["banner_2"]["redirect_link"]["link"] = values["offerBanner2Link"];
    if (values["offerBanner2LinkType"] == "product") {
      values["content"]["offer_banner"]["banner_2"]["redirect_link"]["product_ids"] = values["offerBanner2Link"];
    } else {
      values["content"]["offer_banner"]["banner_2"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["offer_banner"]["banner_2"]["redirect_link"]["link"] = "";
  }

  if (values["banner1LinkType"]) {
    values["content"]["banner"]["redirect_link"]["link_type"] = values["banner1LinkType"];
  } else {
    values["content"]["banner"]["redirect_link"]["link_type"] = "";
    values["content"]["banner"]["redirect_link"]["link"] = "";
    values["banner1LinkType"] = "";
  }
  if (values["banner1Link"]) {
    values["content"]["banner"]["redirect_link"]["link"] = values["banner1Link"];
    if (values["banner1LinkType"] == "product") {
      values["content"]["banner"]["redirect_link"]["product_ids"] = values["banner1Link"];
    } else {
      values["content"]["banner"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["banner"]["redirect_link"]["link"] = "";
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

  const updatedValues = {
    ...values,
    content: {
      ...values.content,
      products_ids: Array.from(new Set(concatDynamicProductKeys(values))),
    },
  };

  // Put Add Or Update Logic Here;
};
export default FashionOneSubmit;
