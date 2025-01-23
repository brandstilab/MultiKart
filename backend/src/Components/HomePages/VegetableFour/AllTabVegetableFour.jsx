import { useQuery } from "@tanstack/react-query";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Col, TabContent, TabPane } from "reactstrap";

import request from "@/Utils/AxiosUtils";
import { product } from "@/Utils/AxiosUtils/API";
import Loader from "@/Components/CommonComponent/Loader";
import BrandTab from "./VegetableFourTabs/BrandTab";
import CategoriesTab from "./VegetableFourTabs/CategoriesTab";
import FeaturedBlogTab from "./VegetableFourTabs/FeaturedBlogTab ";
import HomeBannerTab from "./VegetableFourTabs/HomeBannerTab";
import OfferBanner1Tab from "./VegetableFourTabs/OfferBanner1Tab";
import OfferBanner2Tab from "./VegetableFourTabs/OfferBanner2Tab";
import ProductList1Tab from "./VegetableFourTabs/ProductList1Tab";
import ProductList2Tab from "./VegetableFourTabs/ProductList2Tab";
import ProductList3Tab from "./VegetableFourTabs/ProductList3Tab";
import ProductList4Tab from "./VegetableFourTabs/ProductList4Tab";
import ServicesTab from "./VegetableFourTabs/ServicesTab";

const AllTabsVegetableFour = forwardRef(({ activeTab, values, setFieldValue, apiData = {} }, ref) => {
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
          <CategoriesTab setSearch={setSearch} categoryData={categoryData} values={values} setFieldValue={setFieldValue} />
        </TabPane>
        <TabPane tabId="3">
          <OfferBanner1Tab values={values} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="4">
          <ProductList1Tab values={values} setSearch={setSearch} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} />
        </TabPane>
        <TabPane tabId="5">
          <ProductList2Tab values={values} setSearch={setSearch} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} />
        </TabPane>
        <TabPane tabId="6">
          <OfferBanner2Tab values={values} setSearch={setSearch} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} />
        </TabPane>
        <TabPane tabId="7">
          <ProductList3Tab values={values} setSearch={setSearch} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} />
        </TabPane>
        <TabPane tabId="8">
          <ServicesTab values={values} setSearch={setSearch} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} />
        </TabPane>
        <TabPane tabId="9">
          <ProductList4Tab values={values} setSearch={setSearch} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} />
        </TabPane>
        <TabPane tabId="10">
          <FeaturedBlogTab blogData={blogData} values={values} setSearch={setSearch} setFieldValue={setFieldValue} />
        </TabPane>
        <TabPane tabId="11">
          <BrandTab values={values} setSearch={setSearch} setFieldValue={setFieldValue} brandData={brandData} brandLoader={brandLoader} />
        </TabPane>
      </TabContent>
    </Col>
  );
});
export default AllTabsVegetableFour;
