import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const FurnitureOneSubmit = (values, mutate) => {
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

  // Images
  if (values["featuredBanner1Image"]) {
    values["content"]["featured_banners"]["banner_1"]["image_url"] = values["featuredBanner1Image"].original_url;
  } else values["content"]["featured_banners"]["banner_1"]["image_url"] = "";

  if (values["featuredBanner2Image"]) {
    values["content"]["featured_banners"]["banner_2"]["image_url"] = values["featuredBanner2Image"].original_url;
  } else values["content"]["featured_banners"]["banner_2"]["image_url"] = "";

  if (values["categoriesIconImage"]) {
    values["content"]["parallax_banner"]["image_url"] = values["categoriesIconImage"].original_url;
  } else values["content"]["parallax_banner"]["image_url"] = "";

  // // For Passing Redirect Link
  if (values["featuredBanner1LinkType"]) {
    values["content"]["featured_banners"]["banner_1"]["redirect_link"]["link_type"] = values["featuredBanner1LinkType"];
  } else {
    values["content"]["featured_banners"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["featured_banners"]["banner_1"]["redirect_link"]["link"] = "";
    values["featuredBanner1LinkType"] = "";
  }
  if (values["featureBanner1Link"]) {
    values["content"]["featured_banners"]["banner_1"]["redirect_link"]["link"] = values["featureBanner1Link"];
    if (values["featuredBanner1LinkType"] == "product") {
      values["content"]["featured_banners"]["banner_1"]["redirect_link"]["product_ids"] = values["featureBanner1Link"];
    } else {
      values["content"]["featured_banners"]["banner_1"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["featured_banners"]["banner_1"]["redirect_link"]["link"] = "";
  }
  // ---------------------------------------------------------------------
  if (values["featuredBanner2LinkType"]) {
    values["content"]["featured_banners"]["banner_2"]["redirect_link"]["link_type"] = values["featuredBanner2LinkType"];
  } else {
    values["content"]["featured_banners"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["featured_banners"]["banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["featuredBanner2Link"]) {
    values["content"]["featured_banners"]["banner_2"]["redirect_link"]["link"] = values["featuredBanner2Link"];
    if (values["featuredBanner2LinkType"] == "product") {
      values["content"]["featured_banners"]["banner_2"]["redirect_link"]["link"] = values["featuredBanner2Link"];
    } else {
      values["content"]["featured_banners"]["banner_2"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["featured_banners"]["banner_2"]["redirect_link"]["link"] = "";
  }

  //MultiSelect
  if (values["productList1Categories"]) {
    values["content"]["products_list"]["category_ids"] = values["productList1Categories"];
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
export default FurnitureOneSubmit;
