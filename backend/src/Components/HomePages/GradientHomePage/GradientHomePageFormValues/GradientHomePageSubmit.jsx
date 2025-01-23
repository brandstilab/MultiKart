import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const GradientHomePageSubmit = (values, mutate) => {
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

  values["content"]["offer_banner"]["banners"].forEach((elem, i) => {
    if (values[`offerBannerImage${i}`]) {
      values["content"]["offer_banner"]["banners"][i]["image_url"] = values[`offerBannerImage${i}`].original_url;
    } else {
      values["content"]["offer_banner"]["banners"][i]["image_url"] = "";
    }

    if (values[`offerBannerRedirectLinkType${i}`] || values[`offerBannerRedirectLink${i}`]) {
      values["content"]["offer_banner"]["banners"][i]["redirect_link"]["link_type"] = values[`offerBannerRedirectLinkType${i}`];
      values["content"]["offer_banner"]["banners"][i]["redirect_link"]["link"] = values[`offerBannerRedirectLink${i}`];
      if (values[`offerBannerRedirectLinkType${i}`] == "product") {
        values["content"]["offer_banner"]["banners"][i]["redirect_link"]["product_ids"] = values[`offerBannerRedirectLink${i}`];
      } else {
        values["content"]["offer_banner"]["banners"][i]["redirect_link"]["product_ids"] = "";
      }
    } else {
      values["content"]["offer_banner"]["banners"][i]["redirect_link"]["link_type"] = "";
      values["content"]["offer_banner"]["banners"][i]["redirect_link"]["link"] = "";
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
  if (values["parallaxBanner1Image"]) {
    values["content"]["parallax_banner"]["banner_1"]["image_url"] = values["parallaxBanner1Image"].original_url;
  } else values["content"]["parallax_banner"]["banner_1"]["image_url"] = "";

  if (values["parallaxBanner2Image"]) {
    values["content"]["parallax_banner"]["banner_2"]["image_url"] = values["parallaxBanner2Image"].original_url;
  } else values["content"]["parallax_banner"]["banner_2"]["image_url"] = "";

  // ============================================================================================
  //MultiSelect

  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
  }

  if (values["productList1Product"]) {
    values["content"]["products_list"]["product_ids"] = values["productList1Product"];
  }

  if (values["couponsList"]) {
    values["content"]["coupons"]["coupon_ids"] = values["couponsList"];
  }

  if (values["categories"]) {
    values["content"]["categories_1"]["category_ids"] = values["categories"];
  }

  if (values["productCategory"]) {
    values["content"]["category_product"]["category_ids"] = values["productCategory"];
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
export default GradientHomePageSubmit;
