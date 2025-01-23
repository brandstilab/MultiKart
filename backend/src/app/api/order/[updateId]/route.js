import order from "../order.json";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const singleOrder = params.updateId;

  const orderObj = order?.data.find((elem) => elem.order_number == singleOrder);

  return NextResponse.json(orderObj);
}
