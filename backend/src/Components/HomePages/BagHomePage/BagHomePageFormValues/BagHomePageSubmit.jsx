import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const BagHomePageSubmit = (values, mutate) => {
  values["content"]["products_ids"] = concatDynamicProductKeys(values?.content);

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

  values["content"]["grid_banner"]["banners"].forEach((elem, i) => {
    if (values[`gridBannerImage${i}`]) {
      values["content"]["grid_banner"]["banners"][i]["image_url"] = values[`gridBannerImage${i}`].original_url;
    } else {
      values["content"]["grid_banner"]["banners"][i]["image_url"] = "";
    }

    if (values[`gridBannerRedirectLinkType${i}`] || values[`gridBannerRedirectLink${i}`]) {
      values["content"]["grid_banner"]["banners"][i]["redirect_link"]["link_type"] = values[`gridBannerRedirectLinkType${i}`];
      values["content"]["grid_banner"]["banners"][i]["redirect_link"]["link"] = values[`gridBannerRedirectLink${i}`];
      if (values[`gridBannerRedirectLinkType${i}`] == "product") {
        values["content"]["grid_banner"]["banners"][i]["redirect_link"]["product_ids"] = values[`gridBannerRedirectLink${i}`];
      } else {
        values["content"]["grid_banner"]["banners"][i]["redirect_link"]["product_ids"] = "";
      }
    } else {
      values["content"]["grid_banner"]["banners"][i]["redirect_link"]["link_type"] = "";
      values["content"]["grid_banner"]["banners"][i]["redirect_link"]["link"] = "";
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

  if (values["fullBannerLinkType"]) {
    values["content"]["full_banner"]["redirect_link"]["link_type"] = values["fullBannerLinkType"];
  } else {
    values["content"]["full_banner"]["redirect_link"]["link_type"] = "";
    values["content"]["full_banner"]["redirect_link"]["link"] = "";
    values["fullBannerLinkType"] = "";
  }
  if (values["fullBannerLink"]) {
    // values["content"]["full_banner"]["redirect_link"]["link"] = values["fullBannerLink"];
    if (values["fullBannerLinkType"] == "product") {
      values["content"]["full_banner"]["redirect_link"]["product_ids"] = values["fullBannerLink"];
      values["content"]["full_banner"]["redirect_link"]["link"] = values["fullBannerLink"];
    } else {
      values["content"]["full_banner"]["redirect_link"]["link"] = values["fullBannerLink"];
      values["content"]["full_banner"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["full_banner"]["redirect_link"]["link"] = "";
  }

  // Images

  if (values["fullBannerImage"]) {
    values["content"]["full_banner"]["image_url"] = values["fullBannerImage"].original_url;
  } else values["content"]["full_banner"]["image_url"] = "";

  // ============================================================================================
  //MultiSelect
  if (values["productBannerLeftPanelProduct"]) {
    values["content"]["product_banner"]["left_content"]["product_ids"] = values["productBannerLeftPanelProduct"];
  }
  if (values["productBannerCenterPanelProduct"]) {
    values["content"]["product_banner"]["center_content"]["product_ids"] = values["productBannerCenterPanelProduct"];
  }
  if (values["productBannerRightPanelProduct"]) {
    values["content"]["product_banner"]["right_content"]["product_ids"] = values["productBannerRightPanelProduct"];
  }
  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
  }

  if (values["productListProduct"]) {
    values["content"]["products_list"]["product_ids"] = values["productListProduct"];
  }

  if (values["categories"]) {
    values["content"]["category"]["category_ids"] = values["categories"];
  }
  if (values["featuredBlogList"]) {
    values["content"]["featured_blogs"]["blog_ids"] = values["featuredBlogList"];
  }
  if (values["productCategory"]) {
    values["content"]["category_product"]["category_ids"] = values["productCategory"];
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
export default BagHomePageSubmit;
