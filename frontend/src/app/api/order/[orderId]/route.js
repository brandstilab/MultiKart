import { NextResponse } from 'next/server';
import order from '../order.json'
export async function GET(_, { params }) {
    const orderId = params.orderId

    const orderObj = order.data?.find((elem) => elem.order_number == orderId)

    return NextResponse.json(orderObj)
}