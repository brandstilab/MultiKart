import request from "@/Utils/AxiosUtils";
import { CompareAPI } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import CompareContext from ".";

const CompareProvider = (props) => {
  const cookieUAT = Cookies.get("uat");
  const [compareState, setCompareState] = useState([]);
  const [openCompareSidebar, setOpenCompareSidebar] = useState(false);
  const { data: CompareData, isLoading: getCompareLoading, refetch } = useQuery([CompareAPI], () => request({ url: CompareAPI }), { enabled: false, refetchOnWindowFocus: false, select: (res) => res?.data?.data });
  useEffect(() => {
    if (cookieUAT) {
      refetch();
    }
  }, [cookieUAT]);
  useEffect(() => {
    if (CompareData) {
      setCompareState([...compareState, ...CompareData]);
    }
  }, [getCompareLoading]);
  return <CompareContext.Provider value={{ ...props,openCompareSidebar,setOpenCompareSidebar, compareState, setCompareState, refetch,CompareData,getCompareLoading }}>{props.children}</CompareContext.Provider>;
};

export default CompareProvider;
