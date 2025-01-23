import { useQuery } from "@tanstack/react-query";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Col, TabContent, TabPane } from "reactstrap";

import request from "@/Utils/AxiosUtils";
import { product } from "@/Utils/AxiosUtils/API";
import Loader from "@/Components/CommonComponent/Loader";
import BrandTab from "./BooksHomePageTabs/BrandTab";
import Categories1Tab from "./BooksHomePageTabs/Categories1Tab";
import Categories2Tab from "./BooksHomePageTabs/Categories2Tab";
import CategoryProductTab from "./BooksHomePageTabs/CategoryProductTab";
import FeaturedBlogTab from "./BooksHomePageTabs/FeaturedBlogTab ";
import HomeBannerTab from "./BooksHomePageTabs/HomeBannerTab";
import OfferBannerTab from "./BooksHomePageTabs/OfferBannerTab";
import ProductListTab from "./BooksHomePageTabs/ProductListTab";
import SliderProductTab from "./BooksHomePageTabs/SliderProductTab";

const AllTabsBooksHomePage = forwardRef(({ activeTab, values, setFieldValue, apiData = {} }, ref) => {
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
          <Categories1Tab values={values} setFieldValue={setFieldValue} categoryData={categoryData} />
        </TabPane>
        <TabPane tabId="3">
          <CategoryProductTab values={values} setFieldValue={setFieldValue} categoryData={categoryData} />
        </TabPane>
        <TabPane tabId="4">
          <Categories2Tab values={values} setFieldValue={setFieldValue} categoryData={categoryData} />
        </TabPane>
        <TabPane tabId="5">
          <SliderProductTab values={values} setSearch={setSearch} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} />
        </TabPane>
        <TabPane tabId="6">
          <OfferBannerTab values={values} setSearch={setSearch} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} />
        </TabPane>
        <TabPane tabId="7">
          <ProductListTab values={values} setFieldValue={setFieldValue} productData={productData} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="8">
          <FeaturedBlogTab blogData={blogData} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="9">
          <BrandTab values={values} setSearch={setSearch} setFieldValue={setFieldValue} brandData={brandData} brandLoader={brandLoader} />
        </TabPane>
      </TabContent>
    </Col>
  );
});
export default AllTabsBooksHomePage;
