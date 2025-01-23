import { useQuery } from "@tanstack/react-query";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Col, TabContent, TabPane } from "reactstrap";

import request from "@/Utils/AxiosUtils";
import { product } from "@/Utils/AxiosUtils/API";
import Loader from "@/Components/CommonComponent/Loader";
import BannerTab from "./FashionOneTabs/BannerTab";
import BrandTab from "./FashionOneTabs/BrandTab";
import CategoryProductTab from "./FashionOneTabs/CategoryProductTab";
import FeaturedBlogTab from "./FashionOneTabs/FeaturedBlogTab ";
import HomeBannerTab from "./FashionOneTabs/HomeBannerTab";
import OfferBannerTab from "./FashionOneTabs/OfferBannerTab";
import ProductList1Tab from "./FashionOneTabs/ProductList1Tab";
import ServicesTab from "./FashionOneTabs/ServicesTab";
import SocialMediaTab from "./FashionOneTabs/SocialMediaTab";

const AllTabsFashionOne = forwardRef(({ activeTab, values, setFieldValue, apiData = {} }, ref) => {
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

  useEffect(() => {
    categoryRefetch();
  }, []);

  if (productLoader || categoryLoader) return <Loader />;

  return (
    <Col xl="7" lg="8">
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <HomeBannerTab values={values} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="2">
          <OfferBannerTab values={values} setFieldValue={setFieldValue} isTitleDescription={true} categoryData={categoryData} productData={productData} />
        </TabPane>
        <TabPane tabId="3">
          <ProductList1Tab productData={productData} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="4">
          <BannerTab values={values} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="5">
          <CategoryProductTab categoryData={categoryData} setSearch={setSearch} setFieldValue={setFieldValue} values={values} />
        </TabPane>
        <TabPane tabId="6">
          <ServicesTab values={values} setFieldValue={setFieldValue} />
        </TabPane>
        <TabPane tabId="7">
          <FeaturedBlogTab blogData={blogData} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="8">
          <SocialMediaTab values={values} setFieldValue={setFieldValue} />
        </TabPane>
        <TabPane tabId="9">
          <BrandTab values={values} setFieldValue={setFieldValue} brandData={brandData} brandLoader={brandLoader} />
        </TabPane>
      </TabContent>
    </Col>
  );
});
export default AllTabsFashionOne;
