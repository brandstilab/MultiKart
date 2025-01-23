import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import Btn from "../../Elements/Buttons/Btn";
import LeftSideModal from "./LeftSideModal";
import VariationModalQty from "./VariationModalQty";
import VariationAddToCart from "./VariationAddToCart";
import RightVariationModal from "./RightVariationModal";
import ProductAttribute from "./ProductAttribute/ProductAttribute";

const ProductVariationModal = ({ productData, isLoading, setFieldValue, setModal, mutate }) => {
  const [cloneVariation, setCloneVariation] = useState({ product: productData, attributeValues: [], productQty: 1, selectedVariation: "", variantIds: [], totalPrice: 0 });
  const [selectedOptions, setSelectedOptions] = useState([]);
  const checkVariantAvailability = (productData) => {
    productData?.variations?.forEach((variation) => {
      variation?.attribute_values?.forEach((attribute_value) => {
        if (cloneVariation.attributeValues?.indexOf(attribute_value?.id) === -1) {
          setCloneVariation((prev) => {
            return {
              ...prev,
              attributeValues: Array.from(new Set([...prev.attributeValues, attribute_value?.id])),
            };
          });
        }
      });
    });
  };
  const checkStockAvailable = () => {
    if (cloneVariation?.selectedVariation) {
      setCloneVariation((prevState) => {
        const tempSelectedVariation = { ...prevState.selectedVariation };
        tempSelectedVariation.stock_status = tempSelectedVariation.quantity < prevState.productQty ? "out_of_stock" : "in_stock";
        return {
          ...prevState,
          selectedVariation: tempSelectedVariation,
        };
      });
    }
  };
  const wholesalePriceCal = () => {
    let wholesale = cloneVariation.product.wholesales.find((value) => value.min_qty <= cloneVariation.productQty && value.max_qty >= cloneVariation.productQty) || null;

    if (wholesale && cloneVariation?.product.wholesale_price_type == "fixed") {
      setCloneVariation((prev) => {
        return { ...prev, totalPrice: prev?.productQty * wholesale.value };
      });
    } else if (wholesale && cloneVariation?.product.wholesale_price_type == "percentage") {
      setCloneVariation((prev) => {
        return { ...prev, totalPrice: prev?.productQty * (prev?.selectedVariation ? prev?.selectedVariation.sale_price : prev?.product.sale_price) };
      });
      setCloneVariation((prev) => {
        return { ...prev, totalPrice: prev?.totalPrice - prev?.totalPrice * (wholesale.value / 100) };
      });
    } else {
      setCloneVariation((prev) => {
        return { ...prev, totalPrice: prev?.productQty * (prev?.selectedVariation ? prev?.selectedVariation.sale_price : prev?.product.sale_price) };
      });
    }
  };
  const setVariant = (variations, value) => {
    let tempSelected = selectedOptions;
    const index = selectedOptions?.findIndex((item) => Number(item.attribute_id) === Number(value?.attribute_id));
    if (index === -1) {
      tempSelected.push({ id: Number(value?.id), attribute_id: Number(value?.attribute_id) });
      setSelectedOptions(tempSelected);
    } else {
      tempSelected[index].id = value?.id;
      setSelectedOptions(tempSelected);
    }

    variations?.forEach((variation) => {
      let attrValues = variation?.attribute_values?.map((attribute_value) => attribute_value?.id);
      let tempVariantIds = tempSelected?.map((variants) => variants?.id);
      setCloneVariation((prev) => {
        return { ...prev, variantIds: tempVariantIds };
      });
      let doValuesMatch = attrValues.length === tempSelected.length && attrValues.every((value) => tempVariantIds.includes(value));
      if (doValuesMatch) {
        setCloneVariation((prev) => {
          return { ...prev, selectedVariation: variation };
        });
      }
    });
  };
  useEffect(() => {
    wholesalePriceCal();
    checkVariantAvailability(productData);
  }, []);
  useEffect(() => {
    wholesalePriceCal();
  }, [cloneVariation.productQty]);
  return (
    <Row className="g-sm-4 g-2">
      <LeftSideModal cloneVariation={cloneVariation} productData={productData} />
      <Col lg="6">
        <div className="right-sidebar-modal">
          <RightVariationModal cloneVariation={cloneVariation} />
          <ProductAttribute productState={cloneVariation} setProductState={setCloneVariation} />
          <div className="modal-bottom-cart">
            <VariationModalQty wholesalePriceCal={wholesalePriceCal} cloneVariation={cloneVariation} setCloneVariation={setCloneVariation} checkStockAvailable={checkStockAvailable} />
            <VariationAddToCart cloneVariation={cloneVariation} setFieldValue={setFieldValue} mutate={mutate} setModal={setModal} isLoading={isLoading} />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ProductVariationModal;
