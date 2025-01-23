export const filterPills = [
  {
    label: "pending",
    value: "pending",
    countKey: "total_pending_orders",
    color: 'pending',
  },
  {
    value: "processing",
    label: "Processing",
    countKey: "total_processing_orders",
    color: 'processing',
  },
  {
    value: "cancelled",
    label: "Cancelled",
    countKey: "total_cancelled_orders",
    color: 'cancel',
  },
  {
    value: "shipped",
    label: "Shipped",
    countKey: "total_shipped_orders",
    color: 'shipped',
  },
  {
    value: "out_for_delivery",
    label: "Out for delivery",
    countKey: "total_out_of_delivery_orders",
    color: 'out-delivery',
  },
  {
    value: "delivered",
    label: "Delivered",
    countKey: "total_delivered_orders",
    color: 'completed',
  },
];
