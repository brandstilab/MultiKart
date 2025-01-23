import CartContext from "@/Context/CartContext";
import Btn from "@/Elements/Buttons/Btn";
import { ImagePath } from "@/Utils/Constants";
import Image from "next/image";
import { Fragment, useContext, useEffect, useState } from "react";
import { Input, Label } from "reactstrap";

const ProductBoxVariantAttribute = ({ productState, setProductState, productBox11, showVariableType }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [soldOutAttributesIds, setSoldOutAttributesIds] = useState([]);
  const { cartProducts } = useContext(CartContext);
  const [cartItem, setCartItem] = useState();
  const [breakLoop, setBreakLoop] = useState(false);
  const [initial, setInitial] = useState();

  const checkVariantAvailability = (productObj) => {
    productObj?.variations?.forEach((variation) => {
      if (!variation.status) {
        variation?.attribute_values?.forEach((attribute_value) => {
          if (productState?.statusIds?.indexOf(attribute_value?.id) === -1) {
            setProductState((prev) => ({
              ...prev,
              statusIds: Array.from(new Set([...prev.statusIds, attribute_value?.id])),
            }));
          }
        });
      }
      variation?.attribute_values?.filter((attribute_value) => {
        if (productState.attributeValues?.indexOf(attribute_value?.id) === -1) {
          setProductState((prev) => ({
            ...prev,
            attributeValues: Array.from(new Set([...prev.attributeValues, attribute_value?.id])),
          }));
        }
      });
    });
    if (cartItem?.variation) {
      cartItem?.variation?.attribute_values?.filter((attribute_val) => {
        setVariant(productObj?.variations, attribute_val);
      });
    } else if (productObj?.attributes) {
      // Set First Variant Default
      for (const attribute of productObj?.attributes) {
        if (productState.attributeValues?.length && attribute?.attribute_values?.length) {
          for (const value of attribute?.attribute_values) {
            if (productState?.attributeValues?.includes(value?.id)) {
              setVariant(productObj?.variations, value);
              if (breakLoop) {
                break; // Break out of the inner loop after setting the first variant
              }
            }
          }
        }
      }
    }

    // Set Variation Image
    productObj?.variations?.forEach((variation) => {
      let attrValues = variation?.attribute_values?.map((attribute_value) => attribute_value?.id);
      productObj?.attributes.filter((attribute) => {
        if (attribute.style === "image") {
          attribute.attribute_values.filter((attribute_value) => {
            if (productState?.attributeValues?.includes(attribute_value.id)) {
              if (attrValues.includes(attribute_value.id)) {
                attribute_value.variation_image = variation.variation_image;
              }
            }
          });
        }
      });
    });
  };

  const checkStockAvailable = () => {
    if (productState?.selectedVariation) {
      setProductState((prevState) => {
        const tempSelectedVariation = { ...prevState.selectedVariation };
        tempSelectedVariation.stock_status = tempSelectedVariation.quantity < prevState.productQty ? "out_of_stock" : "in_stock";
        return {
          ...prevState,
          selectedVariation: tempSelectedVariation,
        };
      });
    } else {
      setProductState((prevState) => {
        const tempProduct = { ...prevState.product };
        tempProduct.stock_status = tempProduct.quantity < prevState.productQty ? "out_of_stock" : "in_stock";
        return {
          ...prevState,
          product: tempProduct,
        };
      });
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      checkVariantAvailability(productState?.product);
    }, 0);
    return () => clearTimeout(timer);
  }, [productState?.attributeValues, cartItem, selectedOptions]);

  useEffect(() => {
    productState?.product && setCartItem(cartProducts?.find((elem) => elem?.product?.id === productState?.product?.id));
  }, [cartProducts, productState]);

  const setVariant = (variations, value, action = "click") => {
    let tempVal;
    if (value?.id != initial?.id && action == "hover") {
      tempVal = value;
    } else if (action == "click") {
      setInitial(value);
      tempVal = value;
    } else {
      tempVal = initial;
    }
    let tempSelected = selectedOptions;
    let tempSoldOutAttributesIds = [];
    setSoldOutAttributesIds((prev) => tempSoldOutAttributesIds);
    const index = tempSelected?.findIndex((item) => Number(item.attribute_id) === Number(tempVal?.attribute_id));
    if (index === -1) {
      tempSelected.push({ id: Number(tempVal?.id), attribute_id: Number(tempVal?.attribute_id) });
      setSelectedOptions(tempSelected);
    } else {
      tempSelected[index].id = tempVal?.id;
      setSelectedOptions(tempSelected);
    }

    variations?.forEach((variation) => {
      let attrValues = variation?.attribute_values?.map((attribute_value) => attribute_value?.id);
      let tempVariantIds = tempSelected?.map((variants) => variants?.id);
      setProductState((prev) => ({
        ...prev,
        variantIds: tempVariantIds,
      }));
      let doValuesMatch = attrValues.length === tempSelected.length && attrValues.every((value) => tempVariantIds.includes(value));
      if (doValuesMatch) {
        setProductState((prev) => ({
          ...prev,
          selectedVariation: variation,
          variation_id: variation?.id,
          variation: variation,
        }));
        checkStockAvailable();
      }

      if (variation?.stock_status === "out_of_stock") {
        variation?.attribute_values.filter((attr_value) => {
          if (attrValues.some((value) => tempVariantIds.includes(value))) {
            if (attrValues.every((value) => tempVariantIds.includes(value))) {
              tempSoldOutAttributesIds.push(attr_value.id);
              setSoldOutAttributesIds((prev) => [...tempSoldOutAttributesIds]);
            } else if (!tempVariantIds.includes(attr_value.id)) {
              tempSoldOutAttributesIds.push(attr_value.id);
              setSoldOutAttributesIds((prev) => [...tempSoldOutAttributesIds]);
            }
          } else if (attrValues.length === 1 && attrValues.includes(attr_value.id)) {
            tempSoldOutAttributesIds.push(attr_value.id);
            setSoldOutAttributesIds((prev) => [...tempSoldOutAttributesIds]);
          }
        });
      }
    });

    // Set Attribute Value
    productState?.product?.attributes?.filter((attribute) => {
      attribute?.attribute_values?.filter((a_value) => {
        if (a_value.id === tempVal?.id) {
          attribute.selected_value = a_value.value;
        }
      });
    });

    if (productState?.selectedVariation && productState?.selectedVariation?.status && productState?.selectedVariation.stock_status === "in_stock") {
      setBreakLoop(true);
    } else {
      setBreakLoop(false);
    }
  };

  return (
    <>
      {productState?.product?.attributes?.map((elem, i) => (
        <Fragment key={i}>
          {showVariableType.includes(elem.style) && elem.style === "radio" ? (
            <div key={i} className="d-flex digital-price">
              {elem?.attribute_values.map((value, index) => (
                <Fragment key={index}>
                  {productState?.attributeValues?.includes(value?.id) ? (
                    <div className={`form-check ${productState?.statusIds?.includes(value?.id) || soldOutAttributesIds.includes(value.id) ? "disabled" : ""}`}>
                      <Input type="radio" className="form-check-input" id={`radio-${i}-${index}`} name={`radio-group-${i}`} value={index} checked={productState?.variantIds?.includes(value?.id) || !soldOutAttributesIds.includes(value.id)} disabled={productState?.statusIds?.includes(value?.id) || soldOutAttributesIds.includes(value.id)} onChange={(e) => setVariant(productState?.product?.variations, elem?.attribute_values[e.target.value])} height={65} width={65} />
                      <Label htmlFor={`radio-${i}-${index}`} className="form-check-label">
                        {value?.value}
                      </Label>
                    </div>
                  ) : null}
                </Fragment>
              ))}
            </div>
          ) : showVariableType.includes(elem.style) && elem?.style == "color" ? (
            <ul className={`circle general-variant ${elem?.style}`}>
              {elem?.attribute_values?.map((value, index) => (
                <Fragment key={index}>{productState?.attributeValues?.includes(value?.id) ? <li placement="top" style={{ backgroundColor: value?.hex_color }} onClick={() => setVariant(productState?.product?.variations, value, "click")} onMouseOver={() => setVariant(productState?.product?.variations, value, "hover")} onMouseOut={() => setVariant(productState?.product?.variations, value, "out")} className={`${soldOutAttributesIds.includes(value.id) ? "disabled" : ""} ${productState?.variantIds?.includes(value.id) ? "active" : ""}`}></li> : null}</Fragment>
              ))}
            </ul>
          ) : (showVariableType.includes(elem?.style) && elem?.style == "dropdown") || productBox11 ? (
            <select id={`input-state-${i}`} className="form-control form-select " onChange={(e) => setVariant(productState?.product?.variations, elem?.attribute_values[e.target.value])}>
              <option selected disabled>
                Choose {elem?.name}
              </option>
              {elem?.attribute_values?.map((value, index) => (
                <Fragment key={index}>
                  {productState?.attributeValues?.includes(value?.id) ? (
                    <option selected={productState?.variantIds?.includes(value.id)} value={index} disabled={productState?.statusIds?.includes(value?.id) || soldOutAttributesIds.includes(value.id)}>
                      {value?.value}
                    </option>
                  ) : null}
                </Fragment>
              ))}
            </select>
          ) : showVariableType.includes(elem?.style) && elem?.style == "image_price" ? (
            <>
              {elem?.attribute_values?.map((item, index) => (
                <Fragment key={index}>
                  {productState?.attributeValues?.includes(item?.id) && (
                    <li className={`${!productState?.statusIds?.includes(item.id) && productState?.variantIds?.includes(item?.id) && !soldOutAttributesIds.includes(item?.id) ? "active" : ""} ${soldOutAttributesIds?.includes(item.id) || productState?.statusIds?.includes(item.id) ? "disabled" : ""}`} title={item?.value}>
                      {item?.sale_price || "$"}
                      <a>
                        <button>
                          <Image id={item?.value} src={item?.variation_image ? item?.variation_image?.original_url : `${ImagePath}/placeholder/product.png`} onClick={() => setVariant(productState?.product?.variations, item)} height={65} width={65} alt="Product" />{" "}
                        </button>
                      </a>
                    </li>
                  )}
                </Fragment>
              ))}
            </>
          ) : (
            showVariableType.includes(elem.style) && (
              <ul className={`general-variant ${elem?.style}`}>
                {elem?.attribute_values?.map((item, index) => (
                  <Fragment key={index}>
                    {productState?.attributeValues?.includes(item?.id) && (
                      <li className={`${!productState?.statusIds?.includes(item.id) && productState?.variantIds?.includes(item?.id) && !soldOutAttributesIds.includes(item?.id) ? "active" : ""} ${soldOutAttributesIds?.includes(item.id) || productState?.statusIds?.includes(item.id) ? "disabled" : ""}`} title={item?.value}>
                        {elem?.style == "image" ? (
                          <a>
                            <img id={item?.value} src={item?.variation_image ? item?.variation_image?.original_url : `${ImagePath}/placeholder/product.png`} onClick={() => setVariant(productState?.product?.variations, item, "click")} onMouseOver={() => setVariant(productState?.product?.variations, item, "hover")} onMouseOut={() => setVariant(productState?.product?.variations, item, "out")} loading="lazy" alt="Product" />{" "}
                          </a>
                        ) : (
                          <Btn color="transparent" id={item?.value} onClick={() => setVariant(productState?.product?.variations, item, "click")} onMouseOver={() => setVariant(productState?.product?.variations, item, "hover")} onMouseOut={() => setVariant(productState?.product?.variations, item, "out")}>
                            <div>{item?.value}</div>
                          </Btn>
                        )}
                      </li>
                    )}
                  </Fragment>
                ))}
              </ul>
            )
          )}
        </Fragment>
      ))}
    </>
  );
};

export default ProductBoxVariantAttribute;
