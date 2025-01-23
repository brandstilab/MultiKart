import { NextResponse } from "next/server";
import coupon from "./coupon.json";

export async function GET(request) {
  const searchParams = request?.nextUrl?.searchParams;
  const queryCategory = searchParams.get("category");
  const querySortBy = searchParams.get("sortBy");
  const querySearch = searchParams.get("search");
  const queryTag = searchParams.get("tag");
  const queryIds = searchParams.get("ids");

  const queryPage = parseInt(searchParams.get("page")) || 1; // default to page 1
  const queryLimit = parseInt(searchParams.get("paginate")) || 10; // default to 10 items per page

  let coupons = coupon?.data || [];

  // Filtering logic
  if (querySortBy || queryCategory || querySearch || queryTag || queryIds) {
    // Filter by category
    if (queryCategory) {
      coupons = coupons.filter((post) => post?.categories?.some((category) => queryCategory.split(",").includes(category.slug)));
    }

    // Filter by tag
    if (queryTag) {
      coupons = coupons.filter((post) => post?.tags?.some((tag) => queryTag.split(",").includes(tag.slug)));
    }

    if (queryIds) {
      coupons = coupons.filter((product) => queryIds.split(",").includes(product?.id?.toString()));
    }

    // Search filter by title
    if (querySearch) {
      coupons = coupons.filter((post) => post.title.toLowerCase().includes(querySearch.toLowerCase()));
    }

    // Sort logic
    if (querySortBy === "asc") {
      coupons = coupons.sort((a, b) => a.id - b.id);
    } else if (querySortBy === "desc") {
      coupons = coupons.sort((a, b) => b.id - a.id);
    } else if (querySortBy === "a-z") {
      coupons = coupons.sort((a, b) => a.title.localeCompare(b.title));
    } else if (querySortBy === "z-a") {
      coupons = coupons.sort((a, b) => b.title.localeCompare(a.title));
    } else if (querySortBy === "newest") {
      coupons = coupons.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (querySortBy === "oldest") {
      coupons = coupons.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    }
  }

  coupons = coupons?.length ? coupons : coupon?.data;

  // Implementing pagination
  const totalcoupons = coupons.length;
  const startIndex = (queryPage - 1) * queryLimit;
  const endIndex = startIndex + queryLimit;
  const paginatedcoupons = coupons.slice(startIndex, endIndex);

  const response = {
    current_page: queryPage,
    last_page: Math.ceil(totalcoupons / queryLimit),
    total: totalcoupons,
    per_page: queryLimit,
    data: paginatedcoupons, // the coupons for the current page
  };

  return NextResponse.json(response);
}
