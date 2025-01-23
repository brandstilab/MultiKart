"use client";
import ProductIdsContext from "@/Context/ProductIdsContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Loader from "@/Layout/Loader";
import request from "@/Utils/AxiosUtils";
import { ProductAPI } from "@/Utils/AxiosUtils/API";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useMemo, useState } from "react";
import StickyCheckout from "./Common/StickyCheckout";
import Product4Image from "./Product4Image";
import ProductAccordion from "./ProductAccordion";
import ProductColumn from "./ProductColumn";
import ProductDigital from "./ProductDigital";
import ProductThumbnailImage from "./ProductImageOutside";
import ProductSidebarLayout from "./ProductSidebarLayout";
import ProductSlider from "./ProductSlider";
import ProductSticky from "./ProductSticky";
import ProductThumbnail from "./ProductThumbnail";
import ProductVerticalTab from "./ProductVerticalTab";

const ProductDetailContent = ({ params }) => {
  const router = useRouter();
  const { themeOption } = useContext(ThemeOptionContext);
  const { setGetProductIds, isLoading: productLoader } = useContext(ProductIdsContext);
  const searchParams = useSearchParams();
  const queryProductLayout = searchParams.get("layout");
  // Getting Product Layout
  const isProductLayout = useMemo(() => {
    return queryProductLayout ? queryProductLayout : themeOption?.product?.product_layout ?? "product_thumbnail";
  }, [queryProductLayout, themeOption]);

  const [productState, setProductState] = useState({ product: [], attributeValues: [], productQty: 1, selectedVariation: "", variantIds: [], statusIds: [] });

  // Calling Product API on slug
  const { data: ProductData, isLoading, refetch, error } = useQuery([params], () => request({ url: `${ProductAPI}/${params}` }, router), { enabled: false, refetchOnWindowFocus: false, select: (res) => res?.data });
  // Calling Product API when params is there
  useEffect(() => {
    params && refetch();
  }, [params]);

  // Setting Product API Data on state Variable and getting ids from cross_sell_products,related_products;
  useEffect(() => {
    if (ProductData) {
      (ProductData?.cross_sell_products?.length > 0 || ProductData?.related_products?.length > 0) && setGetProductIds({ ids: Array.from(new Set([...ProductData?.cross_sell_products, ...ProductData?.related_products])).join(",") });
      setProductState({ ...productState, product: ProductData });
    }
  }, [isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      const button = document.querySelector(".scroll-button");
      if (button) {
        const buttonRect = button.getBoundingClientRect();
        if (buttonRect.bottom < window.innerHeight && buttonRect.bottom < 0) {
          document.body.classList.add("stickyCart");
        } else {
          document.body.classList.remove("stickyCart");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList?.remove("stickyCart");
    };
  }, []);

  if (isLoading) return <Loader />;

  const showProductLayout = {
    product_thumbnail: <ProductThumbnail productState={productState} setProductState={setProductState} />,
    product_images: <Product4Image productState={productState} setProductState={setProductState} />,
    product_sticky: <ProductSticky productState={productState} setProductState={setProductState} />,
    product_slider: <ProductSlider productState={productState} setProductState={setProductState} />,
    product_digital: <ProductDigital productState={productState} setProductState={setProductState} />,
    product_accordion: <ProductAccordion productState={productState} setProductState={setProductState} />,
    product_no_sidebar: <ProductThumbnail productState={productState} setProductState={setProductState} />,
    vertical_tab: <ProductVerticalTab productState={productState} setProductState={setProductState} />,
    product_thumbnail_left_image: <ProductThumbnailImage direction="left" productState={productState} setProductState={setProductState} />,
    product_thumbnail_right_image: <ProductThumbnailImage direction="right" productState={productState} setProductState={setProductState} />,
    product_thumbnail_image_outside: <ProductThumbnailImage productState={productState} setProductState={setProductState} />,
    product_sidebar_left: <ProductSidebarLayout productState={productState} setProductState={setProductState} direction="left" />,
    product_sidebar_right: <ProductSidebarLayout productState={productState} setProductState={setProductState} direction="right" />,
    product_column_thumbnail: <ProductColumn productState={productState} setProductState={setProductState} direction="bottom" />,
  };
  return (
    <>
      {<Breadcrumbs title={params} subNavigation={[{ name: "Product" }, { name: params }]} />}
      {showProductLayout[isProductLayout]}
      {ProductData && <StickyCheckout ProductData={ProductData} isLoading={isLoading} />}
    </>
  );
};

export default ProductDetailContent;
