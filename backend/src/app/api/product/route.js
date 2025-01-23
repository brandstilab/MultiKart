import { NextResponse } from "next/server";
import product from "./product.json";

export async function GET(request) {
  const searchParams = request?.nextUrl?.searchParams;
  const queryCategory = searchParams.get("category");
  const querySortBy = searchParams.get("sortBy");
  const querySearch = searchParams.get("search");
  const queryTag = searchParams.get("tag");
  const queryIds = searchParams.get("ids");

  const queryPage = parseInt(searchParams.get("page")) || 1; // default to page 1
  const queryLimit = parseInt(searchParams.get("paginate")) || 10; // default to 10 items per page

  let products = product?.data || [];

  // Filtering logic
  if (querySortBy || queryCategory || querySearch || queryTag || queryIds) {
    // Filter by category
    if (queryCategory) {
      products = products.filter((post) => post?.categories?.some((category) => queryCategory.split(",").includes(category.slug)));
    }

    // Filter by tag
    if (queryTag) {
      products = products.filter((post) => post?.tags?.some((tag) => queryTag.split(",").includes(tag.slug)));
    }

    if (queryIds) {
      products = products.filter((product) => queryIds.split(",").includes(product?.id?.toString()));
    }

    // Search filter by title
    if (querySearch) {
      products = products.filter((post) => post.title.toLowerCase().includes(querySearch.toLowerCase()));
    }

    // Sort logic
    if (querySortBy === "asc") {
      products = products.sort((a, b) => a.id - b.id);
    } else if (querySortBy === "desc") {
      products = products.sort((a, b) => b.id - a.id);
    } else if (querySortBy === "a-z") {
      products = products.sort((a, b) => a.title.localeCompare(b.title));
    } else if (querySortBy === "z-a") {
      products = products.sort((a, b) => b.title.localeCompare(a.title));
    } else if (querySortBy === "newest") {
      products = products.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (querySortBy === "oldest") {
      products = products.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    }
  }

  products = products?.length ? products : product?.data;

  // Implementing pagination
  const totalproducts = products.length;
  const startIndex = (queryPage - 1) * queryLimit;
  const endIndex = startIndex + queryLimit;
  const paginatedproducts = products.slice(startIndex, endIndex);

  const response = {
    current_page: queryPage,
    last_page: Math.ceil(totalproducts / queryLimit),
    total: totalproducts,
    per_page: queryLimit,
    data: paginatedproducts, // the products for the current page
  };

  return NextResponse.json(response);
}
