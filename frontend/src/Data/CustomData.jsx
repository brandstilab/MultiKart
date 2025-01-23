export const FilterPrice = [
  {
    id: 1,
    price: 100,
    text: "Below",
    value: "100",
  },
  {
    id: 2,
    minPrice: 100,
    maxPrice: 200,
    value: "0-200",
  },
  {
    id: 3,
    minPrice: 200,
    maxPrice: 400,
    value: "200-400",
  },
  {
    id: 4,
    minPrice: 400,
    maxPrice: 600,
    value: "400-600",
  },
  {
    id: 5,
    minPrice: 600,
    maxPrice: 800,
    value: "600-800",
  },
  {
    id: 6,
    minPrice: 800,
    maxPrice: 1000,
    value: "800-1000",
  },
  {
    id: 7,
    price: 1000,
    text: "Above",
    value: "1000",
  },
];

export const FilterSortData = [
  {
    value: "asc",
    label: "AscendingOrder",
  },
  {
    value: "desc",
    label: "DescendingOrder",
  },
  {
    value: "low-high",
    label: "LowHighPrice",
  },
  {
    value: "high-low",
    label: "HighLowPrice",
  },
  {
    value: "a-z",
    label: "AZOrder",
  },
  {
    value: "z-a",
    label: "ZAOrder",
  },
  {
    value: "discount-high-low",
    label: "% Off - Hight To Low",
  },
];
export const FilterPaginateData = [
  {
    value: 10,
    label: "10 Products",
  },
  {
    value: 25,
    label: "25 Products",
  },
  {
    value: 50,
    label: "50 Products",
  },
  {
    value: 100,
    label: "100 Products",
  },
];
