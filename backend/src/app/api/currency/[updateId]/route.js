import currency from "../currency.json";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const singleCurrency = params.updateId;

  const currencyObj = currency?.data.find((elem) => elem.id == singleCurrency);

  return NextResponse.json(currencyObj);
}
