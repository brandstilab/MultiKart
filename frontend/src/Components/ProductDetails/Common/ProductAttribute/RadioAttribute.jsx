import { Input, Label } from "reactstrap";

const RadioAttribute = ({ elem, soldOutAttributesIds, productState, setVariant, i }) => {
  return (
    <ul className="quantity-variant radio ">
      {elem?.attribute_values.map((value, index) => (
        <div key={index} className="d-flex digital-price">
          {productState?.attributeValues?.includes(value?.id) ? (
            <div onMouseOver={() => setVariant(productState?.product?.variations, value, "hover")} onMouseOut={() => setVariant(productState?.product?.variations, value, "out")} onClick={(e) => setVariant(productState?.product?.variations, value, "click")} className={`form-check ${productState?.statusIds?.includes(value?.id) || soldOutAttributesIds.includes(value.id) ? "disabled" : ""}`}>
              <Input type="radio" className="form-check-input" id={`radio-${i}-${index}`} name={`radio-group-${i}`} value={index} checked={productState?.variantIds?.includes(value?.id) && !soldOutAttributesIds.includes(value.id)} disabled={productState?.statusIds?.includes(value?.id) || soldOutAttributesIds.includes(value.id)} />
              <Label htmlFor={`radio-${i}-${index}`} className="form-check-label">
                {value?.value}
              </Label>
            </div>
          ) : null}
        </div>
      ))}
    </ul>
  );
};

export default RadioAttribute;
