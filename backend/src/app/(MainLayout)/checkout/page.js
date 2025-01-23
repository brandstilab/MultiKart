"use client";
import Checkout from "@/Components/Pos/Checkout/Checkout";
import { checkout } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import { useState } from "react";

const MainCheckout = () => {
  const [errorCoupon, setErrorCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [storeCoupon, setStoreCoupon] = useState("");
  const [mainData, setMainData] = useState({});

  const { data, mutate, isLoading } = useCreate(
    checkout,
    false,
    false,
    true,
    (resDta) => {
      if (resDta?.status == 200 || resDta?.status == 201) {
        setMainData(resDta);
        setErrorCoupon("");
        !errorCoupon && storeCoupon !== "" && setAppliedCoupon("applied");
      } else {
        setErrorCoupon(resDta?.response?.data?.message);
      }
    },
    false,
    false,
    () => {
      setErrorCoupon("");
      setAppliedCoupon(null);
      setStoreCoupon("");
    }
  );

  return <Checkout loading={isLoading} mutate={mutate} data={mainData} errorCoupon={errorCoupon} appliedCoupon={appliedCoupon} setAppliedCoupon={setAppliedCoupon} storeCoupon={storeCoupon} setStoreCoupon={setStoreCoupon} />;
};
export default MainCheckout;
