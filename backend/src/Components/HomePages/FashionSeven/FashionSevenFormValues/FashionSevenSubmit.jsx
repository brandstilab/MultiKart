import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const FashionSevenSubmit = (values, mutate) => {
  values["content"]["products_ids"] = Array.from(new Set(concatDynamicProductKeys(values)));

  // Images
  if (values["homeBannerImage"]) {
    values["content"]["home_banner"]["image_url"] = values["homeBannerImage"].original_url;
  } else values["content"]["home_banner"]["image_url"] = "";

  if (values["banner1Image"]) {
    values["content"]["featured_banners"]["banner_1"]["image_url"] = values["banner1Image"].original_url;
  } else values["content"]["featured_banners"]["banner_1"]["image_url"] = "";

  if (values["banner2Image"]) {
    values["content"]["featured_banners"]["banner_2"]["image_url"] = values["banner2Image"].original_url;
  } else values["content"]["featured_banners"]["banner_2"]["image_url"] = "";

  if (values["banner3Image"]) {
    values["content"]["featured_banners"]["banner_3"]["image_url"] = values["banner3Image"].original_url;
  } else values["content"]["featured_banners"]["banner_3"]["image_url"] = "";

  if (values["productBannerImage"]) {
    values["content"]["product_banner"]["image_url"] = values["productBannerImage"].original_url;
  } else values["content"]["product_banner"]["image_url"] = "";

  // For Passing Redirect Link
  if (values["banner1LinkType"]) {
    values["content"]["featured_banners"]["banner_1"]["redirect_link"]["link_type"] = values["banner1LinkType"];
  } else {
    values["content"]["featured_banners"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["featured_banners"]["banner_1"]["redirect_link"]["link"] = "";
    values["banner1LinkType"] = "";
  }
  if (values["banner1Link"]) {
    values["content"]["featured_banners"]["banner_1"]["redirect_link"]["link"] = values["banner1Link"];
    if (values["banner1LinkType"] == "product") {
      values["content"]["featured_banners"]["banner_1"]["redirect_link"]["product_ids"] = values["banner1Link"];
    } else {
      values["content"]["featured_banners"]["banner_1"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["featured_banners"]["banner_1"]["redirect_link"]["link"] = "";
  }

  if (values["banner2LinkType"]) {
    values["content"]["featured_banners"]["banner_2"]["redirect_link"]["link_type"] = values["banner2LinkType"];
  } else {
    values["content"]["featured_banners"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["featured_banners"]["banner_2"]["redirect_link"]["link"] = "";
    values["banner1LinkType"] = "";
  }
  if (values["banner2Link"]) {
    values["content"]["featured_banners"]["banner_2"]["redirect_link"]["link"] = values["banner2Link"];
    if (values["banner1LinkType"] == "product") {
      values["content"]["featured_banners"]["banner_2"]["redirect_link"]["product_ids"] = values["banner2Link"];
    } else {
      values["content"]["featured_banners"]["banner_2"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["featured_banners"]["banner_2"]["redirect_link"]["link"] = "";
  }

  if (values["banner3LinkType"]) {
    values["content"]["featured_banners"]["banner_3"]["redirect_link"]["link_type"] = values["banner3LinkType"];
  } else {
    values["content"]["featured_banners"]["banner_3"]["redirect_link"]["link_type"] = "";
    values["content"]["featured_banners"]["banner_3"]["redirect_link"]["link"] = "";
  }
  if (values["banner3Link"]) {
    values["content"]["featured_banners"]["banner_3"]["redirect_link"]["link"] = values["banner3Link"];
    if (values["banner3LinkType"] == "product") {
      values["content"]["featured_banners"]["banner_3"]["redirect_link"]["product_ids"] = values["banner3Link"];
    } else {
      values["content"]["featured_banners"]["banner_3"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["featured_banners"]["banner_3"]["redirect_link"]["link"] = "";
  }

  if (values["homeBannerLinkType"]) {
    values["content"]["home_banner"]["redirect_link"]["link_type"] = values["homeBannerLinkType"];
  } else {
    values["content"]["home_banner"]["redirect_link"]["link_type"] = "";
    values["content"]["home_banner"]["redirect_link"]["link"] = "";
  }
  if (values["homeBannerLink"]) {
    values["content"]["home_banner"]["redirect_link"]["link"] = values["homeBannerLink"];
    if (values["homeBannerLinkType"] == "product") {
      values["content"]["home_banner"]["redirect_link"]["product_ids"] = values["homeBannerLink"];
    } else {
      values["content"]["home_banner"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["home_banner"]["redirect_link"]["link"] = "";
  }

  //MultiSelect
  if (values["productList1Product"]) {
    values["content"]["product_ids"] = values["productList1Product"];
  }
  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
  }
  if (values["productList2Product"]) {
    values["content"]["products_list_2"]["products"]["product_ids"] = values["productList2Product"];
  }

  if (values["productBannerProducts"]) {
    values["content"]["product_banner"]["product_ids"] = values["productBannerProducts"];
  }

  if (values["productList1Categories"]) {
    values["content"]["products_list_1"]["category_id"] = values["productList1Categories"];
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
export default FashionSevenSubmit;
