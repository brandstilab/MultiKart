"use client";
import CompareSidebar from "@/Components/Widgets/ProductBox/Widgets/CompareSidebar";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import CompareContext from "@/Context/CompareContext";
import Loader from "@/Layout/Loader";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import CompareData from "./CompareData";
import { useContext } from "react";

const CompareList = () => {
  const { getCompareLoading } = useContext(CompareContext);
  if (getCompareLoading) return <Loader />;
  return (
    <>
      <Breadcrumbs title={"Compare"} subNavigation={[{ name: "Compare" }]} />
      <WrapperComponent classes={{ sectionClass: "compare-section section-b-space ratio_asos", fluidClass: "container" }} colProps={{ xs: "12" }}>
        <CompareData />
      </WrapperComponent>
      <CompareSidebar />
    </>
  );
};

export default CompareList;
