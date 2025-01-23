"use client";
import SellerPoster from "./SellerPoster";
import SellerService from "./SellerService";
import SellerBusiness from "./SellerBusiness";
import SellerSelling from "./SellerSelling";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import { useContext } from "react";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Loader from "@/Layout/Loader";

const BecomeSellerContent = () => {
  const { isLoading } = useContext(ThemeOptionContext);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Breadcrumbs title={"BecomeVendor"} subNavigation={[{ name: "BecomeVendor" }]} />
      <SellerPoster />
      <SellerService />
      <SellerBusiness />
      <SellerSelling />
    </>
  );
};

export default BecomeSellerContent;
