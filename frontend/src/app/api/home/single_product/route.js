import single_product from './single_product.json'
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(single_product)
}