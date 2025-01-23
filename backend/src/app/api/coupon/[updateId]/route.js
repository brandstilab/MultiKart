import coupon from "../coupon.json";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const singleCoupon = params.updateId;

  const couponObj = coupon?.data.find((elem) => elem.id == singleCoupon);

  return NextResponse.json(couponObj);
}
