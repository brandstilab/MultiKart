"use client";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Loader from "@/Layout/Loader";
import request from "@/Utils/AxiosUtils";
import { StoreAPI } from "@/Utils/AxiosUtils/API";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useContext, useState } from "react";
import StoreCard from "./StoreCard";

const SellerStoreContent = () => {
  const searchParams = useSearchParams();
  const querySellerLayout = searchParams.get("layout");
  const { themeOption } = useContext(ThemeOptionContext);
  const [page, setPage] = useState(1);
  const { data, isLoading,fetchStatus} = useQuery([page], () => request({ url: StoreAPI, params: { status: 1, page: page, paginate: 9 } }), { enabled: true, refetchOnWindowFocus: false, select: (res) => res?.data });
  const isSellerLayout = querySellerLayout ? querySellerLayout : themeOption?.seller?.store_layout;
  if (isLoading) return <Loader />;

  return (
    <>
      <Breadcrumbs title={"SellerStores"} subNavigation={[{ name: "SellerStores" }]} />
      <WrapperComponent classes={{ sectionClass: "seller-grid-section section-b-space", row: "g-4", fluidClass: "container" }} customCol={true}>
        <StoreCard data={data} fetchStatus={fetchStatus} setPage={setPage} /> 
      </WrapperComponent>
    </>
  );
};

export default SellerStoreContent;
