import order from './order.json'
import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json(order)
}