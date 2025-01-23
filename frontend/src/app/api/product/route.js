import { NextResponse } from "next/server";
import product from "./product.json";

export async function GET(request) {
  const searchParams = request?.nextUrl?.searchParams;
  const queryCategory = searchParams.get("category");
  const querySortBy = searchParams.get("sortBy");
  const queryBrand = searchParams.get("brand"); // brand slug or id
  const queryCategoryIds = searchParams.get("category_ids");
  const queryIds = searchParams.get("ids");
  const querySearch = searchParams.get("search");
  const queryPage = parseInt(searchParams.get("page")) || 1; // default to page 1
  const queryLimit = parseInt(searchParams.get("paginate")) || 25; // default to 10 items per page
  const queryStoreSlug = searchParams.get("store_slug");

  let products = product?.data || [];

  // Filter by category, search, etc.
  if (querySortBy || queryCategory || querySearch || queryBrand || queryCategoryIds || queryStoreSlug || queryIds) {
    // Filter by category
    products = product?.data?.filter((product) => !queryCategory || (product?.categories?.length && product?.categories?.some((category) => queryCategory?.split(",")?.includes(category.slug))));

    // Filter by brand
    if (queryBrand) {
      products = products.filter((product) => product?.brand?.slug && queryBrand?.split(",")?.includes(product.brand.slug));
    }

    if (queryCategoryIds) {
      products = products.filter((product) => product?.categories?.some((category) => queryCategoryIds.split(",").includes(category.id?.toString())));
    }

    if (queryIds) {
      products = products.filter((product) => queryIds.split(",").includes(product?.id?.toString()));
    }

    if (queryStoreSlug) {
      products = products.filter((product) => product?.store?.slug && queryStoreSlug.split(",").includes(product.store?.slug));
    }
    // Sort logic
    if (querySortBy === "asc") {
      products = products.sort((a, b) => a.id - b.id);
    } else if (querySortBy === "desc") {
      products = products.sort((a, b) => b.id - a.id);
    } else if (querySortBy === "a-z") {
      products = products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (querySortBy === "z-a") {
      products = products.sort((a, b) => b.name.localeCompare(a.name));
    } else if (querySortBy === "low-high") {
      products = products.sort((a, b) => a.sale_price - b.sale_price);
    } else if (querySortBy === "high-low") {
      products = products.sort((a, b) => b.sale_price - a.sale_price);
    }

    // Search filter
    if (querySearch) {
      products = products.filter((product) => product.name.toLowerCase().includes(querySearch.toLowerCase()));
    }
    // if (querySearch) {
    //   products = products.filter((product) => product.name.toLowerCase().includes(querySearch.toLowerCase()));
    // }
  }

  if (querySearch && !products.length) {
    return NextResponse.json({
      current_page: queryPage,
      last_page: 0,
      total: 0,
      per_page: queryLimit,
      data: [],
    });
  }

  products = products?.length ? products : product?.data;

  // Implementing pagination
  const totalProducts = products.length;
  const startIndex = (queryPage - 1) * queryLimit;
  const endIndex = startIndex + queryLimit;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const response = {
    current_page: queryPage,
    last_page: Math.ceil(totalProducts / queryLimit),
    total: totalProducts,
    per_page: queryLimit,
    data: paginatedProducts, // the products for the current page
  };

  return NextResponse.json(response);
}
