import React, { useContext, useEffect, useState } from 'react'
import { RiEyeLine,RiDownload2Line } from 'react-icons/ri'
import { usePathname, useRouter } from 'next/navigation';
import ShowModal from '../../Elements/Alerts&Modals/Modal';
import Btn from '../../Elements/Buttons/Btn';
import useCreate from '../../Utils/Hooks/useCreate';
import BadgeContext from '../../Helper/BadgeContext';
import usePermissionCheck from '../../Utils/Hooks/usePermissionCheck';
import ViewDetailBody from './ViewDetailBody';
import DownloadProduct from './DownloadProduct';

const ProductDownload = ({ fullObj, tableData, refetch }) => {
    const [loadingState, setLoadingState] = useState("")
    const [action] = usePermissionCheck(['action'], tableData?.permissionKey);
    const router = useRouter()
    const pathname = usePathname()
    const { state, dispatch } = useContext(BadgeContext)
    const [modal, setModal] = useState(false);
    const { data, mutate, isLoading } = useCreate(`${tableData.url}/${fullObj.id}`, false, false, false, () => {
        refetch();
        setModal(false);
    });
    
    const { mutate: download, isLoading: exportLoader } = useCreate("/download/admin/zip/link", false, false, false, (resDta) => {
        if (resDta?.status == 200 || resDta?.status == 201) {
            const link = document.createElement('a');
            link.href = resDta?.data?.download_link;
            link.download =  `${fullObj.slug}.zip`;
            link.click();
        }
    }, false)

    
    return (
        <>
            <div>
                <a onClick={() => {
                    fullObj?.type == "simple" ?  download({product_id: fullObj.id, variation_id: "" }) :setModal(true)
                }}><RiDownload2Line className="ri-download-2-line" /></a>
            </div>
             <ShowModal open={modal} title={tableData.modalTitle} close={true} setModal={setModal}
                buttons={
                    <> <Btn title="Cancel"  onClick={() => setModal(false)} className="btn-theme btn-md fw-bold" />
                       <Btn title="Download"  onClick={() => download({product_id: fullObj.id, variation_id: "" })} className="btn-theme btn-md fw-bold" />
                    </>
                }>
                <DownloadProduct fullObj={fullObj} />
            </ShowModal>
        </>
    )
}

export default ProductDownload