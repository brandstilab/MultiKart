import NoDataFound from "@/Components/Widgets/NoDataFound";
import CategoryContext from "@/Context/CategoryContext";
import { ImagePath } from "@/Utils/Constants";
import Link from "next/link";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { Col, Row } from "reactstrap";

const HomeCategorySidebar = ({ categoryIds, height, width, style, slider, sliderOptions }) => {
  const { t } = useTranslation("common");
  const { filterCategory } = useContext(CategoryContext);
  const categoryData = filterCategory("product");

  const filterCategoryData = (categoryData, categoryIds) => {
    if (!categoryData || !categoryIds) {
      return [];
    }

    const filteredCategories = [];
    const filteredSubCategoryIds = new Set(categoryIds);

    const filterCategory = (category) => {
      if (filteredSubCategoryIds.has(category.id)) {
        filteredCategories.push(category);
      }
      if (category.subcategories) {
        category.subcategories.forEach((subcategory) => {
          filterCategory(subcategory);
        });
        return;
      }
    };
    categoryData.forEach(filterCategory);
    return filteredCategories;
  };

  const mainCategories = filterCategoryData(categoryData, categoryIds);

  const categorySliderSettingMain = sliderOptions && sliderOptions(mainCategories?.length);

  return (
    <>
      {mainCategories?.length ? (
        <>
          {style == "vertical" && (
            <ul className="sm pixelstrap sm-vertical" id="sub-menu">
              {mainCategories?.map((category, index) => (
                <li key={index}>
                  <Link href={`/category/${category?.slug}`}>{category?.name}</Link>{" "}
                </li>
              ))}
            </ul>
          )}
          {style == "classic_vertical" && (
            <ul className="pixelstrap sm-vertical">
              {mainCategories?.map((category, index) => (
                <li key={index}>
                  <Link href={`/category/${category?.slug}`}>
                    <img height={height ? height : ""} width={width ? width : ""} src={category?.category_icon ? category?.category_icon?.original_url : `${ImagePath}/placeholder/category.png`} alt="" className="img-fluid me-2 rounded-0 rounded-0" />
                    <div className="skeleton-category-img"></div>
                    <span>{category?.name}</span>
                    <span className="skeleton-category-text"></span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {style == "vegetable" && (
            <Slider {...categorySliderSettingMain}>
              {mainCategories?.map((category, index) => (
                <div key={index}>
                  <Link href={`/category/${category?.slug}`}>
                    <div className="category-boxes">
                      <div className="img-sec">
                        <img height={height ? height : 58} width={width ? width : 58} src={category.category_icon ? category.category_icon.original_url : `${ImagePath}/placeholder/category.png`} className="img-fluid" alt={category?.name} />
                        <div className="skeleton-img-sec"></div>
                      </div>
                      <h4>{category.name}</h4>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          )}
          {style == "gradient" && (
            <Row className=" g-4">
              {mainCategories?.map((category, i) => (
                <Col key={i} xl="2" md="3" sm="4" xs="6">
                  <Link href={`/category/${category?.slug}`}>
                    <div className={`gradient-category ${i == 1 ? "hover-effect" : ""}`}>
                      <div className="gradient-border">
                        <div className="img-sec">
                          <img height={height ? height : ""} width={width ? width : ""} src={category.category_image ? category?.category_image?.original_url : `${ImagePath}/placeholder/category.png`} className="img-fluid" alt={category.name} />
                        </div>
                      </div>
                      <h4>{category.name}</h4>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          )}
          {style == "one" && (
            <Slider {...categorySliderSettingMain}>
              {mainCategories?.map((category, i) => (
                <div key={i}>
                  <div className="category-wrapper">
                    <div>
                      {category?.category_image ? (
                        <div>
                          <img src={category?.category_image?.original_url} className="img-fluid" alt={category.name} />
                        </div>
                      ) : (
                        <div>
                          <img src={`${ImagePath}/tools/category/1.jpg`} className="img-fluid" alt={category.name} />
                        </div>
                      )}
                      <h4>
                        <Link href={`/category/${category?.slug}`}>{category?.name}</Link>
                      </h4>
                      <ul className="category-link">
                        {category?.subcategories
                          ? category?.subcategories?.slice(0, 5)?.map((sub) => (
                              <li>
                                <Link href={`/category/${sub?.slug}`}>{sub?.name}</Link>
                              </li>
                            ))
                          : ""}
                      </ul>
                      <a className="btn btn-classic btn-outline" href={`/category/${category?.slug}`}>
                        {t("ViewMore")}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
          {style === "bag" && (
            <Row className="g-sm-4 g-3">
              {mainCategories?.map((category, i) => (
                <Col key={category.slug}>
                  <Link href={`/category/${category.slug}`} className="btn btn-outline btn-block">
                    {category.name}
                  </Link>
                </Col>
              ))}
            </Row>
          )}
          {style === "books2" && (
            <Row className="g-sm-4 g-3">
              <Slider {...categorySliderSettingMain}>
                {mainCategories?.map((category, i) => (
                  <Col key={category.slug}>
                    <Link href={`/category/${category.slug}`} className="btn btn-outline btn-block">
                      {category.name}
                    </Link>
                  </Col>
                ))}
              </Slider>
            </Row>
          )}
          {style == "standard" && (
            <Row>
              {slider ? (
                <Col>
                  <Slider {...categorySliderSettingMain}>
                    {mainCategories?.map((category, i) => (
                      <div key={i} className="category-block">
                        <Link href={`/category/${category?.slug}`}>
                          <div className="category-image svg-image">
                            <div className="img-sec">
                              <img src={category.category_icon ? category.category_icon.original_url : `${ImagePath}/placeholder/category.png`} className="img-fluid" alt={category?.name} />
                            </div>
                          </div>
                        </Link>
                        <div className="category-details">
                          <Link href={`/category/${category?.slug}`}>
                            <h5>{category.name}</h5>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </Col>
              ) : (
                mainCategories?.map((category, i) => (
                  <div key={i} className="col-xl-2 col-sm-3 col-4">
                    <div className="category-block">
                      <Link href={`/category/${category?.slug}`}>
                        <div className="category-image svg-image">
                          <div className="img-sec">
                            <img src={category.category_icon ? category.category_icon.original_url : `${ImagePath}/placeholder/category.png`} className="img-fluid" alt={category?.name} />
                          </div>
                        </div>
                      </Link>
                      <div className="category-details">
                        <Link href={`/category/${category?.slug}`}>
                          <h5>{category.name}</h5>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </Row>
          )}
          {style == "digital" && (
            <Slider {...categorySliderSettingMain}>
              {mainCategories?.map((category, i) => (
                <div key={i} className="category-block">
                  <Link href={`/category/${category?.slug}`}>
                    <div className="category-image">
                      <img src={category.category_icon ? category.category_icon.original_url : `${ImagePath}/placeholder/category.png`} className="img-fluid" alt={category?.name} />
                    </div>
                  </Link>
                  <div className="category-details">
                    <Link href={`/category/${category?.slug}`}>
                      <h5>{category.name}</h5>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          )}
          {style == "shoes" && (
            <Row className="category-border">
              {mainCategories?.map((category, i) => (
                <Col sm="4" key={i} className=" border-padding">
                  <div className="category-banner">
                    <div className="img-fluid lazyload bg-img" style={{ backgroundImage: `url(${category.category_image ? category?.category_image?.original_url : `${ImagePath}/placeholder/category.png`}` }}>
                      <img src={category.category_image ? category?.category_image?.original_url : `${ImagePath}/placeholder/category.png`} className="img-fluid lazyload bg-img" alt={category?.name} />
                    </div>
                    <div className="category-box">
                      <Link href={`/category/${category?.slug}`}>
                        <h2>{category.name}</h2>
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
          {style === "simple" && (
            <Row>
              {slider ? (
                <Col>
                  <div className="category-5">
                    <Slider {...categorySliderSettingMain}>
                      {mainCategories.map((category, index) => (
                        <div className="category-block" key={index}>
                          <Link href={`/category/${category?.slug}`}>
                            <div className="category-image">
                              <img src={category.category_image ? category.category_image.original_url : `${ImagePath}/placeholder/category.png`} className="img-fluid" alt={category.name} />
                            </div>
                          </Link>
                          <div className="category-details">
                            <Link href={`/category/${category?.slug}`}>
                              <h5>{category?.name}</h5>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </Col>
              ) : (
                mainCategories.map((category, index) => (
                  <div className="col-xl-2 col-sm-3 col-4" key={index}>
                    <div className="category-block">
                      <Link href={`/category/${category?.slug}`}>
                        <div className="category-image">
                          <img src={category?.category_image ? category?.category_image?.original_url : `${ImagePath}/placeholder/category.png`} className="img-fluid" alt={category.name} />
                        </div>
                      </Link>
                      <div className="category-details">
                        <Link href={`/category/${category?.slug}`}>
                          <h5>{category.name}</h5>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </Row>
          )}
          {style === "basic" && (
            <Row className="g-sm-4 g-3 ratio_square">
              {!slider ? (
                mainCategories?.map((category, index) => (
                  <Col xl="2" sm="3" xs="4" key={index}>
                    <Link href={`/category/${category?.slug}`}>
                      <div className="img-category">
                        <div className="img-sec bg-size" style={{ backgroundImage: `url(${category.category_image ? category.category_image.original_url : `${ImagePath}/placeholder/category.png`})` }}>
                          <img src={category.category_image ? category.category_image.original_url : `${ImagePath}/placeholder/category.png`} className="img-fluid bg-img" alt={category.name} />
                        </div>
                        <h4>
                          <Link href={`/category/${category?.slug}`}>{category.name}</Link>
                        </h4>
                      </div>
                    </Link>
                  </Col>
                ))
              ) : (
                <Col xs="12">
                  <Slider {...categorySliderSettingMain}>
                    {mainCategories?.map((category, index) => (
                      <Link key={index} href={`/category/${category?.slug}`}>
                        <div className="img-category">
                          <div className="img-sec bg-size" style={{ backgroundImage: `url(${category.category_image ? category.category_image.original_url : `${ImagePath}/placeholder/category.png`})` }}>
                            <img src={category.category_image ? category.category_image.original_url : `${ImagePath}/placeholder/category.png`} className="img-fluid bg-img" alt={category.name} />
                          </div>
                          <h4>
                            <Link href={`/category/${category.slug}`}>{category.name}</Link>
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </Slider>
                </Col>
              )}
            </Row>
          )}

          {style == "books" && (
            <Slider {...categorySliderSettingMain}>
              {mainCategories?.map((category, i) => (
                <div key={i}>
                  <Link href={`/category/${category?.slug}`}>
                    <div className="img-category">
                      <div className="img-sec">
                        <img src={category.category_icon ? category.category_icon.original_url : `${ImagePath}/placeholder/category.png`} className="img-fluid" alt={category.name} />
                      </div>
                      <h4>{category.name}</h4>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          )}

          {style == "digital_download" && (
            <Slider {...categorySliderSettingMain}>
              {mainCategories?.map((category, index) => (
                <div key={index}>
                  <div className="category-nft">
                    <Link href={`/category/${category?.slug}`}>
                      <div className="category-image">
                        <img src={category.category_image ? category?.category_image?.original_url : `${ImagePath}/placeholder/category.png`} className="img-fluid" alt={category?.name} />
                      </div>

                      <div className="category-details">
                        <h5>{category.name}</h5>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </>
      ) : (
        <NoDataFound title="NoCategoryFound" customClass="no-data-added" />
      )}
    </>
  );
};

export default HomeCategorySidebar;
