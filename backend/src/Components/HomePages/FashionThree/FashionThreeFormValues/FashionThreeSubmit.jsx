import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const FashionThreeSubmit = (values, mutate) => {
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
  if (values["fullBannerImage"]) {
    values["content"]["full_banner"]["image_url"] = values["fullBannerImage"].original_url;
  } else values["content"]["full_banner"]["image_url"] = "";

  // Redirect Link

  if (values["fullBannerLinkType"]) {
    values["content"]["full_banner"]["redirect_link"]["link_type"] = values["fullBannerLinkType"];
  } else {
    values["content"]["full_banner"]["redirect_link"]["link_type"] = "";
    values["content"]["full_banner"]["redirect_link"]["link"] = "";
  }
  if (values["fullBannerLink"]) {
    values["content"]["full_banner"]["redirect_link"]["link"] = values["fullBannerLink"];
    if (values["fullBannerLinkType"] == "product") {
      values["content"]["full_banner"]["redirect_link"]["link"] = values["fullBannerLink"];
    } else {
      values["content"]["full_banner"]["redirect_link"]["link"] = "";
    }
  } else {
    values["content"]["full_banner"]["redirect_link"]["link"] = "";
  }

  //MultiSelect
  if (values["productList1Product"]) {
    values["content"]["products_list"]["product_ids"] = values["productList1Product"];
  }

  if (values["productList2Product"]) {
    values["content"]["category_product"]["category_ids"] = values["productList2Product"];
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
export default FashionThreeSubmit;
