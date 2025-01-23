import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { ImagePath } from "@/Utils/Constants";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CustomerOrderCount = ({ productState }) => {
  const { themeOption } = useContext(ThemeOptionContext);
  const [customerOrder, setCustomerOrder] = useState(10);
  const [viewerCount, setViewerCount] = useState(30);
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      let encourage_max_view_count = themeOption?.product?.encourage_max_view_count ? themeOption?.product?.encourage_max_view_count : 100;
      setCustomerOrder(Math?.floor(Math.random() * encourage_max_view_count) + 1);
    }, 5000);

    timer = setInterval(() => {
      let encourage_max_order_count = themeOption?.product?.encourage_max_order_count ? themeOption?.product?.encourage_max_order_count : 100;
      setViewerCount(Math?.floor(Math.random() * encourage_max_order_count) + 1);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const { t } = useTranslation("common");
  return (
    <>
      {(themeOption?.product?.encourage_order && productState?.product?.encourage_order) || (themeOption?.product?.encourage_view && productState?.product?.encourage_view) ? (
        <div className="trending-text">
          <Image src={`${ImagePath}/trending.gif`} alt="Trending" height={30} width={30} className="img-fluid" />
          <h5>Selling fast! 4 people have this in their carts.</h5>
        </div>
      ) : null}
    </>
  );
};

export default CustomerOrderCount;
