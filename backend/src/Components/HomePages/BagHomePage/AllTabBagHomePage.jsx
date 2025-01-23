import { useQuery } from "@tanstack/react-query";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Col, TabContent, TabPane } from "reactstrap";

import request from "@/Utils/AxiosUtils";
import { BrandAPI, Category, blog, product } from "@/Utils/AxiosUtils/API";
import Loader from "@/Components/CommonComponent/Loader";
import BrandTab from "./BagHomePageTabs/BrandTab";
import CategoriesTab from "./BagHomePageTabs/CategoriesTab";
import CategoryProductTab from "./BagHomePageTabs/CategoryProductTab";
import FeaturedBlogTab from "./BagHomePageTabs/FeaturedBlogTab ";
import HomeBannerTab from "./BagHomePageTabs/HomeBannerTab";
import FullBannerTab from "./BagHomePageTabs/FullBannerTab";
import ProductBannerTab from "./BagHomePageTabs/ProductBannerTab";
import ProductListTab from "./BagHomePageTabs/ProductListTab";
import ServicesTab from "./BagHomePageTabs/ServicesTab";
import SocialMediaTab from "./BagHomePageTabs/SocialMediaTab";
import GridBannerTab from "./BagHomePageTabs/GridBannerTab";

const AllTabsBagHomePage = forwardRef(({ activeTab, values, setFieldValue, apiData = {} }, ref) => {
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
          <CategoryProductTab values={values} setFieldValue={setFieldValue} productData={productData} setSearch={setSearch} categoryData={categoryData} />
        </TabPane>
        <TabPane tabId="3">
          <CategoriesTab setSearch={setSearch} categoryData={categoryData} values={values} setFieldValue={setFieldValue} />
        </TabPane>
        <TabPane tabId="4">
          <FullBannerTab setFieldValue={setFieldValue} values={values} productData={productData} categoryData={categoryData} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="5">
          <ProductBannerTab values={values} setSearch={setSearch} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} />
        </TabPane>
        <TabPane tabId="6">
          <ServicesTab values={values} setSearch={setSearch} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} />
        </TabPane>
        <TabPane tabId="7">
          <GridBannerTab values={values} setSearch={setSearch} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} />
        </TabPane>
        <TabPane tabId="8">
          <ProductListTab setSearch={setSearch} productData={productData} />
        </TabPane>
        <TabPane tabId="9">
          <FeaturedBlogTab setSearch={setSearch} blogData={blogData} />
        </TabPane>
        <TabPane tabId="10">
          <SocialMediaTab values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="11">
          <BrandTab values={values} setSearch={setSearch} setFieldValue={setFieldValue} brandData={brandData} brandLoader={brandLoader} />
        </TabPane>
      </TabContent>
    </Col>
  );
});
export default AllTabsBagHomePage;
