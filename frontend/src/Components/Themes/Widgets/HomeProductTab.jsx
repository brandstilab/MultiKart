import NoDataFound from "@/Components/Widgets/NoDataFound";
import ProductBox from "@/Components/Widgets/ProductBox";
import ProductSkeleton from "@/Components/Widgets/SkeletonLoader/ProductSkeleton";
import CategoryContext from "@/Context/CategoryContext";
import { dynamicHorizontalSlider } from "@/Data/SliderSetting";
import request from "@/Utils/AxiosUtils";
import { ProductAPI } from "@/Utils/AxiosUtils/API";
import { Href } from "@/Utils/Constants";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { Col, Row } from "reactstrap";

const HomeProductTab = ({ categoryIds, slider, style, tab_title_class, tabStyle, classes, type, title, product_box_style, sliderOptions, paginate, isFilterCategoryDataNested, dynamic, customSelect }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("");
  const { filterCategory } = useContext(CategoryContext);
  const categoryData = filterCategory("product");
  const [skeletonArr, setSkeletonArray] = useState([]); //

  const [customSelectedId, setCustomSelectedId] = useState("");

  const filterCategoryDataNested = (categoryData, categoryIds) => {
    if (!categoryData || !categoryIds) {
      return [];
    }

    const filteredCategories = [];
    const filteredSubCategoryIds = new Set(categoryIds);

    const filterCategory = (category) => {
      if (filteredSubCategoryIds.has(category.id)) {
        filteredCategories.push(category);
        if (category.subcategories) {
          category.subcategories.forEach((subcategory) => {
            filterCategory(subcategory);
          });
        }
      }
      return;
    };
    categoryData.forEach(filterCategory);
    return filteredCategories;
  };

  const filterCategoryData = (categoryData, categoryIds) => {
    if (!categoryData || !categoryIds) {
      return [];
    }

    const filteredCategories = [];
    const filteredSubCategoryIds = new Set(categoryIds);

    const filterCategory = (category) => {
      if (filteredSubCategoryIds.has(category.id)) {
        filteredCategories.push(category);
        return;
      }
      if (category.subcategories) {
        category.subcategories.forEach((subcategory) => {
          filterCategory(subcategory);
        });
      }
    };
    categoryData.forEach(filterCategory);
    return filteredCategories;
  };

  const filteredCategories = isFilterCategoryDataNested ? filterCategoryDataNested(categoryData, categoryIds) : filterCategoryData(categoryData, categoryIds);

  const { data: product, refetch, fetchStatus, isLoading } = useQuery([currentCategory], () => request({ url: ProductAPI, params: { category_ids: currentCategory || customSelectedId, status: 1, paginate: paginate ? paginate : 4 } }, router), { enabled: !!(currentCategory || customSelectedId), refetchOnWindowFocus: false, select: (res) => res?.data?.data });

  const changeTab = (index, category) => {
    setActiveTab(index);
    setCurrentCategory(category?.id);
  };

  useEffect(() => {
    // isLoading && refetch();
    const length = product?.length ? product?.length : paginate ? paginate : 5;
    const skeletonArray = new Array(length).fill("skeleton");
    setSkeletonArray(skeletonArray);
  }, [isLoading]);

  useEffect(() => {
    const customSelectId = filteredCategories.find((elem) => elem?.products_count)?.id;
    setCustomSelectedId(customSelectId);
  }, [isLoading, categoryIds]);

  const sliderSetting = sliderOptions && sliderOptions(skeletonArr?.length);
  const sliderOptionsMain = dynamic ? dynamicHorizontalSlider(skeletonArr.length) : sliderSetting;

  return (
    <>
      <div className='theme-tab'>
        {tabStyle === "simple" ? (
          <div className='bg-title-part mt-0'>
            <div className='title-basic mb-0'>
              <h2 className='title'>{title?.title}</h2>
            </div>
            <ul className='tabs tab-title w-bg'>
              {filteredCategories?.map((category, index) => (
                <li key={category.id} className={activeTab === index ? "current" : ""}>
                  <a href={Href} onClick={() => changeTab(index, category)}>
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : tabStyle === "classic" ? (
          <div className='bg-title-part'>
            <h5 className='title-border'>{title?.title}</h5>
            <ul className='tabs tab-title'>
              {filteredCategories?.map((category, index) => (
                <li key={category.id} className={activeTab === index ? "current" : ""}>
                  <a href={Href} onClick={() => changeTab(index, category)}>
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : tabStyle === "premium" ? (
          <div className='left-side'>
            <div className='left-tab-title'>
              <h4>{title?.tag}</h4>
              <h3>{title?.title}</h3>
            </div>
            <ul className='tabs tab-title'>
              {filteredCategories?.map((category, index) => (
                <li key={category.id} className={activeTab === index ? "current" : ""}>
                  <a href={Href} onClick={() => changeTab(index, category)}>
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className={`tabs ${tab_title_class ? tab_title_class : "tab-title"}`}>
            {filteredCategories?.map((category, index) => (
              <li key={category.id} className={activeTab === index ? "current" : ""}>
                <a href={Href} onClick={() => changeTab(index, category)}>
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className='tab-content-cls'>
          <div id='tab-4' className='tab-content active default' style={{ display: "block" }}>
            {slider ? (
              <div className={`product-4  ${classes ? classes : ""}`}>
                {fetchStatus == "fetching" ? (
                  <Slider {...sliderOptionsMain}>
                    {skeletonArr?.map((_, i) => (
                      <div key={i}>
                        <ProductSkeleton style={style} />
                      </div>
                    ))}
                  </Slider>
                ) : product?.length > 0 ? (
                  <Slider {...sliderOptionsMain}>
                    {product?.map((product, i) => (
                      <div key={i}>
                        <ProductBox product={product} style={style} />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <NoDataFound customClass='no-data-added' title='NoProductFound' />
                )}
              </div>
            ) : fetchStatus == "fetching" ? (
              <Row className={`${classes ? classes : "g-3 g-sm-4 row-cols-2 row-cols-md-3 row-cols-xl-4"} ${product_box_style === "horizontal" ? "product-tab" : ""}`}>
                {skeletonArr?.map((_, i) => (
                  <ProductSkeleton key={i} style={style} />
                ))}
              </Row>
            ) : product?.length > 0 ? (
              <Row className={`${classes ? classes : "g-3 g-sm-4 row-cols-2 row-cols-md-3 row-cols-xl-4"} ${product_box_style === "horizontal" ? "product-tab" : ""}`}>
                {style === "horizontal" && product_box_style === "horizontal"
                  ? product?.map((product) => (
                      <div>
                        <div key={product.id} className='tab-box'>
                          <div className='product-box2'>
                            <ProductBox product={product} style={style} />
                          </div>
                        </div>
                      </div>
                    ))
                  : product?.map((product, i) => (
                      <Col key={i}>
                        <ProductBox key={product.id} product={product} style={style} />
                      </Col>
                    ))}
              </Row>
            ) : (
              <NoDataFound customClass='no-data-added' title='NoProductFound' />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProductTab;
