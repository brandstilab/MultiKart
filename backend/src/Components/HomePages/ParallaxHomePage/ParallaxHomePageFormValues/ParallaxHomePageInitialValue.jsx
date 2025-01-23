const ParallaxHomePageInitialValue = (data) => {
  let obj = {};

  data?.content?.parallax_banner?.banners?.length > 0 &&
    data?.content?.parallax_banner?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`parallaxBannerImage${index}`] = { original_url: elem.image_url }) : "";
      return obj;
    });
  return {
    content: data?.content,
    sequence: data?.sequence,
    slug: data?.slug,

    ...obj,
  };
};

export default ParallaxHomePageInitialValue;
