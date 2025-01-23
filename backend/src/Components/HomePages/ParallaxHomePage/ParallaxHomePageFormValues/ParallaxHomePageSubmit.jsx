import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const ParallaxHomePageSubmit = (values, mutate) => {
  values["content"]["products_ids"] = Array.from(new Set(concatDynamicProductKeys(values)));

  values["content"]["parallax_banner"]["banners"].forEach((elem, i) => {
    if (values[`parallaxBannerImage${i}`]) {
      values["content"]["parallax_banner"]["banners"][i]["image_url"] = values[`parallaxBannerImage${i}`].original_url;
    } else {
      values["content"]["parallax_banner"]["banners"][i]["image_url"] = "";
    }
  });
  
  const updatedValues = {
    ...values,
    content: {
      ...values.content,
      products_ids: Array.from(new Set(concatDynamicProductKeys(values))),
    },
  };

  // Put Add Or Update Logic Here;
};
export default ParallaxHomePageSubmit;
