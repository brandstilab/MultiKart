import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const BicycleHomePageSubmit = (values, mutate) => {
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

  // Images

  if (values["offerBanner1Image1"]) {
    values["content"]["offer_banner"]["banner_1"]["image_url"] = values["offerBanner1Image1"].original_url;
  } else values["content"]["offer_banner"]["banner_1"]["image_url"] = "";

  if (values["offerBanner1Image2"]) {
    values["content"]["offer_banner"]["banner_2"]["image_url"] = values["offerBanner1Image2"].original_url;
  } else values["content"]["offer_banner"]["banner_2"]["image_url"] = "";

  if (values["bannerImage"]) {
    values["content"]["banner"]["image_url"] = values["bannerImage"].original_url;
  }

  // ============================================================================================
  // Redirect Link

  if (values["offerBanner1LinkType1"]) {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link_type"] = values["offerBanner1LinkType1"];
  } else {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = "";
    values["offerBanner1LinkType1"] = "";
  }
  if (values["offerBanner1Link1"]) {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = values["offerBanner1Link1"];
    if (values["offerBanner1LinkType1"] == "product") {
      values["content"]["offer_banner"]["banner_1"]["redirect_link"]["product_ids"] = values["offerBanner1Link1"];
    } else {
      values["content"]["offer_banner"]["banner_1"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["offer_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }

  if (values["offerBanner1LinkType2"]) {
    values["content"]["offer_banner"]["banner_2"]["redirect_link"]["link_type"] = values["offerBanner1LinkType2"];
  } else {
    values["content"]["offer_banner"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["banner_2"]["redirect_link"]["link"] = "";
    values["offerBanner1LinkType2"] = "";
  }
  if (values["offerBanner1Link2"]) {
    values["content"]["offer_banner"]["banner_2"]["redirect_link"]["link"] = values["offerBanner1Link2"];
    if (values["offerBanner1LinkType2"] == "product") {
      values["content"]["offer_banner"]["banner_2"]["redirect_link"]["product_ids"] = values["offerBanner1Link2"];
    } else {
      values["content"]["offer_banner"]["banner_2"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["offer_banner"]["banner_2"]["redirect_link"]["link"] = "";
  }

  if (values["bannerLinkType"]) {
    values["content"]["banner"]["redirect_link"]["link_type"] = values["bannerLinkType"];
  } else {
    values["content"]["banner"]["redirect_link"]["link_type"] = "";
    values["content"]["banner"]["redirect_link"]["link"] = "";
    values["bannerLinkType"] = "";
  }
  if (values["bannerLink"]) {
    values["content"]["banner"]["redirect_link"]["link"] = values["bannerLink"];
    if (values["bannerLinkType"] == "product") {
      values["content"]["banner"]["redirect_link"]["product_ids"] = values["bannerLink"];
    } else {
      values["content"]["banner"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["banner"]["redirect_link"]["link"] = "";
  }

  // ============================================================================================
  //MultiSelect
  if (values["categoryProduct1Categories"]) {
    values["content"]["category_product"]["category_ids"] = values["categoryProduct1Categories"];
  }

  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
  }

  if (values["productList1Product"]) {
    values["content"]["products_list"]["product_ids"] = values["productList1Product"];
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
export default BicycleHomePageSubmit;
