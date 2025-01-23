import Avatar from "@/Components/Widgets/Avatar";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { RiArrowRightLine } from "react-icons/ri";

const VendorContains = ({ productState }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="vendor-contain">
        <Link href={`/seller/store/${productState?.product?.store?.slug}`}>
          <div className="vendor-image">
            <Avatar data={productState?.product?.store?.store_logo} height={64} width={64} name={productState?.product?.store?.store_name} />
          </div>
        </Link>

        <div className="vendor-name">
          <Link href={`/seller/store/${productState?.product?.store?.slug}`}>
            <h5 className="fw-500">{productState?.product?.store?.store_name}</h5>
            <div className="product-rating mt-1">
              <span>{`(${productState?.product?.store?.reviews_count ?? 0} Reviews)`}</span>
            </div>
          </Link>
          <Link href={`/seller/store/${productState?.product?.store?.slug}`}>
            <div className="store-btn">
              {t("GoToStore")} <RiArrowRightLine />
            </div>
          </Link>
        </div>
      </div>
      <div className="vendor-detail">
        <p>{productState.product.short_description}</p>
      </div>
    </>
  );
};

export default VendorContains;
