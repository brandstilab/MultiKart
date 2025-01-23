'use client'
import Loader from '@/Components/CommonComponent/Loader';
import NoDataFound from '@/Components/CommonComponent/NoDataFound';
import FormsShippingRuleCreation from '@/Components/Shipping/FormsShippingRuleCreation';
import ShowModal from '@/Elements/Alerts&Modals/Modal';
import Btn from '@/Elements/Buttons/Btn';
import request from '@/Utils/AxiosUtils';
import { shipping, shippingRule } from '@/Utils/AxiosUtils/API';
import SuccessHandle from '@/Utils/CustomFunctions/SuccessHandle';
import { ToastNotification } from '@/Utils/CustomFunctions/ToastNotification';
import FormWrapper from '@/Utils/HOC/FormWrapper';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { FiPlus } from 'react-icons/fi';
import { RiArrowDownLine, RiArrowDownSLine, RiArrowLeftLine } from 'react-icons/ri';
import NoCategorySVG from '../../../../../../public/assets/svg/no-category.png';

const AddShippingRules = ({ params }) => {
    const router = useRouter();

    const { t } = useTranslation('common');
    const [active, setActive] = useState(false);
    const updateId = params?.updateId
    const { data, isLoading, refetch } = useQuery([`${shipping}/edit/${updateId}`], () => request({ url: `${shipping}/${updateId}` }, router), {
        enabled: false,
        refetchOnWindowFocus: false, select: (data) => data?.data
    });
    const { mutate: createMutate, isLoading: createMutateIsloading } = useMutation((data) => request({ url: shippingRule, data, method: "post" }, router), {
        onSuccess: (resData) => {
            SuccessHandle(resData, false, `${shipping}/edit/${updateId}`, t("ShippingCreatedSuccessFully"));
            resData.status === 201 && setActive(false);
            refetch();
        },
        onError: () => ToastNotification("error"),
    });
    const { mutate: updateMutate, isLoading: updateLoading } = useMutation((data) => request({ url: shippingRule + "/" + active, method: "put", data }, router), {
        onSuccess: (resData) => {
            SuccessHandle(resData, false, `${shipping}/edit/${updateId}`, t("RuleUpdatedSuccessfully"));
            resData.status === 200 && setActive(false);
            refetch();
        },
    },
    );
    useEffect(() => {
        isLoading && refetch();
    }, [isLoading]);

    if (isLoading && updateId) return <Loader />;
    if (!data) return null;
    return (
        <FormWrapper title={data?.country?.name} modal={<div className='d-flex'>
            <Btn className="me-2 btn-outline btn-lg add-button back-button btn-light-bg" title="Back" onClick={() => router.back()}>
                <RiArrowLeftLine className='me-2' />
            </Btn>
            <Btn className="align-items-center btn-theme add-button" title={"Add Shipping Rule"} onClick={() => setActive({ create: data?.id })}>
                <FiPlus />
            </Btn>
        </div>}>
            <div className="dflex-wgap">
                <ShowModal title={"AddShippingRule"} modalAttr={{ className: "modal-lg" }} setModal={setActive} open={active?.create === data?.id ? true : false} close={true}>
                    <FormsShippingRuleCreation setActive={setActive} mutate={createMutate} shipping_id={active} loading={createMutateIsloading}  />
                </ShowModal>
            </div>
            {
                data?.shipping_rules?.length > 0 ?
                    data.shipping_rules.map((item, index) => (
                        <div className="shipping-accordion-custom" key={index}>
                            <div className="rule-dropdown d-flex justify-content-between align-items-center" onClick={() => setActive((prev) => prev !== item.id && item.id)}>
                                {item.name}
                                <RiArrowDownSLine />
                            </div>
                            {active === item.id && (
                                <div className="rule-edit-form">
                                    <FormsShippingRuleCreation rules={item} mutate={updateMutate} shipping_id={data?.id} setActive={setActive} loading={updateLoading} refetch={refetch} />
                                </div>
                            )}
                        </div>
                    )) : <NoDataFound customImage={NoCategorySVG} />
            }
        </FormWrapper>
    )
}

export default AddShippingRules