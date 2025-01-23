import ProductBox11 from "@/Components/Widgets/ProductBox/ProductBox11";
import ProductBox2 from "@/Components/Widgets/ProductBox/ProductBox2";
import React, { useEffect, useState } from "react";

const ListProductBox = ({ product, productBox, isOpen }) => {
  const [productState, setProductState] = useState({ product: product, attributeValues: [], productQty: 1, selectedVariation: "", variantIds: [] });

  useEffect(() => {
    if (product) {
      setProductState({ ...productState, product: product });
    }
  }, [product, isOpen]);

  return <>{productBox == 2 ? <ProductBox2 productState={productState} setProductState={setProductState} /> : <ProductBox11 productState={productState} setProductState={setProductState} />}</>;
};

export default ListProductBox;
