import { useQuery } from "@tanstack/react-query";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Col, TabContent, TabPane } from "reactstrap";

import request from "@/Utils/AxiosUtils";
import { BrandAPI, Category, blog, product } from "@/Utils/AxiosUtils/API";
import Loader from "@/Components/CommonComponent/Loader";
import BannerTab from "./FurnitureDarkTabs/BannerTab";
import BrandTab from "./FurnitureDarkTabs/BrandTab";
import CategoryIconList from "./FurnitureDarkTabs/CategoryIconList";
import OfferBannerTab from "./FurnitureDarkTabs/OfferBannerTab";
import FeaturedBlogTab from "./FurnitureDarkTabs/FeaturedBlogTab";
import HomeBannerTab from "./FurnitureDarkTabs/HomeBannerTab";
import ProductList1Tab from "./FurnitureDarkTabs/ProductList1Tab";
import ProductList2Tab from "./FurnitureDarkTabs/ProductList2Tab";
import ServicesTab from "./FurnitureDarkTabs/ServicesTab";

const AllTabsFurnitureDark = forwardRef(({ activeTab, values, setFieldValue, apiData = {} }, ref) => {
  const { categoryData, blogData, brandData, categoryLoader, brandLoader, categoryRefetch } = apiData;
  const [search, setSearch] = useState(false);
  const [customSearch, setCustomSearch] = useState("");
  const [tc, setTc] = useState(null);

  const {
    data: productData,
    isLoading: productLoader,
    refetch,
  } = useQuery(
    [product],
    () =>
      request({
        url: product,
        params: {
          status: 1,
          search: customSearch ? customSearch : "",
          paginate: values["content"]?.["products_ids"]?.length > 15 ? values["content"]?.["products_ids"]?.length : 15,
          ids: customSearch ? null : values["content"]["products_ids"].join() || null,
          with_union_products: values["content"]?.["products_ids"]?.length ? (values["content"]?.["products_ids"]?.length >= 15 ? 0 : 1) : 0,
        },
      }),
    {
      refetchOnWindowFocus: false,
      select: (res) =>
        res?.data?.data.map((elem) => {
          return { id: elem.id, name: elem.name, image: elem?.product_thumbnail?.original_url || "/assets/images/placeholder.png", slug: elem?.slug };
        }),
    }
  );

  useImperativeHandle(ref, () => ({
    call() {
      refetch();
    },
  }));

  // Added debouncing
  useEffect(() => {
    if (tc) clearTimeout(tc);
    setTc(setTimeout(() => setCustomSearch(search), 500));
  }, [search]);
  // Getting users data on searching users
  useEffect(() => {
    refetch();
  }, [customSearch]);

  if (productLoader || categoryLoader) return <Loader />;

  return (
    <Col xl="7" lg="8">
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <HomeBannerTab values={values} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="2">
          <OfferBannerTab values={values} setFieldValue={setFieldValue} isTitleDescription={true} categoryData={categoryData} />
        </TabPane>
        <TabPane tabId="3">
          <ProductList1Tab values={values} setFieldValue={setFieldValue} productData={productData} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="4">
          <CategoryIconList setSearch={setSearch} values={values} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} />
        </TabPane>
        <TabPane tabId="5">
          <BannerTab values={values} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="6">
          <ProductList2Tab values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="7">
          <ServicesTab values={values} setFieldValue={setFieldValue} productData={categoryData} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="8">
          <FeaturedBlogTab values={values} setFieldValue={setFieldValue} blogData={blogData} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="9">
          <BrandTab values={values} setFieldValue={setFieldValue} brandData={brandData} brandLoader={brandLoader} />
        </TabPane>
      </TabContent>
    </Col>
  );
});
export default AllTabsFurnitureDark;
