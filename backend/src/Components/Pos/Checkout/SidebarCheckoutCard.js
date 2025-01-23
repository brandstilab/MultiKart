import SettingContext from '@/Helper/SettingContext';
import Image from 'next/image';
import { useContext } from 'react';
import { CardBody } from 'reactstrap';

import { useTranslation } from "react-i18next";
import { placeHolderImage } from '@/Data/CommonPath';

const SidebarCheckoutCard = ({ values }) => {

    const { t } = useTranslation('common');
    const { convertCurrency } = useContext(SettingContext)
    return (
        <CardBody>
            <div className="title-header">
                <h5 className="fw-bold">{t("Checkout")}</h5>
            </div>
            <div className="product-details">
                <>
                    <ul className="cart-listing">
                        {values['products']?.map((item, i) => (
                            <li key={i}>
                                <div className='checkout-product-list-box'>
                                    <Image src={item?.variation && item?.variation?.variation_image ? item?.variation?.variation_image?.original_url
                                        : item?.product?.product_thumbnail ? item?.product?.product_thumbnail?.original_url
                                            : placeHolderImage} className="img-fluid" alt={item?.product?.name || ''} width={70} height={70} />
                                    <div className="cart-content">
                                        <h4>{item?.variation ? item?.variation?.name : item?.product?.name}</h4>
                                        <h5 className='text-theme'>
                                            {item?.variation ? convertCurrency(item?.variation.sale_price) : item?.product && item?.wholesale_price ? convertCurrency(item?.wholesale_price) : convertCurrency(item?.product?.sale_price)}
                                        </h5>
                                        <h5 className='price'>{convertCurrency((item?.variation ? item?.variation.sale_price : item?.product?.sale_price) * (item.quantity))}</h5>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            </div>
        </CardBody>
    )
}

export default SidebarCheckoutCard