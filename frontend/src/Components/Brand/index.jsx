"use client";
import Loader from "@/Layout/Loader";
import request from "@/Utils/AxiosUtils";
import { BrandLogo } from "@/Utils/AxiosUtils/API";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import { useCustomSearchParams } from "@/Utils/Hooks/useCustomSearchParams";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import WrapperComponent from "../Widgets/WrapperComponent";
import BrandCollection from "./BrandCollection";

const BrandContainer = ({ params }) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [filter, setFilter] = useState({ category: [], price: [], attribute: [], rating: [], sortBy: "", field: "" });
  const [category, attribute, price, rating, sortBy, field, paginate, layout] = useCustomSearchParams(["category", "attribute", "price", "rating", "sortBy", "field","paginate", "layout"]);
  const { data: Brand, isLoading, refetch } = useQuery([BrandLogo], () => request({ url: `${BrandLogo}/slug/${params}` }, router), { enabled: !!params, refetchOnWindowFocus: false, select: (res) => res?.data });

  // useEffect(() => {
  //   isLoading && refetch();
  // }, [isLoading, Brand]);

  useEffect(() => {
    setFilter((prev) => {
      return {
        ...prev,
        category: category ? category?.category?.split(",") : [],
        attribute: attribute ? attribute?.attribute?.split(",") : [],
        price: price ? price?.price?.split(",") : [],
        rating: rating ? rating?.rating?.split(",") : [],
        sortBy: sortBy ? sortBy?.sortBy : "",
        field: field ? field?.field : "",
        paginate: paginate?.paginate? paginate?.paginate : 12,
      };
    });
  }, [category, attribute, price, rating, sortBy, field]);

  if (isLoading) return <Loader />;
  return (
    <>
      <Breadcrumbs title={`Brand : ${params}`} subNavigation={[{ name: params }]} />
      <WrapperComponent classes={{ sectionClass: "brand-section", fluidClass: "container" }} noRowCol={true}>
        {Brand && <div className="brand-box">{Brand?.brand_banner ? <Image src={Brand?.brand_banner?.original_url} className="img-fluid w-100" height={286} width={1444} alt={Brand.name} /> : <h2>{Brand?.name}</h2>}</div>}
      </WrapperComponent>
      <WrapperComponent classes={{ sectionClass: "section-b-space brand-product-box-section collection-wrapper", fluidClass: "container" }} customCol={true}>
        <BrandCollection filter={filter} setFilter={setFilter} initialGrid={4} noSidebar={true} />
      </WrapperComponent>
    </>
  );
};

export default BrandContainer;
