import { useQuery } from "@tanstack/react-query";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Col, TabContent, TabPane } from "reactstrap";

import request from "@/Utils/AxiosUtils";
import { BrandAPI, Category, blog, product } from "@/Utils/AxiosUtils/API";
import Loader from "@/Components/CommonComponent/Loader";
import BrandTab from "./FashionTwoTabs/BrandTab";
import CategoryProductTab from "./FashionTwoTabs/CategoryProductTab";
import FullBannerTab from "./FashionTwoTabs/FullBannerTab";
import HomeBannerTab from "./FashionTwoTabs/HomeBannerTab";
import OfferBannerTab from "./FashionTwoTabs/OfferBannerTab";
import SliderProductTab from "./FashionTwoTabs/SliderProductTab";
import SocialMediaTab from "./FashionTwoTabs/SocialMediaTab";

const AllTabsFashionTwo = forwardRef(({ activeTab, values, setFieldValue, apiData = {} }, ref) => {
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
          <CategoryProductTab values={values} categoryData={categoryData} setFieldValue={setFieldValue} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="4">
          <FullBannerTab values={values} setFieldValue={setFieldValue} categoryData={categoryData} productData={productData} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="5">
          <SliderProductTab values={values} setSearch={setSearch} setFieldValue={setFieldValue} productData={productData} brandLoader={brandLoader} />
        </TabPane>
        <TabPane tabId="6">
          <SocialMediaTab values={values} setFieldValue={setFieldValue} />
        </TabPane>
        <TabPane tabId="7">
          <BrandTab brandData={brandData} values={values} setFieldValue={setFieldValue} />
        </TabPane>
      </TabContent>
    </Col>
  );
});
export default AllTabsFashionTwo;
