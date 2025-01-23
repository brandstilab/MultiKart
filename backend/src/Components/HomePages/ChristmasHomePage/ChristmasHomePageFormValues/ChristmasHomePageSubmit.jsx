import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const ChristmasHomePageSubmit = (values, mutate) => {
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
    values["content"]["offer_banner_1"]["banner_1"]["image_url"] = values["offerBanner1Image1"].original_url;
  } else values["content"]["offer_banner_1"]["banner_1"]["image_url"] = "";

  if (values["offerBanner1Image2"]) {
    values["content"]["offer_banner_1"]["banner_2"]["image_url"] = values["offerBanner1Image2"].original_url;
  } else values["content"]["offer_banner_1"]["banner_2"]["image_url"] = "";

  if (values["offerBanner2Image"]) {
    values["content"]["offer_banner_2"]["image_url"] = values["offerBanner2Image"].original_url;
  } else values["content"]["offer_banner_2"]["image_url"] = "";

  if (values["offerBanner3Image"]) {
    values["content"]["offer_banner_3"]["image_url"] = values["offerBanner3Image"].original_url;
  } else values["content"]["offer_banner_3"]["image_url"] = "";

  // ============================================================================================
  // Redirect Link

  if (values["offerBanner1LinkType1"]) {
    values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["link_type"] = values["offerBanner1LinkType1"];
  } else {
    values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["link"] = "";
    values["offerBanner1LinkType1"] = "";
  }
  if (values["offerBanner1Link1"]) {
    values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["link"] = values["offerBanner1Link1"];
    if (values["offerBanner1LinkType1"] == "product") {
      values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["product_ids"] = values["offerBanner1Link1"];
    } else {
      values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["offer_banner_1"]["banner_1"]["redirect_link"]["link"] = "";
  }

  if (values["offerBanner1LinkType2"]) {
    values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["link_type"] = values["offerBanner1LinkType2"];
  } else {
    values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["link"] = "";
    values["offerBanner1LinkType2"] = "";
  }
  if (values["offerBanner1Link2"]) {
    values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["link"] = values["offerBanner1Link2"];
    if (values["offerBanner1LinkType2"] == "product") {
      values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["product_ids"] = values["offerBanner1Link2"];
    } else {
      values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["offer_banner_1"]["banner_2"]["redirect_link"]["link"] = "";
  }

  if (values["offerBanner2LinkType"]) {
    values["content"]["offer_banner_2"]["redirect_link"]["link_type"] = values["offerBanner2LinkType"];
  } else {
    values["content"]["offer_banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner_2"]["redirect_link"]["link"] = "";
    values["offerBanner2LinkType"] = "";
  }
  if (values["offerBanner2Link"]) {
    values["content"]["offer_banner_2"]["redirect_link"]["link"] = values["offerBanner2Link"];
    if (values["offerBanner2LinkType"] == "product") {
      values["content"]["offer_banner_2"]["redirect_link"]["product_ids"] = values["offerBanner2Link"];
    } else {
      values["content"]["offer_banner_2"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["offer_banner_2"]["redirect_link"]["link"] = "";
  }

  if (values["offerBanner3LinkType"]) {
    values["content"]["offer_banner_3"]["redirect_link"]["link_type"] = values["offerBanner3LinkType"];
  } else {
    values["content"]["offer_banner_3"]["redirect_link"]["link_type"] = "";
    values["content"]["offer_banner_3"]["redirect_link"]["link"] = "";
    values["offerBanner3LinkType"] = "";
  }
  if (values["offerBanner3Link"]) {
    values["content"]["offer_banner_3"]["redirect_link"]["link"] = values["offerBanner3Link"];
    if (values["offerBanner3LinkType"] == "product") {
      values["content"]["offer_banner_3"]["redirect_link"]["product_ids"] = values["offerBanner3Link"];
    } else {
      values["content"]["offer_banner_3"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["offer_banner_3"]["redirect_link"]["link"] = "";
  }

  // ============================================================================================
  //MultiSelect
  if (values["categoryProduct1Categories"]) {
    values["content"]["category_product_1"]["category_ids"] = values["categoryProduct1Categories"];
  }

  if (values["categoryProduct2Categories"]) {
    values["content"]["category_product_2"]["category_ids"] = values["categoryProduct2Categories"];
  }

  if (values["featuredBlogList"]) {
    values["content"]["featured_blogs"]["blog_ids"] = values["featuredBlogList"];
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
export default ChristmasHomePageSubmit;
