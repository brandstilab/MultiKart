import { RiAccountBoxLine, RiAlertLine, RiBankCardLine, RiBankLine, RiCheckboxCircleLine, RiCloseCircleLine, RiComputerLine, RiContactsLine, RiDatabaseLine, RiEarthLine, RiFacebookCircleLine, RiFileList2Line, RiFileListLine, RiGoogleFill, RiGoogleLine, RiImageLine, RiLayoutBottom2Line, RiLayoutTop2Line, RiLineChartLine, RiMailOpenLine, RiPaypalLine, RiPercentLine, RiPhoneLockLine, RiPieChartLine, RiRadioButtonLine, RiRecordCircleLine, RiRefundLine, RiSettingsLine, RiShoppingBasketLine, RiToolsLine, RiTruckLine, RiWallet3Fill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
const header1 = "/assets/images/theme-option/header/01.jpg";
const header2 = "/assets/images/theme-option/header/02.jpg";
const header3 = "/assets/images/theme-option/header/03.jpg";
const header04 = "/assets/images/theme-option/header/05.jpg";
const header01 = "/assets/images/menu/menu_1.jpg";
const header02 = "/assets/images/theme-option/header/2.jpg";
const header03 = "/assets/images/theme-option/header/3.jpg";
const header4 = "/assets/images/theme-option/header/5.jpg";
const product01 = "/assets/images/theme-option/product/01.jpg";
const product02 = "/assets/images/theme-option/product/02.jpg";
const product03 = "/assets/images/theme-option/product/04.jpg";
const product04 = "/assets/images/theme-option/product/07.jpg";
const basicSellerStore = "/assets/images/theme-option/seller/basic-details.png";
const basicSeller = "/assets/images/theme-option/seller/basic.png";
const classicSellerStore = "/assets/images/theme-option/seller/classic-details.png";
const classicSeller = "/assets/images/theme-option/seller/classic.png";
const  blogStore1  = "/assets/images/theme-option/shop/01.jpg";
const  blog01  = "/assets/images/theme-option/shop/01.jpg";
const blog02 = "/assets/images/theme-option/shop/02.jpg";
const themeOption3 = "/assets/images/theme-option/shop/03.jpg";
const themeOption4 = "/assets/images/theme-option/shop/04.jpg";
const themeOption5 = "/assets/images/theme-option/shop/05.jpg";
const themeOption6 = "/assets/images/theme-option/shop/06.jpg";
const themeOption7 = "/assets/images/theme-option/shop/07.jpg";
const blogStore2 = "/assets/images/theme-option/shop/08.jpg";
const blogStore3 = "/assets/images/theme-option/shop/09.jpg";
const themeOption1 = "/assets/images/theme-option/shop/10.jpg";
const themeOption2 = "/assets/images/theme-option/shop/11.jpg";
const themeOption8 = "/assets/images/theme-option/shop/13.jpg";
const themeOption9 = "/assets/images/theme-option/shop/14.jpg";

export const ProductTabTitleListData = [
  {
    title: "General",
    icon: <RiSettingsLine />,
    inputs: ["product_type", "store_id", "name", "description", "short_description", "description", "tax_id"],
  },
  {
    title: "Product Images",
    icon: <RiImageLine />,
    inputs: ["product_thumbnail", "product_thumbnail_id", "size_chart_image", "size_chart_image_id", "product_galleries", "product_galleries_id", "watermark", "watermark_position", "watermark_image_id"],
  },
  {
    title: "Inventory",
    icon: <RiFileListLine />,
    inputs: ["type", "stock_status", "sku", "quantity", "price", "discount", "sale_price", "wholesale_price_type", "wholesale_prices", "external_url", "external_button_text"],
  },
  {
    title: "Variations",
    icon: <RiDatabaseLine />,
    inputs: ["type", "stock_status", "sku", "quantity", "price", "sale_price", "show_stock_quantity", "discount", "visible_time", "variations", "is_licensable", "is_licensekey_auto", "separator", "license_key"],
  },
  {
    title: "Digital Product",
    icon: <RiComputerLine />,
    inputs: ["is_licensable", "is_licensekey_auto", "separator", "license_key", "preview_audio_file_id", "preview_type", "preview_video_file_id", "preview_url"],
  },
  {
    title: "Setup",
    icon: <RiToolsLine />,
    inputs: ["is_sale_enable", "sale_starts_at", "sale_expired_at", "unit", "tags", "brand_id", "is_random_related_products", "related_products", "categories", "cross_sell_products", "cross_sell_product_id"],
  },
  {
    title: "SEO",
    icon: <RiEarthLine />,
    inputs: ["meta_title", "meta_description ", "product_meta_image"],
  },
  {
    title: "Shipping",
    icon: <RiTruckLine />,
    inputs: ["is_free_shipping", "is_return", "estimated_delivery_text", "return_policy_text", "weight"],
  },
  {
    title: "Status",
    icon: <RiCheckboxCircleLine />,
    inputs: ["is_featured", "safe_checkout", "secure_checkout", "social_share", "encourage_order", "encourage_view", "is_trending", "status"],
  },
];
export const CouponTabTitleListData = [
  {
    title: "General",
    icon: <RiSettingsLine />,
    inputs: ["code", "type", "amount", "status", "is_expired"],
  },
  {
    title: "Restriction",
    icon: <RiCloseCircleLine />,
    inputs: ["products", "exclude_products", "min_spend", "max_spend"],
  },
  {
    title: "Usage",
    icon: <RiPieChartLine />,
    inputs: ["is_unlimited", "usage_per_coupon", "usage_per_customer"],
  },
];

export const SettingTabTitleListData = [
  { title: "General", icon: <RiSettingsLine /> },
  { title: "Activation", icon: <RiRadioButtonLine /> },
  { title: "WalletPoints", icon: <RiWallet3Fill /> },
  { title: "EmailConfiguration", icon: <RiMailOpenLine /> },
  { title: "VendorCommission", icon: <RiPercentLine /> },
  { title: "SMSConfiguration", icon: <RiBankCardLine /> },
  { title: "MediaConfiguration", icon: <RiMailOpenLine /> },
  { title: "Refund", icon: <RiRefundLine /> },
  // { title: "Newsletter", icon: <RiMailUnreadLine /> },
  { title: "Delivery", icon: <TbTruckDelivery /> },
  { title: "PaymentMethods", icon: <RiBankCardLine /> },
  { title: "Analytics", icon: <RiLineChartLine /> },
  { title: "ReCaptcha", icon: <RiGoogleFill /> },
  { title: "Maintenance", icon: <RiAlertLine /> },
];

export const SettingProductBoxOptions = [
  { id: "product_box_one", name: "ProductBoxOne" },
  { id: "product_box_two", name: "ProductBoxTwo" },
  { id: "product_box_three", name: "ProductBoxThree" },
  { id: "product_box_four", name: "ProductBoxFour" },
  { id: "product_box_five", name: "ProductBoxFive" },
  { id: "product_box_six", name: "ProductBoxSix" },
  { id: "product_box_seven", name: "ProductBoxSeven" },
  { id: "product_box_eight", name: "ProductBoxEight" },
  { id: "product_box_nine", name: "ProductBoxNine" },
  { id: "product_box_ten", name: "ProductBoxTen" },
  { id: "product_box_eleven", name: "ProductBoxEleven" },
  { id: "product_box_twelve", name: "ProductBoxTwelve" },
];

export const SettingProductLayoutOptions = [
  { id: "product_images", name: "ProductImage" },
  { id: "product_thumbnail", name: "ProductThumbnail" },
  { id: "product_slider", name: "ProductSlider" },
  { id: "product_sticky", name: "ProductSticky" },
  { id: "product_tabs", name: "ProductTabs" },
  { id: "product_box_six", name: "ProductAccordion" },
  { id: "product_sidebar_left", name: "ProductLeftSidebar" },
  { id: "product_sidebar_right", name: "ProductRightSidebar" },
  { id: "product_no_sidebar", name: "ProductNoSidebar" },
  { id: "vertical_tab", name: "VerticalTab" },
  { id: "product_column_thumbnail", name: "ProductColumnThumbnail" },
  { id: "product_thumbnail_image_outside", name: "ProductThumbnailImageOutside" },
];

export const ThemeOptionTabTitleListData = [
  { title: "General", icon: <RiSettingsLine /> },
  { title: "Header", icon: <RiLayoutTop2Line /> },
  { title: "Footer", icon: <RiLayoutBottom2Line /> },
  { title: "CollectionLayout", icon: <RiShoppingBasketLine /> },
  { title: "ProductLayout", icon: <RiShoppingBasketLine /> },
  { title: "Blog", icon: <RiFileList2Line /> },
  { title: "Seller", icon: <RiFileList2Line /> },
  { title: "AboutUs", icon: <RiContactsLine /> },
  { title: "ContactPage", icon: <RiContactsLine /> },
  { title: "404ErrorPage", icon: <RiAlertLine /> },
  { title: "Popup", icon: <RiAlertLine /> },
  { title: "Seo", icon: <RiEarthLine /> },
];

export const waterMarkPosition = [
  {
    id: "top-left",
    name: "Top Left",
  },
  {
    id: "top",
    name: "Top",
  },
  {
    id: "top-right",
    name: "Top Right",
  },
  {
    id: "left",
    name: "Left",
  },
  {
    id: "center",
    name: "Center",
  },
  {
    id: "right",
    name: "Right",
  },
  {
    id: "bottom-left",
    name: "Bottom Left",
  },
  {
    id: "bottom",
    name: "Bottom",
  },
  {
    id: "bottom-right",
    name: "Bottom Right",
  },
];

export const SettingPaymentMethodTab = [
  {
    key: "PaypalProvider",
    title: "Paypal",
    inputs: ["site_title", "site_tagline", "default_timezone", "default_currency", "default_language", "min_order_amount", "front_site_langauge_direction", "admin_site_langauge_direction", "store_prefix", "copyright"],
  },
  {
    key: "StripeProvider",
    title: "Stripe",
    inputs: ["catalog_enable", "maintenance", "vendor_activation", "product_auto_approve", "wallet_enable", "coupon_enable", "stock_product_hide"],
  },
  {
    key: "CcAvenueProvider",
    title: "Ccavenue",
    inputs: ["catalog_enable", "maintenance", "vendor_activation", "product_auto_approve", "wallet_enable", "coupon_enable", "stock_product_hide"],
  },
  {
    key: "RazorpayProvider",
    title: "Razorpay",
    inputs: ["mail_mailer", "mail_host", "mail_port", "mail_username", "mail_password", "mail_encryption", "mail_from_address", "mail_from_name", "mailgun_domain", "mailgun_secret"],
  },
  {
    key: "CashOnDeliveryProvider",
    title: "COD",
    inputs: ["mail_mailer", "mail_host", "mail_port", "mail_username", "mail_password", "mail_encryption", "mail_from_address", "mail_from_name", "mailgun_domain", "mailgun_secret"],
  },
  {
    key: "MollieProvider",
    title: "Mollie",
    inputs: ["mail_mailer", "mail_host", "mail_port", "mail_username", "mail_password", "mail_encryption", "mail_from_address", "mail_from_name", "mailgun_domain", "mailgun_secret"],
  },
  {
    key: "InstaMojoProvider",
    title: "Instamojo",
    inputs: ["mail_mailer", "mail_host", "mail_port", "mail_username", "mail_password", "mail_encryption", "mail_from_address", "mail_from_name", "mailgun_domain", "mailgun_secret"],
  },
  {
    key: "PhonepeProvider",
    title: "Phonepe",
    inputs: ["mail_mailer", "mail_host", "mail_port", "mail_username", "mail_password", "mail_encryption", "mail_from_address", "mail_from_name", "mailgun_domain", "mailgun_secret"],
  },
  {
    key: "bkashProvider",
    title: "bkash",
    inputs: ["title", "status", "app_key", "password", "username", "app_secret", "sandbox_mode"],
  },
  {
    key: "paystackProvider",
    title: "paystack",
    inputs: ["title", "status", "public_key", "secret_key", "sandbox_mode"],
  },
  {
    key: "sslcommerzProvider",
    title: "sslcommerz",
    inputs: ["title", "status", "store_id", "sandbox_mode", "store_password"],
  },
  {
    key: "flutter_waveProvider",
    title: "flutter_wave",
    inputs: ["title", "status", "public_key", "secret_key", "sandbox_mod", "secret_hash"],
  },
  {
    key: "bank_transferProvider",
    title: "bank_transfer",
    inputs: ["title", "status"],
  },
];

export const settingAnalyticsTab = [
  { title: "FacebookPixel", icon: <RiFacebookCircleLine /> },
  { title: "GoogleAnalytics", icon: <RiGoogleLine /> },
];

export const HeaderOption = [
  {
    id: 1,
    title: "Header 1",
    value: "basic_header",
    dummyImg: header1,
    realImg: header01,
  },
  {
    id: 2,
    title: "Header 2",
    value: "classic_header",
    dummyImg: header2,
    realImg: header02,
  },
  {
    id: 3,
    title: "Header 3",
    value: "standard_header",
    dummyImg: header3,
    realImg: header03,
  },
  {
    id: 4,
    title: "Header 4",
    value: "minimal_header",
    dummyImg: header4,
    realImg: header04,
  },
];

export const FooterUseFulLink = [
  { id: 1, value: "home", name: "Home" },
  { id: 2, value: "collections", name: "Collections" },
  { id: 3, value: "about-us", name: "About Us" },
  { id: 4, value: "blogs", name: "Blogs" },
  { id: 5, value: "offers", name: "Offers" },
  { id: 6, value: "search", name: "Search" },
];

export const helpCenter = [
  {
    id: 1,
    name: "My Account",
    value: "account/dashboard",
  },
  {
    id: 2,
    name: "My Orders",
    value: "account/order",
  },
  {
    id: 3,
    name: "Wishlist",
    value: "wishlist",
  },
  {
    id: 4,
    name: "Compare",
    value: "compare",
  },
  {
    id: 5,
    name: "FAQ's",
    value: "faq",
  },
  {
    id: 6,
    name: "Contact Us",
    value: "contact-us",
  },
];

export const CollectionLayoutOption = [
  {
    id: 1,
    value: "collection_category_slider",
    title: "Collectioncategoryslider",
    img: themeOption1,
  },
  {
    id: 2,
    value: "collection_category_sidebar",
    title: "CollectionCategorySidebar",
    img: themeOption2,
  },
  {
    id: 3,
    value: "collection_banner",
    title: "CollectionBanner",
    img: themeOption3,
  },
  {
    id: 4,
    value: "collection_left_sidebar",
    title: "CollectionLeftSidebar",
    img: themeOption4,
  },
  {
    id: 5,
    value: "collection_list",
    title: "CollectionList",
    img: themeOption5,
  },
  {
    id: 6,
    value: "collection_right_sidebar",
    title: "CollectionRightSidebar",
    img: themeOption6,
  },
  {
    id: 7,
    value: "collection_offcanvas_filter",
    title: "CollectionTopFilter",
    img: themeOption7,
  },
  {
    id: 8,
    value: "collection_sidebar_popup",
    title: "CollectionSidebarPopup",
    img: themeOption8,
  },
  {
    id: 9,
    value: "collection_product_infinite_scroll",
    title: "CollectionProductInfiniteScroll",
    img: themeOption9,
  },
];
export const ProductLayoutOption = [
  { id: 1, value: "product_images", title: "ProductImage", img: product01 },
  {
    id: 2,
    value: "product_thumbnail",
    title: "ProductThumbnail",
    img: product02,
  },
  { id: 3, value: "product_slider", title: "ProductSlider", img: product03 },
  { id: 4, value: "product_sticky", title: "ProductSticky", img: product04 },
];
export const BlogStyleOption = [
  { value: "grid_view", title: "GridView", img: blog01 },
  { value: "list_view", title: "ListView", img: blog02 },
];
export const BlogTypeOption = [
  { value: "left_sidebar", title: "LeftSidebar", img: blogStore1 },
  { value: "right_sidebar", title: "RightSidebar", img: blogStore2 },
  { value: "no_sidebar", title: "NoSidebar", img: blogStore3 },
];

export const AccountTab = [
  { title: "ProfileSetting", icon: <RiAccountBoxLine /> },
  { title: "ChangePassword", icon: <RiPhoneLockLine /> },
];

export const PaymentDetailTab = [
  { title: "Bank", icon: <RiBankLine /> },
  { title: "Paypal", icon: <RiPaypalLine /> },
];

export const HomePage1SettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "FeaturesBanner", icon: <RiRecordCircleLine /> },
  { title: "MainContent", icon: <RiRecordCircleLine /> },
  { title: "NewsLetter", icon: <RiRecordCircleLine /> },
];

export const AppSettingsPageTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "RecentProduct", icon: <RiRecordCircleLine /> },
  { title: "CategoriesList", icon: <RiRecordCircleLine /> },
  { title: "OfferProducts", icon: <RiRecordCircleLine /> },
  { title: "Section1Products", icon: <RiRecordCircleLine /> },
  { title: "Section2Products", icon: <RiRecordCircleLine /> },
  { title: "coupons", icon: <RiRecordCircleLine /> },
  { title: "Section3Products", icon: <RiRecordCircleLine /> },
  { title: "NavigateButton", icon: <RiRecordCircleLine /> },
];
export const HomePage7SettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoriesIconList", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "coupons", icon: <RiRecordCircleLine /> },
  { title: "Slider Products", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "NewsLetter", icon: <RiRecordCircleLine /> },
];
export const cairoHomePageTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoriesIconList", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "CategoriesIconList", icon: <RiRecordCircleLine /> },
  { title: "CategoriesIconList", icon: <RiRecordCircleLine /> },
  { title: "CategoriesProducts", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "NewsLetter", icon: <RiRecordCircleLine /> },
];

export const ThemeOneHomeHorizontalTab = [{ title: "MainBanner" }, { title: "SubBanner1" }, { title: "SubBanner2" }];

export const ThemeOneMainHorizontalTab = [{ title: "LeftSidebar" }, { title: "RightContent" }];
export const ThemeSevenHorizontalTab = [{ title: "Slider" }, { title: "Banner" }];
export const ThemeOneMainHorizontalTab2 = [{ title: "LeftContent" }, { title: "RightSidebar" }];

export const ThemeSixMainHorizontalTab = [{ title: "LeftContent" }, { title: "RightSidebar" }];

export const HomePage3SetttingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoriesIconList", icon: <RiRecordCircleLine /> },
  { title: "Coupons", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "ProductBundles", icon: <RiRecordCircleLine /> },
  { title: "SliderProducts", icon: <RiRecordCircleLine /> },
  { title: "FeaturesBlogs", icon: <RiRecordCircleLine /> },
  { title: "NewsLetter", icon: <RiRecordCircleLine /> },
];

export const ThemeThreeHomeHorizontalTab = [{ title: "MainBanner" }, { title: "SubBanner1" }];

export const HomePage2SettingTab = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoriesIconList", icon: <RiRecordCircleLine /> },
  { title: "Coupons", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBanner", icon: <RiRecordCircleLine /> },
  { title: "MainContent", icon: <RiRecordCircleLine /> },
  { title: "FullWidthBanner", icon: <RiRecordCircleLine /> },
  { title: "SliderProducts", icon: <RiRecordCircleLine /> },
  { title: "NewsLetter", icon: <RiRecordCircleLine /> },
];

export const MainRightSidebarBannerTab = [{ title: "Banner1" }, { title: "Banner2" }];

export const SliderProduct9Title = [{ title: "Banner" }, { title: "Slider" }];

export const ProductWithDealTab = [{ title: "ProductList" }, { title: "DealofDays" }];

export const HomePage4SettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoriesImageList", icon: <RiRecordCircleLine /> },
  { title: "ValueBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoriesProduct", icon: <RiRecordCircleLine /> },
  { title: "TwoColumnBanner", icon: <RiRecordCircleLine /> },
  { title: "SliderProducts", icon: <RiRecordCircleLine /> },
  { title: "FullWidthBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "FeaturesBlogs", icon: <RiRecordCircleLine /> },
  { title: "NewsLetter", icon: <RiRecordCircleLine /> },
];

export const HomePage5SettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoriesImageList", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "BankWalletOffer", icon: <RiRecordCircleLine /> },
  { title: "ProductWithDeals", icon: <RiRecordCircleLine /> },
  { title: "FullWidthBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "ProductList3", icon: <RiRecordCircleLine /> },
  { title: "TwoColumnBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList4", icon: <RiRecordCircleLine /> },
  { title: "ProductList5", icon: <RiRecordCircleLine /> },
  { title: "DeliveryBanners", icon: <RiRecordCircleLine /> },
  { title: "ProductList6", icon: <RiRecordCircleLine /> },
  { title: "ProductList7", icon: <RiRecordCircleLine /> },
  { title: "FeaturesBlogs", icon: <RiRecordCircleLine /> },
];

export const HomePage8SettingTitle = [{ title: "MainContent", icon: <RiRecordCircleLine /> }];

export const HomePage6SettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "ServiceBanner", icon: <RiRecordCircleLine /> },
  { title: "MainContent", icon: <RiRecordCircleLine /> },
  { title: "FullWidthBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "NewsLetter", icon: <RiRecordCircleLine /> },
];

export const HomePage9SettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoriesIconList", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "ColumnBanner", icon: <RiRecordCircleLine /> },
  { title: "SliderProduct", icon: <RiRecordCircleLine /> },
  { title: "CouponBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "ProductList3", icon: <RiRecordCircleLine /> },
  { title: "NewsLetter", icon: <RiRecordCircleLine /> },
];

export const SellerDashboardTitles = [{ title: "About" }, { title: "Services" }, { title: "Steps" }, { title: "Selling" }];
export const AboutUsTabTitle = [{ title: "About" }, { title: "Team" }, { title: "Testimonial" }];
export const popUpTabTitle = [{ title: "NewsLetter" }, { title: "Exit" }, { title: "Auth" }];

export const SellerAboutStore = [
  { value: "basic_store", title: "BasicStore", img: basicSeller },
  { value: "classic_store", title: "ClassicStore", img: classicSeller },
];
export const SellerSetailsStore = [
  {
    value: "basic_store_details",
    title: "BasicStoreDetails",
    img: basicSellerStore,
  },
  {
    value: "classic_store_details",
    title: "ClassicStoreDetails",
    img: classicSellerStore,
  },
];

export const redirectOptions = [
  { id: "product", name: "Product" },
  { id: "collection", name: "Collection" },
  { id: "external_url", name: "External Link" },
];

export const topStoreOption = [
  {
    value: "today",
    name: "Today",
  },
  {
    value: "last_week",
    name: "Last Week",
  },
  {
    value: "last_month",
    name: "Last Month",
  },
  {
    value: "this_year",
    name: "This Year",
  },
];

export const variantStyle = [
  { id: "rectangle", name: "Rectangle" },
  { id: "circle", name: "Circle" },
  { id: "radio", name: "Radio" },
  { id: "dropdown", name: "Dropdown" },
  { id: "image", name: "Image" },
  { id: "color", name: "Color" },
];
// ===========================================================================================//

export const FashionOneSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "Banner", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia ", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];

export const FashionTwoSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "FullBanner", icon: <RiRecordCircleLine /> },
  { title: "SliderProducts", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia ", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];

export const FashionThreeSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "FullBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "BrandTab", icon: <RiRecordCircleLine /> },
];

export const FashionFourSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];

export const FashionFiveSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Categories", icon: <RiRecordCircleLine /> },
  { title: "KnockoutDeals", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];

export const FashionSixSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "ProductBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia ", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];

export const FashionSevenSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "ProductBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const FashionOneFeatureBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const FashionTwoFeatureBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }, { title: "Banner4" }];

export const FashionFourFeatureBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];
export const FashionFourProductListTitle = [{ title: "Categories" }, { title: "Products" }];

export const FashionFiveKnockoutDealsTitle = [{ title: "MainBanner" }, { title: "GridBanner1" }, { title: "GridBanner2" }, { title: "GridBanner3" }];

export const FashionSixBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }, { title: "Banner4" }, { title: "Banner 5" }, { title: "Banner 6" }];
export const FashionSixProductList2Title = [{ title: "ProductList" }, { title: "RightPanel" }];

export const FashionSevenProductList2Title = [{ title: "LeftPanel" }, { title: "ProductList" }];
export const FashionSevenBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];
export const FashionSevenCollectionBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const FurnitureOneSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "FullBanner", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const FurnitureOneOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];

export const FurnitureTwoSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoryIconList", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "GridBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "Social Media ", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];

export const FurnitureTwoFeatureBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];
export const FurnitureTwoProductListTitle = [{ title: "ProductList" }, { title: "RightContent" }];
export const FurnitureTwoProductListOfferBannersTitle = [{ title: "Banner1" }, { title: "Banner2" }];
export const FurnitureTwoBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];

export const FurnitureDarkSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "CategoryIconList", icon: <RiRecordCircleLine /> },
  { title: "Banner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const FurnitureDarkBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];

export const FurnitureDarkProductList2Title = [{ title: "LeftContent" }, { title: "ProductList" }];

export const ElectronicsOneSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoryProducts", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];

export const ElectronicsTwoSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];

export const ElectronicsTwoHomeBannerTitle = [{ title: "MainBanner" }, { title: "HomeBanner1" }, { title: "HomeBanner2" }];

export const ElectronicsThreeSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "Banner", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct1", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct2", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const ElectronicThreeBannerTitle = [{ title: "MainBanner" }, { title: "GridBanner1" }, { title: "GridBanner2" }, { title: "GridBanner3" }];
export const ElectronicThreeProductList2Title = [{ title: "Categories" }, { title: "Products" }];
export const ElectronicThreeCollectionBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const MarketplaceOneSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const MarketplaceOneOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }, { title: "Banner4" }];
export const MarketplaceOneProductList2Title = [{ title: "LeftContent" }, { title: "RightContent" }];

export const MarketplaceThreeSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoriesAndProduct", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlog", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const MarketplaceThreeOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];
export const MarketplaceCategoryProductOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];
export const MarketplaceThreeCategoriesAndProductTitle = [{ title: "LeftContent" }, { title: "RightContent" }];

export const MarketplaceTwoSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "ProductList3", icon: <RiRecordCircleLine /> },
  { title: "ProductList4", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "SliderProducts", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "ProductList5", icon: <RiRecordCircleLine /> },
  { title: "ProductList6", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner3", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const MarketplaceTwoOfferBanner2Title = [{ title: "Banner1" }, { title: "Banner2" }];
export const MarketplaceTwoOfferBanner1Title = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }, { title: "Banner4" }];

export const MarketplaceFourSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "ProductBanner1", icon: <RiRecordCircleLine /> },
  { title: "SliderProducts", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "ProductBanner2", icon: <RiRecordCircleLine /> },
  { title: "ProductBanner3", icon: <RiRecordCircleLine /> },
  { title: "ProductList3", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia", icon: <RiRecordCircleLine /> },
];
export const MarketplaceFourProductBanner1Title = [{ title: "LeftContent" }, { title: "Right Content" }];
export const MarketplaceFourProductAndBannerTitle = [{ title: "LeftContent" }, { title: "CenterContent" }, { title: "RightContent" }];

export const VegetableOneSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "FullBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];

export const VegetableTwoSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "Banner", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];

export const VegetableThreeSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "Banner", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];

export const VegetableFourSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Categories", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "ProductList3", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "ProductList4", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];

export const JwelleryOneSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Categories", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "CategoryProducts", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];

export const JwelleryTwoSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "Categories", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "Banner", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "Product&Banner", icon: <RiRecordCircleLine /> },
  { title: "Categories2", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const JwelleryTwoProductBannerTitle = [{ title: "LeftContent" }, { title: "CenterContent" }, { title: "RightContent" }];

export const JwelleryThreeSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "MainBanner", icon: <RiRecordCircleLine /> },
  { title: "Categories", icon: <RiRecordCircleLine /> },
  { title: "Product&Banner", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const JwelleryThreeOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];

export const BagHomePageSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "Category", icon: <RiRecordCircleLine /> },
  { title: "FullBanner", icon: <RiRecordCircleLine /> },
  { title: "Product&Banner", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "GridBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const BagOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];

export const MedicalHomePageSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Categories", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "ColumnBannersProduct", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const MedicalColumnBannerProductTitle = [{ title: "OfferBanner1" }, { title: "ProductList1" }, { title: "OfferBanner2" }, { title: "ProductList2" }];

export const PerfumeHomePageSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "CollectionBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const PerfumeOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }, { title: "Banner4" }];
export const PerfumeProductListTitle = [{ title: "ProductList" }, { title: "LeftContent" }];

export const ParallaxHomePageSettingTitle = [{ title: "ParallaxBanner", icon: <RiRecordCircleLine /> }];

export const FullHomePageSettingTitle = [{ title: "HomeBanner", icon: <RiRecordCircleLine /> }];

export const PetsHomePageSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "FullBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
];

export const YogaHomePageSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "ProductList3", icon: <RiRecordCircleLine /> },
  { title: "ProductBanner", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const YogaOfferBanner1Title = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];
export const YogaOfferBanner2Title = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];
export const YogaProductBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const ChristmasHomePageSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct1", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner3", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct2", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const ChristmasOfferBanner1Title = [{ title: "Banner1" }, { title: "Banner2" }];

export const BicycleHomePageSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "Banner", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];

export const WatchHomePageSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "Categories", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia", icon: <RiRecordCircleLine /> },
];
export const WatchOfferBanner2Title = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];

export const NurseryHomePageSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];

export const VideoHomePageSettingTitle = [{ title: "Video", icon: <RiRecordCircleLine /> }];

export const KidsHomePageSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "FullBanner", icon: <RiRecordCircleLine /> },
  { title: "SliderProducts", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const KidsHomePageOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const BooksHomePageSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Categories1", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "Categories2", icon: <RiRecordCircleLine /> },
  { title: "SliderProducts", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const BooksHomePageOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const GameHomePageSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "SliderProducts", icon: <RiRecordCircleLine /> },
  { title: "FullBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const GameHomePageOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const BeautyHomePageSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "AboutUs", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "ProductVideo", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia ", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];

export const MarijuanaHomePageSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "DetailsSection", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const MarijuanaOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const GymHomePageSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "ParallaxProduct", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];

export const ToolsHomePageSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "Categories", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const ToolsCategoryProductTitle = [{ title: "LeftContent" }, { title: "RightContent" }];

export const ShoesHomePageSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Categories1", icon: <RiRecordCircleLine /> },
  { title: "AboutBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "Categories2", icon: <RiRecordCircleLine /> },
  { title: "SliderProducts", icon: <RiRecordCircleLine /> },
  { title: "Attribute", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "Services ", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const ShoesAboutBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const GogglesHomePageSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "FullBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const GogglesOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];

export const FlowerSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia ", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const FlowerOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const VideoSliderSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "CollectionBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "FullBanner", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "Services", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia ", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const VideoSliderCollectionBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];

export const GradientSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Categories1", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "Coupons", icon: <RiRecordCircleLine /> },
  { title: "ParallaxBanner", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "SocialMedia", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const GradientParallaxBannerTitle = [{ title: "ParallaxBanner1" }, { title: "ParallaxBanner2" }];

export const SurfingSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Categories1", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner", icon: <RiRecordCircleLine /> },
  { title: "ColumnBannersProduct", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
  { title: "Brand", icon: <RiRecordCircleLine /> },
];
export const SurfingOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const DigitalDownloadSettingTitle = [
  { title: "HomeBanner", icon: <RiRecordCircleLine /> },
  { title: "Category", icon: <RiRecordCircleLine /> },
  { title: "ProductList", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct", icon: <RiRecordCircleLine /> },
  { title: "FeaturedBlogs", icon: <RiRecordCircleLine /> },
];

export const DigitalDownloadProduct2Title = [{ title: "LeftContent" }, { title: "ProductsList" }];
