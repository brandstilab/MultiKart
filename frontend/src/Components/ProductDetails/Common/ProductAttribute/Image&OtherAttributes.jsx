import { placeHolderImage } from "@/Components/Widgets/Placeholder";
import Btn from "@/Elements/Buttons/Btn";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import SizeModal from "../AllModal/SizeModal";

const ImageOtherAttributes = ({ setVariant, productState, elem, soldOutAttributesIds, noHoverEffect }) => {
  const [elemStyle, setElemStyle] = useState("");

  useEffect(() => {
    if (elem?.style == "rectangle") {
      setElemStyle("quantity-variant rectangle");
    } else if (elem?.style == "circle") {
      setElemStyle("quantity-variant circle");
    } else if (elem?.style == "image") {
      setElemStyle("image-box image");
    }
  }, [elem]);

  const [tooltipOpen, setTooltipOpen] = useState("");
  const [modal, setModal] = useState("");
  const toggle = (target) => {
    setTooltipOpen((prevState) => ({ [target]: !prevState[target] }));
  };

  const activeModal = {
    size: <SizeModal modal={modal} setModal={setModal} productState={productState} />,
  };

  return (
    <>
      <ul className={` ${elemStyle}`}>
        {elem?.attribute_values?.map((item, index) => (
          <Fragment key={index}>
            {productState?.attributeValues?.includes(item?.id) && (
              <li className={`${!productState?.statusIds?.includes(item.id) && productState?.variantIds?.includes(item?.id) && !soldOutAttributesIds.includes(item?.id) ? "active" : ""} ${soldOutAttributesIds?.includes(item.id) || productState?.statusIds?.includes(item.id) ? "disabled" : ""}`} title={item?.value}>
                {elem?.style == "image" ? (
                  <a>
                    {noHoverEffect ? <Image id={item?.value} src={item?.variation_image ? item?.variation_image?.original_url : placeHolderImage} onClick={() => setVariant(productState?.product?.variations, item, "click")} height={65} width={65} alt="Product" /> : <Image id={item?.value} src={item?.variation_image ? item?.variation_image?.original_url : placeHolderImage} onClick={() => setVariant(productState?.product?.variations, item, "click")} onMouseOver={() => setVariant(productState?.product?.variations, item, "hover")} onMouseOut={() => setVariant(productState?.product?.variations, item, "out")} height={65} width={65} alt="Product" />}
                    {/* <Image id={item?.value} src={item?.variation_image ? item?.variation_image?.original_url : placeHolderImage} onClick={() => setVariant(productState?.product?.variations, item, "click")} onMouseOver={() => setVariant(productState?.product?.variations, item, "hover")} onMouseOut={() => setVariant(productState?.product?.variations, item, "out")} height={65} width={65} alt="Product" />{" "} */}
                  </a>
                ) : (
                  <>
                    {noHoverEffect ? (
                      <Btn color="transparent" id={item?.value} onClick={() => setVariant(productState?.product?.variations, item, "click")}>
                        <div>{item?.value}</div>
                      </Btn>
                    ) : (
                      <Btn color="transparent" id={item?.value} onClick={() => setVariant(productState?.product?.variations, item, "click")} onMouseOver={() => setVariant(productState?.product?.variations, item, "hover")} onMouseOut={() => setVariant(productState?.product?.variations, item, "out")}>
                        <div>{item?.value}</div>
                      </Btn>
                    )}
                  </>
                  // <Btn color="transparent" id={item?.value} onClick={() => setVariant(productState?.product?.variations, item, "click")} onMouseOver={() => setVariant(productState?.product?.variations, item, "hover")} onMouseOut={() => setVariant(productState?.product?.variations, item, "out")}>
                  //   <div>{item?.value}</div>
                  // </Btn>
                )}
              </li>
            )}
          </Fragment>
        ))}
      </ul>
      {modal && activeModal[modal]}
    </>
  );
};

export default ImageOtherAttributes;
