import payment_account from './payment-account.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(payment_account)
}