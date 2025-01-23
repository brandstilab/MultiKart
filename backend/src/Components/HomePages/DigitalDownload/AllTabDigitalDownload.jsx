import Loader from "@/Components/CommonComponent/Loader";
import request from "@/Utils/AxiosUtils";
import { product } from "@/Utils/AxiosUtils/API";
import { useQuery } from "@tanstack/react-query";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Col, TabContent, TabPane } from "reactstrap";

import CategoryProductTab from "./DigitalDownloadTabs/CategoryProductTab";
import CategoryTab from "./DigitalDownloadTabs/CategoryTab";
import FeaturedBlogTab from "./DigitalDownloadTabs/FeaturedBlogTab ";
import HomeBannerTab from "./DigitalDownloadTabs/HomeBannerTab";
import ProductList1Tab from "./DigitalDownloadTabs/ProductList1Tab";
import ProductList2Tab from "./DigitalDownloadTabs/ProductList2Tab";

const AllTabsDigitalDownload = forwardRef(({ activeTab, values, setFieldValue, apiData = {} }, ref) => {
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
          <CategoryTab values={values} setFieldValue={setFieldValue} categoryData={categoryData} />
        </TabPane>
        <TabPane tabId="3">
          <ProductList1Tab productData={productData} setSearch={setSearch} />
        </TabPane>
        <TabPane tabId="4">
          <ProductList2Tab productData={productData} setSearch={setSearch} values={values} categoryData={categoryData} setFieldValue={setFieldValue} />
        </TabPane>
        <TabPane tabId="5">
          <CategoryProductTab categoryData={categoryData} setSearch={setSearch} setFieldValue={setFieldValue} values={values} />
        </TabPane>

        <TabPane tabId="6">
          <FeaturedBlogTab blogData={blogData} setSearch={setSearch} />
        </TabPane>
      </TabContent>
    </Col>
  );
});
export default AllTabsDigitalDownload;
