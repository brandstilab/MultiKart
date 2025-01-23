import { Fragment, useState } from "react";
import ColorTooltip from "./ColorTooltip";

const ColorAttribute = ({ elem, soldOutAttributesIds, productState, setVariant }) => {
  const [tooltipOpen, setTooltipOpen] = useState("");

  const toggle = (target) => {
    setTooltipOpen((prevState) => ({ [target]: !prevState[target] }));
  };
  return (
    <ul className={`circle select-package ${elem?.style}`}>
      {elem?.attribute_values?.map((value, index) => (
        <Fragment key={index}>
          {productState?.attributeValues?.includes(value?.id) ? (
            <li className={`${soldOutAttributesIds.includes(value.id) ? "disabled" : ""} ${productState?.variantIds?.includes(value.id) ? "active" : ""}`}>
              <button id={value?.value} onClick={() => setVariant(productState?.product?.variations, value)} style={{ backgroundColor: value.hex_color }} />
              <ColorTooltip target={value?.value} title={value?.value} toggle={() => toggle(value?.value)} tooltipOpen={tooltipOpen[value?.value] || false} />
            </li>
          ) : null}
        </Fragment>
      ))}
    </ul>
  );
};

export default ColorAttribute;
