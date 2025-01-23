import shipping from "../shipping.json";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const singleShipping = params.updateId;

  const shippingObj = shipping?.find((elem) => elem.id == singleShipping);

  return NextResponse.json(shippingObj);
}
