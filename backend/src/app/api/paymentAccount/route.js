import paymentAccount from './paymentAccount.json'
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(paymentAccount);
}