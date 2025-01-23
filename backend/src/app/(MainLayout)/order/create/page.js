"use client";
import React, { useContext, useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { Card, Col, Row } from "reactstrap";
import { useQuery } from "@tanstack/react-query";
import { AddtoCartAPI, Category } from "@/Utils/AxiosUtils/API";
import CreateCartContext from "@/Helper/CartContext";
import TopCategories from "@/Components/Pos/TopCategories";
import AllProducts from "@/Components/Pos/AllProducts";
import PosDetailCard from "@/Components/Pos/PosDetailCard";
import SubTotalCheckout from "@/Components/Pos/SubTotalCheckout";
import Loader from "@/Components/CommonComponent/Loader";
import request from "@/Utils/AxiosUtils";
import SettingContext from "@/Helper/SettingContext";
import { useRouter } from "next/navigation";

const POS = () => {
  const [getCategoryId, setGetCategoryId] = useState("");
  const { dispatch, setCartData } = useContext(CreateCartContext);
  const { setSidebarOpen, sidebarOpen } = useContext(SettingContext);
  const router = useRouter();
  const { data: CategoryData, isLoading } = useQuery([Category], () => request({ url: Category, params: { type: "product", status: 1 } }, router), { refetchOnWindowFocus: false, select: (data) => data.data.data });

  const { data: addToCartData, isLoading: addToCartLoader } = useQuery([AddtoCartAPI], () => request({ url: AddtoCartAPI }), { refetchOnWindowFocus: false, select: (res) => res?.data });
  const [initValues, setInitValues] = useState({ products: [], consumer_id: "", billing_address_id: "", shipping_address_id: "", shipping_total: 0, tax_total: 0, total: 0, variation_id: "" });
  useEffect(() => {
    if (addToCartData?.items.length > 0) {
      setInitValues((prev) => {
        return {
          ...prev,
          products: addToCartData?.items,
          total: addToCartData?.total,
        };
      });
    }
  }, [addToCartLoader]);
  const compactSidebar = () => {
    if (!sidebarOpen) {
      if (window.innerWidth <= 991) {
        setSidebarOpen(true);
      }
    }
  };
  useEffect(() => {
    compactSidebar();
    window.addEventListener("resize", () => {
      compactSidebar();
    });
  }, [sidebarOpen]);

  useEffect(() => {
    setSidebarOpen(true);
    return () => setSidebarOpen(false);
  }, []);
  if (isLoading || addToCartLoader) return <Loader />;
  return (
    <>
      <Formik initialValues={initValues}>
        {({ values, setFieldValue }) => (
          <Form>
            <Row>
              <Col xxl={9}>
                <TopCategories CategoryData={CategoryData} setGetCategoryId={setGetCategoryId} getCategoryId={getCategoryId} />
                <div className="pos-product-sec">
                  <AllProducts setFieldValue={setFieldValue} values={values} dispatch={dispatch} setCartData={setCartData} CategoryData={CategoryData} getCategoryId={getCategoryId} setGetCategoryId={setGetCategoryId} />
                </div>
              </Col>
              <Col xxl={3}>
                <div className="checkout-right-box">
                  <Card className="pos-detail-card">
                    <PosDetailCard values={values} setFieldValue={setFieldValue} dispatch={dispatch} initValues={initValues} />
                  </Card>

                  {values["products"]?.length ? (
                    <Card className="pos-detail-card">
                      <SubTotalCheckout values={values} setFieldValue={setFieldValue} dispatch={dispatch} initValues={initValues} />
                    </Card>
                  ) : null}
                </div>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default POS;
