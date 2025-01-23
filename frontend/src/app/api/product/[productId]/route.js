import { NextResponse } from 'next/server';
import product from '../product.json'

export async function GET(_, { params }) {
    const productId = params.productId

    const productObj = product.data?.find((elem) => elem.slug == productId)

    return NextResponse.json(productObj)
}