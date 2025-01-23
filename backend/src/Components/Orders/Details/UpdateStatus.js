import { useEffect, useState } from 'react';
import SearchableSelectInput from '../../InputFields/SearchableSelectInput';
import ShippingNote from './ShippingNote';

const UpdateStatus = ({ orderStatusData, values, setFieldValue, data, setOrderStatus, orderStatus, mutate, orderStatusUpdate ,refetch }) => {
    const [ openReceiptModal, setOpenReceiptModal ] = useState(false);


    const onStatusChange = (name, value) => {
        const modifiedObject ={...value,name:ReplaceString(value?.name)}
        setOpenReceiptModal(true)
        setFieldValue('order_status_id', modifiedObject)
    }
    const capitalizeAndReplace = (str) => {
        // Your capitalization and replacement logic
        return str.charAt(0).toUpperCase() + str.slice(1).replace(/_/g, ' ');
      };
      const ReplaceString = (str) => {
        // Your capitalization and replacement logic
        return str.charAt(0).toLowerCase() + str.slice(1).replace(/ /g, '_');
    };
    
    useEffect(() => {
        if (orderStatusUpdate?.status == 200 || orderStatusUpdate?.status == 201) {
            setOrderStatus(values['order_status_id'])
        }
    }, [orderStatusUpdate])
    return (
        <>
            <SearchableSelectInput
                nameList={[
                    {
                        name: "order_status_id",
                        notitle: "true",
                        inputprops: {
                            name: "order_status_id",
                            id: "order_status_id",
                            options: orderStatusData?.map(obj => ({...obj,name:capitalizeAndReplace(obj?.name)})) || [],
                            value: capitalizeAndReplace(orderStatus ? orderStatus?.name : ''),
                        },
                        store: "obj",
                        setvalue:onStatusChange,
                    },
                ]}
            />
            {openReceiptModal && <ShippingNote refetch={refetch} setFieldValue={setFieldValue}  mutate={mutate} values={values} openReceiptModal={openReceiptModal} setOpenReceiptModal={setOpenReceiptModal}    />}
        </>
    )
}

export default UpdateStatus