import RatingBox from "@/Components/Collection/CollectionSidebar/RatingBox";
import ImageLink from "@/Components/Themes/Widgets/ImageLink";
import SettingContext from "@/Context/SettingContext";
import request from "@/Utils/AxiosUtils";
import { ProductAPI } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React, { useContext, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Media } from "reactstrap";

const TrendingProduct = ({ productState }) => {
  const { t } = useTranslation("common");
  const { convertCurrency } = useContext(SettingContext);
  const categoryId = useMemo(() => {
    return productState?.product?.categories?.map((elem) => elem?.id);
  }, [productState?.product?.categories]);
  const { data: productData, refetch: productRefetch } = useQuery([categoryId], () => request({ url: ProductAPI, params: { status: 1, trending: 1, category_ids: categoryId?.join() } }), {
    enabled: false,
    refetchOnWindowFocus: false,
    select: (data) => data.data.data,
  });
  useEffect(() => {
    categoryId?.length > 0 && productRefetch();
  }, [categoryId]);
  if (productData?.length == 0) return null;
  return (
    <div className="theme-card">
      <h5 className="title-border">{t("TrendingProducts")}</h5>
      <div className="offer-slider">
        {productData?.slice(0, 4)?.map((elem, i) => (
          <Media className="mb-2">
            <ImageLink imgUrl={elem?.product_galleries[0]?.original_url} width={105} height={120} />
            <Media body>
              <RatingBox totalRating={elem?.rating_count ?? productState?.product?.rating_count} />
              <Link href={`/product/${elem?.slug}`}>
                <h6>{elem?.name}</h6>
              </Link>
              <h4>
                {convertCurrency(elem?.sale_price)} <del> {convertCurrency(elem?.price)} </del>
              </h4>
            </Media>
          </Media>
        ))}
      </div>
    </div>
  );
};

export default TrendingProduct;
