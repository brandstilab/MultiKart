import { useQuery } from "@tanstack/react-query";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Col, TabContent, TabPane } from "reactstrap";

import request from "@/Utils/AxiosUtils";
import { product } from "@/Utils/AxiosUtils/API";
import Loader from "@/Components/CommonComponent/Loader";
import BrandTab from "./JwelleryThreeTabs/BrandTab";
import CategoriesTab from "./JwelleryThreeTabs/CategoriesTab";
import FeaturedBlogTab from "./JwelleryThreeTabs/FeaturedBlogTab ";
import HomeBannerTab from "./JwelleryThreeTabs/HomeBannerTab";
import MainBannerTab from "./JwelleryThreeTabs/MainBannerTab";
import OfferBanner1Tab from "./JwelleryThreeTabs/OfferBannerTab";
import ProductBannerTab from "./JwelleryThreeTabs/ProductBannerTab";
import ProductListTab from "./JwelleryThreeTabs/ProductListTab";
import ServicesTab from "./JwelleryThreeTabs/ServicesTab";
import SocialMediaTab from "./JwelleryThreeTabs/SocialMediaTab";

const AllTabsJwelleryThree = forwardRef(({ activeTab, values, setFieldValue, apiData = {} }, ref) => {
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
          <ServicesTab values={values} setSearch={setSearch} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} />
        </TabPane>
        <TabPane tabId="3">
          <OfferBanner1Tab values={values} setFieldValue={setFieldValue} productData={productData} setSearch={setSearch} categoryData={categoryData} />
        </TabPane>
        <TabPane tabId="4">
          <ProductListTab setSearch={setSearch} productData={productData} />
        </TabPane>
        <TabPane tabId="5">
          <MainBannerTab setFieldValue={setFieldValue} values={values} />
        </TabPane>
        <TabPane tabId="6">
          <CategoriesTab setSearch={setSearch} categoryData={categoryData} values={values} setFieldValue={setFieldValue} />
        </TabPane>
        <TabPane tabId="7">
          <ProductBannerTab values={values} setSearch={setSearch} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} />
        </TabPane>
        <TabPane tabId="8">
          <FeaturedBlogTab setSearch={setSearch} blogData={blogData} />
        </TabPane>
        <TabPane tabId="9">
          <SocialMediaTab values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="10">
          <BrandTab values={values} setSearch={setSearch} setFieldValue={setFieldValue} brandData={brandData} brandLoader={brandLoader} />
        </TabPane>
      </TabContent>
    </Col>
  );
});
export default AllTabsJwelleryThree;
