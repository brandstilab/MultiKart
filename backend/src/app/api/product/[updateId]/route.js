import product from "../product.json";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const singleProduct = params.updateId;

  const productObj = product?.data.find((elem) => elem.id == singleProduct);

  return NextResponse.json(productObj);
}
