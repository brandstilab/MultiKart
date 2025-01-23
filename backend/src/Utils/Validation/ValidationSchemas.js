import * as Yup from "yup";

export const YupObject = (schemaObject) => Yup.object().shape(schemaObject);

export const emailSchema = Yup.string().email("Enter Valid Email").required();
export const passwordSchema = Yup.string()
  .min(8, "Too Short!")
  .max(20, "Too Long!")
  .required();
export const recaptchaSchema = Yup.string().required();
export const nameSchema = Yup.string().required();
export const descriptionSchema = Yup.string()
  .required()
  .min(10, "The description must be at least 10 characters.");
export const roleIdSchema = Yup.string().required();
export const permissionsSchema = Yup.array().min(1).required();
export const dropDownScheme = Yup.array().min(1).required();
export const passwordConfirmationSchema = Yup.string()
  .when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    ),
  })
  .required();

export const visibleTimeSchema = Yup.date().when("stock_status", {
  is: (val) => val === "coming_soon",
  then: Yup.date().required(),
});

export const externalUrlSchema = Yup.string().when("is_external", {
  is: true,
  then: Yup.string().required(
    "External URL is required when is_external is true"
  ),
  otherwise: Yup.string().notRequired(),
});
export const linkTypeSchema = Yup.string().when("link_type", {
  is: "link",
  then: Yup.string().required('Path is Required"'),
  otherwise: Yup.string().notRequired(),
});

export const watermarkImageSchema = Yup.string().when("watermark", {
  is: true,
  then: Yup.string().required(
    "Watermark Image URL is required when Watermark is true"
  ),
  otherwise: Yup.string().notRequired(),
});

export const ifSeparatorSchema = Yup.string().when("is_licensable", {
  is: true,
  then: Yup.string().required("Separator is required when Licensable is true"),
  otherwise: Yup.string().notRequired(),
});

export const ifLicenseKeySchema = Yup.string().when("is_licensable", {
  is: true,
  then: Yup.string().required(
    "License Key is required when Licensable is true"
  ),
  otherwise: Yup.string().notRequired(),
});

export const testSchema = Yup.array().when("wholesale_price_type", {
  is: (value) => (value === "fixed") || (value === "percentage") ,
  then: Yup.array().of(
    Yup.object().shape({
      min_qty: Yup.string().required("Min Qty is required"),
      max_qty: Yup.string().required("Max Qty is required"),
      value: Yup.string().required("This field is required"),
    })
  ),
  otherwise: Yup.array().notRequired(),
});

export const ifTypeSimpleSchema = Yup.string().when("type", {
  is: (val) => val == "simple",
  then: Yup.string().required(),
  otherwise: Yup.string().notRequired(),
});

export const ifTypeSimpleArraySchema = Yup.array().when("type", {
  is: (val) => val === "simple",
  then: Yup.array().min(1).required(),
  otherwise: Yup.string().notRequired(),
});
export const ifIsUnlimited = Yup.number().when("is_unlimited", {
  is: (val) => !val,
  then: Yup.number().positive().required(),
});
export const ifIsExpirable = Yup.date().when("is_expired", {
  is: (val) => val,
  then: Yup.date().required(),
});

export const ifTypeIsfree_shipping = Yup.number().when("type", {
  is: (val) => val !== "free_shipping",
  then: Yup.number().positive().required(),
});

export const ifShippingTypeIsFree = Yup.number().when("shipping_type", {
  is: (val) => val !== "free",
  then: Yup.number().positive().required(),
});

export const discountSchema = Yup.number().when("type", {
  is: (val) => val === "simple",
  then: Yup.number().min(0).max(100),
otherwise: Yup.number ().notRequired(),
});

export const requiredSchema = Yup.mixed().required();
export const StatusSchema = Yup.boolean().required();

export const phoneSchema = Yup.string().min(6).max(15).required();
// export const IntegerSchema = Yup.number().integer().min(6).max(15).required()

export const ifIsApplyAll = Yup.array().when("is_apply_all", {
  is: (val) => !val,
  then: Yup.array().min(1).required(),
});

export const videoLinkSchema = Yup.string().when("video_provider", {
  is: (val) => val,
  then: Yup.string().required(),
});

export const attributeValues = Yup.array().of(
  Yup.object().shape({
    value: Yup.string().required(),
  })
);

export const variationSchema = Yup.array().of(
  Yup.object().shape({
    name: nameSchema,
    price: nameSchema,
    sku: nameSchema,
    quantity: nameSchema,
  })
);
