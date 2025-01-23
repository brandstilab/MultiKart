"use client";
import request from "@/Utils/AxiosUtils";
import { ThemeOptionsAPI } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import ThemeOptionContext from ".";

const ThemeOptionProvider = (props) => {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [openOffCanvas, setOpenOffCanvas] = useState(false);
  const [paginationDetails, setPaginationDetails] = useState({});
  const [cartCanvas, setCartCanvas] = useState(false);
  const [mobileSideBar, setMobileSideBar] = useState(false);
  const [collectionMobile, setCollectionMobile] = useState(false);
  const [themeOption, setThemeOption] = useState({});
  const [variant, setVariant] = useState("");

  const { data, isLoading, refetch } = useQuery([ThemeOptionsAPI], () => request({ url: ThemeOptionsAPI }), {
    enabled: false,
    refetchOnWindowFocus: false,
    select: (res) => res?.data,
  });

  useEffect(() => {
    refetch();
  }, []);
  useEffect(() => {
    if (data) {
      setThemeOption(data?.options);
    }
  }, [isLoading]);

  return (
    <>
      <ThemeOptionContext.Provider value={{ ...props, setVariant, variant, isLoading, openAuthModal, setOpenAuthModal, themeOption, openOffCanvas, paginationDetails, setPaginationDetails, setOpenOffCanvas, cartCanvas, setCartCanvas, mobileSideBar, setMobileSideBar, collectionMobile, setCollectionMobile }}>{props.children}</ThemeOptionContext.Provider>
    </>
  );
};

export default ThemeOptionProvider;
