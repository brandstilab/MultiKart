import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import ProductBox1 from "./ProductBox1";
import ProductBox10 from "./ProductBox10";
import ProductBox11 from "./ProductBox11";
import ProductBox12 from "./ProductBox12";
import ProductBox2 from "./ProductBox2";
import ProductBox3 from "./ProductBox3";
import ProductBox4 from "./ProductBox4";
import ProductBox5 from "./ProductBox5";
import ProductBox6 from "./ProductBox6";
import ProductBox7 from "./ProductBox7";
import ProductBox8 from "./ProductBox8";
import ProductBox9 from "./ProductBox9";
import ProductBoxHorizontal from "./ProductBoxHorizontal";

const ProductBox = ({ style = "vertical", product, boxStyle }) => {
  const path = useSearchParams();
  const theme = path.get("theme");
  const { themeOption, setVariant, variant } = useContext(ThemeOptionContext);
  const [productState, setProductState] = useState({ product: product, attributeValues: [], productQty: 1, selectedVariation: "", variantIds: [] });

  useEffect(() => {
    if (product) {
      setProductState({ ...productState, product: product });
    }
  }, [product]);

  useEffect(() => {
    if (theme == "fashion_one" || theme == "fashion_two" || theme == "fashion_three" || theme == "furniture_two" || theme == "watch" || theme == "christmas") {
      setVariant("product_box_one");
    } else if (theme == "fashion_four" || theme == "fashion_seven" || theme == "tools") {
      setVariant("product_box_two");
    } else if (theme == "bicycle" || theme == "surfboard") {
      setVariant("product_box_three");
    } else if (theme == "medical" || theme == "fashion_six") {
      setVariant("product_box_four");
    } else if (theme == "perfume" || theme == "furniture_dark" || theme == "furniture_one" || theme == "shoes") {
      setVariant("product_box_five");
    } else if (theme == "bag" || theme == "electronics_one" || theme == "electronics_two" || theme == "electronics_three" || theme == "fashion_five") {
      setVariant("product_box_six");
    } else if (theme == "marketplace_one" || theme == "marketplace_two" || theme == "marketplace_three" || theme == "marketplace_four") {
      setVariant("product_box_seven");
    } else if (theme == "gym" || theme == "vegetables_one" || theme == "vegetables_two" || theme == "vegetables_four") {
      setVariant("product_box_eight");
    } else if (theme == "marijuana" || theme == "jewellery_three" || theme == "goggles") {
      setVariant("product_box_nine");
    } else if (theme == "digital_download") {
      setVariant("product_box_ten");
    } else if ("") {
      setVariant("product_box_eleven");
    } else if (theme == "shoes") {
      setVariant("product_box_fourteen");
    } else if (theme == "jewellery_one" || theme == "jewellery_two") {
      setVariant("product_box_twelve");
    } else {
      setVariant(themeOption?.product ? themeOption?.product?.product_box_variant : "product_box_one");
    }
  }, [theme]);

  return <>{style == "vertical" && variant == "product_box_one" ? <ProductBox1 productState={productState} setProductState={setProductState} /> : style == "vertical" && variant == "product_box_two" ? <ProductBox2 productState={productState} setProductState={setProductState} /> : style == "vertical" && variant == "product_box_three" ? <ProductBox3 productState={productState} setProductState={setProductState} /> : style == "vertical" && variant == "product_box_four" ? <ProductBox4 productState={productState} /> : style == "vertical" && variant == "product_box_five" ? <ProductBox5 productState={productState} setProductState={setProductState} /> : style == "vertical" && variant == "product_box_six" ? <ProductBox6 productState={productState} /> : style == "vertical" && variant == "product_box_seven" ? <ProductBox7 productState={productState} /> : style == "vertical" && variant == "product_box_eight" ? <ProductBox8 productState={productState} /> : style == "vertical" && variant == "product_box_nine" ? <ProductBox9 productState={productState} setProductState={setProductState} /> : style == "vertical" && variant == "product_box_ten" ? <ProductBox10 productState={productState} /> : style == "vertical" && variant == "product_box_eleven" ? <ProductBox11 productState={productState} setProductState={setProductState} /> : style == "vertical" && variant == "product_box_twelve" ? <ProductBox12 setProductState={setProductState} productState={productState} /> : style == "horizontal" && <ProductBoxHorizontal productState={productState} style={boxStyle} />}</>;
};

export default ProductBox;
