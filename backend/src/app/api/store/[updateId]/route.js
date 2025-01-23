import store from "../store.json";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const singleStore = params.updateId;

  const storeObj = store?.data.find((elem) => elem.id == singleStore);

  return NextResponse.json(storeObj);
}
