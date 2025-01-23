import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { CardBody } from "reactstrap";
import Btn from "../../Elements/Buttons/Btn";
import SettingContext from "../../Helper/SettingContext";
import { AddtoCartAPI } from "../../Utils/AxiosUtils/API";
import IncDec from "./IncDec";
import useDelete from "../../Utils/Hooks/useDelete";
import useCreate from "../../Utils/Hooks/useCreate";

import { useTranslation } from "react-i18next";
import EmptyImage from '../../../public/assets/svg/empty-cart.svg'
import { placeHolderImage } from "@/Data/CommonPath";

const PosDetailCard = ({ values, setFieldValue, initValues }) => {

  const { t } = useTranslation('common');
  const router = useRouter();
  const pathname = usePathname();
  const { convertCurrency } = useContext(SettingContext)
  const { mutate: deleteMutate, isLoading: deleteLoader } = useDelete(AddtoCartAPI);
  const { mutate: addToCart, isLoading: addToCartLoader } = useCreate(AddtoCartAPI, false, false, "No");
  useEffect(() => {
    setFieldValue('products', initValues?.products)
    setFieldValue('total', initValues?.total)
  }, [initValues])
  return (
    <CardBody>
      <div className="title-header">
        <h5 className="fw-bold">{t("Cart")}</h5>
      </div>
      <div className="product-details">
        {!values['products']?.length ? (
          <>
            <div className="empty-cart">
              <Image src={EmptyImage} className="img-fluid" alt="Empty Cart" height={150} width={150} />
              <h4>{t("Noitemsinacart")}</h4>
            </div>
          </>
        ) : (
          <>
            <ul className="cart-listing">
              {values['products']?.map((item, i) => (
                <li key={i}>
                  <div className="cart-listing-box">
                    <Image src={item?.variation && item?.variation?.variation_image ? item?.variation?.variation_image?.original_url
                      : item?.product?.product_thumbnail ? item?.product?.product_thumbnail?.original_url
                        : placeHolderImage} className="img-fluid" alt={item?.product?.name || ''} width={70} height={70} />
                    <div className="cart-content">
                      <h4>{item?.variation ? item?.variation?.name : item?.product?.name}</h4>
                      <div>
                        <h5>{item?.variation ? convertCurrency(item?.variation.sale_price) : item?.product && item?.wholesale_price ? convertCurrency(item?.wholesale_price) : convertCurrency(item?.product?.sale_price)}</h5>
                        {pathname !== '/checkout' && <IncDec item={item} deleteMutate={deleteMutate} addToCart={addToCart} values={values} setFieldValue={setFieldValue} />}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

      </div>
    </CardBody>
  );
};

export default PosDetailCard;
