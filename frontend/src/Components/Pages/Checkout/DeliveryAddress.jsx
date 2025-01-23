import React, { useContext, useEffect } from 'react';
import { Row } from 'reactstrap';
import { RiAddLine, RiMapPinLine } from 'react-icons/ri';
import { useTranslation } from "react-i18next";
import CheckoutCard from './common/CheckoutCard';
import AddAddressForm from './common/AddAddressForm';
import ShowAddress from './ShowAddress';
import CustomModal from '@/Components/Widgets/CustomModal';

const DeliveryAddress = ({ type, title, address, modal, mutate, isLoading, setModal, setFieldValue }) => {
  const { t } = useTranslation('common');

  useEffect(() => {
    address?.length > 0 && setFieldValue(`${type}_address_id`, address[0].id);
  }, [address]);
  return (
    <>
      <CheckoutCard icon={<RiMapPinLine />}>
        <div className='checkout-title'>
          <h4>
            {t(title)} {t('Address')}
          </h4>
          <a className='d-flex align-items-center fw-bold' onClick={() => setModal(type)}>
            <RiAddLine className='me-1'></RiAddLine>
            {t('AddNew')}
          </a>
        </div>
        <div className='checkout-detail'>
          {
            <>
              {address?.length > 0 ? (
                <Row className='g-4'>
                  {address?.map((item, i) => (
                    <ShowAddress item={item} key={i} type={type} index={i} />
                  ))}
                </Row>
              ) : (
                <div className='empty-box'>
                  <h2>{t('NoaddressFound')}</h2>
                </div>
              )}
            </>
          }
          <CustomModal modal={modal == type ? true : false} setModal={setModal} classes={{ modalClass: 'theme-modal-2 address-modal address-modal-2', title: "AddAddress", }}>
            <div className='right-sidebar-box'>
              <AddAddressForm mutate={mutate} isLoading={isLoading} setModal={setModal} type={type} />
            </div>
          </CustomModal>
        </div>
      </CheckoutCard>
    </> 
  );
};

export default DeliveryAddress;
