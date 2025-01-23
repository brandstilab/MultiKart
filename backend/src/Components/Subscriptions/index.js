import TableWarper from '../../Utils/HOC/TableWarper'
import ShowTable from '../Table/ShowTable';
import Loader from '../CommonComponent/Loader';

const AllSubscriptionTable = ({ data, ...props }) => {
    const headerObj = {
        isSerialNo:false,
        column: [
            { title: "Email", apiKey: "email", sorting: true, sortBy: "desc", },
            { title: "CreateAt", apiKey: "created_at", sorting: true, sortBy: "desc", type: "date" },
        ],
        data: data || []
    };
    // if (!data) return <Loader />;
    return <>
        <ShowTable {...props} headerData={headerObj} />
    </>
}

export default TableWarper(AllSubscriptionTable)