"use client";
import NotFoundPage from "@/Components/Pages/404";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Loader from "@/Layout/Loader";
import React, { useContext } from "react";

const PageNotFound = () => {
  const { isLoading } = useContext(ThemeOptionContext);

  if (isLoading) return <Loader />;
  return <NotFoundPage />;
};

export default PageNotFound;
