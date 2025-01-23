import React, { useEffect, useState } from "react";
import { Row } from "reactstrap";
import HomeProduct from "./HomeProduct";

const HomeFourColumnProduct = ({ data, style }) => {
  const [columnProductsData, setColumnProductsData] = useState([]);
  useEffect(() => {
    if (data) {
      const columnProducts = Object.keys(data).map((item) => data[item]);
      setColumnProductsData(columnProducts);
    }
  }, [data]);

  return (
    <>
      <Row className="g-sm-4 g-3">
        {data?.product_slider_1?.status ? (
          <div className={!data?.product_slider_4?.status ? "col-lg-4 col-sm-6" : "col-xl-3 col-md-6"}>
            <div className="theme-card">
              <h5 className="title-border">{data?.product_slider_1?.title}</h5>
              <div className="offer-slider slide-1">
                <HomeProduct productIds={data?.product_slider_1?.product_ids || []} style={style} />
              </div>
            </div>
          </div>
        ) : null}
        {data?.product_slider_2?.status ? (
          <div className={!data?.product_slider_4?.status ? "col-lg-4 col-sm-6" : "col-xl-3 col-md-6"}>
            <div className="theme-card">
              <h5 className="title-border">{data?.product_slider_2?.title}</h5>
              <div className="offer-slider slide-1">
                <HomeProduct productIds={data?.product_slider_2?.product_ids || []} style={style} />
              </div>
            </div>
          </div>
        ) : null}
        {data?.product_slider_3?.status ? (
          <div className={!data?.product_slider_4?.status ? "col-lg-4 col-sm-6" : "col-xl-3 col-md-6"}>
            <div className="theme-card">
              <h5 className="title-border">{data?.product_slider_3?.title}</h5>
              <div className="offer-slider slide-1">
                <HomeProduct productIds={data?.product_slider_3?.product_ids || []} style={style} />
              </div>
            </div>
          </div>
        ) : null}
        {data?.product_slider_4?.status ? (
          <div className="col-xl-3 col-md-6">
            <div className="theme-card">
              <h5 className="title-border">{data?.product_slider_4?.title}</h5>
              <div className="offer-slider slide-1">
                <HomeProduct productIds={data?.product_slider_4?.product_ids || []} style={style} />
              </div>
            </div>
          </div>
        ) : null}
      </Row>
    </>
  );
};

export default HomeFourColumnProduct;
