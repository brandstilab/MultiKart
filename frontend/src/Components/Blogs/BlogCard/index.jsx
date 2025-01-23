import NoDataFound from "@/Components/Widgets/NoDataFound";
import Pagination from "@/Components/Widgets/Pagination";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import { useSearchParams } from "next/navigation";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";
import BlogCardContain from "./BlogCard";
import BlogSkeletonComponent from "./BlogSkeletonComponent";

const BlogCard = ({ page, setPage, BlogData, isLoading }) => {
  const { themeOption } = useContext(ThemeOptionContext);
  const { t } = useTranslation("common");
  const searchParams = useSearchParams();
  const queryBoxStyle = searchParams?.get("style");
  const querySidebar = searchParams?.get("sidebar");
  const styleObj = {
    no_sidebar: { colClass: { xxl: 12, xl: 12, lg: 12 } },
    left_sidebar: { class: "order-lg-2", colClass: { xxl: 9, xl: 8, lg: 7 } },
    right_sidebar: { colClass: { xxl: 9, xl: 8, lg: 7 } },
    list_view: { class: "blog-list", colClass: { xs: 12 } },
    grid_view: { colClass: { xxl: 4, sm: 6 } },
  };

  return (
    <>
      <Col {...styleObj[querySidebar ?? themeOption?.blog?.blog_sidebar_type]?.colClass} className={styleObj[querySidebar ?? themeOption?.blog?.blog_sidebar_type]?.class || ""}>
        <Row className={`g-sm-4 g-3`}>
          {isLoading ? (
            <BlogSkeletonComponent queryBoxStyle={queryBoxStyle} />
          ) : BlogData?.data?.length > 0 ? (
            BlogData?.data?.map((blog, i) => (
              <Col {...styleObj[queryBoxStyle ?? themeOption?.blog?.blog_style]?.colClass} key={i}>
                <div className={`blog-box ${blog?.is_sticky === 1 ? "sticky-blog-box" : ""} ${styleObj[queryBoxStyle ?? themeOption?.blog?.blog_style]?.class}`}>
                  {blog?.is_featured ? (
                    <div className="blog-featured-tag">
                      <span>{t("Featured")}</span>
                    </div>
                  ) : null}

                  {blog?.is_sticky ? (
                    <div className="blog-label-tag">
                      <i className="ri-pushpin-fill"></i>
                    </div>
                  ) : null}
                  <BlogCardContain blog={blog} />
                </div>
              </Col>
            ))
          ) : (
            <NoDataFound customClass="no-data-added" title="NoBlogsFound" description="NoBlogsDescription" height="400" width="400" />
          )}
        </Row>
        {BlogData?.data.length > 0 && (
          <nav className="custome-pagination">
            <div className="product-pagination">
              <div className="theme-pagination-block">
                <nav>
                  <Pagination current_page={BlogData?.current_page} total={BlogData?.total} per_page={BlogData?.per_page} setPage={setPage} />
                </nav>
              </div>
            </div>
          </nav>
        )}
      </Col>
    </>
  );
};

export default BlogCard;
