"use client";
import React, { useContext } from "react";
import NoDataFound from "@/Components/Widgets/NoDataFound";
import CategoryContext from "@/Context/CategoryContext";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Category = () => {
  const { t } = useTranslation("common");
  const { filterCategory } = useContext(CategoryContext);
  const categoryData = filterCategory("post");
  return (
    <div className="theme-card">
      <h4>Categories</h4>
      {categoryData?.length > 0 ? (
        <ul className="categories">
          <li>
            <Link className="category-name" href={`/blogs`}>
              <h5>{"All"}</h5>
            </Link>
          </li>
          {categoryData?.slice(0, 4)?.map((category, index) => (
            <li key={index}>
              <Link className="category-name" href={{ pathname: `/blogs`, query: { category: category?.slug } }}>
                <h5>{category.name}</h5>
                <span>({category?.blogs_count})</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <NoDataFound customClass="bg-light no-data-added" title="NoCategoryFound" />
      )}
    </div>
  );
};

export default Category;
