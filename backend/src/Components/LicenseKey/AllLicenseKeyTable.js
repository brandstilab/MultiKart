import TableWarper from "../../Utils/HOC/TableWarper";
import ShowTable from "../Table/ShowTable";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";

const AllLicenseKeyTable = ({ data, ...props }) => {
    const headerObj = {
        checkBox: false,
        isOption: false,
        noEdit: true,
        isSerialNo:false,
        optionHead: { title: "Action" },
        column: [
            { title: "Product", apiKey: "item_name",sorting: false,sortBy: "desc" },
            { title: "License Key", apiKey: "license_key",sorting: true,sortBy: "asc" },
            { title: "Purchased By", apiKey: "purchased_by",subKey: ["name"],sorting: false,sortBy: "desc" },
            { title: "CreateAt", apiKey: "created_at", sorting: true, sortBy: "asc", type: "date" },
        ],
        data: data || []
    };
    headerObj.data.filter((element) => element.status = element?.answer ? <div className="status-approved"><span>Replied</span></div> : < div className="status-pending" > <span>Pending</span></div >)
    if (!data) return null;
    return <>
        <ShowTable {...props} headerData={headerObj} keyInPermission={'license_key'} />
    </>
};

export default TableWarper(AllLicenseKeyTable);
