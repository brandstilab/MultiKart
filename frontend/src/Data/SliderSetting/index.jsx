export const CouponSliderSettings = {
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export const CollectionCategorySlider = {
  arrows: true,
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
      },
    },
  ],
};

export const ProductDetailTopSlider = {
  infinite: true,
  swipeToSlide: true,
  slidesToShow: 3,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1230,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

/* viewModalSliderOption */
export const viewModalSliderOption = {
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".slider-image",
  dots: false,
  focusOnSelect: true,
};

export const surfboardCategorySlider = (length) => {
  return {
    infinite: true,
    slidesToShow: length > 5 ? 5 : length,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
};

export const categorySlider = (length) => {
  return {
    infinite: true,
    slidesToShow: length > 5 ? 5 : length,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 410,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };
};

/* Book Slider */
export const bookSlider = (length) => {
  return {
    infinite: true,
    slidesToShow: length > 5 ? 5 : length,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 2,
          margin: 12,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
};

/* horizontalProductSlider */
export const horizontalProductSlider = (length) => {
  return {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: length > 4 ? 4 : length,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
};

export const dynamicHorizontalSlider = (length) => {
  return {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: length > 4 ? 4 : length,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
};

// nftProductSlider
export const nftProductSlider = (length) => {
  return {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: length > 2 ? 2 : length,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
};

export const productSlider3 = (length) => {
  return {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: length > 3 ? 3 : length,
    arrows: false,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
};

export const smallProductSlider4 = (length) => {
  return {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: length > 4 ? 4 : length,
    arrows: false,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
};

export const brandSlider3 = (length) => {
  return {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: length > 3 ? 3 : length,
    arrows: false,
    responsive: [
      {
        breakpoint: 504,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
};

// nftProductSlider
export const nftProductSlider3 = (length) => {
  return {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: length > 3 ? 3 : length,
    arrows: false,
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
};

/* horizontalProductSlider */
export const horizontalProductSlider5 = (length) => {
  return {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: length > 5 ? 5 : length,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 2500,
        },
      },
    ],
  };
};

/* horizontalProductSlider */
export const productSlider4 = (length) => {
  return {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: length > 4 ? 4 : length,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
};

/* bagsProduct */
export const bagsProduct = (length) => {
  return {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    arrows: true,
  };
};

/* Blog Slider */
export const blog3Slider = (length) => {
  return {
    infinite: true,
    speed: 300,
    slidesToShow: length > 3 ? 3 : length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
};

export const blog4Slider = (length) => {
  return {
    infinite: true,
    speed: 300,
    slidesToShow: length > 4 ? 4 : length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
};

/* Social Media Slider */
export const SocialMediaSlider = {
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1391,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1046,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 623,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 503,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
  ],
};

/* Social Media Slider */
export const customOptions = {
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: false,
  autoplaySpeed: 1200,
};

export const compareSlider = (length) => {
  return {
    infinite: false,
    arrows: false,
    dots: false,
    slidesToShow: length > 4 ? 4 : length,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
};

export const ProductDetailSlider = (length) => {
  return {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: length,
          vertical: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: length,
          vertical: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: length,
          vertical: false,
        },
      },
    ],
  };
};

export const toolsCategorySliderSettings = (length) => {
  return {
    infinite: false,
    arrows: false,
    dots: false,
    slidesToShow: length > 4 ? 4 : length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
};

export const categorySlider5 = (length) => {
  return {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: length > 5 ? 5 : length,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
};

export const categorySlider4 = {
  infinite: true,
  swipeToSlide: true,
  slidesToShow: 4,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 505,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export const attributeSlider = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 498,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

// =========================
export const BrandSlider = (length) => {
  return {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: length > 5 ? 5 : length,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
};

export const instagramSliderSettings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 7,
  responsive: [
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};

export const instagramSlider5 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 5000,
      },
    },
  ],
};

export const instagramSlider6 = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1380,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 5000,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 5000,
      },
    },
  ],
};

export const dogCategorySlider = (length) => {
  return {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: length > 3 ? 3 : length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 503,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
};

export const brandSlider4 = (length) => {
  return {
    dots: false,
    infinite: true,
    slidesToShow: length > 4 ? 4 : length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
};

export const brandSlider6 = (length) => {
  return {
    dots: false,
    infinite: true,
    slidesToShow: length > 6 ? 6 : length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1630,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 504,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 2,
        },
      },
    ],
  };
};

export const blogSliderSettings = {
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const homeBannerSettings = {
  scrollBar: false,
  navigation: true,
  verticalAlign: false,
  sectionPaddingTop: "50px",
  sectionPaddingBottom: "50px",
  arrowNavigation: true,
  autoplay: false,
};

export const DarkCategory = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export const jewelleryCategorySlider = (length) => {
  return {
    infinite: true,
    arrows: false,
    dots: false,
    swipeToSlide: true,
    slidesToShow: length > 5 ? 5 : length,
    margin: 24,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          draggable: true,
        },
      },
      {
        breakpoint: 562,
        settings: {
          slidesToShow: 2,
          draggable: true,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          draggable: true,
          adaptiveHeight: true,
        },
      },
    ],
  };
};

const exportedCategorySlider = categorySlider();
export const vegetableSliderSetting = (length) => {
  return {
    ...exportedCategorySlider,
    slidesToShow: length > 7 ? 7 : length,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 504,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 1430,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };
};

export const digitalCategorySlider = (length) => {
  return {
    infinite: true,
    arrows: false,
    dots: false,
    slidesToScroll: 2,
    slidesToShow: length > 5 ? 5 : length,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 2,
        },
      },
    ],
  };
};
