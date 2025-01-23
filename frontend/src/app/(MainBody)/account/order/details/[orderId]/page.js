import OrderDetailsContain from "@/Components/Pages/Account/Orders/Details";

const OrderDetails = ({ params }) => {
  return <>{params?.orderId && <OrderDetailsContain params={params?.orderId} />}</>;
};

export default OrderDetails;
