import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const PetsHomePageSubmit = (values, mutate) => {
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

    if (values[`offerRedirectLinkType${i}`] || values[`offerRedirectLink${i}`]) {
      values["content"]["offer_banner"]["banners"][i]["redirect_link"]["link_type"] = values[`offerRedirectLinkType${i}`];
      values["content"]["offer_banner"]["banners"][i]["redirect_link"]["link"] = values[`offerRedirectLink${i}`];
      if (values[`offerRedirectLinkType${i}`] == "product") {
        values["content"]["offer_banner"]["banners"][i]["redirect_link"]["product_ids"] = values[`offerRedirectLink${i}`];
      } else {
        values["content"]["offer_banner"]["banners"][i]["redirect_link"]["product_ids"] = "";
      }
    } else {
      values["content"]["offer_banner"]["banners"][i]["redirect_link"]["link_type"] = "";
      values["content"]["offer_banner"]["banners"][i]["redirect_link"]["link"] = "";
    }
  });

  // ============================================================================================

  //MultiSelect
  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
  }

  if (values["productList1Product"]) {
    values["content"]["products_list_1"]["product_ids"] = values["productList1Product"];
  }

  if (values["productList2Product"]) {
    values["content"]["products_list_2"]["product_ids"] = values["productList2Product"];
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
export default PetsHomePageSubmit;
