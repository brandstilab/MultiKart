import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const MarijuanaHomePageSubmit = (values, mutate) => {
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

  values["content"]["details_section"]["banners"].forEach((elem, i) => {
    if (values[`detailsSectionImage${i}`]) {
      values["content"]["details_section"]["banners"][i]["image_url"] = values[`detailsSectionImage${i}`].original_url;
    } else {
      values["content"]["details_section"]["banners"][i]["image_url"] = "";
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
    values["content"]["offer_banner"]["banner"]["banner_1"]["image_url"] = values["offerBanner1Image"].original_url;
  } else values["content"]["offer_banner"]["banner"]["banner_1"]["image_url"] = "";

  if (values["offerBanner2Image"]) {
    values["content"]["offer_banner"]["banner"]["banner_2"]["image_url"] = values["offerBanner2Image"].original_url;
  } else values["content"]["offer_banner"]["banner"]["banner_2"]["image_url"] = "";

  if (values["categoryProductImage"]) {
    values["content"]["category_product"]["image_url"] = values["categoryProductImage"].original_url;
  } else values["content"]["category_product"]["image_url"] = "";

  // =============================================================================================================

  // For Passing Redirect Link
  if (values["offerBanner1LinkType"]) {
    values["content"]["offer_banner"]["banner"]["banner_1"]["redirect_link"]["link_type"] = values["offerBanner1LinkType"];
  } else {
    values["content"]["offer_banner"]["banner"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["banner"]["banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner1Link"]) {
    values["content"]["offer_banner"]["banner"]["banner_1"]["redirect_link"]["link"] = values["offerBanner1Link"];
    if (values["offerBanner1LinkType"] == "product") {
      values["content"]["offer_banner"]["banner"]["banner_1"]["redirect_link"]["product_ids"] = values["offerBanner1Link"];
    } else {
      values["content"]["offer_banner"]["banner"]["banner_1"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["offer_banner"]["banner"]["banner_1"]["redirect_link"]["link"] = "";
  }
  // ---------------------------------------------------------------------
  if (values["offerBanner2LinkType"]) {
    values["content"]["offer_banner"]["banner"]["banner_2"]["redirect_link"]["link_type"] = values["offerBanner2LinkType"];
  } else {
    values["content"]["offer_banner"]["banner"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner"]["banner"]["banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner2Link"]) {
    values["content"]["offer_banner"]["banner"]["banner_2"]["redirect_link"]["link"] = values["offerBanner2Link"];
    if (values["offerBanner2LinkType"] == "product") {
      values["content"]["offer_banner"]["banner"]["banner_2"]["redirect_link"]["link"] = values["offerBanner2Link"];
    } else {
      values["content"]["offer_banner"]["banner"]["banner_2"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["offer_banner"]["banner"]["banner_2"]["redirect_link"]["link"] = "";
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
export default MarijuanaHomePageSubmit;
