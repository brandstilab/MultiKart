import { NextResponse } from "next/server";
import allStore from "../../store.json";

export async function GET(_, { params }) {
  const singleStore = params.singleStore;

  const singleStoreObj = allStore.data?.find((elem) => elem?.slug == singleStore);

  return NextResponse.json(singleStoreObj);
}
