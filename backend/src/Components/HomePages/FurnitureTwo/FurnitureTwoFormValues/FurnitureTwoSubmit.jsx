import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const FurnitureTwoSubmit = (values, mutate) => {
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

  values["content"]["grid_banner"]["banners"].forEach((elem, i) => {
    if (values[`gridBannerImage${i}`]) {
      {
        i !== 0 ? (values["content"]["grid_banner"]["banners"][i]["image_url"] = values[`gridBannerImage${i}`].original_url) : (values["content"]["grid_banner"]["banners"][i]["video_url"] = values[`gridBannerImage${i}`].original_url);
      }
    } else {
      {
        i != 0 ? (values["content"]["grid_banner"]["banners"][i]["image_url"] = "") : (values["content"]["grid_banner"]["banners"][i]["video_url"] = "");
      }
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
    if (values[`socialMediaBannerRedirectLinkType${i}`] || values[`socialMediaBannerRedirectLink${i}`]) {
      values["content"]["social_media"]["banners"][i]["redirect_link"]["link_type"] = values[`socialMediaBannerRedirectLinkType${i}`];
      values["content"]["social_media"]["banners"][i]["redirect_link"]["link"] = values[`socialMediaBannerRedirectLink${i}`];
      if (values[`socialMediaBannerRedirectLinkType${i}`] == "product") {
        values["content"]["social_media"]["banners"][i]["redirect_link"]["product_ids"] = values[`socialMediaBannerRedirectLink${i}`];
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

  // Images

  if (values["productList2Banner1Image"]) {
    values["content"]["product_list_2"]["products"]["product_banner"]["banner_1"]["image_url"] = values["productList2Banner1Image"].original_url;
  } else values["content"]["product_list_2"]["products"]["product_banner"]["banner_1"]["image_url"] = "";

  if (values["productList2Banner2Image"]) {
    values["content"]["product_list_2"]["products"]["product_banner"]["banner_2"]["image_url"] = values["productList2Banner2Image"].original_url;
  } else values["content"]["product_list_2"]["products"]["product_banner"]["banner_2"]["image_url"] = "";

  // For Passing Redirect Link

  if (values["productList2Banner1RedirectLinkType"]) {
    values["content"]["product_list_2"]["products"]["product_banner"]["banner_1"]["redirect_link"]["link_type"] = values["productList2Banner1RedirectLinkType"];
  } else {
    values["content"]["product_list_2"]["products"]["product_banner"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["product_list_2"]["products"]["product_banner"]["banner_1"]["redirect_link"]["link"] = "";
    values["productList2Banner1RedirectLinkType"] = "";
  }
  if (values["productList2Banner1RedirectLink"]) {
    values["content"]["product_list_2"]["products"]["product_banner"]["banner_1"]["redirect_link"]["link"] = values["productList2Banner1RedirectLink"];
    if (values["productList2Banner1RedirectLinkType"] == "product") {
      values["content"]["product_list_2"]["products"]["product_banner"]["banner_1"]["redirect_link"]["product_ids"] = values["productList2Banner1RedirectLink"];
    } else {
      values["content"]["product_list_2"]["products"]["product_banner"]["banner_1"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["product_list_2"]["products"]["product_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }

  if (values["productList2Banner2RedirectLinkType"]) {
    values["content"]["product_list_2"]["products"]["product_banner"]["banner_2"]["redirect_link"]["link_type"] = values["productList2Banner2RedirectLinkType"];
  } else {
    values["content"]["product_list_2"]["products"]["product_banner"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["product_list_2"]["products"]["product_banner"]["banner_2"]["redirect_link"]["link"] = "";
    values["productList2Banner2RedirectLinkType"] = "";
  }
  if (values["productList2Banner2RedirectLink"]) {
    values["content"]["product_list_2"]["products"]["product_banner"]["banner_2"]["redirect_link"]["link"] = values["productList2Banner2RedirectLink"];
    if (values["productList2Banner2RedirectLinkType"] == "product") {
      values["content"]["product_list_2"]["products"]["product_banner"]["banner_2"]["redirect_link"]["product_ids"] = values["productList2Banner2RedirectLink"];
    } else {
      values["content"]["product_list_2"]["products"]["product_banner"]["banner_2"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["product_list_2"]["products"]["product_banner"]["banner_2"]["redirect_link"]["link"] = "";
  }

  //MultiSelect
  if (values["productList1Product"]) {
    values["content"]["products_list_1"]["product_ids"] = values["productList1Product"];
  }
  if (values["rightPanelProduct"]) {
    values["content"]["product_list_2"]["right_panel"]["product_ids"] = values["rightPanelProduct"];
  }

  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
  }
  if (values["productList2Product"]) {
    values["content"]["product_list_2"]["products"]["product_item"]["product_ids"] = values["productList2Product"];
  }
  if (values["categoryIconList"]) {
    values["content"]["categories_icon_list"]["category_ids"] = values["categoryIconList"];
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
export default FurnitureTwoSubmit;
