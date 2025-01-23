import { useState } from "react";
import VariationModal from "../VariationModal";

const QuickViewButton = ({ productstate, hideAction, className }) => {
  console.log("🚀 ~ QuickViewButton ~ productstate:", productstate)
  const [variationModal, setVariationModal] = useState("");
  return (
    <>
      {!hideAction?.includes("view") && (
        <li className={className ? className : ""} title="View" onClick={() => setVariationModal(productstate?.product?.id)}>
          <a>
            <i className="ri-search-line" />
          </a>
        </li>
      )}
      <VariationModal setVariationModal={setVariationModal} variationModal={variationModal} productObj={productstate?.product} />
    </>
  );
};

export default QuickViewButton;
