import { NextResponse } from "next/server";
import brandData from "../../brand.json";
export async function GET(_, { params }) {
  const singleBrand = params.singleBrand;

  const blogObj = brandData.data?.find((elem) => elem?.slug == singleBrand);

  return NextResponse.json(blogObj);
}
