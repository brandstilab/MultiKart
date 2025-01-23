"use client";
import NotFoundPage from "@/Components/Pages/404";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Loader from "@/Layout/Loader";
import React, { useContext } from "react";

const NotFound = ({ params }) => {
  const { isLoading } = useContext(ThemeOptionContext);
  if (isLoading) return <Loader />;
  return <NotFoundPage params={params} />;
};

export default NotFound;
