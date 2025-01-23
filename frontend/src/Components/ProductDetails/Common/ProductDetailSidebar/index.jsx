import ImageLink from "@/Components/Themes/Widgets/ImageLink";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col } from "reactstrap";
import Brands from "./Brands";
import ProductServices from "./ProductServices";
import TrendingProduct from "./TrendingProduct";

const ProductDetailSidebar = ({ productState, customClass }) => {
  const { t } = useTranslation("common");
  const { themeOption, collectionMobile } = useContext(ThemeOptionContext);
  const [banner, setBanner] = useState({
    redirect_link: {
      link_type: "collection",
      link: "vegetables-fruits",
    },
    image_url: null,
  });

  useEffect(() => {
    if (themeOption?.product?.banner_image_url) {
      setBanner((prevBanner) => ({
        ...prevBanner,
        image_url: themeOption?.product?.banner_image_url,
      }));
    }
  }, [themeOption?.product?.banner_image_url]);

  return (
    <Col lg="3">
      <div className={`${customClass ? customClass : ""}`} style={{ left: collectionMobile ? "-1px" : "" }}>
        <div className="collection-filter">
          <Brands />
          <ProductServices />
          {themeOption?.product?.is_trending_product && <TrendingProduct productState={productState} />}
          {themeOption?.product?.banner_enable && themeOption?.product?.banner_image_url && <ImageLink classes={"section-t-space"} link={banner} imgUrl={themeOption?.product?.banner_image_url} ratioImage={false} height={245} width={378} />}
        </div>
      </div>
    </Col>
  );
};

export default ProductDetailSidebar;
