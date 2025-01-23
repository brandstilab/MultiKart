import orderStatus from './orderStatus.json'
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(orderStatus);
}