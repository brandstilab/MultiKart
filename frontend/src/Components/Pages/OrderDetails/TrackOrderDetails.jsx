import Loader from "@/Layout/Loader";
import ConsumerDetails from "./Common/ConsumerDetails";
import StatusDetail from "./Common/StatusDetails";
import SubTable from "./Common/SubTable";
import TableDetails from "./Common/TableDetails";
import TitleDetails from "./Common/TitleDetails";

const TrackOrderDetails = ({ data,isLoading, orderNumber }) => {
  
  if (isLoading) return <Loader />;
  return (
    <>
      <TitleDetails params={orderNumber} data={data} />
      <StatusDetail data={data} />
      <TableDetails data={data} />
      <ConsumerDetails data={data} />
      {data?.sub_orders?.length ? <SubTable data={data?.sub_orders} /> : null}
      
    </>
  );
};

export default TrackOrderDetails;
