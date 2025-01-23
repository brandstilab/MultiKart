import { ModifyString } from '@/Utils/CustomFunctions/ModifyString';
import { useContext } from 'react';
import { useTranslation } from "react-i18next";
import { Table } from 'reactstrap';
import SettingContext from '../../Helper/SettingContext';
import TextLimit from '../../Utils/CustomFunctions/TextLimit';

const RightVariationModal = ({ cloneVariation }) => {
    const { convertCurrency } = useContext(SettingContext)

    const { t } = useTranslation('common');
    const discount = cloneVariation?.selectedVariation ? cloneVariation?.selectedVariation?.discount : cloneVariation?.product.discount
    return (
        <>
            <h4 className="title-name">{cloneVariation?.selectedVariation ? cloneVariation?.selectedVariation?.name : cloneVariation?.product?.name}</h4>
            <h4 className='price'>
                {cloneVariation?.selectedVariation ? convertCurrency(cloneVariation?.selectedVariation?.sale_price) : convertCurrency(cloneVariation?.product?.sale_price)}
                {cloneVariation?.selectedVariation ? (
                    <del>
                        {cloneVariation?.selectedVariation?.discount
                            ? convertCurrency(cloneVariation?.selectedVariation?.price)
                            : cloneVariation?.product?.discount
                                ? convertCurrency(cloneVariation?.product?.price)
                                : null}
                    </del>
                ) : (
                    <del>{cloneVariation?.product.discount ? convertCurrency(cloneVariation?.product.price) : null}</del>
                )}
                {discount && <label className="modal-label">
                    {discount}% {t('off')}
                </label>}
            </h4>
            <div className='product-detail'>
                <h4>{t('ProductDetails')}:</h4>
                <div className='my-2'>
                    <TextLimit value={cloneVariation?.product?.short_description} maxLength={200} tag={'p'} />
                </div>
            </div>
            <div className='pickup-box'>
                <div className='product-info'>
                    <ul className='product-info-list'>
                        <li>
                            {t('SKU')} : {cloneVariation?.selectedVariation?.sku ?? cloneVariation?.product?.sku}
                        </li>
                        <li>
                            {t('StockStatus')} :
                            {cloneVariation?.selectedVariation?.stock_status
                                ? ModifyString(cloneVariation?.selectedVariation?.stock_status, false, '_')
                                : ModifyString(cloneVariation?.product?.stock_status, false, '_')}
                        </li>
                        <li>
                            {t('Quantity')} : {cloneVariation?.selectedVariation?.quantity ?? cloneVariation?.product?.quantity} {t('ItemsLeft')}
                        </li>
                    </ul>
                </div>
            </div>
            {cloneVariation?.product?.wholesale_price_type &&
                <>
                    <Table className='table mt-2 mb-4 modal-table'>
                        <thead>
                            <tr>
                                <th className="border-top-0">{'Min QTY'}</th>
                                <th className="border-top-0">{'Max QTY'}</th>
                                <th className="border-top-0">{(cloneVariation?.product?.wholesale_price_type == 'fixed' ? 'Unit Price' : 'Percentage')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cloneVariation?.product?.wholesales.map((wholesale, index) =>
                                <tr key={index}>
                                    <td>{wholesale.min_qty}</td>
                                    <td>{wholesale.max_qty}</td>
                                    <td>{(cloneVariation.product?.wholesale_price_type == 'fixed' ? (wholesale.value) : wholesale.value + '% Off')}</td>
                                </tr>
                            )}
                        </tbody>

                    </Table>
                    <h4>{t('TotalPrice')} <span className="theme-color">{convertCurrency(cloneVariation?.totalPrice)}</span></h4>
                </>
            }
            <div className="mt-2" >
                <TextLimit value={cloneVariation?.product?.description} maxLength={200} />
            </div>
        </>
    )
}

export default RightVariationModal