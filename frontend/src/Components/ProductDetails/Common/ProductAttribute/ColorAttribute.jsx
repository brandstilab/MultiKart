import React, { Fragment, useState } from "react";
import ColorTooltip from "./ColorTooltip";

const ColorAttribute = ({ elem, soldOutAttributesIds, productState, setVariant, noHoverEffect }) => {
  const [tooltipOpen, setTooltipOpen] = useState("");
  const toggle = (target) => {
    setTooltipOpen((prevState) => ({ [target]: !prevState[target] }));
  };

  return (
    <ul className={`quantity-variant ${elem?.style}`}>
      {elem?.attribute_values?.map((value, index) => (
        <Fragment key={index}>
          {productState?.attributeValues?.includes(value?.id) ? (
            <>
              {noHoverEffect ? (
                <li onClick={() => setVariant(productState?.product?.variations, value, "click")} className={`bg-light ${soldOutAttributesIds.includes(value.id) ? "disabled" : ""} ${productState?.variantIds?.includes(value.id) ? "active" : ""}`}>
                  <span id={value?.value} style={{ backgroundColor: value?.hex_color }} />
                  <ColorTooltip target={value?.value} title={value?.value} toggle={() => toggle(value?.value)} tooltipOpen={tooltipOpen[value?.value] || false} />
                </li>
              ) : (
                <li onClick={() => setVariant(productState?.product?.variations, value, "click")} onMouseOver={() => setVariant(productState?.product?.variations, value, "hover")} onMouseOut={() => setVariant(productState?.product?.variations, value, "out")} className={`bg-light ${soldOutAttributesIds.includes(value.id) ? "disabled" : ""} ${productState?.variantIds?.includes(value.id) ? "active" : ""}`}>
                  <span id={value?.value} style={{ backgroundColor: value?.hex_color }} />
                  <ColorTooltip target={value?.value} title={value?.value} toggle={() => toggle(value?.value)} tooltipOpen={tooltipOpen[value?.value] || false} />
                </li>
              )}
            </>
          ) : null}
        </Fragment>
      ))}
    </ul>
  );
};

export default ColorAttribute;
