import { RefundAPI } from '../../Utils/AxiosUtils/API';
import TableWarper from '../../Utils/HOC/TableWarper';
import Loader from '../CommonComponent/Loader';
import ShowTable from '../Table/ShowTable';
import { useTranslation } from "react-i18next";

const AllRefundTable = ({ data, ...props }) => {
    
    const { t } = useTranslation( 'common');
    const headerObj = {
        checkBox: false, isOption: true, noEdit: true, isSerial: true,    isSerialNo:false,

        optionHead: { title: "Action", type: 'View', url: RefundAPI, message: "Refund Status Updated Successfully", showModalData: data, modalTitle: t("Refund"), permissionKey: "refund" },
        column: [
            { title: "OrderNumber", apiKey: "order_id" },
            { title: "ConsumerName", apiKey: "consumer_name", sorting: true, sortBy: "desc" },
            { title: "Reason", apiKey: "reason" },
            { title: "Status", apiKey: "refund_status" },
            { title: "CreateAt", apiKey: "created_at", sorting: true, sortBy: "desc", type: "date" },
        ],
        data: data || []
    };
    let refunds = headerObj?.data?.filter((element) => {
        element.consumer_name = element?.user?.name
        element.order_id = <span className="fw-bolder">#{element?.order?.order_number}</span>
        element.refund_status = element.status ? <div className={`status-${element.status}`}><span>{element.status.replace(/_/g, " ")}</span></div> : '-';
        return element;
    });
    headerObj.data = headerObj ? refunds : [];
    if (!data) return <Loader />;
    return <>
        <ShowTable {...props} headerData={headerObj} />
    </>
}

export default TableWarper(AllRefundTable)