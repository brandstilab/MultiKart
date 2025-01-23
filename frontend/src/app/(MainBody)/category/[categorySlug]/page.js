"use client";
import CategoryMainPage from "@/Components/Category";

const categorySlugPage = ({ params }) => {
  return <CategoryMainPage slug={params?.categorySlug} />;
};

export default categorySlugPage;
