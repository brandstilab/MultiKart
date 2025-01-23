const { default: CategoryContext } = require("@/Context/CategoryContext");
const { useContext } = require("react");


export const filterCategories = (dataAPI) => {
  const { filterCategory } = useContext(CategoryContext);
  const categoryData = filterCategory("product");
  if (!categoryData || !dataAPI?.category_ids) {
    return [];
  }

  const filteredCategories = [];
  const filteredSubCategoryIds = new Set(dataAPI?.categories?.category_ids);

  const filterCategoryData = (category) => {
    if (filteredSubCategoryIds.has(category.id)) {
      filteredCategories.push(category);
      return;
    }
    if (category.subcategories) {
      category.subcategories.forEach((subcategory) => {
        filterCategoryData(subcategory);
      });
    }
  };

  categoryData.forEach(filterCategory);
  return filteredCategories;
};
