import tax from "../tax.json";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const singleTax = params.updateId;

  const taxObj = tax?.data.find((elem) => elem.id == singleTax);

  return NextResponse.json(taxObj);
}
