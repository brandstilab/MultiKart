import { NextResponse } from "next/server";
import order from "./order.json";

export async function GET(request) {
  const searchParams = request?.nextUrl?.searchParams;
  const queryCategory = searchParams.get("category");
  const querySortBy = searchParams.get("sortBy");
  const querySearch = searchParams.get("search");
  const queryTag = searchParams.get("tag");
  const queryIds = searchParams.get("ids");

  const queryPage = parseInt(searchParams.get("page")) || 1; // default to page 1
  const queryLimit = parseInt(searchParams.get("paginate")) || 10; // default to 10 items per page

  let orders = order?.data || [];

  // Filtering logic
  if (querySortBy || queryCategory || querySearch || queryTag || queryIds) {
    // Filter by category
    if (queryCategory) {
      orders = orders.filter((post) => post?.categories?.some((category) => queryCategory.split(",").includes(category.slug)));
    }

    // Filter by tag
    if (queryTag) {
      orders = orders.filter((post) => post?.tags?.some((tag) => queryTag.split(",").includes(tag.slug)));
    }

    if (queryIds) {
      orders = orders.filter((product) => queryIds.split(",").includes(product?.id?.toString()));
    }

    // Search filter by title
    if (querySearch) {
      orders = orders.filter((post) => post.title.toLowerCase().includes(querySearch.toLowerCase()));
    }

    // Sort logic
    if (querySortBy === "asc") {
      orders = orders.sort((a, b) => a.id - b.id);
    } else if (querySortBy === "desc") {
      orders = orders.sort((a, b) => b.id - a.id);
    } else if (querySortBy === "a-z") {
      orders = orders.sort((a, b) => a.title.localeCompare(b.title));
    } else if (querySortBy === "z-a") {
      orders = orders.sort((a, b) => b.title.localeCompare(a.title));
    } else if (querySortBy === "newest") {
      orders = orders.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (querySortBy === "oldest") {
      orders = orders.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    }
  }

  orders = orders?.length ? orders : order?.data;

  // Implementing pagination
  const totalorders = orders.length;
  const startIndex = (queryPage - 1) * queryLimit;
  const endIndex = startIndex + queryLimit;
  const paginatedorders = orders.slice(startIndex, endIndex);

  const response = {
    current_page: queryPage,
    last_page: Math.ceil(totalorders / queryLimit),
    total: totalorders,
    per_page: queryLimit,
    data: paginatedorders, // the orders for the current page
  };

  return NextResponse.json(response);
}
