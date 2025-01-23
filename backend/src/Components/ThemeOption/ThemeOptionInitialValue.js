export const ThemeOptionInitialValue = (NewSettingsData) => {
  let obj = {};
  NewSettingsData?.about_us?.about?.futures?.length > 0 &&
    NewSettingsData?.about_us?.about?.futures?.forEach((elem, index) => {
      elem.icon ? (obj[`futureIcons${index}`] = { original_url: elem.icon }) : "";
      return obj;
    });
  let obj1 = {};
  NewSettingsData?.about_us?.clients?.content?.length > 0 &&
    NewSettingsData?.about_us?.clients?.content?.forEach((elem, index) => {
      elem.icon ? (obj1[`clientContentImage${index}`] = { original_url: elem.icon }) : "";
      return obj1;
    });
  let obj2 = {};
  NewSettingsData?.about_us?.team?.members?.length > 0 &&
    NewSettingsData?.about_us?.team?.members?.forEach((elem, index) => {
      elem.profile_image_url ? (obj2[`teamContentImage${index}`] = { original_url: elem.profile_image_url }) : "";
      return obj2;
    });
  let obj3 = {};
  NewSettingsData?.about_us?.testimonial?.reviews?.length > 0 &&
    NewSettingsData?.about_us?.testimonial?.reviews?.forEach((elem, index) => {
      elem.profile_image_url ? (obj3[`testimonialReviewImage${index}`] = { original_url: elem.profile_image_url }) : "";
      return obj3;
    });
  return {
    options: NewSettingsData || {},

    authImage: NewSettingsData?.popup?.auth?.image_url ? { original_url: NewSettingsData?.popup?.auth?.image_url } : "",

    paymentOptionImage: NewSettingsData?.footer?.payment_option_image_url ? { original_url: NewSettingsData?.footer?.payment_option_image_url } : "",

    footerImage: NewSettingsData?.footer?.bg_image ? { original_url: NewSettingsData?.product?.footer?.bg_image } : "",
    // Product Layout

    banner_image_url: NewSettingsData?.product?.banner_image_url ? { original_url: NewSettingsData?.product?.banner_image_url } : "",

    safe_checkout_image: NewSettingsData?.product?.safe_checkout_image ? { original_url: NewSettingsData?.product?.safe_checkout_image } : "",

    secure_checkout_image: NewSettingsData?.product?.secure_checkout_image ? { original_url: NewSettingsData?.product?.secure_checkout_image } : "",

    // Collection Layout
    collection_banner_image: NewSettingsData?.collection?.collection_banner_image_url ? { original_url: NewSettingsData?.collection?.collection_banner_image_url } : "",
    FooterSubscribeImage: NewSettingsData?.footer?.bg_image ? { original_url: NewSettingsData?.footer?.bg_image } : "",

    // Seller
    aboutSellerImage: NewSettingsData?.seller?.about?.image_url ? { original_url: NewSettingsData?.seller?.about?.image_url } : "",
    serviceImage1: NewSettingsData?.seller?.services?.service_1?.image_url ? { original_url: NewSettingsData?.seller?.services?.service_1?.image_url } : "",
    serviceImage2: NewSettingsData?.seller?.services?.service_2?.image_url ? { original_url: NewSettingsData?.seller?.services?.service_2?.image_url } : "",
    serviceImage3: NewSettingsData?.seller?.services?.service_3?.image_url ? { original_url: NewSettingsData?.seller?.services?.service_3?.image_url } : "",
    serviceImage4: NewSettingsData?.seller?.services?.service_4?.image_url ? { original_url: NewSettingsData?.seller?.services?.service_4?.image_url } : "",
    //popup
    newsLetterImage: NewSettingsData?.popup?.news_letter?.image_url ? { original_url: NewSettingsData?.popup?.news_letter?.image_url } : "",
    exitImage: NewSettingsData?.popup?.exit?.image_url ? { original_url: NewSettingsData?.popup?.exit?.image_url } : "",

    // About Us
    content_left_image_url: NewSettingsData?.about_us?.about?.content_left_image_url ? { original_url: NewSettingsData?.about_us?.about?.content_left_image_url } : "",
    content_right_image_url: NewSettingsData?.about_us?.about?.content_right_image_url ? { original_url: NewSettingsData?.about_us?.about?.content_right_image_url } : "",
    aboutUsBlog: NewSettingsData?.about_us?.blog?.blog_ids.length > 0 ? NewSettingsData?.about_us?.blog?.blog_ids : [],
    ...obj,
    ...obj1,
    ...obj2,
    ...obj3,

    // Contact Us
    contactUsImage: NewSettingsData?.contact_us?.imageUrl ? { original_url: NewSettingsData?.contact_us?.imageUrl } : "",

    // Header
    headerCategories: NewSettingsData?.header?.category_ids || [],

    // Footer
    footer_categories: NewSettingsData?.footer?.footer_categories ? NewSettingsData?.footer?.footer_categories : [],
    useful_link: NewSettingsData?.footer?.useful_link ? NewSettingsData?.footer?.useful_link : [],
    help_center: NewSettingsData?.footer?.help_center ? NewSettingsData?.footer?.help_center : [],
    today_deals: NewSettingsData?.header?.today_deals ? NewSettingsData?.header?.today_deals : [],
  };
};
